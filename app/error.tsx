"use client";

import Link from "next/link";
import { MessageCircle, RotateCcw } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="system-state">
      <div className="container system-state-content">
        <h1>No pudimos mostrar esta página</h1>
        <p>Intente cargarla de nuevo. Si el problema continúa, puede volver al inicio o escribirnos por WhatsApp.</p>
        <div className="system-state-actions">
          <button className="button" type="button" onClick={reset}><RotateCcw size={18} /> Intentar de nuevo</button>
          <Link className="text-link" href="/">Volver al inicio</Link>
          <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Consultar por WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
