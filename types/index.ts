export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  tagline: string;
    homeText: string;
  description: string;
  finish: string[];
  sizes: string[];
  uses: string[];
  image: string;
  
  homeImage: string;   // 👈 yeh naya add karo

  gallery?: string[]; // additional images
  color: string;
}



// export type Category = "floor" | "wall" | "table";

// export interface RoomState {
//   floor: number;
//   wall: number;
//   table: number;
// }

// export interface SwatchOption {
//   label: string;
//   color: string;
// }

// export interface FloorOption extends SwatchOption {
//   lineColor: string;
// }

// export interface TableOption extends SwatchOption {
//   legColor: string;
// }

// export interface Product {
//   id: string;
//   name: string;
//   slug: string;
//   category: string;
//   tagline: string;
//   description: string;
//   finish: string[];
//   sizes: string[];
//   uses: string[];
//   image: string;
  
//   gallery?: string[]; // additional images
//   color: string;
// }

// export interface NavLink {
//   label: string;
//   href: string;
// }
