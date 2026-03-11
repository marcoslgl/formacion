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

export interface Movies {
  title: string;
  category: string;
  description: string;
  url: string;
}

export const mockMovies: Movies[] = [
  {
    title: "Die Hard",
    category: "action",
    description: "A classic action film about a cop who must save the day.",
    url: "die-hard",
  },
  {
    title: "Inception",
    category: "action",
    description: "A mind-bending thriller about dreams within dreams.",
    url: "inception",
  },
  {
    title: "The Hangover",
    category: "comedy",
    description: "A group of friends try to piece together their lives after a wild night in Las Vegas.",
    url: "the-hangover",
  },
  {
    title: "Superbad",
    category: "comedy",
    description: "Two high school friends embark on a wild adventure to get their friend laid.",
    url: "superbad",
  },
  {
    title: "The Shawshank Redemption",
    category: "drama",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    url: "the-shawshank-redemption",
  },
  {
    title: "Forrest Gump",
    category: "drama",
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
    url: "forrest-gump",
  },
  {
    title: "Se7en",
    category: "thriller",
    description: "A psychological thriller about two detectives hunting a serial killer.",
    url: "se7en",
  },
  {
    title: "The Dark Knight",
    category: "action",
    description: "The Dark Knight rises as Batman faces his greatest challenge yet.",
    url: "the-dark-knight",
  },
];
