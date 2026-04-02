import Card from "../Card/Card";

export default function Section({ section }: any) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-medium text-gray-800 mb-3 pl-2 border-l-4 border-blue-500">
        {section.section}
      </h2>

      <div className="grid gap-3.5 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
        {section.cards.map((card: any, i: number) => (
          <Card key={i} card={card} />
        ))}
      </div>
    </div>
  );
}