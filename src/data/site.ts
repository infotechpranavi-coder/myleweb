export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type MegaColumn = {
  title: string;
  items: NavChild[];
  layout?: "list" | "featured";
};

export type MainNavItem = {
  label: string;
  href: string;
  columns: MegaColumn[];
};

export const topLinks = [
  { label: "Content Hub", href: "/content" },
  { label: "Press", href: "/press" },
  { label: "Career", href: "/career" },
  { label: "Newsletter", href: "/newsletter" },
] as const;

export const languages = [
  "English",
  "Deutsch",
  "Español",
  "Français",
  "Italiano",
  "Polski",
] as const;

export const productCategories: NavChild[] = [
  { label: "Steering and suspension parts", href: "/products/steering-and-suspension-parts" },
  { label: "Brakes", href: "/products/brakes" },
  { label: "Drive components", href: "/products/drive-components" },
  { label: "Suspension & damping parts", href: "/products/suspension-and-damping" },
  { label: "Filters", href: "/products/filters" },
  { label: "Thermal management & engine cooling", href: "/products/thermal-management" },
  { label: "Electronics", href: "/products/electronics" },
  { label: "Solutions for electromobility", href: "/products/electromobility" },
];

export const productLines: NavChild[] = [
  {
    label: "AUTOPART HD",
    href: "/products/hd",
    description: "Technically optimized parts with a 4-year guarantee",
  },
  {
    label: "AUTOPART ORIGINAL",
    href: "/products/original",
    description: "Quality-tested, robust and durable",
  },
  {
    label: "AUTOPART PD",
    href: "/products/pd",
    description: "More performance and a sophisticated look",
  },
  {
    label: "AUTOPART KIT",
    href: "/products/kits",
    description: "Save time and money in everyday workshop life",
  },
];

export const mainNav: MainNavItem[] = [
  {
    label: "Products",
    href: "/products",
    columns: [
      { title: "Product categories", items: productCategories },
      { title: "Product lines & kits", items: productLines, layout: "featured" },
    ],
  },
  {
    label: "Quality",
    href: "/quality",
    columns: [
      {
        title: "Quality",
        items: [
          { label: "Product development", href: "/quality/product-development" },
          { label: "Manufacturer expertise", href: "/quality/manufacturer-expertise" },
          { label: "Quality management", href: "/quality/quality-management" },
          { label: "Data management", href: "/quality/data-management" },
        ],
      },
    ],
  },
  {
    label: "Workshops",
    href: "/workshops",
    columns: [
      {
        title: "Workshops",
        items: [
          { label: "Advantages for workshops", href: "/workshops" },
          { label: "Trainings", href: "/workshops/trainings" },
        ],
      },
    ],
  },
  {
    label: "Wholesale",
    href: "/wholesale",
    columns: [
      {
        title: "Wholesale",
        items: [
          { label: "Advantages for wholesalers", href: "/wholesale#advantages" },
          { label: "Consulting", href: "/wholesale#consulting" },
        ],
      },
    ],
  },
  {
    label: "About us",
    href: "/about",
    columns: [
      {
        title: "About us",
        items: [
          { label: "Who we are", href: "/about" },
          { label: "AUTOPART worldwide", href: "/about/worldwide" },
          { label: "Sustainability", href: "/about/sustainability" },
          { label: "Donation & funding partnerships", href: "/about/partnerships" },
          { label: "Events", href: "/about/events" },
        ],
      },
    ],
  },
];

export type Product = {
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
  href: string;
  groups: string[];
};

