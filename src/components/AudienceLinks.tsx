import Link from "next/link";

const rows = [
  { label: "Workshops", href: "/workshops" },
  { label: "Wholesaler", href: "/wholesale" },
];

export function AudienceLinks() {
  return (
    <section className="border-t border-line/15 bg-white">
      {rows.map((row) => (
        <Link
          key={row.href}
          href={row.href}
          className="group relative flex h-[88px] items-center justify-between overflow-hidden border-b border-line/15 px-5 md:h-[108px] lg:px-10 xl:px-14"
        >
          <span
            aria-hidden
            className="absolute inset-0 bg-navy [clip-path:polygon(0_0,0_0,0_100%,0_100%)] transition-[clip-path] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:[clip-path:polygon(0_0,70%_0,58%_100%,0_100%)]"
          />
          <span className="relative z-10 font-sans text-[22px] font-medium text-text transition-colors duration-300 md:text-[28px] group-hover:text-white/85">
            {row.label}
          </span>
          <span
            aria-hidden
            className="relative z-10 text-[22px] font-light leading-none text-text transition-all duration-300 md:text-[26px] group-hover:translate-x-[5px] group-hover:text-muted"
          >
            →
          </span>
        </Link>
      ))}
    </section>
  );
}
