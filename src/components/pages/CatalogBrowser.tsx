"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductSlide";
import { catalogFilters, catalogProducts } from "@/data/site";

export function CatalogBrowser() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});

  const results = useMemo(() => {
    return catalogProducts.filter((product) => {
      const haystack = `${product.title} ${product.sku} ${product.category} ${product.description}`.toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase());
      const matchesLine = !filters.line || product.category.includes(filters.line);
      return matchesQuery && matchesLine;
    });
  }, [query, filters]);

  return (
    <div className="mx-auto max-w-[1680px]">
      <form
        className="flex border border-line/15"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by part number, vehicle, OE number..."
          className="h-16 flex-1 bg-white px-5 text-base outline-none"
          aria-label="Search parts catalog"
        />
        <button
          type="submit"
          className="bg-navy px-8 text-xs font-semibold uppercase tracking-[0.16em] text-white"
        >
          Search
        </button>
      </form>

      <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {catalogFilters.map((filter) => (
          <label key={filter.id} className="block text-[11px] font-semibold uppercase tracking-[0.14em]">
            {filter.label}
            <select
              className="mt-2 h-12 w-full border border-line/20 bg-white px-3 text-sm font-normal normal-case tracking-normal"
              value={filters[filter.id] ?? ""}
              onChange={(event) =>
                setFilters((current) => ({ ...current, [filter.id]: event.target.value }))
              }
            >
              <option value="">All</option>
              {filter.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>

      <p className="mt-10 text-sm uppercase tracking-[0.14em] text-muted">
        {results.length} results
      </p>
      <div className="mt-6 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((product) => (
          <ProductCard key={product.sku} product={product} />
        ))}
      </div>
    </div>
  );
}
