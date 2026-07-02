"use client";

import { RoomState } from "@/types";
import { floorOptions, wallOptions, tableOptions } from "@/data";

export default function RoomSVG({ state }: { state: RoomState }) {
  const floor = floorOptions[state.floor];
  const wall  = wallOptions[state.wall];
  const table = tableOptions[state.table];

  return (
    <svg viewBox="0 0 680 400" xmlns="http://www.w3.org/2000/svg" className="w-full block" aria-label="Living room preview">
      <rect width="680" height="400" fill="#f5f0e8" />

      {/* WALL */}
      <polygon points="0,0 680,0 680,260 0,260" fill={wall.color} />
      <rect x="0" y="253" width="680" height="10" fill="#d4c8b8" opacity="0.5" />

      {/* FLOOR */}
      <polygon points="0,260 680,260 680,400 0,400" fill={floor.color} />
      <g opacity="0.18">
        {[295, 330, 365].map((y) => <line key={y} x1="0" y1={y} x2="680" y2={y} stroke={floor.lineColor} strokeWidth="0.8" />)}
        {[170, 340, 510].map((x) => <line key={x} x1={x} y1="260" x2={x} y2="400" stroke={floor.lineColor} strokeWidth="0.8" />)}
      </g>

      {/* Window */}
      <rect x="260" y="40" width="160" height="120" rx="4" fill="#B8D4E8" stroke="#c9bfb0" strokeWidth="1.5" />
      <rect x="260" y="40" width="160" height="120" rx="4" fill="white" opacity="0.15" />
      <line x1="340" y1="40" x2="340" y2="160" stroke="#c9bfb0" strokeWidth="1.5" />
      <line x1="260" y1="100" x2="420" y2="100" stroke="#c9bfb0" strokeWidth="1.5" />
      <rect x="244" y="28" width="30" height="145" rx="3" fill="#d4b896" />
      <rect x="406" y="28" width="30" height="145" rx="3" fill="#d4b896" />

      {/* TV */}
      <rect x="28" y="70" width="148" height="95" rx="6" fill="#111" opacity="0.9" />
      <rect x="34" y="76" width="136" height="83" rx="3" fill="#0a0f1e" />
      <rect x="88" y="164" width="24" height="10" rx="2" fill="#2a2a2a" />
      <rect x="72" y="172" width="56" height="4" rx="2" fill="#2a2a2a" />

      {/* Sofa */}
      <rect x="140" y="192" width="400" height="58" rx="14" fill="#8B6F5E" />
      <rect x="150" y="237" width="380" height="42" rx="8" fill="#7D6352" />
      <rect x="137" y="204" width="19" height="46" rx="6" fill="#7a5e4e" />
      <rect x="524" y="204" width="19" height="46" rx="6" fill="#7a5e4e" />
      <rect x="157" y="274" width="13" height="19" rx="3" fill="#5a3e30" />
      <rect x="510" y="274" width="13" height="19" rx="3" fill="#5a3e30" />
      <line x1="287" y1="196" x2="287" y2="237" stroke="#5a3e30" strokeWidth="1.5" opacity="0.35" />
      <line x1="393" y1="196" x2="393" y2="237" stroke="#5a3e30" strokeWidth="1.5" opacity="0.35" />
      <rect x="152" y="194" width="74" height="43" rx="10" fill="#a0826d" opacity="0.82" />
      <rect x="454" y="194" width="74" height="43" rx="10" fill="#a0826d" opacity="0.82" />

      {/* COFFEE TABLE */}
      <rect x="232" y="290" width="216" height="52" rx="7" fill={table.color} />
      <rect x="242" y="339" width="12" height="25" rx="3" fill={table.legColor} />
      <rect x="426" y="339" width="12" height="25" rx="3" fill={table.legColor} />
      <rect x="286" y="296" width="54" height="34" rx="3" fill="#e8d5b0" opacity="0.65" />
      <rect x="357" y="291" width="20" height="42" rx="8" fill="#94b5a0" opacity="0.88" />
      <ellipse cx="367" cy="291" rx="13" ry="4" fill="#94b5a0" opacity="0.65" />

      {/* Side table + lamp */}
      <rect x="87" y="252" width="57" height="33" rx="5" fill="#8a7060" />
      <rect x="97" y="282" width="9" height="16" rx="2" fill="#6a5040" />
      <rect x="125" y="282" width="9" height="16" rx="2" fill="#6a5040" />
      <rect x="106" y="220" width="7" height="34" rx="2" fill="#b09070" />
      <polygon points="92,220 128,220 120,205 100,205" fill="#ede0cc" />

      {/* Plant */}
      <rect x="586" y="232" width="34" height="31" rx="5" fill="#7a6050" />
      <circle cx="603" cy="215" r="21" fill="#5a8050" opacity="0.9" />
      <circle cx="589" cy="226" r="14" fill="#4a7040" opacity="0.85" />
      <circle cx="617" cy="222" r="15" fill="#6a9060" opacity="0.85" />
    </svg>
  );
}
