"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { productWhatsappUrl, whatsappUrl } from "@/lib/contact";
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

  const clearFilters = () => {
    setQuery("");
    setStage("Todos");
  };

  return (
    <div className="finder">
      {!compact && (
        <div className="finder-tools">
          <label className="search-field">
            <Search size={19} />
            <span className="sr-only">Buscar productos</span>
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busque por nombre, etapa o beneficio" />
          </label>
          <label className="stage-field">
            <span>Etapa del cultivo</span>
            <select value={stage} onChange={(event) => setStage(event.target.value)}>
              {stages.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
          <div className="finder-status" aria-live="polite" aria-atomic="true">
            <span>{visible.length} {visible.length === 1 ? "producto" : "productos"}</span>
            {(query || stage !== "Todos") && (
              <button type="button" onClick={clearFilters}><X size={16} /> Limpiar filtros</button>
            )}
          </div>
        </div>
      )}
      <h2 className="sr-only">{compact ? "Productos destacados" : "Productos disponibles"}</h2>
      <div className="product-grid">
        {visible.map((product) => (
          <article className="product-card" key={product.slug}>
            <Link href={`/productos/${product.slug}`} className="product-card-main" aria-label={`Ver ficha de ${product.name}`}>
              <div className="product-image">
                <Image src={product.image} alt={`Presentación de ${product.name}`} fill sizes="(max-width: 520px) 100vw, (max-width: 1050px) 50vw, 33vw" />
              </div>
            </Link>
            <div className="product-card-copy">
              <small>{product.line}</small>
              <h3><Link href={`/productos/${product.slug}`}>{product.name}</Link></h3>
              <dl className="product-facts">
                <div><dt>Etapa</dt><dd>{product.stage}</dd></div>
                <div><dt>Beneficio principal</dt><dd>{product.promise}</dd></div>
              </dl>
              <div className="product-card-actions">
                <Link className="text-link" href={`/productos/${product.slug}`}>Ver ficha <ArrowUpRight size={16} /></Link>
                <a className="product-consult-link" href={productWhatsappUrl(product.name)} target="_blank" rel="noreferrer">
                  <MessageCircle size={17} /> Consultar
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      {visible.length === 0 && (
        <div className="empty-state">
          <h3>No encontramos productos con esos filtros</h3>
          <p>Pruebe otra búsqueda o cuéntenos qué necesita fortalecer en su cultivo.</p>
          <div>
            <button className="button" type="button" onClick={clearFilters}>Ver todos los productos</button>
            <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Consultar por WhatsApp</a>
          </div>
        </div>
      )}
    </div>
  );
}
