import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = { title: "Contact Us", description: "Get in touch with Your Granite — book a showroom visit or request a quote." };

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 py-20 px-4 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-stone-400 mb-3">Get In Touch</p>
        <h1 className="font-display text-4xl md:text-5xl text-white mb-4">Contact Us</h1>
        <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
          Visit our showroom, request a quote, or speak to one of our stone experts. We're here to help.
        </p>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Form */}
          <div className="bg-stone-50 rounded-2xl border border-stone-200 p-8">
            <h2 className="font-display text-2xl text-stone-900 mb-6">Send a Message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-stone-600 font-medium mb-1.5" htmlFor="name">Full Name *</label>
                  <input id="name" type="text" placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm bg-white focus:outline-none focus:border-stone-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-stone-600 font-medium mb-1.5" htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" placeholder="+44 1234 567890"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm bg-white focus:outline-none focus:border-stone-400 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-stone-600 font-medium mb-1.5" htmlFor="email">Email Address *</label>
                <input id="email" type="email" placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm bg-white focus:outline-none focus:border-stone-400 transition-colors" />
              </div>
              <div>
                <label className="block text-xs text-stone-600 font-medium mb-1.5" htmlFor="subject">Enquiry Type</label>
                <select id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm bg-white focus:outline-none focus:border-stone-400 transition-colors text-stone-700">
                  <option>General Enquiry</option>
                  <option>Request a Quote</option>
                  <option>Request Samples</option>
                  <option>Book a Showroom Visit</option>
                  <option>Technical Question</option>
                  <option>Warranty Claim</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-stone-600 font-medium mb-1.5" htmlFor="message">Message *</label>
                <textarea id="message" rows={5} placeholder="Tell us about your project or enquiry..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm bg-white focus:outline-none focus:border-stone-400 transition-colors resize-none" />
              </div>
              <button type="submit"
                className="w-full py-4 bg-stone-900 text-white text-sm font-medium rounded-xl hover:bg-stone-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact details */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl text-stone-900 mb-6">Our Details</h2>
              <ul className="space-y-5">
                {[
                  { icon: MapPin, label: "Head Office", val: "The Landscape Centre, Leydenhatch Lane, Swanley, Kent BR8 7PS" },
                  { icon: Phone,  label: "Phone",       val: "+44 1322 660550" },
                  { icon: Mail,   label: "Email",       val: "sales@yourgranite.co.uk" },
                  { icon: Clock,  label: "Showroom Hours", val: "Mon–Fri: 9am–5pm\nSat: 9am–1pm\nSun: Closed" },
                ].map(({ icon: Icon, label, val }) => (
                  <li key={label} className="flex gap-4">
                    <div className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={17} className="text-stone-600" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 mb-1 uppercase tracking-wide font-medium">{label}</p>
                      <p className="text-sm text-stone-700 whitespace-pre-line">{val}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-stone-200 h-64 bg-stone-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5!2d0.17!3d51.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDIz!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
