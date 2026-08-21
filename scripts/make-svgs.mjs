import { writeFileSync } from "node:fs";

const bg = "#F7F5F2";
const navy = "#05053D";
const teal = "#00E6C3";
const muted = "#6B6B75";

function svg(name, inner) {
  const content = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="1200" height="900">
  <rect width="1200" height="900" fill="${bg}"/>
  ${inner}
</svg>`;
  writeFileSync(name, content);
}

svg("public/images/products/drive-shaft.svg", `
  <g transform="translate(180,390) rotate(-8)">
    <rect x="0" y="0" width="820" height="86" rx="8" fill="#1a1a3a"/>
    <rect x="20" y="18" width="780" height="50" fill="#2c2c55"/>
    <circle cx="40" cy="43" r="70" fill="#3a3a62" stroke="${navy}" stroke-width="8"/>
    <circle cx="40" cy="43" r="38" fill="#d8d6d0"/>
    <circle cx="40" cy="43" r="16" fill="${navy}"/>
    <circle cx="800" cy="43" r="70" fill="#3a3a62" stroke="${navy}" stroke-width="8"/>
    <circle cx="800" cy="43" r="38" fill="#d8d6d0"/>
    <circle cx="800" cy="43" r="16" fill="${navy}"/>
    <rect x="280" y="-8" width="240" height="102" fill="#0a0a40"/>
    <rect x="300" y="12" width="200" height="62" fill="${teal}" opacity="0.35"/>
  </g>
  <text x="80" y="820" font-family="Arial" font-size="22" fill="${muted}" letter-spacing="4">AUTOPART ORIGINAL</text>
`);

svg("public/images/products/cabin-filter.svg", `
  <g transform="translate(310,180)">
    <rect x="0" y="0" width="560" height="520" fill="#eceae4" stroke="${navy}" stroke-width="6"/>
    <rect x="28" y="28" width="504" height="464" fill="#d9d6cf"/>
    ${Array.from({ length: 18 }, (_, i) => `<rect x="48" y="${48 + i * 24}" width="464" height="14" fill="${i % 2 ? "#c4c1b8" : "#b4b1a8"}"/>`).join("")}
    <rect x="0" y="0" width="560" height="36" fill="${navy}"/>
    <rect x="0" y="484" width="560" height="36" fill="${navy}"/>
  </g>
`);

svg("public/images/products/control-arm.svg", `
  <g transform="translate(160,250)">
    <path d="M80 180 C 180 40, 420 20, 720 90 L 860 120 L 900 220 L 760 260 C 480 200, 260 280, 120 340 Z" fill="#2a2a4a"/>
    <path d="M110 190 C 200 70, 430 50, 700 110 L 820 140 L 850 210 L 730 240 C 470 190, 270 260, 140 310 Z" fill="#4a4a6a"/>
    <circle cx="120" cy="250" r="78" fill="#1a1a38" stroke="${teal}" stroke-width="10"/>
    <circle cx="120" cy="250" r="36" fill="#d8d6d0"/>
    <circle cx="860" cy="170" r="62" fill="#1a1a38" stroke="${teal}" stroke-width="8"/>
    <circle cx="860" cy="170" r="26" fill="#d8d6d0"/>
  </g>
`);

svg("public/images/products/tie-rod.svg", `
  <g transform="translate(120,390)">
    <rect x="160" y="18" width="720" height="54" fill="#2c2c50"/>
    <rect x="160" y="30" width="720" height="8" fill="${teal}" opacity="0.5"/>
    <circle cx="80" cy="46" r="70" fill="#1c1c3c" stroke="${navy}" stroke-width="8"/>
    <circle cx="80" cy="46" r="28" fill="#d8d6d0"/>
    <rect x="860" y="0" width="180" height="92" fill="#0a0a40"/>
    <circle cx="950" cy="46" r="22" fill="${teal}"/>
  </g>
`);

svg("public/images/products/oil-kit.svg", `
  <g transform="translate(220,160)">
    <rect x="80" y="80" width="320" height="420" fill="#0c2a48"/>
    <rect x="100" y="110" width="280" height="300" fill="#163a5c"/>
    <rect x="100" y="110" width="280" height="40" fill="${teal}"/>
    <circle cx="620" cy="240" r="150" fill="#1a1a38"/>
    <circle cx="620" cy="240" r="110" fill="#2a2a4a"/>
    <circle cx="620" cy="240" r="40" fill="${teal}"/>
    <rect x="500" y="420" width="240" height="80" fill="#005080"/>
    <rect x="80" y="430" width="180" height="70" fill="#08083D"/>
  </g>
`);

svg("public/images/products/oil-cable.svg", `
  <path d="M180 220 C 280 180, 360 300, 480 340 C 620 390, 760 250, 980 310" fill="none" stroke="${navy}" stroke-width="28" stroke-linecap="round"/>
  <path d="M180 220 C 280 180, 360 300, 480 340 C 620 390, 760 250, 980 310" fill="none" stroke="${teal}" stroke-width="8" stroke-linecap="round"/>
  <rect x="140" y="190" width="90" height="60" rx="4" fill="#1a1a38"/>
  <rect x="940" y="280" width="90" height="60" rx="4" fill="#1a1a38"/>
  <circle cx="480" cy="340" r="18" fill="#fff"/>
`);

svg("public/images/customers/partner-a.svg", `
  <rect width="1200" height="900" fill="#fff"/>
  <text x="600" y="430" text-anchor="middle" font-family="Arial Black, Arial" font-size="72" fill="${navy}" letter-spacing="6">NORDPARTS</text>
  <text x="600" y="500" text-anchor="middle" font-family="Arial" font-size="22" fill="${muted}" letter-spacing="8">WHOLESALE GROUP</text>
`);

svg("public/images/customers/partner-b.svg", `
  <rect width="1200" height="900" fill="#fff"/>
  <text x="600" y="430" text-anchor="middle" font-family="Arial Black, Arial" font-size="72" fill="${navy}" letter-spacing="6">AUTOTECH</text>
  <text x="600" y="500" text-anchor="middle" font-family="Arial" font-size="22" fill="${muted}" letter-spacing="8">SERVICE NETWORK</text>
`);

svg("public/images/customers/partner-c.svg", `
  <rect width="1200" height="900" fill="#fff"/>
  <text x="600" y="430" text-anchor="middle" font-family="Arial Black, Arial" font-size="64" fill="${navy}" letter-spacing="4">HAMBURG MOTORS</text>
  <text x="600" y="500" text-anchor="middle" font-family="Arial" font-size="22" fill="${muted}" letter-spacing="8">PREMIUM WORKSHOP</text>
`);

console.log("SVGs written");
