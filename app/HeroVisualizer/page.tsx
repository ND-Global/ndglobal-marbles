"use client";
import { useState } from "react";
import Image from "next/image";

/**
 * ─────────────────────────────────────────────────────────────────────
 * HOW THIS WORKS — mask images instead of guessed coordinates
 * ─────────────────────────────────────────────────────────────────────
 * 1. /public/kitchen2.png is the base photo.
 * 2. For each surface (table, Floor) there is ONE black & white
 *    mask PNG, same pixel size as kitchen2.png:
 *      - WHITE  = texture shows here
 *      - BLACK  = texture is hidden here (original photo shows through)
 *    This is what lets you carve out the faucet, sink, handles, or
 *    any obstruction — just paint that spot black in the mask, no
 *    coordinates or polygons needed.
 * 3. The texture is applied with CSS `mask-image: url(mask.png)`,
 *    which uses the mask's white/black areas directly — completely
 *    replacing the old clip-path polygon guessing.
 *
 * HOW TO MAKE A MASK (Photoshop / Figma / even MS Paint):
 *   1. Open kitchen2.png as your base/reference layer.
 *   2. New layer, fill it solid BLACK, same canvas size.
 *   3. Paint WHITE over the table (or floor) area only — zoom in
 *      and go around the faucet/sink/handles so they stay BLACK.
 *   4. A little feather/blur (1-2px) on the white edge looks more
 *      natural than a hard edge — optional but recommended.
 *   5. Export as PNG (flatten it — this file does NOT need
 *      transparency, just black & white) into:
 *        /public/masks/table-mask.png
 *        /public/masks/floor-mask.png
 *
 * You only ever make ONE mask per surface — it works for every
 * material/swatch automatically, since the mask and the texture are
 * applied together but are separate images.
 * ─────────────────────────────────────────────────────────────────────
 */

type Swatch = { id: string; name: string; img: string };
type CategoryKey = "table" | "floor";
type Category = {
  label: string;
  maskImage: string;
  blend: React.CSSProperties["mixBlendMode"];
  size: string;
  swatches: Swatch[];
};

const CATEGORIES: Record<CategoryKey, Category> = {
  table: {
    label: "table",
    maskImage: "/masks/table-mask.png",
    blend: "multiply",
    size: "300px 300px",
    swatches: [
      { id: "c-calacatta", name: "Calacatta Gold", img: "/tiles/table/calacatta.png" },
      { id: "c-black-galaxy", name: "Black Galaxy", img: "/tiles/table/black-galaxy.png" },
      { id: "c-white-quartz", name: "Pure White Quartz", img: "/tiles/table/white-quartz.png" },
    ],
  },
  floor: {
    label: "Flooring",
    maskImage: "/masks/floor-mask.png",
    blend: "multiply",
    size: "260px 260px",
    swatches: [
      { id: "f-light-wood", name: "Light Wood", img: "/tiles/floor/light-wood.png" },
      { id: "f-grey-tile", name: "Grey Tile", img: "/tiles/floor/grey-tile.png" },
      { id: "f-dark-marble", name: "Dark Emperador", img: "/tiles/floor/dark-marble.png" },
    ],
  },
};

const CATEGORY_KEYS = Object.keys(CATEGORIES) as CategoryKey[];

