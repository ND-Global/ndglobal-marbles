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
  // ── Existing products ──────────────────────────────────────────────────────
 {
    id: "7",
    slug: "statuario",
    name: "Statuario",
    category: "Imported Marble",
    tagline: "Classic white marble with bold grey veining",
    description:
      "Statuario is a timeless white marble known for its dramatic, bold grey veining set against a bright white background — a favourite for feature walls and premium flooring.",
    homeText:
      "In a home, Statuario tends to become the room's focal point — laid as flooring it opens up a space with light, and as a feature wall behind a bed or sofa, its bold veins add a sculptural, gallery-like presence.",
    finish: ["Polished", "Honed"],
    sizes: ["600x600", "600x1200", "Custom Slabs"],
    uses: ["Flooring", "Wall Cladding", "Countertops"],
    image: "/staturaio.png",
    homeImage: "/home/satatuariohome.png",
    color: "#e8e6e2",
  },
  {
    id: "2",
    slug: "calacatta-marble",
    name: "Calacatta Marble",
    category: "Marble",
    tagline: "Timeless Italian elegance with dramatic veining",
    description:
      "Calacatta Marble is the pinnacle of luxury natural stone. Quarried in Carrara, Italy, it features a brilliant white background with bold grey and gold veining. Each slab is completely unique — a true work of nature. Ideal for statement kitchen islands, bathrooms, and fireplaces.",
    homeText:
      "Installed on a kitchen island or bathroom floor, Calacatta Marble turns everyday spaces into something gallery-like — its bold veining reads as art, especially against matte black fixtures or brushed brass hardware.",
    finish: ["Polished", "Honed", "Brushed"],
    sizes: ["600x600", "800x800", "Custom Slabs"],
    uses: ["Kitchen Islands", "Bathroom Floors", "Fireplace Surrounds", "Feature Walls"],
    image: "/tiles/table/calacatta.png",
    homeImage: "/home/calacatta-marblhome.png",
    gallery: ["/tiles/floor/dark-marble.png", "/tiles/stairs/beige-marble.png"],
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
    homeText:
      "Laid across a patio or garden path, Indian Sandstone blends naturally into outdoor greenery — its riven texture stays cool underfoot and grips well even when wet, making it a practical, good-looking choice for everyday outdoor living.",
    finish: ["Natural Riven", "Sawn", "Tumbled", "Calibrated"],
    sizes: ["600x300", "600x600", "900x600", "Random Paving"],
    uses: ["Patios", "Garden Paths", "Driveways", "Pool Surrounds"],
    image: "/tiles/stairs/cream-sandstone.png",
    homeImage: "/home/indian-sandstonehome.png",
    gallery: ["/tiles/floor/grey-sandstone.png"],
    color: "#c4a882",
  },
  {
    id: "8",
    slug: "calacatta-gold",
    name: "Calacatta Gold",
    category: "Imported Marble",
    tagline: "Elegant white marble with golden veining",
    description:
      "Calacatta Gold pairs a soft white base with rich golden veins, bringing warmth and luxury to any interior — ideal for statement kitchens and bathrooms.",
    homeText:
      "In warmly lit interiors, Calacatta Gold's golden veining glows softly against white cabinetry or brass fittings, making it a natural choice for kitchens and bathrooms that lean into a warm, luxurious feel.",
    finish: ["Polished"],
    sizes: ["600x1200", "Custom Slabs"],
    uses: ["Kitchen Tops", "Wall Cladding", "Living Room"],
    image: "/calacattagold.png",
    homeImage: "/home/calacattagoldhome.png",
    color: "#eee7da",
  },
  {
    id: "4",
    slug: "absolute-black-granite",
    name: "Absolute Black Granite",
    category: "Granite",
    tagline: "Pure, consistent jet-black for a modern statement",
    description:
      "Absolute Black Granite is exactly what the name suggests — pure, deep, consistent black. No patterns, no variation. This makes it perfect for contemporary and minimalist designs where a clean, bold aesthetic is required. Extremely hard and durable.",
    homeText:
      "In a minimalist home, Absolute Black Granite disappears into the background in the best way — a flat, uninterrupted black surface that lets furniture, lighting, and greenery stand out, commonly used for sleek kitchen counters and modern staircases.",
    finish: ["Polished", "Honed", "Leather", "Flamed"],
    sizes: ["300x300", "600x600", "Custom Slabs"],
    uses: ["Countertops", "Flooring", "Stairs", "Commercial Spaces"],
    image: "/tiles/stairs/grey-granite.png",
    homeImage: "/home/absolute-black-granitehome.png",
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
    homeText:
      "On a kitchen worktop, Kashmir White Granite quietly does the heavy lifting — its flecked pattern hides everyday marks well, and it pairs equally well with white shaker cabinets or dark wood, which is why it remains a go-to for busy family kitchens.",
    finish: ["Polished", "Honed"],
    sizes: ["600x600", "600x900", "Custom Slabs"],
    uses: ["Kitchen Worktops", "Bathroom Counters", "Flooring", "Stairs"],
    image: "/tiles/floor/white-granite.png",
    homeImage: "/home/white-granitehome.png",
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
    homeText:
      "Across a balcony or garden patio, these porcelain tiles hold their look through every season — no staining, no sealing, and slip resistance that makes them safe for barefoot summer evenings and rainy days alike.",
    finish: ["Matt Anti-Slip", "Structured", "Stone Effect"],
    sizes: ["600x600", "900x600", "1200x600", "20mm Thick"],
    uses: ["Patios", "Balconies", "Commercial Exteriors", "Pool Areas"],
    image: "/tiles/floor/beige-marble.png",
    homeImage: "/home/beige-marblehome.png",
    gallery: ["/tiles/table/brown-marble.png"],
    color: "#b8b0a8",
  },

  // ── Imported Marbles ────────────────────────────────────────────────────────
 
    {
    id: "1",
    slug: "black-galaxy-granite",
    name: "Black Galaxy Granite",
    category: "Granite",
    tagline: "Bold depth with golden star-like speckles",
    description:
      "Black Galaxy Granite is one of the most sought-after granites in the world. Its stunning black background is accented by bronze or golden speckles, creating a dramatic and luxurious appearance. Sourced directly from Andhra Pradesh, India, it is perfect for kitchen countertops, bathroom vanities, and flooring.",
    homeText:
      "In a home, Black Galaxy Granite anchors a space with quiet drama — under warm pendant lighting, its golden flecks catch the light like a night sky, making it a favourite for kitchen islands and bar counters that want to feel like the centrepiece of the room.",
    finish: ["Polished", "Honed", "Brushed", "Leather"],
    sizes: ["300x300", "600x600", "600x900", "Custom Slabs"],
    uses: ["Kitchen Countertops", "Bathroom Vanities", "Flooring", "Wall Cladding"],
    image: "/tiles/table/black-galaxy.png",
    homeImage: "/home/black-galaxyhome.png",
    gallery: ["/tiles/stairs/grey-granite.png"],
    color: "#1a1a1a",
  },
  
  {
    id: "9",
    slug: "carrara-white",
    name: "Carrara White",
    category: "Imported Marble",
    tagline: "Soft white marble with subtle grey patterns",
    description:
      "Carrara White is a gentle, understated marble with soft grey feathering across a white base — versatile enough for almost any space in the home.",
    homeText:
      "In living spaces, Carrara White brings a soft, airy brightness — its gentle grey veining works beautifully with both warm wood accents and cool metallic fixtures, making rooms feel open and effortlessly elegant.",
    finish: ["Polished", "Matte"],
    sizes: ["600x600", "800x800", "Custom Slabs"],
    uses: ["Flooring", "Bathroom", "Wall"],
    image: "/carrara.png",
    homeImage: "/home/carrarahome.png",
    color: "#e5e4e0",
  },
  {
    id: "10",
    slug: "nero-marquina",
    name: "Nero Marquina",
    category: "Imported Marble",
    tagline: "Deep black marble with striking white veins",
    description:
      "Nero Marquina is a bold, deep black marble cut through with striking white veins — a dramatic choice for accent walls and premium interiors.",
    homeText:
      "As an accent wall or reception counter, Nero Marquina makes an immediate impression — its stark white veining against deep black gives entryways and feature spaces a bold, high-end character.",
    finish: ["Polished"],
    sizes: ["600x600", "Custom Slabs"],
    uses: ["Wall Cladding", "Reception", "Table Top"],
    image: "/NeroMarquina.png",
    homeImage: "/home/NeroMarquinahome.png",
    color: "#141414",
  },
  {
    id: "11",
    slug: "emperador-dark",
    name: "Emperador Dark",
    category: "Imported Marble",
    tagline: "Rich dark brown marble with natural patterns",
    description:
      "Emperador Dark brings a rich, warm brown tone with intricate natural veining — perfect for creating a cozy, upscale atmosphere.",
    homeText:
      "On stairs or flooring, Emperador Dark's warm brown tones bring a cozy, grounded feel to a home — it pairs especially well with warm lighting and wooden furniture, softening what could otherwise feel like a cold stone surface.",
    finish: ["Polished", "Honed"],
    sizes: ["600x600", "600x1200"],
    uses: ["Flooring", "Staircase", "Wall"],
    image: "/emperador.png",
    homeImage: "/home/emperadorhome.png",
    color: "#3b2a1e",
  },
  {
    id: "12",
    slug: "botticino-classico",
    name: "Botticino Classico",
    category: "Imported Marble",
    tagline: "Warm beige marble with subtle natural texture",
    description:
      "Botticino Classico offers a warm, creamy beige tone with a soft, uniform texture — a classic choice for elegant flooring and wall applications.",
    homeText:
      "Laid across a living room floor, Botticino Classico's warm beige tone keeps a space feeling calm and inviting, working equally well in traditional interiors and modern homes that want a softer alternative to stark white marble.",
    finish: ["Polished"],
    sizes: ["600x600", "Custom Slabs"],
    uses: ["Flooring", "Living Room", "Wall"],
    image: "/botticino.png",
    homeImage: "/home/botticinohome.png",
    color: "#e8dcc4",
  },
  {
    id: "13",
    slug: "grey-fior-di-bosco",
    name: "Grey Fior Di Bosco",
    category: "Imported Marble",
    tagline: "Premium grey marble with unique natural patterns",
    description:
      "Grey Fior Di Bosco features a rich grey base with striking natural mineral patterns — a premium, contemporary choice for feature spaces.",
    homeText:
      "As a feature wall or table top, Grey Fior Di Bosco's dense mineral patterning gives a room an instant contemporary edge — it photographs beautifully against soft, neutral furnishings.",
    finish: ["Polished", "Honed"],
    sizes: ["Custom Slabs"],
    uses: ["Wall Cladding", "Table Top", "Flooring"],
    image: "/greyflor.png",
    homeImage: "/home/greyflorhome.png",
    color: "#6e6f70",
  },
  {
    id: "14",
    slug: "arabescato-corchia",
    name: "Arabescato Corchia",
    category: "Imported Marble",
    tagline: "White marble with bold arabesque patterns",
    description:
      "Arabescato Corchia stands out with bold, sweeping grey patterns across a white base, creating a dramatic natural artwork on every slab.",
    homeText:
      "Used on a countertop or reception desk, Arabescato Corchia's sweeping patterns act like a natural piece of art — no two installations ever look quite the same, which is exactly the appeal for homeowners wanting something one-of-a-kind.",
    finish: ["Polished"],
    sizes: ["Custom Slabs"],
    uses: ["Wall", "Reception", "Countertops"],
    image: "/arabescato.png",
    homeImage: "/home/arabescatohome.png",
    color: "#e8e6e2",
  },
  {
    id: "15",
    slug: "travertino-beige",
    name: "Travertino Beige",
    category: "Imported Marble",
    tagline: "Natural beige travertine with layered patterns",
    description:
      "Travertino Beige showcases natural layered patterns in warm beige tones, adding earthy texture and character to floors and walls.",
    homeText:
      "Across flooring or a driveway, Travertino Beige brings an earthy, natural texture that feels grounded and warm underfoot — a popular choice for homes that want stone with visible, organic character rather than a uniform finish.",
    finish: ["Honed", "Filled & Polished"],
    sizes: ["600x600", "Custom Slabs"],
    uses: ["Flooring", "Parking", "Wall"],
    image: "/travertino.png",
    homeImage: "/home/travertinohome.png",
    color: "#d8b98a",
  },
  {
    id: "16",
    slug: "breccia-sardinia",
    name: "Breccia Sardinia",
    category: "Imported Marble",
    tagline: "Warm beige marble with unique breccia texture",
    description:
      "Breccia Sardinia combines warm beige and honey tones with a fragmented breccia texture — bold, natural, and full of character.",
    homeText:
      "On a kitchen island or table top, Breccia Sardinia's fragmented honey-toned texture adds warmth and visual interest, standing out as a conversation piece without overpowering the rest of the room.",
    finish: ["Polished"],
    sizes: ["600x1200", "Custom Slabs"],
    uses: ["Kitchen Tops", "Wall", "Table Top"],
    image: "/breccia.png",
    homeImage: "/home/brecciahome.png",
    color: "#d9b98f",
  },
  {
    id: "17",
    slug: "luna-beige",
    name: "Luna Beige",
    category: "Imported Marble",
    tagline: "Subtle beige marble with soft white veins",
    description:
      "Luna Beige is a soft, understated marble with gentle white veining on a warm beige base — a calm, versatile choice for any room.",
    homeText:
      "In a bedroom or living room, Luna Beige's soft, understated tone creates a calm backdrop rather than competing for attention — an easy choice for homeowners who want warmth without boldness.",
    finish: ["Polished", "Matte"],
    sizes: ["600x600", "800x800"],
    uses: ["Bedroom", "Living Room", "Flooring"],
    image: "/luna.png",
    homeImage: "/home/lunahome.png",
    color: "#dcc9ab",
  },
  {
    id: "18",
    slug: "turkish-light",
    name: "Turkish Light",
    category: "Imported Marble",
    tagline: "Light cream marble with crystalline finish",
    description:
      "Turkish Light offers a bright, crystalline finish in a soft cream tone, reflecting light beautifully across open, airy spaces.",
    homeText:
      "Laid across open-plan living areas, Turkish Light's crystalline finish catches natural light beautifully through the day, helping rooms feel brighter and more spacious than they actually are.",
    finish: ["Polished"],
    sizes: ["600x600", "Custom Slabs"],
    uses: ["Living Room", "Flooring", "Wall"],
    image: "/turkish.png",
    homeImage: "/home/turkishhome.png",
    color: "#e6ddcf",
  },
];

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { label: "Home",            href: "/" },
  { label: "Products",        href: "/products" },
  { label: "Visualizer",      href: "/#visualizer" },
  { label: "Care & Maintenance", href: "/care" },
  { label: "Sustainability",  href: "/sustainability" },
  // { label: "Warranty",        href: "/warranty" },
  { label: "About",           href: "/about" },
  { label: "Contact",         href: "/contact" },
];

