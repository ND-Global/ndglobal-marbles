import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "About Us", description: "Learn about Your Granite — 20+ years of natural stone expertise." };

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80')" }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-stone-400 mb-3">Who We Are</p>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4">About Your Granite</h1>
          <p className="text-stone-300 text-sm leading-relaxed">
            A team of passionate stone experts with over 20 years of experience sourcing and supplying premium natural stone across the UK.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=80" alt="Stone quarry" fill className="object-cover" />
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">Our Story</p>
            <h2 className="font-display text-3xl text-stone-900 mb-6">From the Earth to Your Home</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Your Granite is a leading supplier and importer of a variety of stones and stone products. The company caters to the diverse demands of clients across the UK, respecting delivery deadlines and honouring customers with quality products.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Our wide product range is available in slabs and cut sizes, in different styles, sizes, and finishes. Our products are used everywhere from kitchens, bathrooms, and gardens to large commercial projects.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Your Granite has its own in-house expertise and resources in sourcing material direct from manufacturers. Our parent company in India processes all premium quality Indian stones through in-house manufacturing units. We also own paving stone quarries in India and deliver direct containers at excellent prices.
            </p>
          </div>
        </div>
      </section>

      {/* Quality promise */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">Our Commitment</p>
            <h2 className="font-display text-3xl text-stone-900 mb-6">Quality Promise</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Nature has mesmerised and inspired us with its beauty of creativity since ages. Stones are the natural solid formation offered by nature and are the foundation of every physical world created by man.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Every bit of stone is different — nature's artistry has led to patterns that will last forever in their uniqueness. Your Granite understands the significance of this and bears responsibility in catalysing steadfast foundations.
            </p>
            <p className="text-stone-600 leading-relaxed">
              With a desire to help you adapt nature's creation into your own, we carefully source the best quality stone. With over 20 years of experience and true passion for quality, our dedicated teams inspect and ensure premium standards for all products before they are imported to the UK.
            </p>
          </div>
          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Stone quality" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Team values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">Our Values</p>
          <h2 className="font-display text-3xl text-stone-900 mb-14">What Drives Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Direct Sourcing",  desc: "We source directly from quarries and manufacturers in India, cutting out the middleman and passing the savings on to you." },
              { title: "Expert Inspection", desc: "Every product is inspected by our team of experts before being shipped to the UK, ensuring consistent quality every time." },
              { title: "Customer First",   desc: "Our team of dedicated professionals are committed to building strong relationships with every customer through excellent service." },
            ].map(({ title, desc }) => (
              <div key={title} className="p-8 bg-stone-50 rounded-2xl border border-stone-100">
                <h3 className="font-display font-semibold text-stone-900 text-lg mb-3">{title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-900 text-center px-4">
        <h2 className="font-display text-3xl text-white mb-4">Get in touch with our team</h2>
        <p className="text-stone-300 text-sm mb-8 max-w-md mx-auto">Whether you need product advice, a quote, or just want to visit our showroom — we're always happy to help.</p>
        <Link href="/contact" className="px-8 py-4 bg-white text-stone-900 font-medium text-sm rounded-lg hover:bg-stone-100 transition-colors">
          Contact Us Today
        </Link>
      </section>
    </>
  );
}
