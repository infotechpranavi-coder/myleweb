const img = {
  mechanic: "/images/hero/mechanic.jpg",
  workshop: "/images/hero/workshop.jpg",
  contact: "/images/hero/contact.jpg",
  factory: "/images/pages/factory.jpg",
  quality: "/images/pages/quality.jpg",
  zinc: "/images/news/zinc.jpg",
  air: "/images/news/air-suspension.jpg",
  trans: "/images/news/transmission.jpg",
  filters: "/images/news/filters.jpg",
  training: "/images/pages/training.jpg",
};

export type ProductGroup = {
  slug: string;
  title: string;
  headline: string;
  description: string;
  cardText: string;
  image: string;
  introTitle: string;
  introBody: string;
  benefits: { title: string; text: string }[];
  bodyTitle: string;
  body: string;
  marquee: string;
};

export type ProductCategory = {
  slug: string;
  navLabel: string;
  headline: string;
  description: string;
  image: string;
  introTitle: string;
  introBody: string;
  standFor: string[];
  marquee: string;
  benefits: { title: string; text: string }[];
  upgradeTitle: string;
  upgradeBody: string;
  groups: ProductGroup[];
  closing: [{ title: string; body: string }, { title: string; body: string }];
  training: { title: string; body: string };
};

function g(
  group: ProductGroup,
): ProductGroup {
  return group;
}

