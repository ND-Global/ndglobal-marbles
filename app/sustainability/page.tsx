import type { Metadata } from "next";
import { Leaf, Recycle, Sun, Globe } from "lucide-react";

export const metadata: Metadata = { title: "Sustainability", description: "Our commitment to responsible and sustainable stone sourcing." };

export default function SustainabilityPage() {
  return (
    <>
      <section className="bg-stone-900 py-20 px-4 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-stone-400 mb-3">Our Commitment</p>
        <h1 className="font-display text-4xl md:text-5xl text-white mb-4">Sustainability</h1>
        <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
          We believe beautiful spaces shouldn't come at the expense of the planet. Here's what we're doing about it.
        </p>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              { icon: Leaf,    title: "Responsible Quarrying",   desc: "We work exclusively with quarry partners who follow ethical extraction practices, minimising land disturbance and rehabilitating quarry sites after extraction." },
              { icon: Globe,   title: "Reduced Carbon Shipping", desc: "By shipping direct containers from our parent company in India, we reduce the number of supply chain intermediaries and associated transport emissions." },
              { icon: Recycle, title: "Zero Waste Processing",   desc: "Stone offcuts and waste material from our manufacturing process are repurposed as aggregate for construction, ensuring nothing goes to landfill." },
              { icon: Sun,     title: "Solar-Powered Facilities",desc: "Our warehousing and showroom facilities use solar energy to reduce our dependency on fossil fuels and lower our operational carbon footprint." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-5 p-6 bg-stone-50 rounded-2xl border border-stone-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-green-700" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-stone-900 mb-2">{title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl text-stone-900 mb-6">Why Natural Stone is Sustainable</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Natural stone is one of the most sustainable building materials available. It requires no manufacturing energy beyond extraction, has an indefinite lifespan, and can be recycled at end of life.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Unlike man-made alternatives that may need replacing every 10–15 years, a well-maintained granite worktop or marble floor can last for centuries — making it one of the lowest lifecycle-impact choices you can make for your home.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
