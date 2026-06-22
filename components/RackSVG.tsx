import { rackUnits } from "@/data/rack";

interface RackSVGProps {
  fill?: number;
  className?: string;
  style?: React.CSSProperties;
}

const UNIT_HEIGHT = 16;
const RACK_WIDTH = 168;
const LED_COLOR = "#00ff88";
const LED_OFF = "#071535";
const CABLE_COLORS = ["#ff5c00", "#00aaff", "#b44fff"];

export default function RackSVG({ fill = 1, className = "", style }: RackSVGProps) {
  const totalUnits = rackUnits.reduce((sum, u) => sum + u.heightU, 0);
  const rackHeight = totalUnits * UNIT_HEIGHT + 28;

  const positionedUnits = rackUnits.reduce<
    Array<(typeof rackUnits)[number] & { start: number; visible: boolean; uy: number; uh: number }>
  >((acc, unit) => {
    const previous = acc[acc.length - 1];
    const unitsBefore = previous ? previous.start + previous.heightU : 0;
    const uy = previous ? previous.uy + previous.uh : 13;
    const uh = unit.heightU * UNIT_HEIGHT;
    const end = (unitsBefore + unit.heightU) / totalUnits;
    return [...acc, { ...unit, start: unitsBefore, visible: fill >= end - 0.08, uy, uh }];
  }, []);

  return (
    <svg
      role="img"
      aria-label="Baie réseau 12U représentant firewall, routeur, switches, patch panels, serveurs et PDU"
      viewBox={`0 0 ${RACK_WIDTH} ${rackHeight}`}
      className={`h-auto w-full max-w-[280px] ${className}`}
      style={{ filter: "drop-shadow(0 0 16px rgba(255,92,0,0.27))", ...style }}
    >
      <rect x={1} y={1} width={RACK_WIDTH - 2} height={rackHeight - 2} rx={6} fill="#040d26" stroke="#1a3a8a" strokeWidth={2} />
      <rect x={1} y={10} width={12} height={rackHeight - 20} rx={3} fill="#0a1a50" stroke="#1a3a8a" strokeWidth={0.8} />
      <rect x={RACK_WIDTH - 13} y={10} width={12} height={rackHeight - 20} rx={3} fill="#0a1a50" stroke="#1a3a8a" strokeWidth={0.8} />

      {[0.2, 0.5, 0.8].map((f) => (
        <g key={f}>
          <circle cx={7} cy={12 + f * (rackHeight - 22)} r={1.8} fill="#1a3a8a" opacity={0.8} />
          <circle cx={RACK_WIDTH - 7} cy={12 + f * (rackHeight - 22)} r={1.8} fill="#1a3a8a" opacity={0.8} />
        </g>
      ))}

      {positionedUnits.map((unit, i) => {
        const { uy, uh } = unit;

        if (unit.type === "empty") {
          return (
            <g key={i} opacity={unit.visible ? 0.3 : 0.04} style={{ transition: "opacity 0.5s" }}>
              <rect
                x={14}
                y={uy + 1}
                width={RACK_WIDTH - 28}
                height={uh - 2}
                rx={2}
                fill="none"
                stroke="#1a3a8a"
                strokeWidth={0.5}
                strokeDasharray="3 3"
              />
            </g>
          );
        }

        return (
          <g key={i} opacity={unit.visible ? 1 : 0.04} style={{ transition: "opacity 0.55s" }}>
            <rect
              x={14}
              y={uy + 1}
              width={RACK_WIDTH - 28}
              height={uh - 2}
              rx={3}
              fill={unit.color}
              fillOpacity={0.18}
              stroke={unit.color}
              strokeWidth={1}
              strokeOpacity={0.7}
            />
            <rect x={14} y={uy + 1} width={3} height={uh - 2} rx={1} fill={unit.color} fillOpacity={0.9} />
            {[0, 1, 2].map((j) => (
              <circle
                key={j}
                cx={21 + j * 6}
                cy={uy + uh / 2}
                r={1.8}
                fill={unit.visible ? LED_COLOR : LED_OFF}
                style={{ filter: unit.visible ? `drop-shadow(0 0 2px ${LED_COLOR})` : "none" }}
                className={unit.visible ? "led-active" : ""}
              />
            ))}
            <text x={42} y={uy + uh / 2 + 3} fontSize={6} fill="#ffffff" fillOpacity={0.75} fontFamily="var(--font-grotesk)" fontWeight={500}>
              {unit.label}
            </text>
            {unit.hasPorts &&
              Array.from({ length: 14 }).map((_, j) => (
                <rect
                  key={j}
                  x={RACK_WIDTH - 72 + j * 4}
                  y={uy + uh / 2 - 2}
                  width={3}
                  height={4}
                  rx={0.5}
                  fill={CABLE_COLORS[j % 4] ?? "rgba(255,255,255,0.52)"}
                  fillOpacity={0.8}
                />
              ))}
          </g>
        );
      })}

      {[
        { y1: 0.16, y2: 0.3, color: CABLE_COLORS[0] },
        { y1: 0.3, y2: 0.48, color: CABLE_COLORS[1] },
        { y1: 0.48, y2: 0.62, color: CABLE_COLORS[2] },
        { y1: 0.62, y2: 0.76, color: CABLE_COLORS[0] },
      ].map((c, i) => (
        <path
          key={`r${i}`}
          d={`M${RACK_WIDTH - 13} ${rackHeight * c.y1} C${RACK_WIDTH + 12} ${rackHeight * c.y1} ${RACK_WIDTH + 12} ${rackHeight * c.y2} ${RACK_WIDTH - 13} ${rackHeight * c.y2}`}
          fill="none"
          stroke={c.color}
          strokeWidth={2.5}
          strokeOpacity={fill > 0.35 ? 0.85 : 0.06}
          style={{ transition: "stroke-opacity 0.4s" }}
        />
      ))}
      {[
        { y1: 0.2, y2: 0.4, color: CABLE_COLORS[1] },
        { y1: 0.55, y2: 0.72, color: CABLE_COLORS[2] },
      ].map((c, i) => (
        <path
          key={`l${i}`}
          d={`M14 ${rackHeight * c.y1} C-10 ${rackHeight * c.y1} -10 ${rackHeight * c.y2} 14 ${rackHeight * c.y2}`}
          fill="none"
          stroke={c.color}
          strokeWidth={2.5}
          strokeOpacity={fill > 0.35 ? 0.85 : 0.06}
          style={{ transition: "stroke-opacity 0.4s" }}
        />
      ))}
    </svg>
  );
}
