"use client";

interface Option { label: string; color: string; }
interface Props { options: Option[]; selected: number; onSelect: (i: number) => void; }

export default function SwatchPicker({ options, selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((opt, i) => (
        <button key={i} onClick={() => onSelect(i)} className="flex flex-col items-center gap-1 focus:outline-none" aria-label={opt.label} aria-pressed={selected === i}>
          <div
            className="w-10 h-10 rounded-lg transition-all duration-200"
            style={{
              background: opt.color,
              border: selected === i ? "2px solid #1c1917" : "1.5px solid #d6d3d1",
              transform: selected === i ? "scale(1.12)" : "scale(1)",
              boxShadow: selected === i ? "0 0 0 3px rgba(28,25,23,0.1)" : "none",
            }}
          />
          <span className="text-[10px] text-center max-w-[44px] leading-tight" style={{ color: selected === i ? "#1c1917" : "#78716c", fontWeight: selected === i ? 600 : 400 }}>
            {opt.label}
          </span>
        </button>
      ))}
    </div>
  );
}