export const productCategoryPages: ProductCategory[] = [
  {
    slug: "steering-and-suspension-parts",
    navLabel: "Steering and suspension parts",
    headline: "Do you expect more of your suspension spare parts?",
    description:
      "We do, too. AUTOPART has the solutions for your demands – with durable, reliable steering and suspension parts.",
    image: img.mechanic,
    introTitle: "Steering? Precise. Driving? Safe. Durability? AUTOPART.",
    introBody:
      "Steering and suspension is more than spare parts. It is passion in action and technical expertise. We understand what workshops really need – because we listen, consider every aspect and tailor solutions accordingly. Our products deliver the precision, reliability and safety professionals expect. And we keep expanding the range – with a focus on customers and top quality standards.",
    standFor: [
      "A perfect fit and durability",
      "Advanced spare parts engineered in-house",
      "Extraordinary quality based on our own standards",
      "Optimised design and a longer service life in the AUTOPART HD range",
    ],
    marquee: "Suspension. Steering. Control. ",
    benefits: [
      { title: "A perfect fit", text: "Fast installation, a perfect fit" },
      { title: "Advanced technology", text: "Built for precision and durability – engineered in-house" },
      { title: "AUTOPART HD benefits", text: "Higher durability with enhanced alternatives to the original" },
      { title: "Simple identification", text: "Data management that makes it a breeze to find the right part" },
    ],
    upgradeTitle: "Many call it a spare part. We call it an upgrade.",
    upgradeBody:
      "Why settle for standard if there’s a better alternative? Our range of steering and suspension parts offers a perfect fit and durability, and is largely manufactured at our own plants. AUTOPART HD parts are technically enhanced, in some cases exceed the original and last longer than many others – which is why there’s a 4-year guarantee on all HD parts. Because an upgrade is better than just a replacement.",
    groups: [
      g({
        slug: "stabilisers",
        title: "Stabilisers and stabiliser links",
        headline: "Better cornering, less swaying.",
        description: "Keep the suspension on track – even when the road won’t.",
        cardText:
          "Highly resistant, robust and always ready to go – often even better and more durable than the original. Simply install and say goodbye to swaying.",
        image: img.zinc,
        introTitle: "Stability you can feel in every corner",
        introBody:
          "Stabilisers and stabiliser links keep body roll in check. AUTOPART ORIGINAL and HD variants use heavy-duty materials and, in HD, larger ball heads and forged aluminium where OE often uses plastic.",
        benefits: [
          { title: "Less roll", text: "Confident cornering even on uneven roads" },
          { title: "HD upgrade", text: "Larger ball heads reduce surface pressure and wear" },
          { title: "Metal, not plastic", text: "Forged aluminium on selected MEB and EV applications" },
          { title: "4-year HD guarantee", text: "On all AUTOPART HD stabiliser links" },
        ],
        bodyTitle: "An upgrade for your suspension",
        body: "The HD stabiliser link for the VW MEB platform is a typical AUTOPART solution: increased ball-head diameter, forged aluminium instead of plastic, and a four-year guarantee.",
        marquee: "Stay on track. ",
      }),
      g({
        slug: "tie-rod-components",
        title: "Tie rod components",
        headline: "Precision for safe driving behaviour",
        description: "Tie rods, axial rods, end assemblies and boots – ORIGINAL and HD.",
        cardText:
          "Precise, reliable power transmission in the steering system. HD variants add improved ball joints, special lubricants and a much longer service life.",
        image: img.quality,
        introTitle: "Full steering power ahead",
        introBody:
          "Whether it’s a tie rod, axial rod or boot set, AUTOPART produces spare parts with an OE-compliant fit that are often better than the original. The pre-assembled tie rod – end assembly, axial rod and boot with clamps under one number – is a workshop favourite.",
        benefits: [
          { title: "Larger HD ball heads", text: "Lower stress, less wear, longer service life" },
          { title: "Pre-assembled", text: "All attachment parts under a single number" },
          { title: "Special lubricants", text: "HD joints designed for lasting precision" },
          { title: "Boot sets", text: "Tailored protection for joints after repair" },
        ],
        bodyTitle: "The tie rod popular with workshops",
        body: "Fully pre-assembled tie rods save time from order to installation. Available as AUTOPART ORIGINAL and as an enhanced HD variant that is better than the OE part.",
        marquee: "Full steering power ahead. ",
      }),
      g({
        slug: "control-arms",
        title: "Control arms",
        headline: "AUTOPART control arms last and last.",
        description: "Invest in control arms for safe driving over the long term.",
        cardText:
          "Available as AUTOPART ORIGINAL and HD, our control arms stabilise the suspension and ensure accurate wheel control – for years to come.",
        image: img.factory,
        introTitle: "Safe suspension for long to come",
        introBody:
          "As the link between wheels and body, control arms are essential for safety and comfort. AUTOPART HD uses high-quality materials, improved ball pins, wear-resistant rubber mounts and modern coatings – including zinc flake on VW Group rear-axle arms.",
        benefits: [
          { title: "Very durable", text: "HD lasts much longer than comparable OE parts" },
          { title: "Optimised design", text: "Improved ball pins and high-strength materials" },
          { title: "Safe and protected", text: "Coatings that stand up to salt and stone impact" },
          { title: "Perfect fit", text: "In-house production and stringent quality controls" },
        ],
        bodyTitle: "Engineered in Hamburg – used around the world",
        body: "HD rear-axle control arms for Golf, Octavia, Leon and more, plus quiet-running aluminium arms for Tesla Model 3 and Y. 4-year guarantee on HD.",
        marquee: "AUTOPART’s premium control arms. ",
      }),
      g({
        slug: "steering-support",
        title: "Steering support",
        headline: "Pressure you can trust",
        description: "Hydraulic pumps and hoses for reliable power steering.",
        cardText:
          "Precise pressure build-up in the servo system – for safe driving behaviour. Also available as an AUTOPART KIT including oil for flushing and filling.",
        image: img.workshop,
        introTitle: "Servo systems that stay precise",
        introBody:
          "Steering support components such as hydraulic pumps and hoses ensure reliable power steering. KITs add the oil needed to flush and fill – so the job is complete under one number.",
        benefits: [
          { title: "Precise pressure", text: "Pumps specified for consistent servo assist" },
          { title: "Durable hoses", text: "Built for heat, pressure and workshop replacement" },
          { title: "KIT with oil", text: "Flushing and filling included where specified" },
          { title: "OE-compliant fit", text: "Fast, leak-free installation" },
        ],
        bodyTitle: "Complete the repair, not just the part",
        body: "A pump without the right oil is a comeback waiting to happen. AUTOPART steering-support KITs bundle what the workshop actually needs.",
        marquee: "Steer with confidence. ",
      }),
      g({
        slug: "suspension-and-axle-mounts",
        title: "Suspension and axle mounts",
        headline: "Quiet. Precise. Durable.",
        description: "Rubber-to-metal parts that stabilise control and cut vibration.",
        cardText:
          "Whether ORIGINAL or HD, our rubber-to-metal parts boast precision, durability and high manufacturing quality.",
        image: img.air,
        introTitle: "Mounts that don’t leak their life away",
        introBody:
          "AUTOPART HD suspension mounts use a robust, fluid-free design. Unlike hydro bushings they are not prone to leaks. Rubber and geometry are designed for constant use and a longer service life.",
        benefits: [
          { title: "No hydro leaks", text: "Fluid-free HD design where OE uses hydro bushings" },
          { title: "Constant rigidity", text: "Precise steering and reduced vibration" },
          { title: "Longer service life", text: "Sturdy construction lowers maintenance costs" },
          { title: "4-year HD guarantee", text: "Additional peace of mind" },
        ],
        bodyTitle: "The reliable solution for your suspension",
        body: "ORIGINAL or HD – specified to keep noise down and wheel control accurate, mile after mile.",
        marquee: "Quiet. Precise. Durable. ",
      }),
      g({
        slug: "kits-and-repair-solutions",
        title: "KITs and repair solutions",
        headline: "Everything’s included and it fits",
        description: "Cleverly compiled sets for quick installation – because time is money.",
        cardText:
          "No need to search for individual parts. AUTOPART KITs and repair kits make steering and suspension repairs as simple as possible.",
        image: img.contact,
        introTitle: "Our KITs in steering & suspension",
        introBody:
          "Whether for a quick repair or a long-lasting HD upgrade, KITs save time, simplify installation and fulfil AUTOPART standards. Control-arm kits, pre-assembled tie rods and complete repair sets – all under one number.",
        benefits: [
          { title: "One number", text: "All attachment parts in a complete package" },
          { title: "Faster jobs", text: "Less picking, fewer missing pieces" },
          { title: "Lower logistics cost", text: "Reduced packaging, storage and transport" },
          { title: "HD options", text: "Technically upgraded kits with a 4-year guarantee" },
        ],
        bodyTitle: "Stabiliser repairs made easy",
        body: "From Mercedes-Benz W205 HD control arms with enlarged ball studs to complete attachment kits – workshop-ready from the box.",
        marquee: "All in. One number. ",
      }),
    ],
    closing: [
      {
        title: "Which is the better part? The one that instantly fits.",
        body: "Spare-part chaos? Not with us. Our range provides optimal market coverage, a perfect fit, reliability and high availability. Unique data management saves time, minimises returns and lets you find any component in a flash.",
      },
      {
        title: "Fits. Lasts. Runs.",
        body: "Every minute and every part counts at the workshop. Durable steering and suspension parts offer a perfect fit and withstand difficult conditions – quality that’s easy to install and satisfies customers over the long term. Especially when it comes to HD.",
      },
    ],
    training: {
      title: "A focus on steering & suspension",
      body: "AUTOPART training courses offer valuable knowledge for day-to-day work – from control arms to tie-rod replacement. Learn more and register now.",
    },
  },
  {
    slug: "brakes",
    navLabel: "Brakes",
    headline: "AUTOPART: Braking like a pro",
    description:
      "Don’t compromise when it comes to safety. AUTOPART brake systems ensure confident driving and reliable performance.",
    image: img.factory,
    introTitle: "Simple installation for lasting excitement",
    introBody:
      "Say goodbye to constant brake replacement. AUTOPART brake components are made from high-quality materials using modern production technologies – durability, proven quality and a perfect fit. Drive with confidence, mile after mile.",
    standFor: [
      "The perfect brake solution for every vehicle",
      "Tested quality according to AUTOPART specifications – for maximum safety",
      "AUTOPART ORIGINAL: perfectly fitting spare parts in original quality",
      "AUTOPART PD: improved braking performance for the highest demands",
    ],
    marquee: "Effective braking to get ahead. ",
    benefits: [
      { title: "Long service life", text: "Safe and reliable braking – thanks to the best materials" },
      { title: "Optimum braking performance", text: "Maximum safety and a superior driving experience" },
      { title: "Simple installation", text: "A perfect fit like the original – fast workshop work" },
      { title: "Comprehensive range", text: "Brake solutions for almost every vehicle on the European market" },
    ],
    upgradeTitle: "Looking for the right brake components? Here they are!",
    upgradeBody:
      "Whether disc, pad, hose, drum, shoe or warning contact, AUTOPART has the solution. ORIGINAL, PD and practical KITs leave nothing to be desired.",
    groups: [
      g({
        slug: "brake-discs",
        title: "Brake discs",
        headline: "Say goodbye to the jitters",
        description: "PD discs: vibration-free braking, anti-corrosion coating, ECE-certified.",
        cardText:
          "Optimal braking without vibrations, appealing aesthetics and easy-to-install accessories. A suitable model for just about any vehicle – ECE-certified, of course.",
        image: img.quality,
        introTitle: "Quality, safety and comfort",
        introBody:
          "AUTOPART PD discs are finely balanced for low disc-thickness variation – vibration-free concentricity, true running and parallelism. High-carbon content resists heat distortion.",
        benefits: [
          { title: "Low vibration", text: "Balanced for comfort from the first stop" },
          { title: "Coated", text: "Anti-corrosion finish – often no degreasing" },
          { title: "ECE R90", text: "Certified quality for legal peace of mind" },
          { title: "Fixing screw", text: "Included on 99% of variants" },
        ],
        bodyTitle: "Brakes you can count on",
        body: "From city traffic to the highway: optimum control and safe braking behaviour with AUTOPART PD.",
        marquee: "Feel the control. ",
      }),
      g({
        slug: "brake-pads",
        title: "Brake pads",
        headline: "Quiet as a whisper",
        description: "Low-noise braking with maximum safety – PD and ORIGINAL.",
        cardText:
          "High-quality pads pair low-noise performance with a long service life. Perfectly tailored to AUTOPART discs – available in PD and ORIGINAL.",
        image: img.workshop,
        introTitle: "Feel the difference from the first application",
        introBody:
          "PD pads use copper-free, heavy-metal-free friction mixes with reduced brake dust (Leaf Mark). A special coating shortens the bedding-in phase for fast, quiet, low-vibration performance.",
        benefits: [
          { title: "Low noise", text: "Comfortable braking without squeaking" },
          { title: "Copper-free PD", text: "Better for the environment, less dust" },
          { title: "Short bedding-in", text: "Coating for reliable performance from the start" },
          { title: "Matched to discs", text: "Designed as a system with AUTOPART rotors" },
        ],
        bodyTitle: "Durable and powerful",
        body: "Consistent braking even under high strain – the right choice when discs are replaced as a pair.",
        marquee: "Quiet. Strong. Clean. ",
      }),
      g({
        slug: "drum-brakes",
        title: "Drum brakes",
        headline: "Reliable – even behind the scenes",
        description: "Safe, durable drum-brake solutions for a wide vehicle park.",
        cardText:
          "Reliable braking performance and a long service life even behind the scenes. Available for a whole host of vehicles.",
        image: img.contact,
        introTitle: "Drum brakes that just work",
        introBody:
          "Still essential on many axles. AUTOPART drums, shoes and KITs deliver safe, long-lasting performance without hunting for small parts.",
        benefits: [
          { title: "Broad coverage", text: "Passenger cars and light commercials" },
          { title: "Durable shoes", text: "Friction materials specified for quiet, stable braking" },
          { title: "KIT complete", text: "Pre-assembled shoe KITs ready to install" },
          { title: "OE-compliant fit", text: "Faster jobs, fewer comebacks" },
        ],
        bodyTitle: "Pre-assembled and ready to install",
        body: "ORIGINAL brake-shoe KITs are an all-in-one replacement for drum brake shoes – all necessary components in AUTOPART quality.",
        marquee: "Safe. Simple. Ready. ",
      }),
      g({
        slug: "brake-hydraulics",
        title: "Brake hydraulics",
        headline: "The heart of your braking system",
        description: "Hoses, lines and hydraulics that keep pressure where it belongs.",
        cardText:
          "AUTOPART brake hydraulic components ensure optimal function and safety, allowing you to maintain control in every situation.",
        image: img.mechanic,
        introTitle: "Pressure you can stake a stop on",
        introBody:
          "Brake lines and hoses are the heart of the system. AUTOPART hydraulics are specified for heat, pressure and a perfect fit – so pedal feel stays consistent.",
        benefits: [
          { title: "Pressure-tight", text: "Specified for modern ABS/ESP systems" },
          { title: "Heat resistant", text: "Materials that last in the wheel arch" },
          { title: "Perfect fit", text: "Correct lengths and fittings first time" },
          { title: "Safety first", text: "No compromise on a safety-critical circuit" },
        ],
        bodyTitle: "Control in every situation",
        body: "From hose to line: hydraulics that keep the rest of the brake system honest.",
        marquee: "Hold the pressure. ",
      }),
      g({
        slug: "two-component-discs",
        title: "Two-component PD discs",
        headline: "Less weight. More power.",
        description: "Lightweight hats, high-carbon rings – for BMW, Mercedes-Benz and more.",
        cardText:
          "Reduced weight, higher performance, a long service life and an appealing design. Long-lasting driving comfort without vibrations.",
        image: img.zinc,
        introTitle: "Lightweight design meets an extraordinary pedal feel",
        introBody:
          "Two-component PD discs rivet an aluminium or stamped-steel hat to a high-carbon cast friction ring. Lower unsprung mass, OE-like fit, ECE R90, coating that often skips degreasing, and a fixing screw included.",
        benefits: [
          { title: "Lighter", text: "Fuel and CO2 benefits versus one-piece discs" },
          { title: "High carbon", text: "Resistant to heat distortion, longer life" },
          { title: "BMW & Mercedes", text: "3 to 8 Series, X3–X5, Z4, C-Class, E-Class and more" },
          { title: "Workshop-friendly", text: "Coating plus fixing screw on almost every variant" },
        ],
        bodyTitle: "Fits like the original, performs like PD",
        body: "Developed for sophisticated models that need more than a standard one-piece disc.",
        marquee: "Light. Strong. PD. ",
      }),
    ],
    closing: [
      {
        title: "Brakes you can count on",
        body: "Your vehicle deserves components that not only work, but also inspire. ORIGINAL for a perfect OE-compliant fit, PD for improved performance – copper-free and Leaf Mark rated.",
      },
      {
        title: "Next-level brakes",
        body: "Tailor-made solutions for almost every current model. Intelligent data management for a quick search. Efficient kits: pre-assembled shoes or discs with wheel bearing.",
      },
    ],
    training: {
      title: "Brake problems?",
      body: "Solutions and tips from a professional – including damage patterns, causes and remedies. Discover AUTOPART brake training.",
    },
  },
  {
    slug: "drive-components",
    navLabel: "Drive components",
    headline: "Robust. Perfect fit. Strong.",
    description:
      "Drive shafts, joints and flex discs that transfer immense forces – with precision and workshop-ready KITs.",
    image: img.workshop,
    introTitle: "Power that lasts – and fits first time",
    introBody:
      "A worn drive shaft does not only reduce comfort – it is a safety risk. AUTOPART ORIGINAL shafts are forged from tough steel, finished with durable boots, clamps and high-performance greases. HD flex discs add heat-resistant rubber, higher torque capacity and a 4-year guarantee.",
    standFor: [
      "Tough special steels and heat-resistant compounds",
      "OE-compliant fit with tight production tolerances",
      "High-performance greases in CV and tripod joints",
      "HD flex discs up to 3,000 Nm and 130 °C",
    ],
    marquee: "Power. Precision. Drive. ",
    benefits: [
      { title: "Tough materials", text: "Special steels for high loads" },
      { title: "OE-compliant fit", text: "Tight tolerances for confident installation" },
      { title: "Smooth running", text: "Water-repellent high-performance greases" },
      { title: "HD upgrades", text: "Flex discs with a 4-year guarantee" },
    ],
    upgradeTitle: "Drivetrain parts that earn their keep",
    upgradeBody:
      "From complete shafts to joint kits and Tesla drive-unit oil change KITs – everything coordinated, nothing left to chance.",
    groups: [
      g({
        slug: "drive-shafts",
        title: "Drive shafts",
        headline: "Robust. Perfect fit. Strong.",
        description: "Forged shafts for passenger cars and vans.",
        cardText:
          "Forged from wear-resistant steel with coordinated joints, boots and clamps for a long service life – including ball-spline technology on selected applications.",
        image: img.factory,
        introTitle: "Forces that never take a day off",
        introBody:
          "AUTOPART ORIGINAL drive shafts are developed to high production standards. Stringent controls throughout production guarantee precision and reliability. Lightweight displacement units improve driving dynamics on applications such as the Volvo XC60 I.",
        benefits: [
          { title: "Forged steel", text: "Wear-resistant construction for high torque" },
          { title: "Durable boots", text: "Boots and clamps specified as a system" },
          { title: "Ball spline", text: "Outstanding traction on selected SUVs" },
          { title: "OE-compliant", text: "Fit and function for current model ranges" },
        ],
        bodyTitle: "Top quality and outstanding traction",
        body: "Lightweight design for optimal driving dynamics and efficiency – without compromising strength.",
        marquee: "Transmit. Last. Drive. ",
      }),
      g({
        slug: "flex-discs",
        title: "HD flex discs",
        headline: "Smooth power transmission",
        description: "Heat-resistant HD flex discs for rear- and all-wheel drive.",
        cardText:
          "Special design reduces heat and friction. Heat-resistant rubber blend up to 130 °C and torque capacity up to 3,000 Nm – 4-year guarantee.",
        image: img.zinc,
        introTitle: "A drive that lasts and lasts",
        introBody:
          "Flex discs in RWD and AWD vehicles take extreme forces. AUTOPART HD uses an optimised winding technology, high-temperature rubber and a yarn structure for high breaking load.",
        benefits: [
          { title: "Up to 3,000 Nm", text: "Torque capacity that exceeds many OE parts" },
          { title: "130 °C rubber", text: "Reliable in extreme heat" },
          { title: "Quieter drivetrain", text: "High torsional rigidity, fewer vibrations" },
          { title: "4-year guarantee", text: "On every AUTOPART HD flex disc" },
        ],
        bodyTitle: "Better than OE where it counts",
        body: "Precisely fitting like OE but technically improved – joint washers that withstand extreme forces permanently.",
        marquee: "HD = High Durability. ",
      }),
      g({
        slug: "transmission-oil-change",
        title: "Transmission oil change",
        headline: "Automatic transmission oil change?",
        description: "KITs, filters and know-how for a complete fluid service.",
        cardText:
          "Everything needed for a professional automatic-transmission or EV drive-unit oil change – including Tesla kits with filter and magnetic drain plug.",
        image: img.trans,
        introTitle: "Flush versus change – done properly",
        introBody:
          "AUTOPART KITs bundle filter, plugs and the parts workshops actually use. Tesla drive-unit kits comply with OE standards for Models S, 3, X and Y.",
        benefits: [
          { title: "Complete KIT", text: "Filter, magnetic drain plug and necessary parts" },
          { title: "OE-compliant", text: "Specified for Tesla drive units and selected automatics" },
          { title: "Less picking", text: "One number instead of a parts hunt" },
          { title: "Training support", text: "Courses on automatic transmission oil change" },
        ],
        bodyTitle: "Everything you need",
        body: "Simple oil change with the right filter and plugs – efficient, reliable maintenance.",
        marquee: "Fill. Filter. Finish. ",
      }),
    ],
    closing: [
      {
        title: "Harmonious components",
        body: "Joints, greases, boots and shafts are coordinated – durable, smooth-running and workshop-friendly.",
      },
      {
        title: "Safety in the drivetrain",
        body: "A worn shaft or flex disc is not only uncomfortable. AUTOPART parts restore strength before it becomes a risk.",
      },
    ],
    training: {
      title: "Drive components training",
      body: "Increase expertise in joints, shafts and transmission services with practical AUTOPART courses.",
    },
  },
  {
    slug: "suspension-and-damping",
    navLabel: "Suspension & damping parts",
    headline: "For confidence on the road",
    description:
      "AUTOPART suspension and damping parts combine driving comfort and control – so you can tackle every pothole with ease.",
    image: img.air,
    introTitle: "Simple replacement for lasting performance",
    introBody:
      "An investment that pays off. High-quality materials and precision manufacturing you can feel. Shock absorbers, coil springs, dust protector kits and strut mounts as ORIGINAL, PD, HD and KITs – with warehouse-friendly consolidation of OE variants.",
    standFor: [
      "High market coverage for current models",
      "OE-compliant, 100% tested quality",
      "Data management for simple part identification",
      "Warehouse-friendly product consolidation",
    ],
    marquee: "Motion and control. ",
    benefits: [
      { title: "Reliably durable", text: "Long-lasting thanks to high manufacturing quality" },
      { title: "Technically refined", text: "Strut mounts also in HD – better than many OE parts" },
      { title: "Perfect fit", text: "Coverage for a large share of the European fleet" },
      { title: "Smart data", text: "The right part identified in a flash" },
    ],
    upgradeTitle: "Everything you need for your suspension – from a single source",
    upgradeBody:
      "Shock absorbers, coil springs, dust protector kits or strut mounts: ORIGINAL, PD, HD and practical KITs leave nothing to be desired.",
    groups: [
      g({
        slug: "shock-absorbers",
        title: "Shock absorbers",
        headline: "Safety and comfort in every pothole",
        description: "True-to-OE shocks, including comfort-optimised Tesla units.",
        cardText:
          "True-to-OE design, corrosion protection and full quality testing – for around 70% of the European fleet, and rising. Including Model 3 and Y comfort upgrades.",
        image: img.mechanic,
        introTitle: "Damping you can feel",
        introBody:
          "AUTOPART shock absorbers are manufactured with uncompromising corrosion protection and seamless quality testing. Specially engineered units for Tesla Model 3 and Y deliver noticeably improved driving performance.",
        benefits: [
          { title: "OE design", text: "High-precision manufacturing, correct damping curves" },
          { title: "Corrosion protection", text: "Built for salt, water and stone impact" },
          { title: "Tesla comfort", text: "Optimised damping for Model 3 and Y" },
          { title: "Fleet coverage", text: "Around 70% of European passenger cars" },
        ],
        bodyTitle: "For high standards. And potholes.",
        body: "Made for everyone who demands a higher level of driving but doesn’t trust the road.",
        marquee: "Motion and control. ",
      }),
      g({
        slug: "coil-springs",
        title: "Coil springs",
        headline: "Correct height. Balanced comfort.",
        description: "OE-tuned springs with smart consolidation of variants.",
        cardText:
          "Fine-tuned to match OE height and comfort. Multiple OE variants consolidated without compromising performance or appearance.",
        image: img.quality,
        introTitle: "Fine-tuned to OE – easier to stock",
        introBody:
          "Clever consolidation reduces complexity for wholesale. High-quality corrosion protection, tested dimensional accuracy and installation-friendly details.",
        benefits: [
          { title: "Correct ride height", text: "Balanced comfort and safety" },
          { title: "Consolidated SKUs", text: "Fewer variants, same driving performance" },
          { title: "Corrosion protection", text: "Long-lasting appearance and function" },
          { title: "Workshop-friendly", text: "Installation details that save time" },
        ],
        bodyTitle: "Ideal for workshops, retailers and drivers",
        body: "Long-lasting quality and efficient repairs without a warehouse full of near-identical springs.",
        marquee: "Height. Comfort. Safety. ",
      }),
      g({
        slug: "strut-mounts",
        title: "Strut mounts",
        headline: "Smooth handling. Quiet cabin.",
        description: "ORIGINAL, HD or KIT – for a part that works hard every mile.",
        cardText:
          "Extraordinary damping quality and a long service life. Also in HD – better than many OE parts – and as a complete KIT.",
        image: img.workshop,
        introTitle: "Irritating sounds from the suspension?",
        introBody:
          "AUTOPART strut mounts restore quiet, precise steering. HD variants are reinforced for high strain with a 4-year guarantee.",
        benefits: [
          { title: "Quiet running", text: "Damping qualities that cut cabin noise" },
          { title: "HD reinforced", text: "Better than many OE mounts under load" },
          { title: "Perfect fit", text: "Fast, problem-free replacement" },
          { title: "KIT option", text: "A fully carefree package" },
        ],
        bodyTitle: "Engineered for performance",
        body: "Choose OE quality with ORIGINAL or reinforced HD for an even longer service life.",
        marquee: "Quiet. Precise. Mounted. ",
      }),
      g({
        slug: "dust-protector-kits",
        title: "Dust protector kits",
        headline: "Give shock absorbers the protection they deserve",
        description: "UV-resistant caps, boots and buffers – ready to fit.",
        cardText:
          "Protect piston rods from dirt, salt, water and stone impact. Durable plastic, easy to install – the perfect companion for new shocks.",
        image: img.filters,
        introTitle: "Recommended accessories – for a reason",
        introBody:
          "Ready-to-fit kits for a large share of EU cars. TecDoc-style recommended accessories: replace dust protection in the same process as the shock.",
        benefits: [
          { title: "Dirt and salt", text: "Keeps piston rods clean and corrosion-free" },
          { title: "UV-resistant", text: "Plastic that lasts in the wheel arch" },
          { title: "Ready to fit", text: "One process with shock replacement" },
          { title: "Broad coverage", text: "High-precision kits for the majority of EU cars" },
        ],
        bodyTitle: "Longer shock absorber service life",
        body: "Effective protection day after day – inexpensive insurance for a new damper.",
        marquee: "Protect the piston. ",
      }),
      g({
        slug: "air-suspension",
        title: "Air suspension",
        headline: "Premium comfort in the independent aftermarket",
        description: "Struts, bellows and height sensors – OE-spec, leak-tight.",
        cardText:
          "Precision struts, air springs and sensors for Audi, BMW, Mercedes-Benz, Land Rover and more – factory-like height and comfort.",
        image: img.air,
        introTitle: "As if straight from the factory",
        introBody:
          "Developed to OE specifications: tested sensors, high-quality construction and a precise fit for consistent vehicle height and driving performance.",
        benefits: [
          { title: "System integration", text: "Struts, bellows and height sensors" },
          { title: "Leak tightness", text: "Tested construction for lasting pressure" },
          { title: "Premium applications", text: "Audi, BMW, Mercedes-Benz, Land Rover and more" },
          { title: "Workshop-ready", text: "Efficient repairs in line with market value" },
        ],
        bodyTitle: "Air suspension without the dealer",
        body: "Independent workshops can repair modern air systems with AUTOPART parts that fit and hold.",
        marquee: "Ride height. Held. ",
      }),
    ],
    closing: [
      {
        title: "Maximum market coverage for your success",
        body: "High coverage, OE-compliant tested quality, unique data management and warehouse-friendly consolidation.",
      },
      {
        title: "Quality that pays off",
        body: "High manufacturing standards, customer-satisfying durability, a perfect fit and fast, proper installation.",
      },
    ],
    training: {
      title: "More knowledge. Better repairs.",
      body: "Shock absorber advice, typical damage patterns and causes – plus practical damping courses.",
    },
  },
  {
    slug: "filters",
    navLabel: "Filters",
    headline: "Not all filters are the same",
    description:
      "Cabin, oil, air and fuel filtration from AUTOPART ORIGINAL and PD – including HEPA solutions for electric vehicles.",
    image: img.filters,
    introTitle: "Cleaner systems. Clearer air. Better jobs.",
    introBody:
      "The right filter protects engines, interiors and customers. ORIGINAL covers everyday maintenance. PD steps up with activated carbon, antibacterial layers and NOx capture. Pair filters with KITs under one number.",
    standFor: [
      "OE-compliant fit and reliable sealing",
      "PD HEPA, activated carbon and NOx capture",
      "Sets and KITs that reduce picking time",
      "Passenger cars, vans and a growing EV range",
    ],
    marquee: "Clean air. Clean oil. ",
    benefits: [
      { title: "OE-compliant fit", text: "Fast installation and reliable sealing" },
      { title: "PD performance", text: "HEPA, carbon and NOx capture for modern cabins" },
      { title: "Workshop-friendly", text: "Sets and KITs that reduce picking time" },
      { title: "Broad coverage", text: "Combustion, hybrid and electric applications" },
    ],
    upgradeTitle: "How do you find the right one?",
    upgradeBody:
      "Cabin, oil, air or fuel – specified for the vehicle, not a generic ‘will fit’. PD where drivers expect more than standard.",
    groups: [
      g({
        slug: "cabin-air-filters",
        title: "Cabin air filters",
        headline: "Breathe a sigh of relief",
        description: "From pollen filters to PD HEPA sets with NOx boxes.",
        cardText:
          "PD HEPA sets with pre-filters and NOx capture – notably for Tesla Model Y. Antibacterial carbon layers and lower component weight.",
        image: img.filters,
        introTitle: "Air quality customers can feel",
        introBody:
          "The AUTOPART PD HEPA cabin air filter set for Tesla Model Y: 2 pre-filters + 2 HEPA filters. NOx box permanently captures nitrogen oxides. About 50% lower component weight.",
        benefits: [
          { title: "HEPA", text: "Optimal air quality, reduced allergy risk" },
          { title: "NOx box", text: "Permanently captures nitrogen oxides" },
          { title: "Antibacterial carbon", text: "PD pre-filter with an extra layer of protection" },
          { title: "Lighter design", text: "Around 50% lower component weight" },
        ],
        bodyTitle: "Captures NOx – and the hearts of customers",
        body: "Ideal for workshops that want a visible, sellable upgrade on EV cabin air.",
        marquee: "Breathe PD. ",
      }),
      g({
        slug: "oil-filters",
        title: "Oil filters",
        headline: "Protection for engines and drive units",
        description: "Engine and EV drive-unit filtration for professional oil changes.",
        cardText:
          "Specified for combustion engines and electric drive units – including Tesla oil-change KITs with filter and magnetic drain plug.",
        image: img.trans,
        introTitle: "The filter that belongs in the KIT",
        introBody:
          "AUTOPART oil filters are part of complete change KITs where it matters – so workshops don’t mix OE-looking parts with the wrong media.",
        benefits: [
          { title: "Correct media", text: "Specified for the oil and the application" },
          { title: "EV drive units", text: "Tesla S/3/X/Y kits with magnetic drain plug" },
          { title: "OE-compliant", text: "Fit and bypass performance as specified" },
          { title: "KIT pairing", text: "Filter plus plugs and seals under one number" },
        ],
        bodyTitle: "Efficient, reliable maintenance",
        body: "Everything you need for a clean oil change – combustion or electric.",
        marquee: "Filter. Drain. Done. ",
      }),
      g({
        slug: "air-and-fuel-filters",
        title: "Air and fuel filters",
        headline: "Protect the intake. Protect the injectors.",
        description: "Engine air and fuel-side filtration for a long service life.",
        cardText:
          "Engine air filtration for efficient combustion and fuel filters that protect injectors and pumps.",
        image: img.factory,
        introTitle: "Everyday filters, AUTOPART standards",
        introBody:
          "Air and fuel filters that seal, flow and last – ORIGINAL quality for workshops that cannot afford a cheap bypass.",
        benefits: [
          { title: "Sealed fit", text: "No unfiltered air or fuel around the element" },
          { title: "Stable media", text: "Holds up in heat and moisture" },
          { title: "Pump protection", text: "Fuel-side filtration that injectors deserve" },
          { title: "Fast install", text: "OE-compliant housings and seals" },
        ],
        bodyTitle: "Maintenance that protects high-value parts",
        body: "A correct air or fuel filter is cheaper than a pump, injector or MAF sensor.",
        marquee: "Clean in. Power out. ",
      }),
    ],
    closing: [
      {
        title: "The right filter, first time",
        body: "Catalog data and vehicle links so wholesale and workshops pick the correct media – not a near miss.",
      },
      {
        title: "PD where it shows",
        body: "Cabin air is a customer-facing upgrade. PD HEPA and NOx capture are easy to explain and easy to sell.",
      },
    ],
    training: {
      title: "Not all filters are the same",
      body: "Learn how to specify cabin, oil, air and fuel filters – including EV cabin and drive-unit applications.",
    },
  },
  {
    slug: "thermal-management",
    navLabel: "Thermal management & engine cooling",
    headline: "Keep your cool",
    description:
      "Water pumps, thermostats, hoses and tanks that protect engines and keep modern thermal systems in range.",
    image: img.quality,
    introTitle: "Your engine. Our cooling solutions.",
    introBody:
      "Reliable cooling is essential for durability and performance. AUTOPART offers ORIGINAL and HD water pumps with SiC/SiC seals, a 100,000-mile guarantee when the system is professionally flushed, and a 4-year guarantee on HD pumps.",
    standFor: [
      "Broad vehicle compatibility for market coverage",
      "Quality tested to AUTOPART specifications",
      "ORIGINAL: OE-compliant parts for safe use",
      "HD: robust solutions with a longer service life",
    ],
    marquee: "Thermal management. Engine cooling. ",
    benefits: [
      { title: "Long service life", text: "Designed for high mileage and contamination resistance" },
      { title: "Optimal cooling", text: "Stable operating temperature for efficiency and protection" },
      { title: "Perfect fit", text: "OE-compliant dimensions for leak-free installation" },
      { title: "Comprehensive range", text: "Pumps, thermostats, tanks, hoses and auxiliaries" },
    ],
    upgradeTitle: "The right cooling component for your vehicle",
    upgradeBody:
      "Water pump, thermostat or radiator hose – durable, high-performance components perfectly tailored to the vehicle.",
    groups: [
      g({
        slug: "water-pumps",
        title: "Water pumps",
        headline: "No compromises when it comes to engine cooling",
        description: "ORIGINAL and HD pumps with SiC/SiC seals and real guarantees.",
        cardText:
          "Wear-resistant SiC/SiC seals on HD and most ORIGINAL pumps. 100,000-mile guarantee after professional flushing; HD adds four years and upgraded bearings.",
        image: img.factory,
        introTitle: "Coolant that keeps moving",
        introBody:
          "AUTOPART water pumps offer aftermarket quality with a 100,000-mile guarantee if the cooling system is professionally flushed. HD bearings use four-point or angular ball bearings depending on the application.",
        benefits: [
          { title: "SiC/SiC seal", text: "Resists abrasive particles and sealant in the system" },
          { title: "100,000-mile guarantee", text: "When the system is flushed on installation" },
          { title: "HD bearings", text: "Better radial and axial support" },
          { title: "4-year HD", text: "On every AUTOPART HD water pump" },
        ],
        bodyTitle: "Flush first. Then trust the pump.",
        body: "We recommend thorough cleaning before replacement. Deposits are the enemy of even the best seal.",
        marquee: "Keep your cool. ",
      }),
      g({
        slug: "thermostats",
        title: "Thermostats",
        headline: "Always in the right temperature range",
        description: "Precise opening and closing – tested for leak tightness and function.",
        cardText:
          "Prevent overheating or undercooling with high-precision thermostats. OE-compliant fit according to AUTOPART specifications.",
        image: img.workshop,
        introTitle: "Maximum engine performance starts with temperature",
        introBody:
          "AUTOPART thermostats bring the engine to operating temperature quickly and keep it stable. Opening and closing temperatures are tested; plastic and metal components withstand large swings.",
        benefits: [
          { title: "Precise control", text: "Opens and closes in the ideal range" },
          { title: "Tested", text: "Leak tightness, dimensional stability, function" },
          { title: "Efficient", text: "Faster warm-up, better consumption" },
          { title: "Durable", text: "Reliable through large temperature fluctuations" },
        ],
        bodyTitle: "A small part with expensive consequences",
        body: "A defective thermostat means overheating or inefficient running. AUTOPART parts are tested so that does not become a habit.",
        marquee: "Open. Close. Protect. ",
      }),
      g({
        slug: "hoses-and-tanks",
        title: "Hoses, tanks and auxiliaries",
        headline: "The rest of the cooling circuit",
        description: "Expansion tanks, EPDM radiator hoses, auxiliary pumps and charger intake hoses.",
        cardText:
          "Dimensionally stable tanks, durable EPDM hoses, auxiliary pumps against local overheating, and charger intake hoses for turbo efficiency.",
        image: img.contact,
        introTitle: "A system, not a single part",
        introBody:
          "Expansion tanks withstand pressure and extreme temperatures. Most radiator hoses are EPDM. Auxiliary pumps support modern engines. Charger intake hoses take turbo stress.",
        benefits: [
          { title: "Stable tanks", text: "Pressure and heat without losing shape" },
          { title: "EPDM hoses", text: "Heat, pressure and a perfect fit" },
          { title: "Auxiliary pumps", text: "Prevent localised overheating" },
          { title: "Charger hoses", text: "Turbo efficiency under extreme stress" },
        ],
        bodyTitle: "Efficient kits for the belt drive too",
        body: "Water pumps (some HD) with tensioners, idlers, belts and installation materials – when the job is a system repair.",
        marquee: "Circuit complete. ",
      }),
    ],
    closing: [
      {
        title: "Thermal management that impresses",
        body: "Broad compatibility, tested quality, ORIGINAL for OE-compliant use and HD for a longer service life.",
      },
      {
        title: "Efficient cooling for every repair",
        body: "Precise solutions, intelligent data, complete kits and technical support for professional repairs.",
      },
    ],
    training: {
      title: "Overheated?",
      body: "Learn the requirements of modern cooling systems and correct maintenance – including flushing before pump replacement.",
    },
  },
  {
    slug: "electronics",
    navLabel: "Electronics",
    headline: "Precision you can measure",
    description:
      "Sensors, switches and engine-management components that supply accurate values – even under heat, cold and high load.",
    image: img.contact,
    introTitle: "Signals the vehicle can trust",
    introBody:
      "Modern vehicles depend on precise electronic data. AUTOPART covers exhaust and engine management, temperature and pressure sensors, crankshaft and coolant sensors, plus repairs such as the oil stop cable for Mercedes-Benz.",
    standFor: [
      "Accurate values for efficient engine control",
      "Tested durability in heat, cold and load",
      "OE-compliant, plug-and-play fit where specified",
      "Workshop repairs that prevent costly ECU damage",
    ],
    marquee: "Sense. Control. Protect. ",
    benefits: [
      { title: "Accurate values", text: "Sensors that support efficient engine control" },
      { title: "Tested durability", text: "Built for extreme operating conditions" },
      { title: "OE-compliant fit", text: "Plug-and-play installation wherever possible" },
      { title: "Workshop solutions", text: "Targeted repairs that prevent control-unit damage" },
    ],
    upgradeTitle: "Components that function under pressure",
    upgradeBody:
      "Whether heat, cold or extreme loads – electronics designed to work reliably in the most demanding conditions.",
    groups: [
      g({
        slug: "exhaust-and-engine-management",
        title: "Exhaust & engine management",
        headline: "Efficiency and reliability",
        description: "Sensors that keep engine and exhaust control honest.",
        cardText:
          "Exhaust temperature and pressure, crankshaft and coolant temperature sensors – precise values for efficient, resource-conserving performance.",
        image: img.factory,
        introTitle: "Optimal exhaust and engine management",
        introBody:
          "High-quality materials and stringent controls: maximum durability, fewer downtimes, lower repair costs. Precision manufacturing for optimal function in the engine-management system.",
        benefits: [
          { title: "Precise sensors", text: "Values the ECU can actually use" },
          { title: "Harsh-duty", text: "Heat, cold and vibration as a daily diet" },
          { title: "Quality controlled", text: "Specified and tested to AUTOPART standards" },
          { title: "Fit first time", text: "Correct connectors and calibration ranges" },
        ],
        bodyTitle: "Precision and performance you can count on",
        body: "Innovative solutions in exhaust and engine management that make a measurable difference.",
        marquee: "Measure. Control. Last. ",
      }),
      g({
        slug: "oil-stop-cable",
        title: "Oil stop cable",
        headline: "Oil in the control unit? Not with us.",
        description: "Mercedes-Benz oil stop cable – tool-free protection for the ECU.",
        cardText:
          "The AUTOPART ORIGINAL oil stop cable reliably prevents costly damage from leaking engine oil – simple, effective, tool-free installation.",
        image: img.quality,
        introTitle: "A small part that saves a large bill",
        introBody:
          "A sturdy metal core stops oil spreading in the wiring harness. Protects sensors, actuators and the engine control unit. Precision fit for Mercedes-Benz engines M111, M271, M272 and M273 – covering millions of vehicles in Europe.",
        benefits: [
          { title: "Metal core", text: "Stops oil travelling through the harness" },
          { title: "ECU protection", text: "Sensors, actuators and control units stay dry" },
          { title: "Tool-free", text: "Plug-and-play installation" },
          { title: "Mercedes fit", text: "M111, M271, M272, M273" },
        ],
        bodyTitle: "Prevent the damage, don’t just diagnose it",
        body: "A known failure pattern with a manufacturer-style fix – typical AUTOPART thinking.",
        marquee: "Stop the oil. Save the ECU. ",
      }),
    ],
    closing: [
      {
        title: "Electronics for the independent aftermarket",
        body: "Not a trading mix of unknown sensors – specified, tested and documented so workshops can trust the signal.",
      },
      {
        title: "Data and parts together",
        body: "The right sensor is useless if the catalog is wrong. AUTOPART maintains applications so identification is fast.",
      },
    ],
    training: {
      title: "Electronics and sensors",
      body: "Optimise safety and efficiency with electronics and sensor training from AUTOPART.",
    },
  },
  {
    slug: "electromobility",
    navLabel: "Solutions for electromobility",
    headline: "Ready for the electric workshop",
    description:
      "More than 4,000 spare parts for hybrid and electric vehicles – plus training so independent workshops stay prepared.",
    image: img.mechanic,
    introTitle: "AUTOPART & electromobility",
    introBody:
      "Climate-friendly mobility is the future, and we help shape it in the independent aftermarket. The portfolio is growing: Tesla drive-unit oil kits, PD HEPA cabin filters, HD control arms for Model 3 and Y, HD stabiliser links for VW MEB, and high-voltage training.",
    standFor: [
      "4,000+ products for hybrid and electric vehicles",
      "Development, testing and production from a single source",
      "Prepared for growing EV repair demand",
      "Repair solutions that keep EVs in the IAM",
    ],
    marquee: "AUTOPART electrifies. ",
    benefits: [
      { title: "Comprehensive range", text: "More than 4,000 products for hybrid and electric vehicles" },
      { title: "Technical expertise", text: "Development, testing and production from a single source" },
      { title: "Future-proof", text: "Ready for the growing demand for e-vehicle repairs" },
      { title: "Sustainable innovation", text: "Repair solutions for sustainable mobility in the IAM" },
    ],
    upgradeTitle: "IAM:CONNECT – shaping electromobility together",
    upgradeBody:
      "How is electromobility changing the independent aftermarket? In close cooperation with workshops, dealers and experts we develop solutions that work in practice – technical expertise, specific products and a genuine exchange of ideas.",
    groups: [
      g({
        slug: "tesla-oil-change-kit",
        title: "Tesla oil change KIT",
        headline: "Everything you need for the Tesla drive unit",
        description: "Filter, magnetic drain plug and all necessary parts.",
        cardText:
          "Simple oil change with filter, magnetic drain plug and all necessary parts. Complies with Tesla OE standards for Models S, 3, X and Y.",
        image: img.trans,
        introTitle: "EV maintenance without the dealer queue",
        introBody:
          "The AUTOPART ORIGINAL oil change kit for the Tesla drive unit is a complete package for efficient, reliable maintenance.",
        benefits: [
          { title: "Complete package", text: "All parts incl. filter and magnetic drain plug" },
          { title: "OE standards", text: "Complies with Tesla specifications" },
          { title: "S/3/X/Y", text: "Efficient maintenance across the core Tesla range" },
          { title: "One number", text: "No missing plugs on the day" },
        ],
        bodyTitle: "Independent workshops, factory-level service",
        body: "A KIT that makes EV drivetrain oil service a standard workshop job.",
        marquee: "Charge the knowledge. Change the oil. ",
      }),
      g({
        slug: "hepa-cabin-filters",
        title: "PD HEPA cabin filters",
        headline: "Cabin air that EV drivers notice",
        description: "Tesla Model Y HEPA set with NOx capture.",
        cardText:
          "2 pre-filters + 2 HEPA filters, antibacterial carbon and a NOx box – about 50% lower component weight.",
        image: img.filters,
        introTitle: "Captures NOx and the hearts of customers",
        introBody:
          "PD cabin air is a visible EV workshop offer: cleaner air, a clear story, and a set that installs as a system.",
        benefits: [
          { title: "Dual HEPA", text: "Optimal air quality, reduced allergy risk" },
          { title: "NOx box", text: "Permanently captures nitrogen oxides" },
          { title: "Antibacterial carbon", text: "PD pre-filter with extra protection" },
          { title: "Lighter set", text: "Around 50% lower component weight" },
        ],
        bodyTitle: "Ideal for workshops and drivers",
        body: "A product that sells because the difference is in the air.",
        marquee: "Clean cabin. Electric drive. ",
      }),
      g({
        slug: "tesla-control-arms",
        title: "HD control arms for Tesla",
        headline: "No squeaking. 4-year warranty.",
        description: "Model 3 and Y HD control arms – quiet, precise, durable.",
        cardText:
          "High-strength aluminium, sealed ball joints and enlarged ball heads to stop rattling and squeaking on Model 3 and Y.",
        image: img.zinc,
        introTitle: "Long-lasting solution to rattling and squeaking",
        introBody:
          "FEM-optimised aluminium body, a sealed ball-joint design, increased ball-head diameter and specialised HD bushings – driving stability and a longer service life.",
        benefits: [
          { title: "High-strength aluminium", text: "Rigidity and safety reserves" },
          { title: "Sealed joint", text: "Absolute tightness in the new ball-joint design" },
          { title: "Larger ball head", text: "Less surface pressure, less wear" },
          { title: "HD bushings", text: "Specially developed for extended life" },
        ],
        bodyTitle: "AUTOPART solves a Tesla problem",
        body: "Installation-friendly HD arms that restore the quiet, precise drive customers expect.",
        marquee: "Quiet Tesla. HD. ",
      }),
      g({
        slug: "ev-training",
        title: "EV Experience training",
        headline: "Your springboard to the mobility revolution",
        description: "Hands-on high-voltage training with a certificate of competence.",
        cardText:
          "Small-group modules on high-voltage systems, wiring and batteries – on the vehicle, from practical experience. Structured 3-module program.",
        image: img.training,
        introTitle: "AUTOPART EV Experience Center",
        introBody:
          "Prepare the workshop for the change: maintenance, diagnosis and repair of Tesla and other EV platforms. Official certificate at the end. Manufacturer-independent service with certified high-voltage expertise.",
        benefits: [
          { title: "On the vehicle", text: "Hands-on, not only slides" },
          { title: "3 modules", text: "Step by step into e-mobility" },
          { title: "Certificate", text: "Proof of competence for the workshop" },
          { title: "HV safety", text: "Wiring, battery systems, diagnosis" },
        ],
        bodyTitle: "Register. Recharge your knowledge.",
        body: "Interested in further courses? Practical knowledge, clever repair solutions and insights into vehicle technology.",
        marquee: "AUTOPART electrifies. ",
      }),
    ],
    closing: [
      {
        title: "Innovation partner in the IAM",
        body: "We bring the challenges of e-mobility to the table with workshops and dealers – so independent businesses stay positioned for electric vehicles.",
      },
      {
        title: "Electric vehicle repair you can trust",
        body: "Certified high-voltage expertise, modern diagnosis and transparent work – get EVs back in shape quickly, precisely and sustainably.",
      },
    ],
    training: {
      title: "EV Experience Center",
      body: "Register now, recharge your knowledge and start as a high-voltage professional.",
    },
  },
];

export function getProductCategory(slug: string) {
  return productCategoryPages.find((category) => category.slug === slug);
}

export function getProductGroup(categorySlug: string, groupSlug: string) {
  const category = getProductCategory(categorySlug);
  const group = category?.groups.find((item) => item.slug === groupSlug);
  if (!category || !group) return null;
  return { category, group };
}
