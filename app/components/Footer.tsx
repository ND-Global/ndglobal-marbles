import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-white rounded-sm flex items-center justify-center">
                <span className="text-stone-900 font-display font-bold text-base">G</span>
              </div>
              <div>
                <p className="font-display text-white font-semibold text-sm">Your Granite</p>
                <p className="text-[10px] text-stone-500 tracking-widest uppercase">Natural Stone Supplier</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 mb-5">
              Leading supplier and importer of premium natural stone and quartz products across the UK. Over 20 years of experience.
            </p>
            {/* <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded border border-stone-700 flex items-center justify-center hover:border-stone-400 hover:text-white transition-colors">
                <Instagram size={15} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded border border-stone-700 flex items-center justify-center hover:border-stone-400 hover:text-white transition-colors">
                <Facebook size={15} />
              </a>
            </div> */}
 <div className="flex gap-3">
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded border border-stone-700 flex items-center justify-center hover:border-stone-400 hover:text-white transition-colors"
  >
    <FaInstagram size={15} />
  </a>

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded border border-stone-700 flex items-center justify-center hover:border-stone-400 hover:text-white transition-colors"
  >
    <FaFacebookF size={15} />
  </a>
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "Visualizer", href: "/#visualizer" },
                { label: "About Us", href: "/about" },
                { label: "Care & Maintenance", href: "/care" },
                { label: "Sustainability", href: "/sustainability" },
                { label: "Warranty", href: "/warranty" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-stone-400 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Products</h4>
            <ul className="space-y-2.5 text-sm">
              {["Granite", "Marble", "Quartz", "Sandstone", "Porcelain", "Outdoor Tiles"].map((p) => (
                <li key={p}>
                  <Link href="/products" className="text-stone-400 hover:text-white transition-colors">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-stone-500" />
                <span className="text-stone-400">The Landscape Centre, Leydenhatch Lane, Swanley, Kent BR8 7PS</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="shrink-0 text-stone-500" />
                <a href="tel:+441322660550" className="text-stone-400 hover:text-white transition-colors">+44 1322 660550</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="shrink-0 text-stone-500" />
                <a href="mailto:sales@yourgranite.co.uk" className="text-stone-400 hover:text-white transition-colors break-all">sales@yourgranite.co.uk</a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-block px-5 py-2.5 border border-stone-600 text-white text-sm rounded hover:bg-stone-800 transition-colors"
            >
              Book a Visit →
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-2 text-xs text-stone-600">
          <p>© {new Date().getFullYear()} Your Granite Ltd. All rights reserved.</p>
          <p>Company Registered in England & Wales: 08249383</p>
        </div>
      </div>
    </footer>
  );
}