// ─── Categories ───────────────────────────────────────────────────────────────

export const categoryList = [
  { name: "Granite",         description: "Natural igneous rock — extremely hard, heat resistant." },
  { name: "Marble",          description: "Metamorphic stone with unique veining patterns." },
  { name: "Sandstone",       description: "Warm, natural tones — ideal for outdoor use." },
  { name: "Porcelain",       description: "Engineered tiles — frost-proof and low maintenance." },
  { name: "Quartz",          description: "Man-made composite — consistent colour, non-porous." },
  { name: "Imported Marble", description: "Premium quality, luxurious finish, timeless beauty." },
];


// import { FloorOption, SwatchOption, TableOption, Product, NavLink } from "@/types";

// // ─── Visualizer Options ───────────────────────────────────────────────────────

// export const floorOptions: FloorOption[] = [
//   { label: "Warm Wood",     color: "#C8A882", lineColor: "#7a5c3a" },
//   { label: "Dark Wood",     color: "#6B4F3A", lineColor: "#3d2a1a" },
//   { label: "Light Oak",     color: "#DEB887", lineColor: "#a0785a" },
//   { label: "Marble White",  color: "#E8E4E0", lineColor: "#b0a8a0" },
//   { label: "Grey Tile",     color: "#A8A8A8", lineColor: "#787878" },
//   { label: "Dark Tile",     color: "#4A4A4A", lineColor: "#2a2a2a" },
//   { label: "Sandstone",     color: "#D2B48C", lineColor: "#8B7355" },
//   { label: "Black Granite", color: "#2C2C2C", lineColor: "#1a1a1a" },
// ];

