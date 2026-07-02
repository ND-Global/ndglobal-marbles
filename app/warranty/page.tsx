import type { Metadata } from "next";
import { ShieldCheck, AlertCircle } from "lucide-react";

export const metadata: Metadata = { title: "Warranty", description: "Warranty information for Your Granite products." };

export default function WarrantyPage() {
  return (
    <>
      <section className="bg-stone-900 py-20 px-4 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-stone-400 mb-3">Our Guarantee</p>
        <h1 className="font-display text-4xl md:text-5xl text-white mb-4">Warranty</h1>
        <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
          We stand behind the quality of every product we supply. Here's what our warranty covers.
        </p>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
          {/* Coverage */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck size={24} className="text-green-700" />
              <h2 className="font-display text-2xl text-stone-900">What's Covered</h2>
            </div>
            <ul className="space-y-3">
              {[
                "Manufacturing defects present at the time of delivery",
                "Significant colour variation from samples approved prior to order",
                "Structural integrity failures under normal use conditions",
                "Breakage during transit if reported within 48 hours of delivery",
                "Incorrect sizing if outside agreed tolerances (±2mm)",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-stone-700 leading-relaxed">
                  <ShieldCheck size={16} className="text-green-600 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle size={24} className="text-amber-700" />
              <h2 className="font-display text-2xl text-stone-900">Exclusions</h2>
            </div>
            <ul className="space-y-3">
              {[
                "Natural variations in colour, veining, and patterning — these are characteristics of natural stone",
                "Damage caused by improper installation, cutting, or handling on site",
                "Staining or etching resulting from improper maintenance or failure to seal",
                "Chips or cracks caused by impact, misuse, or overloading",
                "Damage caused by exposure to chemicals not recommended for natural stone",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-stone-700 leading-relaxed">
                  <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Period */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8">
            <h2 className="font-display text-2xl text-stone-900 mb-4">Warranty Period</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { period: "12 months",  label: "Indoor Granite & Marble" },
                { period: "12 months",  label: "Quartz & Porcelain" },
                { period: "6 months",   label: "Outdoor Sandstone & Paving" },
              ].map(({ period, label }) => (
                <div key={label} className="text-center p-4 bg-white rounded-xl border border-stone-100">
                  <p className="font-display text-3xl text-stone-900 font-bold mb-1">{period}</p>
                  <p className="text-xs text-stone-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How to claim */}
          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
            <h2 className="font-display text-2xl text-stone-900 mb-4">How to Make a Claim</h2>
            <ol className="space-y-3">
              {[
                "Contact us within the warranty period at sales@yourgranite.co.uk or call +44 1322 660550.",
                "Provide your order number, date of purchase, and a description of the defect.",
                "Submit clear photographs showing the issue.",
                "Our team will assess the claim and respond within 5 business days.",
                "Approved claims will be resolved by replacement, repair, or refund at our discretion.",
              ].map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-stone-700 leading-relaxed">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-stone-200 text-stone-600 text-xs flex items-center justify-center font-bold mt-0.5">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