export const products: Product[] = [
  {
    number: "01",
    category: "ORIGINAL",
    title: "MEYLE ORIGINAL drive shaft Volvo XC60 I",
    description:
      "MEYLE ORIGINAL drive shafts for the Volvo XC60 I: top quality and outstanding traction with ball spline technology. Lightweight design for optimal driving dynamics and efficiency.",
    image: "/images/products/meyle-original-drive-shaft-volvo-white.webp",
    href: "/products/original",
    groups: ["drive-components"],
    highlights: [
      "Stronger axle articulation for outstanding traction on rough terrain",
      "Optimised driving dynamics thanks to lightweight displacement unit",
      "Increased efficiency with space-saving outer joint (8 bearings instead of 6)",
    ],
  },
  {
    number: "02",
    category: "PD",
    title: "MEYLE PD HEPA cabin air filter set Tesla Model Y",
    description:
      "The MEYLE HEPA cabin air filter set for the Tesla Model Y: captures NOx and the hearts of customers! 2 pre-filters + 2 HEPA filters – ideal for workshops and drivers!",
    image: "/images/products/hepa-filtersatz.webp",
    href: "/products/pd",
    groups: ["filters", "electromobility"],
    highlights: [
      "PD activated carbon pre-filter with antibacterial effect",
      "NOx box: permanently captures nitrogen oxides",
      "Dual HEPA filter: optimal air quality and reduced allergy risk",
      "Efficient design for sustainability: approx. 50% lower component weight",
    ],
  },
  {
    number: "03",
    category: "HD",
    title: "MEYLE HD rear axle control arm for vehicles of the VW Group",
    description:
      "MEYLE HD rear axle control arm for Golf, Octavia, Leon and more, with zinc flake coating for longer service life! Increased safety, higher material durability and better protection against corrosion. Quality for high standards.",
    image: "/images/products/hd-control-arm-vw.png",
    href: "/products/hd",
    groups: ["steering-and-suspension-parts", "electromobility"],
    highlights: [
      "Corrosion resistance for a longer service life",
      "Increased safety and material resistance",
      "Long-lasting protection from stone impacts and gritting salt",
    ],
  },
  {
    number: "04",
    category: "HD / ORIGINAL",
    title: "MEYLE HD and ORIGINAL pre-assembled tie rods",
    description:
      "Take the hassle out of tie rod replacement – with the pre-assembled MEYLE tie rod. Quick and easy installation paired with high durability and reliability. Available as MEYLE ORIGINAL and MEYLE HD.",
    image: "/images/products/preassembled-tie-rod.png",
    href: "/products/hd",
    groups: ["steering-and-suspension-parts"],
    highlights: [
      "Everything you need, including attachment parts, under a single number, which saves you time",
      "All-in-one solution reduces packaging, storage and transport costs",
      "Also available in the enhanced HD variant",
    ],
  },
  {
    number: "05",
    category: "KIT",
    title: "MEYLE ORIGINAL oil change kit for Tesla",
    description:
      "Everything you need: the MEYLE oil change kit for the Tesla drive unit. Simple oil change with filter, magnetic drain plug and all necessary parts.",
    image: "/images/products/meyle-tesla-oil-kit.png",
    href: "/products/kits",
    groups: ["electromobility", "drive-components"],
    highlights: [
      "Complete package: all parts incl. filter and magnetic drain plug",
      "Complies with Tesla OE standards",
      "Efficient & reliable maintenance for Tesla models S/3/X/Y",
    ],
  },
  {
    number: "06",
    category: "ORIGINAL",
    title: "MEYLE ORIGINAL oil stop cable for Mercedes-Benz",
    description:
      "Oil in the control unit? Not with us! The MEYLE ORIGINAL oil stop cable reliably prevents costly damage from leaking engine oil – simple, effective and tool-free installation. Ideal for over 5 million Mercedes-Benz vehicles in Europe to enjoy a long service life.",
    image: "/images/products/meyle-oil-stop-cable-white.png",
    href: "/products/original",
    groups: ["electronics"],
    highlights: [
      "Sturdy metal core effectively stops oil from spreading in the wiring harness",
      "Protects sensors, actuators and the engine control unit",
      "Easy, tool-free plug-and-play installation",
      "Precision fit for Mercedes-Benz engines M111, M271, M272, M273 (C-Class, CLK-Class, CLS-Class, E-Class and Sprinter, among others)",
    ],
  },
];

export { newsArticles as news } from "@/data/news";
export type { NewsItem } from "@/data/news";

export type Testimonial = {
  quote: string;
  name: string;
  company: string;
  position: string;
  logo: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "As a partner, AUTOPART challenges, supports and inspires our company and is fully committed to our employees and customers. Their innovative, solution-oriented product offering is designed to drive success in the industry and with our customers for many years to come.",
    name: "Nick Bauer",
    company: "FCP Euro, CT USA",
    position: "President & Founder",
    logo: "/images/customers/partner-a.svg",
  },
  {
    quote:
      "The AUTOPART training sessions provide us with manufacturer information straight from the experts - always practical and easy to understand.",
    name: "Frank Hofmann",
    company: "Leise GmbH & Co.KG",
    position: "Sales Manager Automotive Parts | Training Coordination",
    logo: "/images/customers/partner-b.svg",
  },
  {
    quote:
      "With the precise product data from AUTOPART, we can find spare parts quickly and reliably at any time. This saves us valuable time and significantly reduces downtime in our workshops.",
    name: "Sven Franke",
    company: "LKQ PV Automotive",
    position: "Sales House Manager",
    logo: "/images/customers/partner-c.svg",
  },
];

export type TradeFair = {
  dates: string;
  location: string;
  title: string;
  description: string;
};