// export const wallOptions: SwatchOption[] = [
//   { label: "Cream",       color: "#E8E0D5" },
//   { label: "Sage Green",  color: "#C4D4BC" },
//   { label: "Dusty Blue",  color: "#B8C8D8" },
//   { label: "Warm Grey",   color: "#C8C4BC" },
//   { label: "Terracotta",  color: "#D4A898" },
//   { label: "Deep Teal",   color: "#5C8A88" },
//   { label: "Ivory",       color: "#F5F0E8" },
//   { label: "Charcoal",    color: "#4A4A52" },
// ];

// export const tableOptions: TableOption[] = [
//   { label: "Walnut",      color: "#7a5c3a", legColor: "#5a3e28" },
//   { label: "Oak",         color: "#C0956A", legColor: "#a07040" },
//   { label: "Black",       color: "#2a2a2a", legColor: "#111111" },
//   { label: "White",       color: "#E8E4E0", legColor: "#c0bcb8" },
//   { label: "Teak",        color: "#9A6B40", legColor: "#6a4820" },
//   { label: "Glass",       color: "#B8D8E8", legColor: "#8aa8c0" },
//   { label: "Marble Top",  color: "#ECEAE6", legColor: "#222222" },
//   { label: "Dark Walnut", color: "#4A3020", legColor: "#2a1a10" },
// ];

