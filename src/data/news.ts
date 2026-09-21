export type NewsBodyBlock =
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "paragraph"; text: string }
  | { type: "emphasis"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "image"; src: string; alt: string }
  | { type: "sources"; title?: string; items: { text: string; url?: string }[] };

export type NewsItem = {
  id: string;
  slug: string;
  category: string;
  tags?: string[];
  title: string;
  image: string;
  href: string;
  excerpt: string;
  date: string;
  body: NewsBodyBlock[];
  cta?: { label: string; href: string };
};

export const newsArticles: NewsItem[] = [
  {
    id: "air-suspension",
    slug: "air-suspension-seize-the-market-opportunities-now",
    category: "Blog post",
    tags: ["Blog post", "Suspension and damping parts"],
    title: "Air suspension in the IAM – market potential, benefits, trends",
    image: "/images/news/air-suspension.jpg",
    href: "/content/air-suspension-seize-the-market-opportunities-now",
    excerpt:
      "Air suspensions are no longer just a comfort option, but a central element of modern suspension systems in the premium segment – with growing potential for workshops and wholesalers.",
    date: "01/29/2026",
    body: [
      {
        type: "heading",
        text: "Growing significance in the IAM",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Air suspensions are no longer just a comfort option, but a central element of modern suspension systems in the premium segment. Because they ensure not only precise vehicle stability, but also adaptive driving comfort and efficiency. With the increasing age of vehicles and prevalence of this technology, the demand for spare parts in the independent aftermarket is also growing. Along with this, huge potential is opening up for workshops and wholesalers – provided that the parts fulfil the requirements in terms of quality, system integration and data availability.",
      },
      {
        type: "image",
        src: "/images/news/air-suspension.jpg",
        alt: "Photo of air suspension parts in a workshop environment.",
      },
      {
        type: "heading",
        text: "A system that is transforming the market",
        level: 3,
      },
      {
        type: "paragraph",
        text: "The global market for air suspension systems was estimated to be worth approximately USD 12.63 billion in 2025 – by 2030 it should reach around USD 18.96 billion (CAGR ~8.5%)*. Drivers of this are their growing prevalence in the premium segments, more deeply integrated electronic controls and increasing demand from commercial vehicles and BEV platforms.",
      },
      {
        type: "paragraph",
        text: "At the same time, the aftermarket share is also growing: while OEM solutions retain the largest share of turnover, the aftermarket for air suspension systems is growing at an estimated CAGR* of around 7.7%.",
      },
      {
        type: "heading",
        text: "Relevance for workshops and wholesalers",
        level: 3,
      },
      {
        type: "paragraph",
        text: "For a long time, air suspension was mainly OEM territory: high-quality, completely integrated systems were primarily available from vehicle manufacturers. Therefore, in the independent aftermarket, workshops were often faced with difficult choices – between expensive OEM parts and alternatives that could involve functional limitations, in terms of the tuning of damping systems or long-term leak tightness for example.",
      },
      {
        type: "paragraph",
        text: "With the increasing prevalence of air suspension on premium and BEV platforms, this picture is changing. More and more vehicles with these systems are reaching an age where repairs make economic sense – and thus entering the independent aftermarket. In Europe, around 70% of all vehicles are older than four years, a segment that therefore accounts for the majority of IAM parts sales. The demand for OE-compatible aftermarket solutions that can be reliably integrated and meet the requirements of modern suspension systems is growing accordingly.",
      },
      {
        type: "paragraph",
        text: "For workshops and wholesalers this means: air suspension is going from being an exception to being a relevant repair field – with growing demand, clear quality requirements and corresponding potential.",
      },
      {
        type: "heading",
        text: "Challenges – and how the IAM can overcome them",
        level: 3,
      },
      {
        type: "paragraph",
        text: "Air suspension systems combine mechanical components, pneumatic elements, sensors, electronics and the coordination of software. Differences in areas such as material quality, production processes and electronic compatibility can have a direct effect on system behaviour, functional depth and driving comfort.",
      },
      {
        type: "paragraph",
        text: "For the IAM, this means: spare parts must not only function independently but also interact reliably within whole systems. Deciding factors are therefore:",
      },
      {
        type: "list",
        items: [
          "OE-compatible specifications that correspond to the original functionalities",
          "Tested sensors and electronic fine-tuning",
          "Clear vehicle and parts identification",
        ],
      },
      {
        type: "heading",
        text: "Summary",
        level: 3,
      },
      {
        type: "paragraph",
        text: "Air suspension is evolving from being a pure added comfort to being a central technology in modern premium vehicles – especially in high-end vehicle classes and on BEV platforms. For the independent aftermarket, this represents a growing segment with clear potential.",
      },
      {
        type: "sources",
        title: "List of sources",
        items: [
          {
            text: "Mordor Intelligence. (2024). Automotive air suspension market – Growth, trends, forecast (2025–2030).",
            url: "https://www.mordorintelligence.com/industry-reports/automotive-air-suspension-market",
          },
          {
            text: "ADIRA – Italian Association of Automotive Aftermarket Distributors and Repairers. (2024). European independent automotive aftermarket panorama.",
            url: "https://www.adira.it/wp-content/uploads/2024/10/European-Independent-Automotive-Aftermarket-Panorama_final.pdf",
          },
        ],
      },
    ],
    cta: {
      label: "Discover MEYLE air suspension",
      href: "/products/suspension-and-damping/air-suspension",
    },
  },
  {
    id: "zinc",
    slug: "zinc-flake-coatings-the-anti-corrosion-solution",
    category: "Blog post",
    tags: ["Blog post", "Steering and Suspension"],
    title: "Zinc flake coatings: the anti-corrosion solution?",
    image: "/images/news/zinc.jpg",
    href: "/content/zinc-flake-coatings-the-anti-corrosion-solution",
    excerpt:
      "Corrosion and control arms. A topic that, above all, owners of VW Golf 7 vehicles often find themselves confronted with.",
    date: "11/27/2024",
    body: [
      {
        type: "heading",
        text: "Corrosion and control arms. A topic that, above all, owners of VW Golf 7 vehicles often find themselves confronted with.",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The reason for this being the special design of the rear, lower control arm. Not only does the spring sit in the rear axle suspension, but the whole control arm is open at the top. This means that dirt and water can get to the spring’s seat at all times and water can enter through cracks in the finish.",
      },
      {
        type: "paragraph",
        text: "As a result, the drainage holes get clogged up, preventing the water from draining away fully. In addition, if the finish is damaged by stone impacts, the material underneath can rust so badly over time that the spring penetrates the control arm.",
      },
      {
        type: "paragraph",
        text: "In a case like this, the safety of the vehicle is no longer guaranteed and continued use of the vehicle is not advisable.",
      },
      {
        type: "image",
        src: "/images/news/zinc.jpg",
        alt: "Picture of the zinc flake coating production step in our production plant.",
      },
      {
        type: "heading",
        text: "Why are control arms so susceptible to corrosion?",
        level: 3,
      },
      {
        type: "paragraph",
        text: "The spring-carrying control arm is highly susceptible to corrosion as it is exposed to various external influences:",
      },
      {
        type: "list",
        items: [
          "Mechanical stress: An accumulation of sand and dirt at the spring seat leads to a higher degree of wear of the protective layer and thereby premature wear and tear.",
          "Stone impacts: The direct contact with the road surface damages the coating, allowing moisture to find its way in.",
          "Moisture: Water penetration under the paint layer causes infiltration and detachment, which in extreme cases can lead to spring breakage.",
        ],
      },
      {
        type: "emphasis",
        text: "These problems are regular causes of complaint by testing institutions such as TÜV and often lead to the rejection of rusted control arms.",
      },
      {
        type: "heading",
        text: "Principles of protection against corrosion",
        level: 3,
      },
      {
        type: "paragraph",
        text: "Good protection against corrosion is vital for spare parts, which are exposed to severe environmental stress.",
      },
      {
        type: "paragraph",
        text: "The distinction is made here between passive and active corrosion protection.",
      },
      {
        type: "paragraph",
        text: "Passive corrosion protection is achieved through a coating, such as conventional paint. This forms a barrier between the metal and the environment. But only as long as the coating remains undamaged.",
      },
      {
        type: "paragraph",
        text: "With active corrosion protection, on the other hand, chemical processes come into play which minimise corrosion. A well-known procedure is the cathodic protective effect, whereby the metal itself is protected against corrosion and no additional barrier, such as paint, for example, is used.",
      },
      {
        type: "emphasis",
        text: "It is important to mention that not every material is suitable for active corrosion protection!",
      },
      {
        type: "heading",
        text: "Not all coatings are alike",
        level: 3,
      },
      {
        type: "paragraph",
        text: "In addition to the standard galvanic coating procedure, there are also so-called zinc flake coatings available today. In this process, zinc particles in the form of flakes are used, which adhere to the metal surface thanks to special bonding agents.",
      },
      {
        type: "emphasis",
        text: "This means that it is active protection!",
      },
      {
        type: "paragraph",
        text: "The zinc flakes act as pigments or layers that not only passively protect the steel beneath by acting as a barrier, but also actively, as the zinc oxidises preferentially, thereby protecting the steel from corrosion.",
      },
      {
        type: "paragraph",
        text: "Furthermore, zinc flake coatings have a high temperature resistance, which creates a resistant and robust protective layer. As a result, control arms with this coating can withstand a high level of mechanical stress.",
      },
      {
        type: "emphasis",
        text: "Incidentally, corrosion resistance is tested in so-called ‘salt spray chambers’.",
      },
      {
        type: "paragraph",
        text: "To summarise, zinc flake coatings offer effective protection against corrosion and significantly lengthen the service life of control arms.",
      },
    ],
    cta: {
      label: "Discover MEYLE HD control arms",
      href: "/products/steering-and-suspension-parts",
    },
  },
  {
    id: "transmission",
    slug: "transmission-flushing-versus-transmission-oil-change",
    category: "Blog post",
    tags: ["Blog post", "Drive parts"],
    title: "Transmission flushing versus transmission oil change",
    image: "/images/news/transmission.jpg",
    href: "/content/transmission-flushing-versus-transmission-oil-change",
    excerpt:
      '"Lifetime filling" and "maintenance-free" are still terms used by many manufacturers these days. In theory this may be possible – but the reality is quite different.',
    date: "10/25/2024",
    body: [
      {
        type: "heading",
        text: '"Lifetime filling" and "maintenance-free" are still terms used by many manufacturers these days.',
        level: 2,
      },
      {
        type: "paragraph",
        text: "In theory, this may be possible, but the reality is quite different, because anyone who knows a little about transmission oils knows that even the best oil can no longer do its job with increasing age and lack of care.",
      },
      {
        type: "paragraph",
        text: "A professional service is absolutely essential and not only ensures that the vehicle continues to run smoothly, but also that all important components are sufficiently lubricated and that optimum power transmission and cooling can take place. Any change in the ATF properties - e.g. due to ageing - not only has a direct effect on the function of the automatic transmission, but also on its service life.",
      },
      {
        type: "image",
        src: "/images/news/transmission.jpg",
        alt: "Mechanic flushes the transmission during a transmission oil change.",
      },
      {
        type: "heading",
        text: "When do you need a gearbox flush and when do you need an oil change?",
        level: 3,
      },
      {
        type: "paragraph",
        text: "The signs that the transmission oil should be changed are easy to recognize: There is sluggish starting or vibrations.",
      },
      {
        type: "paragraph",
        text: "On the other hand, jerky and delayed gear shifts or very delayed gear changes indicate that simply changing the transmission oil is no longer sufficient and that a transmission flush is necessary.",
      },
      {
        type: "emphasis",
        text: "Good to know: Transmission flushing should be carefully considered for automatic transmissions with particularly high mileages of over 150,000 km, as the mechanical stress on sensitive components can quickly cause damage and render the automatic transmission unusable. Individual consideration, including the methodology, is therefore essential in every case!",
      },
      {
        type: "heading",
        text: "What to look out for when changing the oil?",
        level: 3,
      },
      {
        type: "paragraph",
        text: "If - as many manufacturers still recommend - you only check the fill level and leak tightness, there is a chance that an urgently needed oil change will be overlooked: With increasing age, not only does the viscosity of the oil decrease, but the additives added also become depleted.",
      },
      {
        type: "paragraph",
        text: "This is particularly relevant for automatic transmissions with wet clutches, where the friction lining floats in the transmission oil, as different types of abrasion can accumulate in the oil. Although the hydraulic filter can absorb some of the abrasion and thus prevent deposits, sooner or later every filter medium becomes clogged and the components are impaired. This affects the tooth flanks and running surfaces of the gear wheels, among other things.",
      },
      {
        type: "emphasis",
        text: "The MEYLE recommendation: To avoid gearbox damage, the gearbox oil should ideally be changed after 80,000 - 120,000* kilometers.",
      },
      {
        type: "paragraph",
        text: "*Please follow the manufacturer's instructions.",
      },
    ],
    cta: {
      label: "Discover MEYLE transmission oil change KITs",
      href: "/products/drive-components/transmission-oil-change",
    },
  },
  {
    id: "filters",
    slug: "not-all-filters-are-the-same-how-do-you-find-the-right-one",
    category: "Blog post",
    tags: ["Blog post"],
    title: "Not all filters are the same - how do you find the right one?",
    image: "/images/news/filters.jpg",
    href: "/content/not-all-filters-are-the-same-how-do-you-find-the-right-one",
    excerpt:
      "Cabin, oil, air and fuel filters look similar on the shelf – but media, sealing and fit decide whether they protect the vehicle or create a comeback.",
    date: "05.12.2025",
    body: [
      {
        type: "paragraph",
        text: "Filters are among the most frequently replaced parts in the workshop. That makes them an easy sale – and an easy source of errors when the wrong media or a poor seal is installed.",
      },
      {
        type: "paragraph",
        text: "Cabin filters in particular have moved far beyond basic pollen screens. Modern options include activated carbon, antibacterial layers, HEPA media and NOx capture – especially relevant for electric vehicles such as the Tesla Model Y.",
      },
      {
        type: "paragraph",
        text: "MEYLE ORIGINAL and MEYLE PD filters are specified for OE-compliant fit and clear performance. Catalog data links vehicle, engine and application so wholesale and workshops find the correct part without guesswork.",
      },
      {
        type: "paragraph",
        text: "Choosing the right filter protects engines, interiors and customer trust – and turns a routine job into a quality conversation at the counter.",
      },
    ],
  },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}

/** @deprecated use newsArticles */
export const news = newsArticles;
