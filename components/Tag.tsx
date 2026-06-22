interface TagProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export default function Tag({ children, color = "#ff5c00", className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-pill px-[10px] py-[4px] text-[10px] font-bold uppercase tracking-[0.08em] text-white ${className}`}
      style={{ backgroundColor: color }}
    >
      {children}
    </span>
  );
}

export function TagOutline({ children, color = "#ff5c00", className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-pill px-[10px] py-[3px] text-[10px] font-bold ${className}`}
      style={{ backgroundColor: `${color}22`, color }}
    >
      {children}
    </span>
  );
}