// // ─── Products ─────────────────────────────────────────────────────────────────

// export const products: Product[] = [
//   {
//     id: "1",
//     slug: "black-galaxy-granite",
//     name: "Black Galaxy Granite",
//     category: "Granite",
//     tagline: "Bold depth with golden star-like speckles",
//     description:
//       "Black Galaxy Granite is one of the most sought-after granites in the world. Its stunning black background is accented by bronze or golden speckles, creating a dramatic and luxurious appearance. Sourced directly from Andhra Pradesh, India, it is perfect for kitchen countertops, bathroom vanities, and flooring.",
//     finish: ["Polished", "Honed", "Brushed", "Leather"],
//     sizes: ["300x300", "600x600", "600x900", "Custom Slabs"],
//     uses: ["Kitchen Countertops", "Bathroom Vanities", "Flooring", "Wall Cladding"],
//     image: "/tiles/table/black-galaxy.png",
//     gallery: ["/tiles/stairs/grey-granite.png"],
//     color: "#1a1a1a",
//   },
//   {
//     id: "2",
//     slug: "calacatta-marble",
//     name: "Calacatta Marble",
//     category: "Marble",
//     tagline: "Timeless Italian elegance with dramatic veining",
//     description:
//       "Calacatta Marble is the pinnacle of luxury natural stone. Quarried in Carrara, Italy, it features a brilliant white background with bold grey and gold veining. Each slab is completely unique — a true work of nature. Ideal for statement kitchen islands, bathrooms, and fireplaces.",
//     finish: ["Polished", "Honed", "Brushed"],
//     sizes: ["600x600", "800x800", "Custom Slabs"],
//     uses: ["Kitchen Islands", "Bathroom Floors", "Fireplace Surrounds", "Feature Walls"],
//     image: "/tiles/table/calacatta.png",
//     gallery: ["/tiles/floor/dark-marble.png", "/tiles/stairs/beige-marble.png"],
//     color: "#e8e4de",
//   },
//   {
//     id: "3",
//     slug: "indian-sandstone",
//     name: "Indian Sandstone",
//     category: "Sandstone",
//     tagline: "Natural warmth for gardens and outdoor spaces",
//     description:
//       "Our Indian Sandstone is sourced directly from our own quarries in Rajasthan, India, ensuring the best quality at competitive prices. With its warm earthy tones and natural riven surface, it is the perfect choice for patios, garden paths, driveways, and pool surrounds.",
//     finish: ["Natural Riven", "Sawn", "Tumbled", "Calibrated"],
//     sizes: ["600x300", "600x600", "900x600", "Random Paving"],
//     uses: ["Patios", "Garden Paths", "Driveways", "Pool Surrounds"],
//     image: "/tiles/stairs/cream-sandstone.png",
//     gallery: ["/tiles/floor/grey-sandstone.png"],
//     color: "#c4a882",
//   },
//   {
//     id: "4",
//     slug: "absolute-black-granite",
//     name: "Absolute Black Granite",
//     category: "Granite",
//     tagline: "Pure, consistent jet-black for a modern statement",
//     description:
//       "Absolute Black Granite is exactly what the name suggests — pure, deep, consistent black. No patterns, no variation. This makes it perfect for contemporary and minimalist designs where a clean, bold aesthetic is required. Extremely hard and durable.",
//     finish: ["Polished", "Honed", "Leather", "Flamed"],
//     sizes: ["300x300", "600x600", "Custom Slabs"],
//     uses: ["Countertops", "Flooring", "Stairs", "Commercial Spaces"],
//     image: "/tiles/stairs/grey-granite.png",
//     color: "#111111",
//   },
//   {
//     id: "5",
//     slug: "kashmir-white-granite",
//     name: "Kashmir White Granite",
//     category: "Granite",
//     tagline: "Soft light grey with red and black mineral patterns",
//     description:
//       "Kashmir White Granite features a light grey base adorned with red garnets, black hornblende, and silver mica. This versatile granite works beautifully with both light and dark cabinetry. A perennial favourite for kitchen worktops across the UK.",
//     finish: ["Polished", "Honed"],
//     sizes: ["600x600", "600x900", "Custom Slabs"],
//     uses: ["Kitchen Worktops", "Bathroom Counters", "Flooring", "Stairs"],
//     image: "/tiles/floor/white-granite.png",
//     color: "#d6d0c8",
//   },
//   {
//     id: "6",
//     slug: "outdoor-porcelain",
//     name: "Outdoor Porcelain Tiles",
//     category: "Porcelain",
//     tagline: "Low maintenance, frost-proof beauty for exteriors",
//     description:
//       "Our outdoor porcelain tiles combine the beauty of natural stone with the practicality of engineered materials. Frost-proof, slip-resistant, and virtually maintenance-free, they are ideal for patios, balconies, and commercial outdoor spaces.",
//     finish: ["Matt Anti-Slip", "Structured", "Stone Effect"],
//     sizes: ["600x600", "900x600", "1200x600", "20mm Thick"],
//     uses: ["Patios", "Balconies", "Commercial Exteriors", "Pool Areas"],
//     image: "/tiles/floor/beige-marble.png",
//     gallery: ["/tiles/table/brown-marble.png"],
//     color: "#b8b0a8",
//   },
// ];

