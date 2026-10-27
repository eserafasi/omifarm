import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Building2, CheckCircle2, Factory, FlaskConical, HeartHandshake, Mail, MapPin, MessageCircle, ShieldCheck, Sprout, Store } from "lucide-react";
import { notFound } from "next/navigation";
import { whatsappUrl } from "@/components/site-shell";

type Props = { params: Promise<{ slug: string }> };
const allowed = ["nosotros", "cobertura", "testimonios", "distribuidores", "trabaja-con-nosotros", "pqrs", "contacto", "politica-de-privacidad"];

export function generateStaticParams() {
  return allowed.map((slug) => ({ slug }));
}

const titles: Record<string, string> = {
  nosotros: "Nosotros",
  cobertura: "Cobertura",
  testimonios: "Testimonios",
  distribuidores: "Quiero ser distribuidor",
  "trabaja-con-nosotros": "Trabaje con nosotros",
  pqrs: "P.Q.R.S.",
  contacto: "Contacto",
  "politica-de-privacidad": "Política de privacidad",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  return { title: titles[slug] ?? "Omi Farm Colombia" };
}

function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-hero"><div className="container"><p className="eyebrow light"><span />{eyebrow}</p><h1>{title}</h1><p>{text}</p></div></section>;
}

function ContactPanel({ title = "Conversemos", text, label = "Escribir por WhatsApp" }: { title?: string; text: string; label?: string }) {
  return <div className="contact-panel"><div><p className="eyebrow light"><span /> Estamos para orientarle</p><h2>{title}</h2><p>{text}</p></div><a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} />{label}</a></div>;
}

export default async function InfoPage({ params }: Props) {
  const slug = (await params).slug;
  if (!allowed.includes(slug)) notFound();

  if (slug === "nosotros") return <Nosotros />;
  if (slug === "cobertura") return <Cobertura />;
  if (slug === "testimonios") return <Testimonios />;
  if (slug === "distribuidores") return <Distribuidores />;
  if (slug === "trabaja-con-nosotros") return <SimpleContact type="work" />;
  if (slug === "pqrs") return <SimpleContact type="pqrs" />;
  if (slug === "contacto") return <Contacto />;
  return <Privacy />;
}

function Nosotros() {
  return <>
    <PageHero eyebrow="Desde Tunja para el campo" title="Una empresa familiar que crece junto a sus cultivos" text="Más de una década formulando, produciendo y acompañando soluciones para el agro colombiano." />
    <section className="section"><div className="container about-grid">
      <div className="about-image"><Image src="/images/equipo.jpg" alt="Familia y equipo Omi Farm Colombia" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
      <div><p className="eyebrow"><span /> Nuestra historia</p><h2>Conocimiento técnico, raíces familiares</h2><p className="lead">Omi Farm Colombia S.A.S. nació en 2011 con el propósito de producir y comercializar fertilizantes y agroquímicos de calidad.</p><p>En 2012 obtuvimos, mediante la Resolución No. 003001 del ICA, el registro como productor, formulador y envasador de fertilizantes. Desde nuestra planta en Tunja desarrollamos marcas propias, formulaciones especiales y productos de maquila.</p><div className="about-note"><BadgeCheck /> <span><strong>Registro ICA desde 2012</strong>Productor, formulador y envasador</span></div></div>
    </div></section>
    <section className="section soft-section"><div className="container"><div className="section-heading"><p className="eyebrow"><span /> Lo que nos mueve</p><h2>Crecer bien significa crecer juntos</h2></div><div className="principles">
      <article><Sprout /><h3>Misión</h3><p>Exceder las expectativas con productos y servicios de alta calidad, tecnología e innovación constante que incrementen la rentabilidad.</p></article>
      <article><Factory /><h3>Visión</h3><p>Contribuir al desarrollo del agro y al progreso de Colombia, ampliando nuestra participación de manera responsable y sostenible.</p></article>
      <article><HeartHandshake /><h3>Nuestra manera</h3><p>Escuchar al productor, traducir la técnica en decisiones claras y acompañar con la cercanía de una empresa familiar.</p></article>
    </div></div></section>
    <section className="section"><div className="container"><ContactPanel text="Cuéntenos qué cultiva y qué quiere mejorar. Nuestro equipo le ayudará a encontrar una alternativa." /></div></section>
  </>;
}

function Cobertura() {
  const regions = ["Boyacá", "Cundinamarca", "Santander", "Meta", "Tolima", "Casanare"];
  return <>
    <PageHero eyebrow="Cobertura regional" title="Acompañamos el agro donde usted está" text="Nuestra operación nace en Tunja y llega a seis mercados agrícolas principales del país." />
    <section className="section"><div className="container coverage-page-grid">
      <div><p className="eyebrow"><span /> Mercados principales</p><h2>Presencia que se construye con relaciones</h2><p className="lead">Trabajamos con agricultores, agrónomos y almacenes de insumos para acercar soluciones especializadas a cada zona.</p><p>¿Su municipio no aparece? Escríbanos. Revisamos disponibilidad, despacho o contacto con distribuidores.</p><a href={whatsappUrl} className="button" target="_blank" rel="noreferrer">Consultar mi zona <ArrowRight size={18} /></a></div>
      <div className="region-list">{regions.map((region, i) => <div key={region}><span>{String(i + 1).padStart(2, "0")}</span><MapPin /><strong>{region}</strong></div>)}</div>
    </div></section>
    <section className="image-break"><Image src="/images/campo.jpeg" alt="Cultivos de la región colombiana" fill sizes="100vw" /><div><strong>Desde Tunja, Boyacá</strong><span>Producción y acompañamiento para el campo colombiano</span></div></section>
  </>;
}

