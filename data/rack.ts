export type RackUnitType = "fw" | "router" | "sw" | "patch" | "srv" | "pdu" | "empty";

export interface RackUnit {
  type: RackUnitType;
  label: string;
  color: string;
  heightU: 1 | 2;
  hasPorts?: boolean;
}

export const rackUnits: RackUnit[] = [
  { type: "fw", label: "pfSense FW-01", color: "#ff5c00", heightU: 1 },
  { type: "router", label: "Cisco ISR 2911", color: "#ff8c44", heightU: 1 },
  { type: "sw", label: "Catalyst 2960-24", color: "#2277ff", heightU: 1, hasPorts: true },
  { type: "sw", label: "Catalyst 2960-48", color: "#2277ff", heightU: 1, hasPorts: true },
  { type: "patch", label: "Patch Panel 24p", color: "rgba(255,255,255,0.52)", heightU: 1, hasPorts: true },
  { type: "srv", label: "Srv-AD / DNS", color: "#66aaff", heightU: 2 },
  { type: "srv", label: "Srv-Backup", color: "#66aaff", heightU: 2 },
  { type: "patch", label: "Patch Panel 24p", color: "rgba(255,255,255,0.52)", heightU: 1, hasPorts: true },
  { type: "empty", label: "1U libre", color: "transparent", heightU: 1 },
  { type: "pdu", label: "PDU 16A", color: "rgba(255,255,255,0.52)", heightU: 1 },
];
