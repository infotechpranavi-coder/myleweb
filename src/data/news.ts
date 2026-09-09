export type NewsItem = {
  id: string;
  slug: string;
  category: string;
  title: string;
  image: string;
  href: string;
  excerpt: string;
  date: string;
  body: string[];
};

export const newsArticles: NewsItem[] = [
  {
    id: "air-suspension",
    slug: "air-suspension-seize-the-market-opportunities-now",
    category: "Blog post",
    title: "Air suspension: seize the market opportunities now",
    image: "/images/news/air-suspension.jpg",
    href: "/content/air-suspension-seize-the-market-opportunities-now",
    excerpt:
      "Air suspension is no longer limited to premium vehicles. Workshops that build the right know-how can turn a complex repair into a reliable revenue stream.",
    date: "12.03.2026",
    body: [
      "Air suspension systems are becoming more common across the European vehicle park – from luxury SUVs to light commercial vehicles. For independent workshops, that means a growing demand for parts, diagnosis and repair that used to stay with the dealer.",
      "The challenge is clear: air struts, bellows and height sensors must fit precisely, stay leak-tight and integrate with the vehicle’s electronics. Incomplete repairs lead to comebacks and frustrated customers.",
      "MEYLE supports workshops with OE-compliant air suspension components, practical training and clear catalog data – so the right part is identified first time and installed with confidence.",
      "Workshops that invest in air suspension competence now will be ready when the next wave of vehicles reaches the independent aftermarket.",
    ],
  },
  {
    id: "zinc",
    slug: "zinc-flake-coatings-the-anti-corrosion-solution",
    category: "Blog post",
    title: "Zinc flake coatings: the anti-corrosion solution?",
    image: "/images/news/zinc.jpg",
    href: "/content/zinc-flake-coatings-the-anti-corrosion-solution",
    excerpt:
      "Stone impacts, gritting salt and moisture attack suspension parts every winter. Zinc flake coatings are one of the answers MEYLE HD uses for longer service life.",
    date: "28.02.2026",
    body: [
      "Corrosion is one of the main reasons control arms and related parts fail early – especially on vehicles that see harsh winters and frequent motorway use.",
      "Zinc flake coatings form a thin, highly resistant barrier against salt, moisture and mechanical wear. Compared with conventional finishes, they offer longer protection without adding excessive thickness that could affect fit.",
      "On selected MEYLE HD components – such as rear axle control arms for the VW Group – zinc flake coating is part of a broader durability upgrade that also includes material and geometry improvements.",
      "For workshops and wholesalers, that means fewer early failures, clearer quality stories on the counter, and parts that live up to the 4-year MEYLE HD guarantee.",
    ],
  },
  {
    id: "transmission",
    slug: "transmission-flushing-versus-transmission-oil-change",
    category: "Blog post",
    title: "Transmission flushing versus transmission oil change",
    image: "/images/news/transmission.jpg",
    href: "/content/transmission-flushing-versus-transmission-oil-change",
    excerpt:
      "Automatic transmissions need clean oil to shift smoothly. But should workshops flush or simply change the oil? The answer depends on the vehicle and the service interval.",
    date: "14.01.2026",
    body: [
      "Automatic transmission fluid ages under heat and load. Contaminants and worn friction material build up over time and can cause harsh shifts, delayed engagement or premature wear.",
      "A standard oil change replaces a portion of the fluid and is often the right choice for regular maintenance. Flushing aims to exchange a larger share of the oil and can be useful when the system is heavily contaminated – if the manufacturer procedure allows it.",
      "MEYLE supports professional transmission service with complete oil change KITs, filters and clear guidance so workshops can choose the correct approach for each application.",
      "Done properly, transmission service protects a high-value assembly and gives drivers the smooth, reliable shifting they expect.",
    ],
  },
  {
    id: "filters",
    slug: "not-all-filters-are-the-same-how-do-you-find-the-right-one",
    category: "Blog post",
    title: "Not all filters are the same - how do you find the right one?",
    image: "/images/news/filters.jpg",
    href: "/content/not-all-filters-are-the-same-how-do-you-find-the-right-one",
    excerpt:
      "Cabin, oil, air and fuel filters look similar on the shelf – but media, sealing and fit decide whether they protect the vehicle or create a comeback.",
    date: "05.12.2025",
    body: [
      "Filters are among the most frequently replaced parts in the workshop. That makes them an easy sale – and an easy source of errors when the wrong media or a poor seal is installed.",
      "Cabin filters in particular have moved far beyond basic pollen screens. Modern options include activated carbon, antibacterial layers, HEPA media and NOx capture – especially relevant for electric vehicles such as the Tesla Model Y.",
      "MEYLE ORIGINAL and MEYLE PD filters are specified for OE-compliant fit and clear performance. Catalog data links vehicle, engine and application so wholesale and workshops find the correct part without guesswork.",
      "Choosing the right filter protects engines, interiors and customer trust – and turns a routine job into a quality conversation at the counter.",
    ],
  },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}

/** @deprecated use newsArticles */
export const news = newsArticles;
