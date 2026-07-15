import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data";
import { CheckCircle2, ArrowLeft } from "lucide-react";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return { title: product.name, description: product.tagline };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-stone-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-stone-500">
          <Link href="/" className="hover:text-stone-800 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-stone-800 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-stone-800">{product.name}</span>
        </div>
      </div>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Image + stone description */}
          <div>
            <div
              className="relative h-[420px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg"
              style={{ backgroundColor: product.color }}
            >
              <Image src={product.image} alt={product.name} fill className="object-cover" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 bg-white/95 text-stone-700 text-xs font-medium rounded-full shadow-sm">
                  {product.category}
                </span>
              </div>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed mt-3">
              {product.description}
            </p>
          </div>

          {/* Details */}
          <div>
            <Link href="/products" className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-800 mb-5 transition-colors">
              <ArrowLeft size={13} /> Back to Products
            </Link>
            <h1 className="font-display text-3xl md:text-4xl text-stone-900 mb-2">{product.name}</h1>
            <p className="text-stone-500 text-base mb-6 italic">{product.tagline}</p>

            {/* Details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              {[
                { label: "Finishes",   items: product.finish },
                { label: "Sizes",      items: product.sizes  },
                { label: "Ideal Uses", items: product.uses   },
              ].map(({ label, items }) => (
                <div key={label} className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 font-medium">{label}</p>
                  <ul className="space-y-1.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-stone-700">
                        <CheckCircle2 size={13} className="text-stone-400 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* See It In Your Home + home description */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 font-medium">
                See It In Your Home
              </p>
              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-stone-100 shadow-sm mb-3">
                <Image
                  src={product.homeImage}
                  alt={`${product.name} installed in a home`}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-stone-500 leading-relaxed">
                {product.homeText}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="flex-1 py-3.5 bg-stone-900 text-white text-sm text-center rounded-xl hover:bg-stone-700 transition-colors font-medium"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact"
                className="flex-1 py-3.5 border border-stone-300 text-stone-700 text-sm text-center rounded-xl hover:bg-stone-50 transition-colors"
              >
                Request a Sample
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 bg-stone-50 border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-2xl text-stone-900 mb-8">More {product.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.id} href={`/products/${r.slug}`} className="group bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative h-44 overflow-hidden" style={{ backgroundColor: r.color }}>
                    <Image src={r.image} alt={r.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <p className="font-display font-semibold text-stone-900 text-sm mb-1">{r.name}</p>
                    <p className="text-xs text-stone-500">{r.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}



// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { products } from "@/data";
// import { CheckCircle2, ArrowLeft } from "lucide-react";

// interface Props { params: Promise<{ slug: string }> }

// export async function generateStaticParams() {
//   return products.map((p) => ({ slug: p.slug }));
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { slug } = await params;
//   const product = products.find((p) => p.slug === slug);
//   if (!product) return {};
//   return { title: product.name, description: product.tagline };
// }

// export default async function ProductPage({ params }: Props) {
//   const { slug } = await params;
//   const product = products.find((p) => p.slug === slug);
//   if (!product) notFound();

//   const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

//   return (
//     <>
//       {/* Breadcrumb */}
//       <div className="bg-white border-b border-stone-200 py-3 px-4">
//         <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-stone-500">
//           <Link href="/" className="hover:text-stone-800 transition-colors">Home</Link>
//           <span>/</span>
//           <Link href="/products" className="hover:text-stone-800 transition-colors">Products</Link>
//           <span>/</span>
//           <span className="text-stone-800">{product.name}</span>
//         </div>
//       </div>

//       <section className="py-14 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
//           {/* Image */}
//           <div className="relative h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-lg">
//             <Image src={product.image} alt={product.name} fill className="object-cover" />
//             <div className="absolute top-4 left-4">
//               <span className="px-3 py-1.5 bg-white/95 text-stone-700 text-xs font-medium rounded-full shadow-sm">
//                 {product.category}
//               </span>
//             </div>
//           </div>

//           {/* Details */}
//           <div>
//             <Link href="/products" className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-800 mb-5 transition-colors">
//               <ArrowLeft size={13} /> Back to Products
//             </Link>
//             <h1 className="font-display text-3xl md:text-4xl text-stone-900 mb-2">{product.name}</h1>
//             <p className="text-stone-500 text-base mb-6 italic">{product.tagline}</p>
//             <p className="text-stone-600 leading-relaxed mb-8">{product.description}</p>

//             {/* Details grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
//               {[
//                 { label: "Finishes",    items: product.finish },
//                 { label: "Sizes",       items: product.sizes  },
//                 { label: "Ideal Uses",  items: product.uses   },
//               ].map(({ label, items }) => (
//                 <div key={label} className="bg-stone-50 rounded-xl p-4 border border-stone-100">
//                   <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 font-medium">{label}</p>
//                   <ul className="space-y-1.5">
//                     {items.map((item) => (
//                       <li key={item} className="flex items-center gap-2 text-sm text-stone-700">
//                         <CheckCircle2 size={13} className="text-stone-400 shrink-0" /> {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3">
//               <Link
//                 href="/contact"
//                 className="flex-1 py-3.5 bg-stone-900 text-white text-sm text-center rounded-xl hover:bg-stone-700 transition-colors font-medium"
//               >
//                 Get a Quote
//               </Link>
//               <Link
//                 href="/contact"
//                 className="flex-1 py-3.5 border border-stone-300 text-stone-700 text-sm text-center rounded-xl hover:bg-stone-50 transition-colors"
//               >
//                 Request a Sample
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Related */}
//       {related.length > 0 && (
//         <section className="py-16 bg-stone-50 border-t border-stone-200">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6">
//             <h2 className="font-display text-2xl text-stone-900 mb-8">More {product.category}</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//               {related.map((r) => (
//                 <Link key={r.id} href={`/products/${r.slug}`} className="group bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-lg transition-all">
//                   <div className="relative h-44 overflow-hidden">
//                     <Image src={r.image} alt={r.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
//                   </div>
//                   <div className="p-4">
//                     <p className="font-display font-semibold text-stone-900 text-sm mb-1">{r.name}</p>
//                     <p className="text-xs text-stone-500">{r.tagline}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}
//     </>
//   );
// }