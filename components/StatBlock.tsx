interface StatBlockProps {
  value: string;
  label: string;
}

export default function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div>
      <div className="font-display text-h2 text-accent">{value}</div>
      <div className="text-micro uppercase text-text-secondary">{label}</div>
    </div>
  );
}
