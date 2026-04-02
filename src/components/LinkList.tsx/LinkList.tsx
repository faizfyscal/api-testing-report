import Tag from "../Tag/Tag";

type Link = {
  label: string;
  href: string;
  tag?: string;
};

type Props = {
  links: Link[];
};

export default function LinkList({ links }: Props) {
  return (
    <ul className="flex flex-col gap-1">
      {links.map((link, i) => (
        <li key={i}>
          <a
            href={link.href}
            className="text-sm text-blue-500 hover:underline"
          >
            {link.label}
            {link.tag && <Tag label={link.tag} />}
          </a>
        </li>
      ))}
    </ul>
  );
}