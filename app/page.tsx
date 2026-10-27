import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Download, Factory, FlaskConical, HeartHandshake, Leaf, MapPin, Sprout } from "lucide-react";
import { ProductFinder } from "@/components/product-finder";
import { whatsappUrl } from "@/components/site-shell";

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image src="/images/cafe.jpeg" alt="Cultivo colombiano saludable" fill priority className="hero-image" sizes="100vw" />
        <div className="hero-wash" />
        <div className="container hero-content">
          <p className="eyebrow light"><span /> Nutrición que conoce el campo</p>
          <h1>Cultivos más fuertes.<br /><em>Cosechas con futuro.</em></h1>
          <p className="hero-lede">Formulamos soluciones para cada etapa de su cultivo, con asesoría cercana y producción propia en Boyacá.</p>
          <div className="hero-actions">
            <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">Cuéntenos sobre su cultivo <ArrowRight size={18} /></a>
            <Link className="button button-ghost-light" href="/productos">Explorar productos</Link>
          </div>
          <div className="hero-proof">
            <span><BadgeCheck size={19} /> Registro ICA desde 2012</span>
            <span><MapPin size={19} /> Hecho en Tunja, Boyacá</span>
          </div>
        </div>
        <div className="hero-caption">Café · Cordillera colombiana</div>
      </section>

      <section className="quick-path section">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow"><span /> Encuentre su solución</p><h2>¿Qué necesita su cultivo?</h2></div>
            <p>Elija una necesidad o explore el portafolio. Si tiene dudas, nuestro equipo le orienta por WhatsApp.</p>
          </div>
          <div className="needs-grid">
            {[
              [Sprout, "Enraizamiento", "Fortalezca el comienzo", "ray-zinc-p"],
              [Leaf, "Desarrollo", "Más vigor y follaje", "omi-follagen"],
              [FlaskConical, "Floración", "Mejor amarre y cuajado", "ferti-flor"],
              [BadgeCheck, "Llenado", "Más peso y calidad", "rin-d"],
            ].map(([Icon, title, copy, slug]) => {
              const NeedIcon = Icon as typeof Sprout;
              return (
                <Link href={`/productos/${slug}`} className="need-card" key={String(title)}>
                  <NeedIcon />
                  <div><h3>{String(title)}</h3><p>{String(copy)}</p></div>
                  <ArrowRight size={18} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section products-preview">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow"><span /> Portafolio especializado</p>
            <h2>Una fórmula para cada momento</h2>
            <p>Información clara sobre beneficios, dosis y composición para elegir con confianza.</p>
          </div>
          <ProductFinder compact />
          <div className="center-actions">
            <Link href="/productos" className="button">Ver todos los productos <ArrowRight size={18} /></Link>
            <a href="/downloads/catalogo-omi-farm.pdf" download className="text-link"><Download size={17} /> Descargar catálogo</a>
          </div>
        </div>
      </section>

      <section className="section story">
        <div className="container story-grid">
          <div className="story-images">
            <div className="story-main"><Image src="/images/equipo.jpg" alt="Equipo de Omi Farm Colombia" fill sizes="(max-width: 800px) 100vw, 45vw" /></div>
            <div className="story-small"><Image src="/images/campo.jpeg" alt="Trabajo en cultivos colombianos" fill sizes="220px" /></div>
            <div className="year-stamp"><strong>2011</strong><span>Una familia<br />sembrando futuro</span></div>
          </div>
          <div className="story-copy">
            <p className="eyebrow"><span /> Somos Omi Farm</p>
            <h2>Ciencia agronómica con trato de familia</h2>
            <p className="lead">Nacimos en Tunja para producir soluciones que respondan a la realidad de los agricultores colombianos.</p>
            <p>Desarrollamos fertilizantes líquidos y sólidos, bioestimulantes, formulaciones especiales y productos de maquila. Escuchamos a quien cultiva, formulamos con rigor y acompañamos cada recomendación.</p>
            <div className="value-list">
              <span><Factory /> Producción propia</span>
              <span><FlaskConical /> Formulación especializada</span>
              <span><HeartHandshake /> Acompañamiento cercano</span>
            </div>
            <Link className="text-link" href="/nosotros">Conozca nuestra historia <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="coverage-band">
        <div className="container coverage-grid">
          <div>
            <p className="eyebrow light"><span /> Cobertura regional</p>
            <h2>Cerca de quienes hacen crecer el campo</h2>
            <p>Atendemos distribuidores, agrónomos y productores en seis mercados principales.</p>
            <Link href="/cobertura" className="button button-light">Ver cobertura <ArrowRight size={17} /></Link>
          </div>
          <div className="regions" aria-label="Departamentos con cobertura">
            {["Cundinamarca", "Santander", "Meta", "Tolima", "Casanare", "Boyacá"].map((region, index) => (
              <span key={region}><b>0{index + 1}</b>{region}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container cta-card">
          <div><p className="eyebrow light"><span /> Hablemos de su cultivo</p><h2>La recomendación correcta empieza con una conversación.</h2></div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button-light">Consultar con un asesor <ArrowRight size={18} /></a>
        </div>
      </section>
    </>
  );
}
