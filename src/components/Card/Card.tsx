import LinkList from "../LinkList.tsx/LinkList";

export default function Card({ card }: any) {
  return (
    <div className="bg-white rounded-xl px-5 py-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-sm font-semibold text-slate-700 mb-2.5">
        {card.title}
      </div>

      {card.empty && (
        <p className="text-sm text-gray-400">
          No reports available yet
        </p>
      )}

      {card.links && <LinkList links={card.links} />}

      {card.subSections?.map((sub: any, i: number) => (
        <div key={i} className="mt-3 pt-2 border-t border-gray-100">
          <div className="text-sm font-semibold text-gray-700 mb-1.5">
            {sub.title}
          </div>
          <LinkList links={sub.links} />
        </div>
      ))}
    </div>
  );
}