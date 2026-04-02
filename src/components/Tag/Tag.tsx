type Props = {
  label: string;
};

export default function Tag({ label }: Props) {
  return (
    <span className="inline-block text-[11px] px-2 py-[2px] ml-1.5 rounded-md bg-green-100 text-green-700">
      {label}
    </span>
  );
}