import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ProductFinder } from "@/components/product-finder";

export const metadata: Metadata = {
  title: "Productos",
  description: "Explore fertilizantes y bioestimulantes Omi Farm por etapa y necesidad de su cultivo.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        compact
        title="Encuentre el producto según la etapa de su cultivo"
        text="Compare el beneficio principal y la etapa de uso. En cada ficha encontrará dosis de referencia, composición y una consulta directa por WhatsApp."
      >
        <a className="text-link light-link" href="/downloads/catalogo-omi-farm.pdf" download><Download size={18} /> Descargar catálogo completo (PDF, 18 MB)</a>
      </PageHero>
      <section className="section product-catalog">
        <div className="container">
          <ProductFinder />
        </div>
      </section>
    </>
  );
}
