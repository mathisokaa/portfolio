interface PillProps {
  children: React.ReactNode;
  active?: boolean;
  as?: "div" | "button";
  onClick?: () => void;
  className?: string;
}

export default function Pill({ children, active = false, as = "div", onClick, className = "" }: PillProps) {
  const classes = `inline-flex items-center rounded-pill px-[11px] py-[5px] text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors min-h-[28px] ${
    active ? "bg-accent text-white" : "bg-surface text-text-secondary border border-border hover:bg-surface-hover"
  } ${className}`;

  if (as === "button") {
    return (
      <button type="button" onClick={onClick} aria-pressed={active} className={`${classes} cursor-pointer`}>
        {children}
      </button>
    );
  }

  return <div className={classes}>{children}</div>;
}
