import { products, type Product } from "@/data/site";
import { SmartImage } from "@/components/ui/SmartImage";

type ProductSlideProps = {
  product: Product;
  index: number;
  total: number;
  active?: boolean;
};

export function ProductSlide({ product, index, total }: ProductSlideProps) {
  return (
    <article className="grid border border-line/15 bg-white lg:grid-cols-[1.15fr_0.85fr]">
      <div className="relative min-h-[360px] overflow-hidden bg-white lg:min-h-[560px]">
        <span className="absolute left-6 top-6 z-10 text-sm tracking-[0.16em] text-muted">
          {String(index + 1).padStart(2, "0")} – {String(total).padStart(2, "0")}
        </span>
        <span className="absolute right-6 top-6 z-10 text-sm font-semibold tracking-[0.16em] text-navy">
          {product.category}
        </span>
        <span className="pointer-events-none absolute inset-0 flex items-center justify-end pr-8 font-display text-[clamp(8rem,18vw,16rem)] font-black italic leading-none text-line/[0.06]">
          {product.number}
        </span>
        <SmartImage
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-10 lg:p-16"
          sizes="(min-width: 1024px) 55vw, 100vw"
        />
        <span className="absolute bottom-6 left-6 z-10 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          MEYLE {product.category}
        </span>
      </div>
      <div className="flex flex-col justify-center border-t border-line/15 px-6 py-10 lg:border-t-0 lg:border-l lg:px-12">
        <p className="eyebrow text-muted">{product.category}</p>
        <h3 className="mt-4 font-display text-[clamp(2rem,3.5vw,3.4rem)] font-black italic uppercase leading-[0.95]">
          {product.title}
        </h3>
        <p className="mt-5 max-w-md text-[15px] leading-7 text-muted">
          {product.description}
        </p>
        <h4 className="eyebrow mt-8 text-text">Highlights</h4>
        <ul className="mt-4 space-y-3">
          {product.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-6">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-turquoise" />
              {item}
            </li>
          ))}
        </ul>
        <a
          href={product.href}
          className="mt-8 inline-flex w-fit items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] transition-transform hover:translate-x-1"
        >
          View product line →
        </a>
      </div>
    </article>
  );
}

export function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <a
      href={product.href}
      className="group block border border-line/15 bg-white"
    >
      <div className="relative aspect-[5/4] overflow-hidden bg-off-white">
        <span className="absolute left-4 top-4 z-10 text-xs tracking-[0.16em] text-muted">
          {product.number}
        </span>
        <span className="absolute right-4 top-4 z-10 text-xs font-semibold tracking-[0.16em] text-navy">
          {product.category}
        </span>
        <SmartImage
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, 100vw"
        />
      </div>
      <div className="border-t border-line/15 p-5">
        <h3 className="font-display text-2xl font-black italic uppercase leading-tight">
          {product.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">
          {product.description}
        </p>
      </div>
    </a>
  );
}
