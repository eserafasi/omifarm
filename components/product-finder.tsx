"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { products } from "@/lib/products";

const stages = ["Todos", ...Array.from(new Set(products.map((product) => product.stage)))];

export function ProductFinder({ compact = false }: { compact?: boolean }) {
  const [stage, setStage] = useState("Todos");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => {
    const normalized = query.toLocaleLowerCase("es");
    return products
      .filter((product) => stage === "Todos" || product.stage === stage)
      .filter((product) => `${product.name} ${product.promise} ${product.benefits.join(" ")}`.toLocaleLowerCase("es").includes(normalized))
      .slice(0, compact ? 6 : undefined);
  }, [compact, query, stage]);

  return (
    <div className="finder">
      {!compact && (
        <div className="finder-tools">
          <label className="search-field">
            <Search size={19} />
            <span className="sr-only">Buscar productos</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busque por nombre o beneficio" />
          </label>
          <div className="chips" aria-label="Filtrar por etapa">
            {stages.map((item) => (
              <button key={item} className={stage === item ? "active" : ""} onClick={() => setStage(item)}>{item}</button>
            ))}
          </div>
        </div>
      )}
      <div className="product-grid">
        {visible.map((product) => (
          <Link href={`/productos/${product.slug}`} className="product-card" key={product.slug}>
            <div className="product-image">
              <Image src={product.image} alt={`Presentación de ${product.name}`} fill sizes="(max-width: 700px) 50vw, 300px" />
              <span>{product.stage}</span>
            </div>
            <div className="product-card-copy">
              <small>{product.line}</small>
              <h3>{product.name}</h3>
              <p>{product.promise}</p>
              <span className="text-link">Ver ficha <ArrowUpRight size={16} /></span>
            </div>
          </Link>
        ))}
      </div>
      {visible.length === 0 && <p className="empty-state">No encontramos coincidencias. Escríbanos y le ayudamos a elegir.</p>}
    </div>
  );
}
