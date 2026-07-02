import type { Metadata } from "next";

export const metadata: Metadata = { title: "Care & Maintenance", description: "How to care for and maintain your natural stone products." };

const tips = [
  {
    stone: "Granite",
    color: "bg-stone-900",
    steps: [
      "Seal your granite countertop every 1–2 years using a penetrating stone sealer.",
      "Wipe spills immediately — especially acidic substances like lemon juice, vinegar, or wine.",
      "Use mild soap and warm water for daily cleaning. Avoid bleach or abrasive cleaners.",
      "Use cutting boards and trivets — granite is heat-resistant but thermal shock can cause micro-cracks over time.",
    ],
  },
  {
    stone: "Marble",
    color: "bg-stone-700",
    steps: [
      "Marble is more porous and sensitive than granite — seal it every 3–6 months.",
      "Immediately blot spills (don't wipe) to prevent etching from acidic liquids.",
      "Use pH-neutral cleaners only. Never use vinegar, citrus, or standard bathroom sprays.",
      "Place mats under toiletries in bathrooms as many products contain acids.",
    ],
  },
  {
    stone: "Sandstone",
    color: "bg-amber-800",
    steps: [
      "Seal sandstone after installation and re-seal every 1–2 years for outdoor use.",
      "Remove moss and algae with a specialist patio cleaner — avoid high-pressure washing.",
      "Brush away leaves and debris regularly to prevent staining and damp buildup.",
      "For indoor sandstone, sweep regularly and use a stone-safe floor cleaner.",
    ],
  },
  {
    stone: "Quartz",
    color: "bg-slate-600",
    steps: [
      "Quartz requires minimal maintenance — no sealing needed as it is non-porous.",
      "Clean with mild soap and water or a quartz-safe cleaner for daily maintenance.",
      "Avoid leaving rubber mats on quartz surfaces long-term as they can cause discolouration.",
      "Protect from direct heat — quartz can be damaged by temperatures above 150°C.",
    ],
  },
  {
    stone: "Porcelain",
    color: "bg-stone-500",
    steps: [
      "Porcelain is extremely low-maintenance — simply sweep and mop regularly.",
      "For outdoor tiles, use a patio cleaner to remove algae build-up in wet seasons.",
      "Grout lines may need occasional cleaning with a specialist grout cleaner.",
      "Porcelain is frost-proof and UV-stable — no sealing required.",
    ],
  },
];

export default function CarePage() {
  return (
    <>
      <section className="bg-stone-900 py-20 px-4 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-stone-400 mb-3">Guidance</p>
        <h1 className="font-display text-4xl md:text-5xl text-white mb-4">Care & Maintenance</h1>
        <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
          Learn how to keep your natural stone looking beautiful for generations to come.
        </p>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
          {tips.map(({ stone, color, steps }) => (
            <div key={stone} className="border border-stone-200 rounded-2xl overflow-hidden">
              <div className={`${color} px-6 py-4`}>
                <h2 className="font-display text-white text-xl">{stone}</h2>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {steps.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-stone-600 leading-relaxed">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-stone-100 text-stone-500 text-xs flex items-center justify-center font-medium mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 bg-stone-50 text-center px-4 border-t border-stone-200">
        <h2 className="font-display text-2xl text-stone-900 mb-3">Need specific advice?</h2>
        <p className="text-stone-500 text-sm mb-6 max-w-md mx-auto">Our team is happy to advise on the best care routine for your specific stone and application.</p>
        <a href="/contact" className="inline-block px-7 py-3.5 bg-stone-900 text-white text-sm rounded-lg hover:bg-stone-700 transition-colors font-medium">
          Contact Our Experts
        </a>
      </section>
    </>
  );
}