function Testimonios() {
  return <>
    <PageHero eyebrow="Experiencias del campo" title="Relaciones que se cultivan con confianza" text="El acompañamiento técnico y la cercanía son parte de cada solución Omi Farm." />
    <section className="section"><div className="container testimonial-intro"><div className="testimonial-photo"><Image src="/images/manzanas.jpg" alt="Resultado en cultivo de manzana" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div><p className="eyebrow"><span /> Resultados reales</p><h2>La evidencia está en el cultivo</h2><p className="lead">Estamos organizando las historias de productores y distribuidores para compartirlas con su autorización.</p><p>No publicamos reseñas inventadas. Mientras incorporamos testimonios verificados, nuestro equipo puede contarle qué soluciones se usan en cultivos y etapas similares a los suyos.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="button">Preguntar por una experiencia <ArrowRight size={18} /></a></div></div></section>
  </>;
}

function Distribuidores() {
  const url = `${whatsappUrl.split("?")[0]}?text=${encodeURIComponent("Hola Omi Farm, me interesa ser distribuidor. Quisiera conocer los requisitos.")}`;
  return <>
    <PageHero eyebrow="Crezcamos juntos" title="Lleve Omi Farm a más productores" text="Buscamos aliados que conozcan su territorio, crean en la asesoría y quieran construir relaciones de largo plazo." />
    <section className="section"><div className="container distributor-grid"><div><p className="eyebrow"><span /> Para almacenes y distribuidores</p><h2>Un portafolio respaldado por producción propia</h2><div className="check-stack">{["Líneas para diferentes etapas del cultivo", "Acompañamiento técnico y comercial", "Material de producto y catálogo", "Relación directa con una empresa familiar"].map((item) => <span key={item}><CheckCircle2 />{item}</span>)}</div></div><div className="interest-card"><Store /><h3>Cuéntenos sobre su negocio</h3><p>Comparta su ciudad, zonas de atención y experiencia en el sector. Le responderemos personalmente.</p><a href={url} target="_blank" rel="noreferrer" className="button">Iniciar conversación <ArrowRight size={18} /></a><small>También puede escribir a <a href="mailto:info@omifarmcolombia.co">info@omifarmcolombia.co</a></small></div></div></section>
  </>;
}

function SimpleContact({ type }: { type: "work" | "pqrs" }) {
  const work = type === "work";
  return <>
    <PageHero eyebrow={work ? "Haga parte del equipo" : "Atención al cliente"} title={work ? "Trabaje con nosotros" : "Peticiones, quejas, reclamos y sugerencias"} text={work ? "Nos interesa conocer personas comprometidas con el campo, la calidad y el trabajo cercano." : "Su mensaje nos ayuda a atenderle mejor y a fortalecer nuestros productos y servicios."} />
    <section className="section"><div className="container single-contact-card">{work ? <BriefcaseBusiness /> : <ShieldCheck />}<h2>{work ? "Envíe su hoja de vida" : "Cuéntenos qué ocurrió"}</h2><p>{work ? "Indique en el asunto el área o cargo de su interés. Revisaremos su perfil cuando exista una oportunidad relacionada." : "Incluya su nombre, datos de contacto, producto o servicio relacionado y una descripción clara de su solicitud."}</p><a className="button" href={`mailto:info@omifarmcolombia.co?subject=${encodeURIComponent(work ? "Hoja de vida — Omi Farm" : "P.Q.R.S. — Omi Farm")}`}><Mail size={18} />{work ? "Enviar hoja de vida" : "Enviar P.Q.R.S."}</a><small>Canal oficial: info@omifarmcolombia.co</small></div></section>
  </>;
}

function Contacto() {
  return <>
    <PageHero eyebrow="Contacto" title="Hablemos de lo que su cultivo necesita" text="Escríbanos por WhatsApp para una respuesta ágil o visítenos en nuestra planta de Tunja." />
    <section className="section"><div className="container contact-grid"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /><span><small>Atención ágil</small><strong>+57 312 380 9599</strong>Escribir por WhatsApp</span></a><a href="mailto:info@omifarmcolombia.co"><Mail /><span><small>Correo</small><strong>info@omifarmcolombia.co</strong>Enviar un mensaje</span></a><a href="https://maps.google.com/?q=Carrera+12+No.+7B-20+Tunja" target="_blank" rel="noreferrer"><MapPin /><span><small>Planta</small><strong>Cra. 12 No. 7B–20</strong>Tunja, Boyacá</span></a></div></section>
  </>;
}

function Privacy() {
  return <>
    <PageHero eyebrow="Información legal" title="Política de privacidad" text="Conozca cómo tratamos la información que usted comparte con Omi Farm Colombia S.A.S." />
    <section className="section"><article className="container legal-copy"><h2>Tratamiento de datos personales</h2><p>Omi Farm Colombia S.A.S. utiliza los datos recibidos a través de sus canales de contacto para responder solicitudes, brindar asesoría, gestionar relaciones comerciales y cumplir obligaciones legales.</p><h3>Información que podemos recibir</h3><p>Nombre, teléfono, correo electrónico, ubicación, datos de su negocio o cultivo y el contenido de las comunicaciones que usted decida enviar.</p><h3>Sus derechos</h3><p>Usted puede conocer, actualizar, rectificar o solicitar la eliminación de sus datos, así como revocar su autorización cuando sea procedente.</p><h3>Canal de atención</h3><p>Para consultas relacionadas con sus datos, escriba a <a href="mailto:info@omifarmcolombia.co">info@omifarmcolombia.co</a> o comuníquese al +57 312 380 9599.</p><p className="legal-note">Esta página resume el uso previsto de la información en el sitio. Antes de publicar, la empresa debe validar el texto legal completo con su responsable jurídico y de protección de datos.</p></article></section>
  </>;
}
