"use client";

import { useState } from "react";
import RoomSVG from "../components/Roomsvg/RoomSVG";
import SwatchPicker from "../Swatchpicker/page";
import { floorOptions, wallOptions, tableOptions } from "@/data";
import { Category, RoomState } from "@/types";

const TABS: { key: Category; label: string }[] = [
  { key: "floor", label: "🪵 Floor" },
  { key: "wall",  label: "🎨 Wall"  },
  { key: "table", label: "🪑 Table" },
];

const INFO: Record<Category, { heading: string; options: { label: string; color: string }[] }> = {
  floor: { heading: "Select floor style", options: floorOptions },
  wall:  { heading: "Select wall colour",  options: wallOptions  },
  table: { heading: "Select table finish", options: tableOptions },
};

export default function VisualizerSection() {
  const [cat, setCat] = useState<Category>("floor");
  const [state, setState] = useState<RoomState>({ floor: 0, wall: 0, table: 0 });
  const pick = (i: number) => setState((s) => ({ ...s, [cat]: i }));

  return (
    <section id="visualizer" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">Interactive Tool</p>
          <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-4">Visualise Your Space</h2>
          <p className="text-stone-500 text-sm max-w-xl mx-auto leading-relaxed">
            See how our natural stone products look in your home. Select floor, wall and table options to preview different combinations in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Room preview — takes 3 cols */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-stone-200 shadow-md">
            <RoomSVG state={state} />
          </div>

          {/* Controls — takes 2 cols */}
          <div className="lg:col-span-2 bg-stone-50 rounded-2xl border border-stone-200 p-6 shadow-sm">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-5 font-medium">Customise Room</p>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              {TABS.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setCat(key)}
                  className="flex-1 py-2 rounded-lg text-xs font-medium transition-all duration-150 border"
                  style={{
                    background:   cat === key ? "#1c1917" : "white",
                    color:        cat === key ? "#fff"    : "#57534e",
                    borderColor:  cat === key ? "#1c1917" : "#e7e5e4",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            <p className="text-xs text-stone-500 mb-4">{INFO[cat].heading}</p>

            <SwatchPicker options={INFO[cat].options} selected={state[cat]} onSelect={pick} />

            {/* Current selection summary */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Your Selection</p>
              <div className="space-y-2">
                {([
                  { label: "Floor", val: floorOptions[state.floor].label },
                  { label: "Wall",  val: wallOptions[state.wall].label   },
                  { label: "Table", val: tableOptions[state.table].label },
                ] as { label: string; val: string }[]).map(({ label, val }) => (
                  <div key={label} className="flex justify-between items-center text-sm">
                    <span className="text-stone-500">{label}</span>
                    <span className="text-stone-800 font-medium">{val}</span>
                  </div>
                ))}
              </div>
              <a
                href="/contact"
                className="mt-5 block w-full py-3 bg-stone-900 text-white text-sm text-center rounded-xl hover:bg-stone-700 transition-colors font-medium"
              >
                Enquire About These Products →
              </a>
              <a
                href="/products"
                className="mt-2 block w-full py-3 border border-stone-300 text-stone-700 text-sm text-center rounded-xl hover:bg-stone-50 transition-colors"
              >
                Browse All Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
