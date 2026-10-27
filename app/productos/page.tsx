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
          <p className="eyebrow light"><span /> Portafolio Omi Farm</p>
          <h1>Soluciones para cada etapa de su cultivo</h1>
          <p>Consulte beneficios, composición y dosis de aplicación. Nuestro equipo puede ayudarle a elegir.</p>
          <a className="text-link light-link" href="/downloads/catalogo-omi-farm.pdf" download><Download size={18} /> Descargar catálogo completo</a>
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