// // ─── Navigation ───────────────────────────────────────────────────────────────

// export const navLinks: NavLink[] = [
//   { label: "Home",            href: "/" },
//   { label: "Products",        href: "/products" },
//   { label: "Visualizer",      href: "/#visualizer" },
//   { label: "Care & Maintenance", href: "/care" },
//   { label: "Sustainability",  href: "/sustainability" },
//   { label: "Warranty",        href: "/warranty" },
//   { label: "About",           href: "/about" },
//   { label: "Contact",         href: "/contact" },
// ];

// // ─── Categories ───────────────────────────────────────────────────────────────

// export const categoryList = [
//   { name: "Granite",    description: "Natural igneous rock — extremely hard, heat resistant." },
//   { name: "Marble",     description: "Metamorphic stone with unique veining patterns." },
//   { name: "Sandstone",  description: "Warm, natural tones — ideal for outdoor use." },
//   { name: "Porcelain",  description: "Engineered tiles — frost-proof and low maintenance." },
//   { name: "Quartz",     description: "Man-made composite — consistent colour, non-porous." },
// ];

// import { FloorOption, SwatchOption, TableOption, Product, NavLink } from "@/types";

// // ─── Visualizer Options ───────────────────────────────────────────────────────

// export const floorOptions: FloorOption[] = [
//   { label: "Warm Wood",     color: "#C8A882", lineColor: "#7a5c3a" },
//   { label: "Dark Wood",     color: "#6B4F3A", lineColor: "#3d2a1a" },
//   { label: "Light Oak",     color: "#DEB887", lineColor: "#a0785a" },
//   { label: "Marble White",  color: "#E8E4E0", lineColor: "#b0a8a0" },
//   { label: "Grey Tile",     color: "#A8A8A8", lineColor: "#787878" },
//   { label: "Dark Tile",     color: "#4A4A4A", lineColor: "#2a2a2a" },
//   { label: "Sandstone",     color: "#D2B48C", lineColor: "#8B7355" },
//   { label: "Black Granite", color: "#2C2C2C", lineColor: "#1a1a1a" },
// ];

