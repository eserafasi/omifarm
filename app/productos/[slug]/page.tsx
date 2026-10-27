import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Download, MessageCircle, Sprout } from "lucide-react";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";
import { productWhatsappUrl } from "@/lib/contact";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return { title: product.name, description: `${product.promise}. Consulte beneficios, composición y dosis de ${product.name}.` };
}

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const consultUrl = productWhatsappUrl(product.name);

  return (
    <>
      <section className="product-detail">
        <div className="container">
          <Link href="/productos" className="back-link"><ArrowLeft size={17} /> Todos los productos</Link>
          <div className="product-detail-grid">
            <div className="detail-visual">
              <span className="detail-line">{product.line}</span>
              <Image src={product.image} alt={`Presentación de ${product.name}`} fill priority sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
            <div className="detail-copy">
              <h1>{product.name}</h1>
              <p className="product-stage">{product.stage}</p>
              <p className="product-promise">{product.promise}</p>
              <div className="dose-card">
                <Sprout />
                <div><small>Dosis de referencia</small><strong>{product.dose}</strong></div>
              </div>
              <h2>¿Qué hace por su cultivo?</h2>
              <ul className="benefit-list">
                {product.benefits.map((benefit) => <li key={benefit}><Check />{benefit}</li>)}
              </ul>
              <div className="detail-actions">
                <a href={consultUrl} className="button" target="_blank" rel="noreferrer"><MessageCircle size={18} /> Consultar este producto</a>
                <a href="/downloads/catalogo-omi-farm.pdf" download className="text-link"><Download size={17} /> Ver catálogo</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="composition-section">
        <div className="container composition-grid">
          <div><h2>Composición garantizada</h2><p>Datos del producto tomados del portafolio Omi Farm.</p></div>
          <dl>
            {product.composition.map((row) => {
              const [term, ...value] = row.split(":");
              return <div key={row}><dt>{term}</dt><dd>{value.join(":")}</dd></div>;
            })}
          </dl>
        </div>
        <div className="container technical-note">La dosis puede variar según cultivo, etapa y condición. Consulte con un profesional agrónomo antes de aplicar.</div>
      </section>
    </>
  );
}
