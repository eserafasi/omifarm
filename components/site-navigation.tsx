"use client";

import Link from "next/link";
import { Menu, MessageCircle, Store, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { whatsappUrl } from "@/lib/contact";

type NavLink = readonly [label: string, href: string];

export function SiteNavigation({ links }: { links: readonly NavLink[] }) {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    if (detailsRef.current) detailsRef.current.open = false;
    setOpen(false);
  };

  return (
    <>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {links.map(([label, href]) => (
          <Link href={href} key={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>
        ))}
        <span className="future-store" title="Disponible próximamente">
          <Store size={16} /> Tienda <small>Pronto</small>
        </span>
      </nav>

      <details ref={detailsRef} className="mobile-menu" onToggle={(event) => setOpen(event.currentTarget.open)}>
        <summary aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}>
          <Menu className="menu-open" aria-hidden="true" />
          <X className="menu-close" aria-hidden="true" />
        </summary>
        <nav aria-label="Navegación móvil">
          {links.map(([label, href]) => (
            <Link href={href} key={href} aria-current={pathname === href ? "page" : undefined} onClick={closeMenu}>{label}</Link>
          ))}
          <Link href="/contacto" aria-current={pathname === "/contacto" ? "page" : undefined} onClick={closeMenu}>Contacto</Link>
          <span className="future-store"><Store size={16} /> Tienda · próximamente</span>
          <a className="mobile-nav-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={19} /> Consultar por WhatsApp
          </a>
        </nav>
      </details>
    </>
  );
}