// export const wallOptions: SwatchOption[] = [
//   { label: "Cream",       color: "#E8E0D5" },
//   { label: "Sage Green",  color: "#C4D4BC" },
//   { label: "Dusty Blue",  color: "#B8C8D8" },
//   { label: "Warm Grey",   color: "#C8C4BC" },
//   { label: "Terracotta",  color: "#D4A898" },
//   { label: "Deep Teal",   color: "#5C8A88" },
//   { label: "Ivory",       color: "#F5F0E8" },
//   { label: "Charcoal",    color: "#4A4A52" },
// ];

// export const tableOptions: TableOption[] = [
//   { label: "Walnut",      color: "#7a5c3a", legColor: "#5a3e28" },
//   { label: "Oak",         color: "#C0956A", legColor: "#a07040" },
//   { label: "Black",       color: "#2a2a2a", legColor: "#111111" },
//   { label: "White",       color: "#E8E4E0", legColor: "#c0bcb8" },
//   { label: "Teak",        color: "#9A6B40", legColor: "#6a4820" },
//   { label: "Glass",       color: "#B8D8E8", legColor: "#8aa8c0" },
//   { label: "Marble Top",  color: "#ECEAE6", legColor: "#222222" },
//   { label: "Dark Walnut", color: "#4A3020", legColor: "#2a1a10" },
// ];

