import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Award, Truck, Leaf } from "lucide-react";
import VisualizerSection from "./Visualizersection/page";
import HeroVisualizer from "./HeroVisualizer/page";
import { products } from "@/data";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
        <HeroVisualizer />
      {/* <section className="relative min-h-[90vh] flex items-center justify-center bg-stone-900 overflow-hidden">
        
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/80" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-6">Natural Stone Supplier — UK</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            We take a piece of the earth,<br />
            <span className="italic text-stone-300">and bring it into your home.</span>
          </h1>
          <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Premium granite, marble, quartz and sandstone — sourced directly from manufacturers and delivered across the UK.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="px-8 py-4 bg-white text-stone-900 font-medium text-sm rounded-lg hover:bg-stone-100 transition-colors">
              Explore Products
            </Link>
            <Link href="/#visualizer" className="px-8 py-4 border border-white/30 text-white text-sm rounded-lg hover:bg-white/10 transition-colors">
              Try Visualizer →
            </Link>
          </div>
        </div>

        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-stone-600 animate-pulse" />
        </div>
      </section> */}

      {/* ── STATS STRIP ───────────────────────────────────────────────────────── */}
      <section className="bg-stone-900 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { stat: "20+",  label: "Years Experience" },
            { stat: "500+", label: "Stone Varieties" },
            { stat: "5000+", label: "Projects Completed" },
            { stat: "UK",   label: "Nationwide Delivery" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="font-display text-3xl text-white font-bold mb-1">{stat}</p>
              <p className="text-xs text-stone-400 tracking-wide uppercase">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUR STORY ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">Our Story</p>
            <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-6 leading-tight">
              Global Granite — A Legacy of Quality
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Your Granite is a leading supplier and importer of natural stone and stone products. We cater to the diverse demands of clients across the UK, respecting delivery deadlines and honouring our customers with quality products.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Our parent company in India processes all premium quality Indian stones through in-house manufacturing units. We own paving stone quarries in India and deliver direct containers at excellent prices — savings we pass on to you.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 hover:gap-3 transition-all">
              Read our full story <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative h-80 md:h-full min-h-[360px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1758448755856-01d3add0177b?w=1200&q=80"
              alt="Elegant home interior finished with marble-look walls"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── VISUALIZER ────────────────────────────────────────────────────────── */}
      <VisualizerSection />

      {/* ── FEATURED PRODUCTS ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-2">Our Range</p>
              <h2 className="font-display text-3xl md:text-4xl text-stone-900">Featured Products</h2>
            </div>
            <Link href="/products" className="hidden sm:inline-flex items-center gap-1 text-sm text-stone-600 hover:text-stone-900 transition-colors">
              View all <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 6).map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.slug}`}
                className="group bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-stone-700 text-xs font-medium rounded-full">
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-stone-900 font-semibold mb-1">{p.name}</h3>
                  <p className="text-sm text-stone-500 mb-3 leading-relaxed line-clamp-2">{p.tagline}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.finish.slice(0, 3).map((f) => (
                      <span key={f} className="px-2 py-0.5 bg-stone-100 text-stone-600 text-xs rounded">{f}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link href="/products" className="px-6 py-3 border border-stone-300 text-stone-700 text-sm rounded-lg hover:bg-stone-100 transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">Why Choose Us</p>
            <h2 className="font-display text-3xl md:text-4xl text-stone-900">Our Quality Promise</h2>
          </div>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg mb-14">
            <Image
              src="https://images.unsplash.com/photo-1682888813788-bf57c360123e?w=1200&q=80"
              alt="Modern kitchen finished with marble countertops"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award,  title: "20+ Years Experience",   desc: "Over two decades of expertise in sourcing and supplying the finest natural stones." },
              { icon: Shield, title: "Quality Guaranteed",     desc: "Every product is inspected by our dedicated team before being imported to the UK." },
              { icon: Truck,  title: "Direct from Quarry",     desc: "We source directly from manufacturers and our own quarries — no middlemen." },
              { icon: Leaf,   title: "Sustainable Sourcing",   desc: "Committed to responsible quarrying practices and reducing our environmental footprint." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-stone-700" />
                </div>
                <h3 className="font-display font-semibold text-stone-900 mb-2">{title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STONE FINISHES GALLERY ────────────────────────────────────────────── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">Inspiration</p>
            <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-4">Stone Finishes in Real Homes</h2>
            <p className="text-stone-500 max-w-2xl mx-auto leading-relaxed">
              A look at how our natural stone ranges transform living spaces — from warm gold-veined marble feature walls to bold granite flooring.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: "https://images.unsplash.com/photo-1758448755856-01d3add0177b?w=800&q=80",
                title: "Calacatta Gold Marble Wall",
                desc: "Warm gold-veined marble slabs used as a statement feature wall, paired with soft ambient lighting.",
              },
              {
                image: "https://images.unsplash.com/photo-1761602866012-ae9f888255dc?w=800&q=80",
                title: "Statuario Marble Flooring",
                desc: "Polished white marble with fine grey veining, laid wall-to-wall for an airy, high-end living room floor.",
              },
              {
                image: "https://images.unsplash.com/photo-1682888813788-bf57c360123e?w=800&q=80",
                title: "Carrara Marble Countertop",
                desc: "Classic Carrara marble finished as a kitchen island countertop — timeless veining with a soft grey tone.",
              },
              {
                image: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&q=80",
                title: "Grey Granite Flooring",
                desc: "Bold, deep-grey granite used for both flooring and wall cladding, suited to double-height, modern interiors.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-56 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-stone-900 font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-stone-900 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1761602866012-ae9f888255dc?w=1200&q=80')" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
            Ready to transform your space?
          </h2>
          <p className="text-stone-300 mb-10 leading-relaxed">
            Book a visit to our showroom, request samples, or speak to one of our stone experts — we're here to help you find the perfect stone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-white text-stone-900 font-medium text-sm rounded-lg hover:bg-stone-100 transition-colors">
              Book a Visit
            </Link>
            <Link href="/products" className="px-8 py-4 border border-white/30 text-white text-sm rounded-lg hover:bg-white/10 transition-colors">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


// import Link from "next/link";
// import Image from "next/image";
// import { ArrowRight, Shield, Award, Truck, Leaf } from "lucide-react";
// import VisualizerSection from "./Visualizersection/page";
// import HeroVisualizer from "./HeroVisualizer/page";
// import { products } from "@/data";

// export default function HomePage() {
//   return (
//     <>
//       {/* ── HERO ──────────────────────────────────────────────────────────────── */}
//         <HeroVisualizer />
//       {/* <section className="relative min-h-[90vh] flex items-center justify-center bg-stone-900 overflow-hidden">
        
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-30"
//           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=1600&q=80')" }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/80" />

//         <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
//           <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-6">Natural Stone Supplier — UK</p>
//           <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
//             We take a piece of the earth,<br />
//             <span className="italic text-stone-300">and bring it into your home.</span>
//           </h1>
//           <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
//             Premium granite, marble, quartz and sandstone — sourced directly from manufacturers and delivered across the UK.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/products" className="px-8 py-4 bg-white text-stone-900 font-medium text-sm rounded-lg hover:bg-stone-100 transition-colors">
//               Explore Products
//             </Link>
//             <Link href="/#visualizer" className="px-8 py-4 border border-white/30 text-white text-sm rounded-lg hover:bg-white/10 transition-colors">
//               Try Visualizer →
//             </Link>
//           </div>
//         </div>

        
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400">
//           <span className="text-xs tracking-widest uppercase">Scroll</span>
//           <div className="w-px h-8 bg-stone-600 animate-pulse" />
//         </div>
//       </section> */}

//       {/* ── STATS STRIP ───────────────────────────────────────────────────────── */}
//       <section className="bg-stone-900 border-t border-stone-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//           {[
//             { stat: "20+",  label: "Years Experience" },
//             { stat: "500+", label: "Stone Varieties" },
//             { stat: "5000+", label: "Projects Completed" },
//             { stat: "UK",   label: "Nationwide Delivery" },
//           ].map(({ stat, label }) => (
//             <div key={label}>
//               <p className="font-display text-3xl text-white font-bold mb-1">{stat}</p>
//               <p className="text-xs text-stone-400 tracking-wide uppercase">{label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── OUR STORY ─────────────────────────────────────────────────────────── */}
//       <section className="py-20 bg-stone-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//           <div>
//             <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">Our Story</p>
//             <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-6 leading-tight">
//               Global Granite — A Legacy of Quality
//             </h2>
//             <p className="text-stone-600 leading-relaxed mb-4">
//               Your Granite is a leading supplier and importer of natural stone and stone products. We cater to the diverse demands of clients across the UK, respecting delivery deadlines and honouring our customers with quality products.
//             </p>
//             <p className="text-stone-600 leading-relaxed mb-8">
//               Our parent company in India processes all premium quality Indian stones through in-house manufacturing units. We own paving stone quarries in India and deliver direct containers at excellent prices — savings we pass on to you.
//             </p>
//             <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 hover:gap-3 transition-all">
//               Read our full story <ArrowRight size={16} />
//             </Link>
//           </div>
//           <div className="relative h-80 md:h-full min-h-[360px] rounded-2xl overflow-hidden shadow-xl">
//             <Image
//               src="https://images.unsplash.com/photo-1758448755856-01d3add0177b?w=1200&q=80"
//               alt="Elegant home interior finished with marble-look walls"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* ── VISUALIZER ────────────────────────────────────────────────────────── */}
//       <VisualizerSection />

//       {/* ── FEATURED PRODUCTS ─────────────────────────────────────────────────── */}
//       <section className="py-20 bg-stone-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="flex items-end justify-between mb-12">
//             <div>
//               <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-2">Our Range</p>
//               <h2 className="font-display text-3xl md:text-4xl text-stone-900">Featured Products</h2>
//             </div>
//             <Link href="/products" className="hidden sm:inline-flex items-center gap-1 text-sm text-stone-600 hover:text-stone-900 transition-colors">
//               View all <ArrowRight size={15} />
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {products.slice(0, 6).map((p) => (
//               <Link
//                 key={p.id}
//                 href={`/products/${p.slug}`}
//                 className="group bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
//               >
//                 <div className="relative h-52 overflow-hidden">
//                   <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
//                   <div className="absolute top-3 left-3">
//                     <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-stone-700 text-xs font-medium rounded-full">
//                       {p.category}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-5">
//                   <h3 className="font-display text-stone-900 font-semibold mb-1">{p.name}</h3>
//                   <p className="text-sm text-stone-500 mb-3 leading-relaxed line-clamp-2">{p.tagline}</p>
//                   <div className="flex flex-wrap gap-1.5">
//                     {p.finish.slice(0, 3).map((f) => (
//                       <span key={f} className="px-2 py-0.5 bg-stone-100 text-stone-600 text-xs rounded">{f}</span>
//                     ))}
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           <div className="mt-10 text-center sm:hidden">
//             <Link href="/products" className="px-6 py-3 border border-stone-300 text-stone-700 text-sm rounded-lg hover:bg-stone-100 transition-colors">
//               View All Products
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── WHY CHOOSE US ─────────────────────────────────────────────────────── */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="text-center mb-14">
//             <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">Why Choose Us</p>
//             <h2 className="font-display text-3xl md:text-4xl text-stone-900">Our Quality Promise</h2>
//           </div>
//           <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg mb-14">
//             <Image
//               src="https://images.unsplash.com/photo-1682888813788-bf57c360123e?w=1200&q=80"
//               alt="Modern kitchen finished with marble countertops"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { icon: Award,  title: "20+ Years Experience",   desc: "Over two decades of expertise in sourcing and supplying the finest natural stones." },
//               { icon: Shield, title: "Quality Guaranteed",     desc: "Every product is inspected by our dedicated team before being imported to the UK." },
//               { icon: Truck,  title: "Direct from Quarry",     desc: "We source directly from manufacturers and our own quarries — no middlemen." },
//               { icon: Leaf,   title: "Sustainable Sourcing",   desc: "Committed to responsible quarrying practices and reducing our environmental footprint." },
//             ].map(({ icon: Icon, title, desc }) => (
//               <div key={title} className="text-center">
//                 <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center mx-auto mb-4">
//                   <Icon size={22} className="text-stone-700" />
//                 </div>
//                 <h3 className="font-display font-semibold text-stone-900 mb-2">{title}</h3>
//                 <p className="text-sm text-stone-500 leading-relaxed">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA BANNER ────────────────────────────────────────────────────────── */}
//       <section className="py-20 bg-stone-900 relative overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-15"
//           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1761602866012-ae9f888255dc?w=1200&q=80')" }}
//         />
//         <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
//           <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
//             Ready to transform your space?
//           </h2>
//           <p className="text-stone-300 mb-10 leading-relaxed">
//             Book a visit to our showroom, request samples, or speak to one of our stone experts — we're here to help you find the perfect stone.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/contact" className="px-8 py-4 bg-white text-stone-900 font-medium text-sm rounded-lg hover:bg-stone-100 transition-colors">
//               Book a Visit
//             </Link>
//             <Link href="/products" className="px-8 py-4 border border-white/30 text-white text-sm rounded-lg hover:bg-white/10 transition-colors">
//               Browse Products
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }




// import Link from "next/link";
// import Image from "next/image";
// import { ArrowRight, Shield, Award, Truck, Leaf } from "lucide-react";
// import VisualizerSection from "./Visualizersection/page";
// import HeroVisualizer from "./HeroVisualizer/page";
// import { products } from "@/data";

// export default function HomePage() {
//   return (
//     <>
//       {/* ── HERO ──────────────────────────────────────────────────────────────── */}
//         <HeroVisualizer />
//       {/* <section className="relative min-h-[90vh] flex items-center justify-center bg-stone-900 overflow-hidden">
        
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-30"
//           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=1600&q=80')" }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/80" />

//         <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
//           <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-6">Natural Stone Supplier — UK</p>
//           <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
//             We take a piece of the earth,<br />
//             <span className="italic text-stone-300">and bring it into your home.</span>
//           </h1>
//           <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
//             Premium granite, marble, quartz and sandstone — sourced directly from manufacturers and delivered across the UK.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/products" className="px-8 py-4 bg-white text-stone-900 font-medium text-sm rounded-lg hover:bg-stone-100 transition-colors">
//               Explore Products
//             </Link>
//             <Link href="/#visualizer" className="px-8 py-4 border border-white/30 text-white text-sm rounded-lg hover:bg-white/10 transition-colors">
//               Try Visualizer →
//             </Link>
//           </div>
//         </div>

        
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400">
//           <span className="text-xs tracking-widest uppercase">Scroll</span>
//           <div className="w-px h-8 bg-stone-600 animate-pulse" />
//         </div>
//       </section> */}

//       {/* ── STATS STRIP ───────────────────────────────────────────────────────── */}
//       <section className="bg-stone-900 border-t border-stone-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//           {[
//             { stat: "20+",  label: "Years Experience" },
//             { stat: "500+", label: "Stone Varieties" },
//             { stat: "5000+", label: "Projects Completed" },
//             { stat: "UK",   label: "Nationwide Delivery" },
//           ].map(({ stat, label }) => (
//             <div key={label}>
//               <p className="font-display text-3xl text-white font-bold mb-1">{stat}</p>
//               <p className="text-xs text-stone-400 tracking-wide uppercase">{label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── OUR STORY ─────────────────────────────────────────────────────────── */}
//       <section className="py-20 bg-stone-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//           <div>
//             <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">Our Story</p>
//             <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-6 leading-tight">
//               Global Granite — A Legacy of Quality
//             </h2>
//             <p className="text-stone-600 leading-relaxed mb-4">
//               Your Granite is a leading supplier and importer of natural stone and stone products. We cater to the diverse demands of clients across the UK, respecting delivery deadlines and honouring our customers with quality products.
//             </p>
//             <p className="text-stone-600 leading-relaxed mb-8">
//               Our parent company in India processes all premium quality Indian stones through in-house manufacturing units. We own paving stone quarries in India and deliver direct containers at excellent prices — savings we pass on to you.
//             </p>
//             <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 hover:gap-3 transition-all">
//               Read our full story <ArrowRight size={16} />
//             </Link>
//           </div>
//           <div className="relative h-80 md:h-full min-h-[360px] rounded-2xl overflow-hidden shadow-xl">
//             <Image
//               src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
//               alt="Natural stone slabs"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* ── VISUALIZER ────────────────────────────────────────────────────────── */}
//       <VisualizerSection />

//       {/* ── FEATURED PRODUCTS ─────────────────────────────────────────────────── */}
//       <section className="py-20 bg-stone-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="flex items-end justify-between mb-12">
//             <div>
//               <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-2">Our Range</p>
//               <h2 className="font-display text-3xl md:text-4xl text-stone-900">Featured Products</h2>
//             </div>
//             <Link href="/products" className="hidden sm:inline-flex items-center gap-1 text-sm text-stone-600 hover:text-stone-900 transition-colors">
//               View all <ArrowRight size={15} />
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {products.slice(0, 6).map((p) => (
//               <Link
//                 key={p.id}
//                 href={`/products/${p.slug}`}
//                 className="group bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
//               >
//                 <div className="relative h-52 overflow-hidden">
//                   <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
//                   <div className="absolute top-3 left-3">
//                     <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-stone-700 text-xs font-medium rounded-full">
//                       {p.category}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-5">
//                   <h3 className="font-display text-stone-900 font-semibold mb-1">{p.name}</h3>
//                   <p className="text-sm text-stone-500 mb-3 leading-relaxed line-clamp-2">{p.tagline}</p>
//                   <div className="flex flex-wrap gap-1.5">
//                     {p.finish.slice(0, 3).map((f) => (
//                       <span key={f} className="px-2 py-0.5 bg-stone-100 text-stone-600 text-xs rounded">{f}</span>
//                     ))}
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           <div className="mt-10 text-center sm:hidden">
//             <Link href="/products" className="px-6 py-3 border border-stone-300 text-stone-700 text-sm rounded-lg hover:bg-stone-100 transition-colors">
//               View All Products
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── WHY CHOOSE US ─────────────────────────────────────────────────────── */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="text-center mb-14">
//             <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">Why Choose Us</p>
//             <h2 className="font-display text-3xl md:text-4xl text-stone-900">Our Quality Promise</h2>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { icon: Award,  title: "20+ Years Experience",   desc: "Over two decades of expertise in sourcing and supplying the finest natural stones." },
//               { icon: Shield, title: "Quality Guaranteed",     desc: "Every product is inspected by our dedicated team before being imported to the UK." },
//               { icon: Truck,  title: "Direct from Quarry",     desc: "We source directly from manufacturers and our own quarries — no middlemen." },
//               { icon: Leaf,   title: "Sustainable Sourcing",   desc: "Committed to responsible quarrying practices and reducing our environmental footprint." },
//             ].map(({ icon: Icon, title, desc }) => (
//               <div key={title} className="text-center">
//                 <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center mx-auto mb-4">
//                   <Icon size={22} className="text-stone-700" />
//                 </div>
//                 <h3 className="font-display font-semibold text-stone-900 mb-2">{title}</h3>
//                 <p className="text-sm text-stone-500 leading-relaxed">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA BANNER ────────────────────────────────────────────────────────── */}
//       <section className="py-20 bg-stone-900 relative overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-15"
//           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80')" }}
//         />
//         <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
//           <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
//             Ready to transform your space?
//           </h2>
//           <p className="text-stone-300 mb-10 leading-relaxed">
//             Book a visit to our showroom, request samples, or speak to one of our stone experts — we're here to help you find the perfect stone.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/contact" className="px-8 py-4 bg-white text-stone-900 font-medium text-sm rounded-lg hover:bg-stone-100 transition-colors">
//               Book a Visit
//             </Link>
//             <Link href="/products" className="px-8 py-4 border border-white/30 text-white text-sm rounded-lg hover:bg-white/10 transition-colors">
//               Browse Products
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }





// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
