import { terminalLines } from "@/data/terminal";

interface TerminalProps {
  fill: number;
  compact?: boolean;
  className?: string;
}

export default function Terminal({ fill, compact = false, className = "" }: TerminalProps) {
  const visibleCount = Math.max(1, Math.floor(fill * (terminalLines.length + 1)));

  return (
    <div
      role="img"
      aria-label="Terminal affichant des commandes réseau en direct : ping, vlan, statut samba, statut VPN"
      className={`w-full rounded-lg border border-term-border bg-term-bg font-mono ${compact ? "text-[11px] p-2" : "text-term p-3"} ${className}`}
      style={{ boxShadow: "0 0 20px rgba(255,92,0,0.16)" }}
    >
      <div className={`mb-2 flex items-center gap-1 border-b border-term-border pb-1.5`}>
        {["#ff5f57", "#ffbd2e", "#28c841"].map((c) => (
          <span key={c} className="h-[8px] w-[8px] rounded-full" style={{ backgroundColor: c }} aria-hidden="true" />
        ))}
        <span className="ml-2 text-[10px] tracking-[0.1em] text-term-output">terminal — ssh syslab</span>
        <div className="ml-auto flex items-center gap-1">
          <span className="h-[5px] w-[5px] rounded-full bg-led led-active" style={{ boxShadow: "0 0 4px #00ff88" }} aria-hidden="true" />
          <span className="text-[9px] tracking-[0.1em] text-term-output">LIVE</span>
        </div>
      </div>
      <div className="space-y-0.5">
        {terminalLines.slice(0, visibleCount).map((line, i) =>
          line.type === "prompt" ? (
            <div key={i}>
              <span className="text-term-text opacity-40">❯ </span>
              <span className="text-term-prompt">{line.value.split("$ ")[0]}$ </span>
              <span className="text-term-text">{line.value.split("$ ")[1]}</span>
            </div>
          ) : (
            <div key={i} className="pl-[10px] text-term-output">
              {line.value}
            </div>
          ),
        )}
        {visibleCount <= terminalLines.length && (
          <div>
            <span className="text-term-prompt">❯ root@sys:~$ </span>
            <span className="cursor-blink inline-block h-[12px] w-[6px] bg-term-text align-middle" aria-hidden="true" />
          </div>
        )}
      </div>
    </div>
  );
}
