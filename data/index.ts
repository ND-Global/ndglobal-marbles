import { FloorOption, SwatchOption, TableOption, Product, NavLink } from "@/types";

// ─── Visualizer Options ───────────────────────────────────────────────────────

export const floorOptions: FloorOption[] = [
  { label: "Warm Wood",     color: "#C8A882", lineColor: "#7a5c3a" },
  { label: "Dark Wood",     color: "#6B4F3A", lineColor: "#3d2a1a" },
  { label: "Light Oak",     color: "#DEB887", lineColor: "#a0785a" },
  { label: "Marble White",  color: "#E8E4E0", lineColor: "#b0a8a0" },
  { label: "Grey Tile",     color: "#A8A8A8", lineColor: "#787878" },
  { label: "Dark Tile",     color: "#4A4A4A", lineColor: "#2a2a2a" },
  { label: "Sandstone",     color: "#D2B48C", lineColor: "#8B7355" },
  { label: "Black Granite", color: "#2C2C2C", lineColor: "#1a1a1a" },
];

export const wallOptions: SwatchOption[] = [
  { label: "Cream",       color: "#E8E0D5" },
  { label: "Sage Green",  color: "#C4D4BC" },
  { label: "Dusty Blue",  color: "#B8C8D8" },
  { label: "Warm Grey",   color: "#C8C4BC" },
  { label: "Terracotta",  color: "#D4A898" },
  { label: "Deep Teal",   color: "#5C8A88" },
  { label: "Ivory",       color: "#F5F0E8" },
  { label: "Charcoal",    color: "#4A4A52" },
];

export const tableOptions: TableOption[] = [
  { label: "Walnut",      color: "#7a5c3a", legColor: "#5a3e28" },
  { label: "Oak",         color: "#C0956A", legColor: "#a07040" },
  { label: "Black",       color: "#2a2a2a", legColor: "#111111" },
  { label: "White",       color: "#E8E4E0", legColor: "#c0bcb8" },
  { label: "Teak",        color: "#9A6B40", legColor: "#6a4820" },
  { label: "Glass",       color: "#B8D8E8", legColor: "#8aa8c0" },
  { label: "Marble Top",  color: "#ECEAE6", legColor: "#222222" },
  { label: "Dark Walnut", color: "#4A3020", legColor: "#2a1a10" },
];

// ─── Products ─────────────────────────────────────────────────────────────────

export const products: Product[] = [
  {
    id: "1",
    slug: "black-galaxy-granite",
    name: "Black Galaxy Granite",
    category: "Granite",
    tagline: "Bold depth with golden star-like speckles",
    description:
      "Black Galaxy Granite is one of the most sought-after granites in the world. Its stunning black background is accented by bronze or golden speckles, creating a dramatic and luxurious appearance. Sourced directly from Andhra Pradesh, India, it is perfect for kitchen countertops, bathroom vanities, and flooring.",
    finish: ["Polished", "Honed", "Brushed", "Leather"],
    sizes: ["300x300", "600x600", "600x900", "Custom Slabs"],
    uses: ["Kitchen Countertops", "Bathroom Vanities", "Flooring", "Wall Cladding"],
    image: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&q=80",
    color: "#1a1a1a",
  },
  {
    id: "2",
    slug: "calacatta-marble",
    name: "Calacatta Marble",
    category: "Marble",
    tagline: "Timeless Italian elegance with dramatic veining",
    description:
      "Calacatta Marble is the pinnacle of luxury natural stone. Quarried in Carrara, Italy, it features a brilliant white background with bold grey and gold veining. Each slab is completely unique — a true work of nature. Ideal for statement kitchen islands, bathrooms, and fireplaces.",
    finish: ["Polished", "Honed", "Brushed"],
    sizes: ["600x600", "800x800", "Custom Slabs"],
    uses: ["Kitchen Islands", "Bathroom Floors", "Fireplace Surrounds", "Feature Walls"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    color: "#e8e4de",
  },
  {
    id: "3",
    slug: "indian-sandstone",
    name: "Indian Sandstone",
    category: "Sandstone",
    tagline: "Natural warmth for gardens and outdoor spaces",
    description:
      "Our Indian Sandstone is sourced directly from our own quarries in Rajasthan, India, ensuring the best quality at competitive prices. With its warm earthy tones and natural riven surface, it is the perfect choice for patios, garden paths, driveways, and pool surrounds.",
    finish: ["Natural Riven", "Sawn", "Tumbled", "Calibrated"],
    sizes: ["600x300", "600x600", "900x600", "Random Paving"],
    uses: ["Patios", "Garden Paths", "Driveways", "Pool Surrounds"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    color: "#c4a882",
  },
  {
    id: "4",
    slug: "absolute-black-granite",
    name: "Absolute Black Granite",
    category: "Granite",
    tagline: "Pure, consistent jet-black for a modern statement",
    description:
      "Absolute Black Granite is exactly what the name suggests — pure, deep, consistent black. No patterns, no variation. This makes it perfect for contemporary and minimalist designs where a clean, bold aesthetic is required. Extremely hard and durable.",
    finish: ["Polished", "Honed", "Leather", "Flamed"],
    sizes: ["300x300", "600x600", "Custom Slabs"],
    uses: ["Countertops", "Flooring", "Stairs", "Commercial Spaces"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    color: "#111111",
  },
  {
    id: "5",
    slug: "kashmir-white-granite",
    name: "Kashmir White Granite",
    category: "Granite",
    tagline: "Soft light grey with red and black mineral patterns",
    description:
      "Kashmir White Granite features a light grey base adorned with red garnets, black hornblende, and silver mica. This versatile granite works beautifully with both light and dark cabinetry. A perennial favourite for kitchen worktops across the UK.",
    finish: ["Polished", "Honed"],
    sizes: ["600x600", "600x900", "Custom Slabs"],
    uses: ["Kitchen Worktops", "Bathroom Counters", "Flooring", "Stairs"],
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    color: "#d6d0c8",
  },
  {
    id: "6",
    slug: "outdoor-porcelain",
    name: "Outdoor Porcelain Tiles",
    category: "Porcelain",
    tagline: "Low maintenance, frost-proof beauty for exteriors",
    description:
      "Our outdoor porcelain tiles combine the beauty of natural stone with the practicality of engineered materials. Frost-proof, slip-resistant, and virtually maintenance-free, they are ideal for patios, balconies, and commercial outdoor spaces.",
    finish: ["Matt Anti-Slip", "Structured", "Stone Effect"],
    sizes: ["600x600", "900x600", "1200x600", "20mm Thick"],
    uses: ["Patios", "Balconies", "Commercial Exteriors", "Pool Areas"],
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=80",
    color: "#b8b0a8",
  },
];

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { label: "Home",            href: "/" },
  { label: "Products",        href: "/products" },
  { label: "Visualizer",      href: "/#visualizer" },
  { label: "Care & Maintenance", href: "/care" },
  { label: "Sustainability",  href: "/sustainability" },
  { label: "Warranty",        href: "/warranty" },
  { label: "About",           href: "/about" },
  { label: "Contact",         href: "/contact" },
];

// ─── Categories ───────────────────────────────────────────────────────────────

export const categoryList = [
  { name: "Granite",    description: "Natural igneous rock — extremely hard, heat resistant." },
  { name: "Marble",     description: "Metamorphic stone with unique veining patterns." },
  { name: "Sandstone",  description: "Warm, natural tones — ideal for outdoor use." },
  { name: "Porcelain",  description: "Engineered tiles — frost-proof and low maintenance." },
  { name: "Quartz",     description: "Man-made composite — consistent colour, non-porous." },
];