// // ─── Products ─────────────────────────────────────────────────────────────────

// export const products: Product[] = [
//   {
//     id: "1",
//     slug: "black-galaxy-granite",
//     name: "Black Galaxy Granite",
//     category: "Granite",
//     tagline: "Bold depth with golden star-like speckles",
//     description:
//       "Black Galaxy Granite is one of the most sought-after granites in the world. Its stunning black background is accented by bronze or golden speckles, creating a dramatic and luxurious appearance. Sourced directly from Andhra Pradesh, India, it is perfect for kitchen countertops, bathroom vanities, and flooring.",
//     finish: ["Polished", "Honed", "Brushed", "Leather"],
//     sizes: ["300x300", "600x600", "600x900", "Custom Slabs"],
//     uses: ["Kitchen Countertops", "Bathroom Vanities", "Flooring", "Wall Cladding"],
//     image: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&q=80",
//     color: "#1a1a1a",
//   },
//   {
//     id: "2",
//     slug: "calacatta-marble",
//     name: "Calacatta Marble",
//     category: "Marble",
//     tagline: "Timeless Italian elegance with dramatic veining",
//     description:
//       "Calacatta Marble is the pinnacle of luxury natural stone. Quarried in Carrara, Italy, it features a brilliant white background with bold grey and gold veining. Each slab is completely unique — a true work of nature. Ideal for statement kitchen islands, bathrooms, and fireplaces.",
//     finish: ["Polished", "Honed", "Brushed"],
//     sizes: ["600x600", "800x800", "Custom Slabs"],
//     uses: ["Kitchen Islands", "Bathroom Floors", "Fireplace Surrounds", "Feature Walls"],
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
//     color: "#e8e4de",
//   },
//   {
//     id: "3",
//     slug: "indian-sandstone",
//     name: "Indian Sandstone",
//     category: "Sandstone",
//     tagline: "Natural warmth for gardens and outdoor spaces",
//     description:
//       "Our Indian Sandstone is sourced directly from our own quarries in Rajasthan, India, ensuring the best quality at competitive prices. With its warm earthy tones and natural riven surface, it is the perfect choice for patios, garden paths, driveways, and pool surrounds.",
//     finish: ["Natural Riven", "Sawn", "Tumbled", "Calibrated"],
//     sizes: ["600x300", "600x600", "900x600", "Random Paving"],
//     uses: ["Patios", "Garden Paths", "Driveways", "Pool Surrounds"],
//     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
//     color: "#c4a882",
//   },
//   {
//     id: "4",
//     slug: "absolute-black-granite",
//     name: "Absolute Black Granite",
//     category: "Granite",
//     tagline: "Pure, consistent jet-black for a modern statement",
//     description:
//       "Absolute Black Granite is exactly what the name suggests — pure, deep, consistent black. No patterns, no variation. This makes it perfect for contemporary and minimalist designs where a clean, bold aesthetic is required. Extremely hard and durable.",
//     finish: ["Polished", "Honed", "Leather", "Flamed"],
//     sizes: ["300x300", "600x600", "Custom Slabs"],
//     uses: ["Countertops", "Flooring", "Stairs", "Commercial Spaces"],
//     image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
//     color: "#111111",
//   },
//   {
//     id: "5",
//     slug: "kashmir-white-granite",
//     name: "Kashmir White Granite",
//     category: "Granite",
//     tagline: "Soft light grey with red and black mineral patterns",
//     description:
//       "Kashmir White Granite features a light grey base adorned with red garnets, black hornblende, and silver mica. This versatile granite works beautifully with both light and dark cabinetry. A perennial favourite for kitchen worktops across the UK.",
//     finish: ["Polished", "Honed"],
//     sizes: ["600x600", "600x900", "Custom Slabs"],
//     uses: ["Kitchen Worktops", "Bathroom Counters", "Flooring", "Stairs"],
//     image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
//     color: "#d6d0c8",
//   },
//   {
//     id: "6",
//     slug: "outdoor-porcelain",
//     name: "Outdoor Porcelain Tiles",
//     category: "Porcelain",
//     tagline: "Low maintenance, frost-proof beauty for exteriors",
//     description:
//       "Our outdoor porcelain tiles combine the beauty of natural stone with the practicality of engineered materials. Frost-proof, slip-resistant, and virtually maintenance-free, they are ideal for patios, balconies, and commercial outdoor spaces.",
//     finish: ["Matt Anti-Slip", "Structured", "Stone Effect"],
//     sizes: ["600x600", "900x600", "1200x600", "20mm Thick"],
//     uses: ["Patios", "Balconies", "Commercial Exteriors", "Pool Areas"],
//     image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=80",
//     color: "#b8b0a8",
//   },
// ];

// // ─── Navigation ───────────────────────────────────────────────────────────────

// export const navLinks: NavLink[] = [
//   { label: "Home",            href: "/" },
//   { label: "Products",        href: "/products" },
//   { label: "Visualizer",      href: "/#visualizer" },
//   { label: "Care & Maintenance", href: "/care" },
//   { label: "Sustainability",  href: "/sustainability" },
//   { label: "Warranty",        href: "/warranty" },
//   { label: "About",           href: "/about" },
//   { label: "Contact",         href: "/contact" },
// ];

// // ─── Categories ───────────────────────────────────────────────────────────────

// export const categoryList = [
//   { name: "Granite",    description: "Natural igneous rock — extremely hard, heat resistant." },
//   { name: "Marble",     description: "Metamorphic stone with unique veining patterns." },
//   { name: "Sandstone",  description: "Warm, natural tones — ideal for outdoor use." },
//   { name: "Porcelain",  description: "Engineered tiles — frost-proof and low maintenance." },
//   { name: "Quartz",     description: "Man-made composite — consistent colour, non-porous." },
// ];
