export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    image: "https://example.com/images/rgb-mechanical-keyboard.jpg",
    title: "RGB Mechanical Keyboard",
    description: "Blue switch with tactile feedback and extreme durability.",
    price: 89.99,
  },
  {
    id: 2,
    image: "https://example.com/images/pro-gaming-mouse.jpg",
    title: "Pro Gaming Mouse",
    description: "16000 DPI optical sensor and 8 programmable buttons.",
    price: 55.5,
  },
  {
    id: 3,
    image: "https://example.com/images/4k-ultrawide-monitor.jpg",
    title: "4K UltraWide Monitor",
    description: "34-inch IPS panel with 144Hz for total immersion.",
    price: 349.0,
  },
];