export default function HeroVisualizer() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("table");
  const [selections, setSelections] = useState<Record<CategoryKey, Swatch | null>>({
    table: null,
    floor: null,
  });

  const current = CATEGORIES[activeCategory];

  const selectSwatch = (swatch: Swatch) => {
    setSelections((prev) => ({ ...prev, [activeCategory]: swatch }));
  };

  const clearSwatch = () => {
    setSelections((prev) => ({ ...prev, [activeCategory]: null }));
  };

  return (
    <section className="bg-stone-900">
      {/* ── PHOTO STAGE ───────────────────────────────────────────────── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "1225 / 980" }}
      >
        {/* Base kitchen photo */}
        <Image
          src="/kitchen2.png"
          alt="Kitchen with island table and open wood flooring"
          fill
          priority
          className="object-cover"
        />

        {/* Applied texture overlays — shaped by the mask PNG, not by
            coordinates. White areas of the mask show the texture,
            black areas (faucet, sink, cabinets, etc.) show the photo. */}
        {CATEGORY_KEYS.map((key) => {
          const sel = selections[key];
          if (!sel) return null;
          const cfg = CATEGORIES[key];
          return (
            <div
              key={key}
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `url(${sel.img})`,
                backgroundSize: cfg.size,
                backgroundRepeat: "repeat",
                mixBlendMode: cfg.blend,
                WebkitMaskImage: `url(${cfg.maskImage})`,
                maskImage: `url(${cfg.maskImage})`,
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            />
          );
        })}

        {/* Heading */}
        <div className="absolute top-0 left-0 right-0 pt-6 md:pt-10 text-center px-4 bg-gradient-to-b from-black/50 to-transparent pb-10 pointer-events-none">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-200 mb-2">
            Visualise Your Space
          </p>
          <h1 className="font-display text-2xl md:text-4xl text-white leading-tight">
            See your stone, before you lay it.
          </h1>
        </div>
      </div>

      {/* ── CONTROL BAR ── */}
      <div className="bg-stone-900 border-t border-stone-800">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-2 mb-5 flex-wrap">
            {CATEGORY_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide uppercase transition-colors ${
                  activeCategory === key
                    ? "bg-white text-stone-900"
                    : "bg-stone-800 text-white hover:bg-stone-700"
                }`}
              >
                {CATEGORIES[key].label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={clearSwatch}
              className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 flex items-center justify-center text-[10px] text-stone-300 ${
                !selections[activeCategory]
                  ? "border-white scale-110"
                  : "border-stone-600 hover:border-stone-400"
              }`}
              title="Original"
            >
              None
            </button>
            {current.swatches.map((swatch) => (
              <button
                key={swatch.id}
                onClick={() => selectSwatch(swatch)}
                className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  selections[activeCategory]?.id === swatch.id
                    ? "border-white scale-110"
                    : "border-stone-600 hover:border-stone-400"
                }`}
                title={swatch.name}
              >
                <Image src={swatch.img} alt={swatch.name} fill className="object-cover" />
              </button>
            ))}
          </div>

          <p className="text-center text-stone-400 text-xs mt-4">
            {selections[activeCategory]?.name ?? "Original — pick a finish above"}
          </p>
        </div>
      </div>
    </section>
  );
}


// "use client";
// import { useState } from "react";
// import Image from "next/image";

// /**
//  * ─────────────────────────────────────────────────────────────────────
//  * Traced against /public/kitchen2.png (1225x980) using color-based
//  * detection (bright/low-saturation = table; the rest of the open
//  * area below the cabinet line = floor). The two shapes share one
//  * corner point (the island's front-right tip) so there's no gap and
//  * no overlap between them.
//  *
//  * Texture images can be plain photos — no transparency/Photoshop
//  * cutting needed. The browser clips them to these traced shapes.
//  *
//  * IF SOMETHING LOOKS OFF: set DEBUG_MASKS = true, reload, screenshot
//  * the WHOLE page (unscrolled) and send it back — the shapes can be
//  * re-measured precisely from that screenshot.
//  * ─────────────────────────────────────────────────────────────────────
//  */

// type Swatch = { id: string; name: string; img: string };
// type CategoryKey = "table" | "floor";
// type Category = {
//   label: string;
//   clip: string;
//   blend: React.CSSProperties["mixBlendMode"];
//   size: string;
//   debugColor: string;
//   swatches: Swatch[];
// };

// // All coordinates are fractions (0–1) of the 1225x980 kitchen2.png photo.
// const table_OUTLINE =
//   "M0.2147,0.2592 L0.3967,0.3541 L0.0653,0.5735 L0,0.5653 L0,0.3816 Z";

// const FLOOR_OUTLINE =
//   // Top edge measured directly from the DEBUG_MASKS screenshots by
//   // sampling the actual color transition from cabinet/stove to floor
//   // (floor genuinely starts around y=0.50 in this photo; kept at 0.52
//   // for a small safety margin so it can't creep back onto the stove).
//   "M0.42,0.52 L1,0.52 L1,1 L0.42,1 Z";

// const CATEGORIES: Record<CategoryKey, Category> = {
//   table: {
//     label: "table",
//     clip: "url(#table-clip)",
//     blend: "multiply",
//     size: "300px 300px",
//     debugColor: "rgba(0,200,0,0.4)",
//     swatches: [
//       { id: "c-calacatta", name: "Calacatta Gold", img: "/tiles/table/calacatta.png" },
//       { id: "c-black-galaxy", name: "Black Galaxy", img: "/tiles/table/black-galaxy.png" },
//       { id: "c-white-quartz", name: "Pure White Quartz", img: "/tiles/table/white-quartz.png" },
//     ],
//   },
//   floor: {
//     label: "Flooring",
//     clip: "url(#floor-clip)",
//     blend: "multiply",
//     size: "260px 260px",
//     debugColor: "rgba(255,0,0,0.4)",
//     swatches: [
//       { id: "f-light-wood", name: "Light Wood", img: "/tiles/floor/light-wood.png" },
//       { id: "f-grey-tile", name: "Grey Tile", img: "/tiles/floor/grey-tile.png" },
//       { id: "f-dark-marble", name: "Dark Emperador", img: "/tiles/floor/dark-marble.png" },
//     ],
//   },
// };

// const CATEGORY_KEYS = Object.keys(CATEGORIES) as CategoryKey[];

// // Flip to true temporarily to see the exact clip shapes as colored boxes.
// const DEBUG_MASKS = false;

// export default function HeroVisualizer() {
//   const [activeCategory, setActiveCategory] = useState<CategoryKey>("table");
//   const [selections, setSelections] = useState<Record<CategoryKey, Swatch | null>>({
//     table: null,
//     floor: null,
//   });

//   const current = CATEGORIES[activeCategory];

//   const selectSwatch = (swatch: Swatch) => {
//     setSelections((prev) => ({ ...prev, [activeCategory]: swatch }));
//   };

//   const clearSwatch = () => {
//     setSelections((prev) => ({ ...prev, [activeCategory]: null }));
//   };

//   return (
//     <section className="bg-stone-900">
//       {/* ── PHOTO STAGE ───────────────────────────────────────────────── */}
//       <div
//         className="relative w-full overflow-hidden"
//         style={{ aspectRatio: "1225 / 980" }}
//       >
//         {/* Invisible SVG holding our two clip-path shapes */}
//         <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
//           <defs>
//             <clipPath id="table-clip" clipPathUnits="objectBoundingBox">
//               <path d={table_OUTLINE} />
//             </clipPath>
//             <clipPath id="floor-clip" clipPathUnits="objectBoundingBox">
//               <path d={FLOOR_OUTLINE} />
//             </clipPath>
//           </defs>
//         </svg>

//         {/* Base kitchen photo */}
//         <Image
//           src="/kitchen2.png"
//           alt="Kitchen with island table and open wood flooring"
//           fill
//           priority
//           className="object-cover"
//         />

//         {/* Applied texture overlays — clipped to exact surface shape */}
//         {CATEGORY_KEYS.map((key) => {
//           const sel = selections[key];
//           if (!sel) return null;
//           const cfg = CATEGORIES[key];
//           return (
//             <div
//               key={key}
//               className="absolute inset-0 pointer-events-none"
//               style={{ clipPath: cfg.clip }}
//             >
//               <div
//                 className="w-full h-full bg-repeat"
//                 style={{
//                   backgroundImage: `url(${sel.img})`,
//                   backgroundSize: cfg.size,
//                   mixBlendMode: cfg.blend,
//                 }}
//               />
//             </div>
//           );
//         })}

//         {/* DEBUG overlays */}
//         {DEBUG_MASKS &&
//           CATEGORY_KEYS.map((key) => (
//             <div
//               key={`debug-${key}`}
//               className="absolute inset-0 pointer-events-none"
//               style={{ clipPath: CATEGORIES[key].clip }}
//             >
//               <div
//                 className="w-full h-full border-4 flex items-center justify-center"
//                 style={{
//                   backgroundColor: CATEGORIES[key].debugColor,
//                   borderColor: CATEGORIES[key].debugColor,
//                 }}
//               >
//                 <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">
//                   {CATEGORIES[key].label}
//                 </span>
//               </div>
//             </div>
//           ))}

//         {/* Heading */}
//         <div className="absolute top-0 left-0 right-0 pt-6 md:pt-10 text-center px-4 bg-gradient-to-b from-black/50 to-transparent pb-10 pointer-events-none">
//           <p className="text-xs tracking-[0.3em] uppercase text-stone-200 mb-2">
//             Visualise Your Space
//           </p>
//           <h1 className="font-display text-2xl md:text-4xl text-white leading-tight">
//             See your stone, before you lay it.
//           </h1>
//         </div>
//       </div>

//       {/* ── CONTROL BAR ── */}
//       <div className="bg-stone-900 border-t border-stone-800">
//         <div className="max-w-5xl mx-auto px-4 py-6">
//           <div className="flex items-center justify-center gap-2 mb-5 flex-wrap">
//             {CATEGORY_KEYS.map((key) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveCategory(key)}
//                 className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide uppercase transition-colors ${
//                   activeCategory === key
//                     ? "bg-white text-stone-900"
//                     : "bg-stone-800 text-white hover:bg-stone-700"
//                 }`}
//               >
//                 {CATEGORIES[key].label}
//               </button>
//             ))}
//           </div>

//           <div className="flex items-center justify-center gap-3 flex-wrap">
//             <button
//               onClick={clearSwatch}
//               className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 flex items-center justify-center text-[10px] text-stone-300 ${
//                 !selections[activeCategory]
//                   ? "border-white scale-110"
//                   : "border-stone-600 hover:border-stone-400"
//               }`}
//               title="Original"
//             >
//               None
//             </button>
//             {current.swatches.map((swatch) => (
//               <button
//                 key={swatch.id}
//                 onClick={() => selectSwatch(swatch)}
//                 className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
//                   selections[activeCategory]?.id === swatch.id
//                     ? "border-white scale-110"
//                     : "border-stone-600 hover:border-stone-400"
//                 }`}
//                 title={swatch.name}
//               >
//                 <Image src={swatch.img} alt={swatch.name} fill className="object-cover" />
//               </button>
//             ))}
//           </div>

//           <p className="text-center text-stone-400 text-xs mt-4">
//             {selections[activeCategory]?.name ?? "Original — pick a finish above"}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";
// import { useState } from "react";
// import Image from "next/image";

// /**
//  * ── CONFIG ──────────────────────────────────────────────────────────────
//  * Each category = one surface in the photo (floor / table / stairs).
//  * `clip` = CSS clip-path polygon (in %) that masks ONLY that surface.
//  * `swatches` = list of tile/stone textures the user can click to apply.
//  *
//  * IMPORTANT: the clip-path values below are starting estimates based on
//  * the room photo you uploaded (sofa + dark coffee table + staircase on
//  * the right). Open the page, and nudge the percentages until each mask
//  * sits exactly on its surface — a couple of minutes of trial and error.
//  */
// const CATEGORIES = {
//   floor: {
//     label: "Flooring",
//     clip: "polygon(0% 100%, 0% 76%, 20% 64%, 62% 60%, 100% 66%, 100% 100%)",
//     blend: "multiply",
//     size: "260px 260px",
//     swatches: [
//       { id: "f-beige-marble", name: "Beige Marble", img: "/tiles/floor/beige-marble.png" },
//       { id: "f-dark-marble", name: "Dark Emperador", img: "/tiles/floor/dark-marble.png" },
//       { id: "f-white-granite", name: "White Granite", img: "/tiles/floor/white-granite.png" },
//       { id: "f-grey-sandstone", name: "Grey Sandstone", img: "/tiles/floor/grey-sandstone.png" },
//     ],
//   },
//   table: {
//     label: "Table Top",
//     clip: "polygon(25% 62%, 60% 58%, 60% 73%, 25% 76%)",
//     blend: "multiply",
//     size: "180px 180px",
//     swatches: [
//       { id: "t-black-galaxy", name: "Black Galaxy", img: "/tiles/table/black-galaxy.png" },
//       { id: "t-calacatta", name: "Calacatta Gold", img: "/tiles/table/calacatta.png" },
//       { id: "t-brown-marble", name: "Brown Marble", img: "/tiles/table/brown-marble.png" },
//     ],
//   },
//   stairs: {
//     label: "Staircase",
//     clip: "polygon(80% 5%, 100% 10%, 100% 100%, 78% 100%, 78% 55%)",
//     blend: "multiply",
//     size: "220px 220px",
//     swatches: [
//       { id: "s-beige-marble", name: "Beige Marble", img: "/tiles/stairs/beige-marble.png" },
//       { id: "s-grey-granite", name: "Grey Granite", img: "/tiles/stairs/grey-granite.png" },
//       { id: "s-cream-sandstone", name: "Cream Sandstone", img: "/tiles/stairs/cream-sandstone.png" },
//     ],
//   },
// };

// const CATEGORY_KEYS = Object.keys(CATEGORIES);

// export default function HeroVisualizer() {
//   const [activeCategory, setActiveCategory] = useState("floor");
//   const [selections, setSelections] = useState({
//     floor: CATEGORIES.floor.swatches[0],
//     table: null,
//     stairs: null,
//   });

//   const current = CATEGORIES[activeCategory];

//   const selectSwatch = (swatch) => {
//     setSelections((prev) => ({ ...prev, [activeCategory]: swatch }));
//   };

//   const clearSwatch = () => {
//     setSelections((prev) => ({ ...prev, [activeCategory]: null }));
//   };

//   return (
//     <section className="relative min-h-[90vh] flex flex-col bg-stone-900 overflow-hidden">
//       {/* ── Base room photo ── */}
//       <div className="absolute inset-0">
//         <Image
//           src="/homeimg.png"
//           alt="Living room with natural stone flooring, table and staircase"
//           fill
//           priority
//           className="object-cover"
//         />
//       </div>

//       {/* ── Applied texture overlays (one per category, only rendered if selected) ── */}
//       {CATEGORY_KEYS.map((key) => {
//         const sel = selections[key];
//         if (!sel) return null;
//         const cfg = CATEGORIES[key];
//         return (
//           <div
//             key={key}
//             className="absolute inset-0 pointer-events-none transition-opacity duration-500"
//             style={{ clipPath: cfg.clip }}
//           >
//             <div
//               className="w-full h-full bg-repeat"
//               style={{
//                 backgroundImage: `url(${sel.img})`,
//                 backgroundSize: cfg.size,
//                 mixBlendMode: cfg.blend,
//               }}
//             />
//           </div>
//         );
//       })}

//       {/* ── Subtle readability gradient ── */}
//       <div className="absolute inset-0 bg-gradient-to-t from-stone-900/85 via-stone-900/5 to-stone-900/30 pointer-events-none" />

//       {/* ── Heading ── */}
//       <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-20 md:pt-28">
//         <p className="text-xs tracking-[0.3em] uppercase text-stone-300 mb-3">
//           Visualise Your Space
//         </p>
//         <h1 className="font-display text-3xl md:text-5xl text-white leading-tight">
//           See your stone, before you lay it.
//         </h1>
//       </div>

//       {/* ── Spacer pushes controls to bottom ── */}
//       <div className="flex-1" />

//       {/* ── Controls panel ── */}
//       <div className="relative z-10 w-full pb-8 px-4">
//         <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4">
//           {/* Category tabs */}
//           <div className="flex items-center justify-center gap-2 mb-4">
//             {CATEGORY_KEYS.map((key) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveCategory(key)}
//                 className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-colors ${
//                   activeCategory === key
//                     ? "bg-white text-stone-900"
//                     : "bg-white/10 text-white hover:bg-white/20"
//                 }`}
//               >
//                 {CATEGORIES[key].label}
//               </button>
//             ))}
//           </div>

//           {/* Swatch picker for active category */}
//           <div className="flex items-center justify-center gap-3 flex-wrap">
//             <button
//               onClick={clearSwatch}
//               className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 flex items-center justify-center text-[10px] text-white/70 ${
//                 !selections[activeCategory]
//                   ? "border-white scale-110"
//                   : "border-white/30 hover:border-white/60"
//               }`}
//               title="Original"
//             >
//               None
//             </button>
//             {current.swatches.map((swatch) => (
//               <button
//                 key={swatch.id}
//                 onClick={() => selectSwatch(swatch)}
//                 className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
//                   selections[activeCategory]?.id === swatch.id
//                     ? "border-white scale-110"
//                     : "border-white/30 hover:border-white/60"
//                 }`}
//                 title={swatch.name}
//               >
//                 <Image src={swatch.img} alt={swatch.name} fill className="object-cover" />
//               </button>
//             ))}
//           </div>

//           {/* Active swatch name */}
//           <p className="text-center text-white/80 text-xs mt-3">
//             {selections[activeCategory]?.name ?? "Original surface"}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import { useState } from "react";
// import Image from "next/image";

// const tiles = [
//   { id: "beige-marble", name: "Beige Marble", img: "/tiles/beige-marble.png" },
//   { id: "dark-marble", name: "Dark Marble", img: "/tiles/dark-marble.png" },
//   { id: "white-granite", name: "White Granite", img: "/tiles/white-granite.png" },
//   { id: "grey-sandstone", name: "Grey Sandstone", img: "/tiles/grey-sandstone.png" },
// ];

// // Floor area approx polygon (% coordinates) — adjust to match your photo
// const FLOOR_CLIP =
//   "polygon(0% 100%, 0% 78%, 18% 62%, 55% 58%, 100% 65%, 100% 100%)";

// export default function HeroVisualizer() {
//   const [selectedTile, setSelectedTile] = useState(tiles[0]);

//   return (
//     <section className="relative min-h-[90vh] flex items-end justify-center bg-stone-900 overflow-hidden">
//       {/* Base room photo */}
//       <div className="absolute inset-0">
//         <Image
//           src="/homeimg.png"
//           alt="Living room with natural stone flooring"
//           fill
//           priority
//           className="object-cover"
//         />
//       </div>

//       {/* Tile overlay on floor area */}
//       <div
//         className="absolute inset-0 pointer-events-none transition-all duration-500"
//         style={{ clipPath: FLOOR_CLIP }}
//       >
//         <div
//           className="w-full h-full bg-repeat opacity-90"
//           style={{
//             backgroundImage: `url(${selectedTile.img})`,
//             backgroundSize: "300px 300px",
//             mixBlendMode: "multiply",
//           }}
//         />
//       </div>

//       <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/10 to-stone-900/40 pointer-events-none" />

//       <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-32">
//         <p className="text-xs tracking-[0.3em] uppercase text-stone-300 mb-4">
//           Visualise Your Space
//         </p>
//         <h1 className="font-display text-3xl md:text-5xl text-white leading-tight mb-2">
//           See your floor, before you lay it.
//         </h1>
//       </div>

//       <div className="relative z-10 w-full pb-10 px-4">
//         <div className="max-w-xl mx-auto flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20">
//           {tiles.map((tile) => (
//             <button
//               key={tile.id}
//               onClick={() => setSelectedTile(tile)}
//               className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
//                 selectedTile.id === tile.id
//                   ? "border-white scale-110"
//                   : "border-white/30 hover:border-white/60"
//               }`}
//               title={tile.name}
//             >
//               <Image src={tile.img} alt={tile.name} fill className="object-cover" />
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }