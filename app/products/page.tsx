"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, categoryList } from "@/data";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Page Hero */}
      <section className="bg-stone-900 py-20 px-4 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80')" }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-stone-400 mb-3">Our Range</p>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4">Products</h1>
          <p className="text-stone-300 text-sm leading-relaxed">
            Explore our wide range of natural stones — granite, marble, sandstone, porcelain and imported marbles, available in slabs and cut sizes.
          </p>
        </div>
      </section>

      {/* Category strip */}
      <section className="bg-white border-b border-stone-200 py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-5">
            {categoryList.map((c) => (
              <div
                key={c.name}
                className="p-4 border border-stone-200 rounded-xl hover:border-stone-400 hover:bg-stone-50 transition-all cursor-pointer group"
              >
                <p className="font-medium text-stone-800 text-sm mb-1 group-hover:text-stone-900">{c.name}</p>
                <p className="text-xs text-stone-500 leading-snug">{c.description}</p>
              </div>
            ))}
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {["All", ...categoryList.map((c) => c.name)].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-stone-900 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-sm text-stone-500 mb-6">
            Showing {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.slug}`}
                className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden" style={{ backgroundColor: p.color }}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-stone-700 text-xs font-medium rounded-full">
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-stone-900 font-semibold text-lg mb-1">{p.name}</h2>
                  <p className="text-sm text-stone-500 mb-4 leading-relaxed">{p.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.finish.map((f) => (
                      <span key={f} className="px-2.5 py-0.5 bg-stone-100 text-stone-600 text-xs rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-medium text-stone-700 group-hover:text-stone-900 inline-flex items-center gap-1 transition-colors">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-stone-400 text-sm py-16">
              Is category me abhi koi product available nahi hai.
            </p>
          )}
        </div>
      </section>

      {/* Comparison block */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl text-stone-900 mb-6 text-center">Granite vs Quartz — What's the Difference?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Composition", text: "Granite is a natural igneous rock excavated from the earth. Quartz is a man-made composite of natural quartz crystals and resin, offering consistency in colour and pattern." },
              { title: "Appearance", text: "Granite features a unique speckled or mottled pattern — no two slabs are identical. Quartz has a more consistent, uniform appearance due to its engineered nature." },
              { title: "Durability", text: "Both are highly scratch-resistant. Quartz is slightly more flexible and impact-resistant, while granite is harder but can be more prone to chipping at edges." },
              { title: "Maintenance", text: "Granite is porous and requires periodic sealing to prevent staining. Quartz is non-porous and requires minimal maintenance — no sealing necessary." },
            ].map(({ title, text }) => (
              <div key={title} className="flex gap-4">
                <div className="w-1 shrink-0 bg-stone-200 rounded-full" />
                <div>
                  <h3 className="font-semibold text-stone-900 text-sm mb-1">{title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}



// import type { Metadata } from "next";
// import Link from "next/link";
// import Image from "next/image";
// import { products, categoryList } from "@/data";

// export const metadata: Metadata = { title: "Products", description: "Browse our full range of natural stone products." };

// export default function ProductsPage() {
//   const categories = ["All", ...categoryList.map((c) => c.name)];

//   return (
//     <>
//       {/* Page Hero */}
//       <section className="bg-stone-900 py-20 px-4 text-center relative overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-20"
//           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80')" }}
//         />
//         <div className="relative z-10 max-w-2xl mx-auto">
//           <p className="text-xs tracking-[0.25em] uppercase text-stone-400 mb-3">Our Range</p>
//           <h1 className="font-display text-4xl md:text-5xl text-white mb-4">Products</h1>
//           <p className="text-stone-300 text-sm leading-relaxed">
//             Explore our wide range of natural stones — granite, marble, quartz, sandstone and porcelain, available in slabs and cut sizes.
//           </p>
//         </div>
//       </section>

//       {/* Category strip */}
//       <section className="bg-white border-b border-stone-200 py-5 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//             {categoryList.map((c) => (
//               <div key={c.name} className="p-4 border border-stone-200 rounded-xl hover:border-stone-400 hover:bg-stone-50 transition-all cursor-pointer group">
//                 <p className="font-medium text-stone-800 text-sm mb-1 group-hover:text-stone-900">{c.name}</p>
//                 <p className="text-xs text-stone-500 leading-snug">{c.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Products Grid */}
//       <section className="py-16 bg-stone-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
//             {products.map((p) => (
//               <Link
//                 key={p.id}
//                 href={`/products/${p.slug}`}
//                 className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
//               >
//                 <div className="relative h-56 overflow-hidden">
//                   <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//                   <div className="absolute top-4 left-4">
//                     <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-stone-700 text-xs font-medium rounded-full">{p.category}</span>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h2 className="font-display text-stone-900 font-semibold text-lg mb-1">{p.name}</h2>
//                   <p className="text-sm text-stone-500 mb-4 leading-relaxed">{p.tagline}</p>
//                   <div className="flex flex-wrap gap-1.5 mb-4">
//                     {p.finish.map((f) => (
//                       <span key={f} className="px-2.5 py-0.5 bg-stone-100 text-stone-600 text-xs rounded-full">{f}</span>
//                     ))}
//                   </div>
//                   <span className="text-xs font-medium text-stone-700 group-hover:text-stone-900 inline-flex items-center gap-1 transition-colors">
//                     View Details →
//                   </span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Comparison block (matches Global Granite) */}
//       <section className="py-16 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6">
//           <h2 className="font-display text-2xl text-stone-900 mb-6 text-center">Granite vs Quartz — What's the Difference?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[
//               { title: "Composition", text: "Granite is a natural igneous rock excavated from the earth. Quartz is a man-made composite of natural quartz crystals and resin, offering consistency in colour and pattern." },
//               { title: "Appearance", text: "Granite features a unique speckled or mottled pattern — no two slabs are identical. Quartz has a more consistent, uniform appearance due to its engineered nature." },
//               { title: "Durability", text: "Both are highly scratch-resistant. Quartz is slightly more flexible and impact-resistant, while granite is harder but can be more prone to chipping at edges." },
//               { title: "Maintenance", text: "Granite is porous and requires periodic sealing to prevent staining. Quartz is non-porous and requires minimal maintenance — no sealing necessary." },
//             ].map(({ title, text }) => (
//               <div key={title} className="flex gap-4">
//                 <div className="w-1 shrink-0 bg-stone-200 rounded-full" />
//                 <div>
//                   <h3 className="font-semibold text-stone-900 text-sm mb-1">{title}</h3>
//                   <p className="text-sm text-stone-500 leading-relaxed">{text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