export const tradeFairs: TradeFair[] = [
  {
    dates: "14.01. – 17.01.",
    location: "Gothenburg, Sweden",
    title: "Automässan",
    description:
      "The entire automotive service and aftermarket sector gathers under one roof. Meet leading suppliers and discover new products and solutions.",
  },
  {
    dates: "19.08. – 23.08.",
    location: "USA",
    title: "Worldpac STX",
    description:
      "At the industry get-together for workshops and wholesalers, product innovations and technology trends are presented.",
  },
  {
    dates: "28.08. – 29.08.",
    location: "Berne, Switzerland",
    title: "Swiss Automotive Show",
    description:
      "Over 140 exhibitors showcase the full breadth of the aftermarket. A perfect opportunity to experience the latest trends first-hand.",
  },
  {
    dates: "08.09. – 12.09.",
    location: "Frankfurt, Germany",
    title: "Automechanika Frankfurt",
    description:
      "The international automotive industry meets in Frankfurt to experience innovations, trends and technologies live.",
  },
];

export type FooterColumn = {
  title: string;
  items: NavChild[];
};

export const footerColumns: FooterColumn[] = [
  { title: "Product categories", items: productCategories },
  {
    title: "Quality",
    items: [
      { label: "Product development", href: "/quality/product-development" },
      { label: "Manufacturer expertise", href: "/quality/manufacturer-expertise" },
      { label: "Quality management", href: "/quality/quality-management" },
      { label: "Data management", href: "/quality/data-management" },
    ],
  },
  {
    title: "Wholesale",
    items: [
      { label: "Advantages for wholesalers", href: "/wholesale#advantages" },
      { label: "Consulting", href: "/wholesale#consulting" },
    ],
  },
  { title: "Product lines & KITs", items: productLines },
  {
    title: "Workshops",
    items: [
      { label: "Advantages for workshops", href: "/workshops" },
      { label: "Trainings", href: "/workshops/trainings" },
    ],
  },
  {
    title: "About us",
    items: [
      { label: "AUTOPART as an employer", href: "/career" },
      { label: "AUTOPART worldwide", href: "/about/worldwide" },
      { label: "Sustainability", href: "/about/sustainability" },
      { label: "Donation & funding partnerships", href: "/about/partnerships" },
      { label: "Events", href: "/about/events" },
    ],
  },
];

export const legalLinks = [
  { label: "Legal Notice", href: "/legal-notice" },
  { label: "Data Protection", href: "/data-protection" },
  { label: "General Terms and Conditions", href: "/terms" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Marketing Materials", href: "/marketing-materials" },
  { label: "Whistleblower System", href: "/whistleblower" },
  { label: "Service", href: "/service" },
  { label: "Guarantee Certificate", href: "/guarantee" },
] as const;

export const searchSuggestions = [
  "Drive shaft",
  "Cabin air filter",
  "Control arm",
  "Transmission oil kit",
  "Shock absorber",
  "Tie rod",
];

export const contactTopics = [
  { id: "assembly", title: "Assembly", subtitle: "Questions about installation" },
  { id: "technical", title: "Product", subtitle: "Technical question about a product" },
  { id: "general", title: "General", subtitle: "Questions about general topics" },
  { id: "jobs", title: "Jobs & Careers", subtitle: "Questions about careers" },
  { id: "press", title: "Press", subtitle: "Press inquiry" },
  { id: "partnerships", title: "Partnerships", subtitle: "Questions about sponsorship" },
  { id: "purchase", title: "Purchase of parts", subtitle: "Questions about purchasing spare parts" },
  { id: "claim", title: "Claim", subtitle: "Questions about a claim" },
] as const;

export const catalogFilters = [
  { id: "category", label: "Product category", options: ["Steering", "Brakes", "Drive", "Filters", "Electronics"] },
  { id: "manufacturer", label: "Vehicle manufacturer", options: ["VW", "BMW", "Mercedes-Benz", "Tesla", "Volvo"] },
  { id: "line", label: "Product line", options: ["ORIGINAL", "HD", "PD", "KIT"] },
  { id: "model", label: "Vehicle model", options: ["Golf", "3 Series", "C-Class", "Model Y", "XC60"] },
  { id: "engine", label: "Engine", options: ["1.5 TSI", "2.0 TDI", "Electric"] },
  { id: "year", label: "Year", options: ["2020", "2021", "2022", "2023", "2024", "2025"] },
] as const;

export const catalogProducts = products.map((product, index) => ({
  ...product,
  sku: `AP-${product.category.replace(/\s|\//g, "")}-${1000 + index}`,
  applications: ["Passenger cars", "Vans"],
}));

export const stats = [
  { value: "65+", label: "Years of experience" },
  { value: "24,000+", label: "Products" },
  { value: "120+", label: "Countries" },
  { value: "1", label: "Goal: Better Parts" },
];

export const contentTypes = [
  "All",
  "Blog posts",
  "Videos",
  "Press releases",
  "Whitepapers",
  "Installation instructions",
] as const;
