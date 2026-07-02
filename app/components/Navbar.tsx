"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { navLinks } from "@/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top contact bar */}
      <div className="bg-stone-900 text-stone-400 text-xs py-2 px-4 hidden md:flex justify-end gap-8 items-center">
        <a href="tel:+441322660550" className="flex items-center gap-1.5 hover:text-white transition-colors">
          <Phone size={11} /> +44 1322 660550
        </a>
        <a href="mailto:sales@yourgranite.co.uk" className="flex items-center gap-1.5 hover:text-white transition-colors">
          <Mail size={11} /> sales@yourgranite.co.uk
        </a>
      </div>

      {/* Main nav */}
      <div className="bg-white/98 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 bg-stone-900 rounded-sm flex items-center justify-center">
              <span className="text-white font-display font-bold text-base">G</span>
            </div>
            <div className="leading-none">
              <p className="font-display font-semibold text-stone-900 text-sm">Your Granite</p>
              <p className="text-[10px] text-stone-400 tracking-[0.15em] uppercase mt-0.5">Natural Stone Supplier</p>
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded transition-all"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2 bg-stone-900 text-white text-sm rounded hover:bg-stone-700 transition-colors font-medium"
            >
              Book a Visit
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded text-stone-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-b border-stone-200 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm text-stone-700 hover:bg-stone-50 rounded-lg"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-2.5 bg-stone-900 text-white text-sm text-center rounded-lg font-medium"
            >
              Book a Visit
            </Link>
            <div className="mt-3 pt-3 border-t border-stone-100 flex flex-col gap-2 text-xs text-stone-500">
              <a href="tel:+441322660550" className="flex items-center gap-2"><Phone size={12} /> +44 1322 660550</a>
              <a href="mailto:sales@yourgranite.co.uk" className="flex items-center gap-2"><Mail size={12} /> sales@yourgranite.co.uk</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}