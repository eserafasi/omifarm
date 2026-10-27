import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

export default function NotFound() {
  return (
    <section className="system-state">
      <div className="container system-state-content">
        <p className="system-state-code" aria-hidden="true">404</p>
        <h1>Esta página no está disponible</h1>
        <p>Puede volver al inicio, revisar nuestros productos o escribirnos si buscaba información específica.</p>
        <div className="system-state-actions">
          <Link className="button" href="/"><ArrowLeft size={18} /> Volver al inicio</Link>
          <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Consultar por WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
