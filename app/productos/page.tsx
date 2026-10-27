import type { Metadata } from "next";
import { Download } from "lucide-react";
import { ProductFinder } from "@/components/product-finder";

export const metadata: Metadata = {
  title: "Productos",
  description: "Explore fertilizantes y bioestimulantes Omi Farm por etapa y necesidad de su cultivo.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="container">
          <h1>Encuentre el producto según la etapa de su cultivo</h1>
          <p>Compare el beneficio principal y la etapa de uso. En cada ficha encontrará dosis de referencia, composición y una consulta directa por WhatsApp.</p>
          <a className="text-link light-link" href="/downloads/catalogo-omi-farm.pdf" download><Download size={18} /> Descargar catálogo completo (18 MB)</a>
        </div>
      </section>
      <section className="section product-catalog">
        <div className="container">
          <ProductFinder />
        </div>
      </section>
    </>
  );
}
