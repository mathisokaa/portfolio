export interface TerminalLine {
  type: "prompt" | "output";
  value: string;
}

export const terminalLines: TerminalLine[] = [
  { type: "prompt", value: "root@fw-01:~$ ping 192.168.1.254" },
  { type: "output", value: "64 bytes — time=1.2ms ✓" },
  { type: "prompt", value: "root@sw-01:~$ show vlan brief" },
  { type: "output", value: "VLAN 10 COMPTA  active" },
  { type: "output", value: "VLAN 20 INFRA   active" },
  { type: "prompt", value: "root@srv-ad:~$ systemctl status samba" },
  { type: "output", value: "● samba-ad-dc  Active: running ✓" },
  { type: "prompt", value: "root@fw-01:~$ ipsec statusall" },
  { type: "output", value: "VPN-SITE-B: IKEv2 UP — 12.5 MB ↑↓" },
];
