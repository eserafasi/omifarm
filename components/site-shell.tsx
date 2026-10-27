import Image from "next/image";
import Link from "next/link";
import { Download, Mail, MapPin, Menu, Phone, Store, X } from "lucide-react";

export const whatsappUrl =
  "https://wa.me/573123809599?text=Hola%20Omi%20Farm%2C%20quiero%20asesor%C3%ADa%20para%20mi%20cultivo.";

const nav = [
  ["Nosotros", "/nosotros"],
  ["Productos", "/productos"],
  ["Cobertura", "/cobertura"],
  ["Testimonios", "/testimonios"],
  ["Distribuidores", "/distribuidores"],
];

export function Header() {
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Productores registrados ante el ICA desde 2012</span>
          <a href="mailto:info@omifarmcolombia.co">
            <Mail size={14} /> info@omifarmcolombia.co
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link href="/" className="brand" aria-label="Omi Farm Colombia — Inicio">
            <Image src="/images/logo.png" width={210} height={90} alt="Omi Farm Colombia" priority />
          </Link>
          <nav className="desktop-nav" aria-label="Navegación principal">
            {nav.map(([label, href]) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
            <span className="future-store" title="Disponible próximamente">
              <Store size={16} /> Tienda <small>Pronto</small>
            </span>
          </nav>
          <a className="button button-small header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            Hablar con un asesor
          </a>
          <details className="mobile-menu">
            <summary aria-label="Abrir menú"><Menu className="menu-open" /><X className="menu-close" /></summary>
            <nav aria-label="Navegación móvil">
              {nav.map(([label, href]) => (
                <Link href={href} key={href}>{label}</Link>
              ))}
              <Link href="/contacto">Contacto</Link>
              <span className="future-store"><Store size={16} /> Tienda · próximamente</span>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Image src="/images/logo-white.png" width={210} height={116} alt="Omi Farm Colombia" className="footer-logo" />
          <p>Nutrición especializada para el campo colombiano, formulada y producida en Tunja.</p>
        </div>
        <div>
          <h3>Encuentre lo que necesita</h3>
          <Link href="/productos">Productos</Link>
          <a href="/downloads/catalogo-omi-farm.pdf" download><Download size={15} /> Descargar catálogo</a>
          <Link href="/distribuidores">Quiero ser distribuidor</Link>
          <Link href="/trabaja-con-nosotros">Trabaje con nosotros</Link>
        </div>
        <div>
          <h3>Estamos cerca</h3>
          <a href="https://maps.google.com/?q=Carrera+12+No.+7B-20+Tunja" target="_blank" rel="noreferrer"><MapPin size={15} /> Cra. 12 No. 7B–20, Tunja</a>
          <a href="tel:+573123809599"><Phone size={15} /> +57 312 380 9599</a>
          <a href="mailto:info@omifarmcolombia.co"><Mail size={15} /> info@omifarmcolombia.co</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Omi Farm Colombia S.A.S.</span>
        <div><Link href="/pqrs">P.Q.R.S.</Link><Link href="/politica-de-privacidad">Política de privacidad</Link></div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Hablar con Omi Farm por WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 3A12.9 12.9 0 0 0 5.1 22.74L3.36 29l6.4-1.68A12.97 12.97 0 1 0 16.04 3Zm0 23.74c-1.94 0-3.84-.52-5.5-1.5l-.4-.24-3.8 1 1.02-3.7-.26-.4a10.7 10.7 0 1 1 8.94 4.84Zm5.87-8.02c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.5-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.58-1.6a9.68 9.68 0 0 1-1.78-2.22c-.19-.32-.02-.5.14-.65.15-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.63-.53-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.67s1.15 3.1 1.3 3.31c.17.21 2.26 3.45 5.47 4.84.77.33 1.36.53 1.83.68.77.24 1.46.21 2.01.13.62-.09 1.9-.78 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.14-.3-.22-.62-.38Z"/></svg>
      <span>WhatsApp</span>
    </a>
  );
}
