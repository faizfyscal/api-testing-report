#!/usr/bin/env node

/**
 * fix-jmeter-reports.js
 *
 * Recursively scans public/performance/ for all .html files and injects
 * (or updates) a <base href="..."> tag so that JMeter's relative asset
 * paths resolve correctly when served from Vercel.
 *
 * - For report root index.html files, the base href is the folder path
 *   (e.g. /performance/payment/fyscal-1/ledgerreport_20260414_184826/)
 *
 * - For sub-pages (e.g. content/pages/OverTime.html), the base href
 *   points back to the report root so relative paths like
 *   "sbadmin2-1.0.7/..." and "content/..." still resolve correctly.
 *
 * Idempotent — safe to run multiple times.
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, dirname, relative, posix } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = join(__dirname, '..', 'public');
const PERFORMANCE_DIR = join(PUBLIC_DIR, 'performance');

/**
 * Recursively find all .html files under a directory.
 */
async function findHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findHtmlFiles(fullPath)));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Determine the report root directory for a given HTML file.
 * JMeter report roots contain an index.html alongside sbadmin2-1.0.7/ or content/ dirs.
 * We walk up from the file until we find such a directory.
 */
function findReportRoot(htmlFilePath) {
  // Walk up from the file's directory looking for a directory that looks
  // like a JMeter report root (has sbadmin2-* or content/ siblings)
  let dir = dirname(htmlFilePath);

  while (dir.startsWith(PERFORMANCE_DIR)) {
    // We consider a directory a report root if it directly contains index.html
    // and is at or below PERFORMANCE_DIR
    const relToPerf = relative(PERFORMANCE_DIR, dir);
    // Report roots are at depth >= 2 (e.g., payment/fyscal-1/reportname/)
    if (relToPerf.split('/').length >= 3 || relToPerf.split('/').length >= 2) {
      // Check: does this directory likely hold the report root index.html?
      // We assume the deepest directory that is a direct parent of the file
      // matching the pattern of JMeter report output is the root.
      // The simplest heuristic: a report root is a directory that is NOT
      // named "content", "pages", "css", "js", "sbadmin2-*", etc.
      const dirName = dir.split('/').pop();
      if (!['content', 'pages', 'css', 'js', 'dist', 'bower_components'].includes(dirName) &&
          !dirName.startsWith('sbadmin2')) {
        return dir;
      }
    }
    dir = dirname(dir);
  }

  // Fallback: use the file's own directory
  return dirname(htmlFilePath);
}

/**
 * Compute the base href for an HTML file.
 */
function computeBaseHref(htmlFilePath) {
  const reportRoot = findReportRoot(htmlFilePath);
  const relFromPublic = relative(PUBLIC_DIR, reportRoot);
  // Convert to posix path and ensure leading/trailing slashes
  const posixPath = '/' + relFromPublic.split('/').join('/');
  return posixPath.endsWith('/') ? posixPath : posixPath + '/';
}

/**
 * Inject or update <base> tag in an HTML file.
 */
async function processHtmlFile(filePath) {
  const content = await readFile(filePath, 'utf-8');
  const baseHref = computeBaseHref(filePath);
  const baseTag = `<base href="${baseHref}">`;

  let newContent;

  // Check if <base> tag already exists
  const baseRegex = /<base\s+href="[^"]*"\s*\/?>/i;

  if (baseRegex.test(content)) {
    // Update existing <base> tag
    newContent = content.replace(baseRegex, baseTag);
  } else if (/<head[^>]*>/i.test(content)) {
    // Insert after <head> tag
    newContent = content.replace(/(<head[^>]*>)/i, `$1\n    ${baseTag}`);
  } else {
    // No <head> tag — skip this file
    console.log(`  ⚠ Skipping (no <head> tag): ${relative(PUBLIC_DIR, filePath)}`);
    return false;
  }

  if (newContent !== content) {
    await writeFile(filePath, newContent, 'utf-8');
    console.log(`  ✔ Injected: ${relative(PUBLIC_DIR, filePath)} → ${baseHref}`);
    return true;
  } else {
    console.log(`  ● No change: ${relative(PUBLIC_DIR, filePath)}`);
    return false;
  }
}

// --- Main ---
async function main() {
  console.log('🔍 Scanning for JMeter HTML reports...\n');

  const htmlFiles = await findHtmlFiles(PERFORMANCE_DIR);
  console.log(`Found ${htmlFiles.length} HTML file(s)\n`);

  let modified = 0;
  for (const file of htmlFiles) {
    const changed = await processHtmlFile(file);
    if (changed) modified++;
  }

  console.log(`\n✅ Done. ${modified} file(s) updated.`);
}

main().catch((err) => {
  console.error('❌ Error:', err);
  process.exit(1);
});
