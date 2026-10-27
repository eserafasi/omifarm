export const whatsappNumber = "573123809599";

export const whatsappUrl =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hola Omi Farm, quiero asesoría para mi cultivo.",
  )}`;

export function productWhatsappUrl(productName: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hola Omi Farm, quiero consultar por ${productName} para mi cultivo.`,
  )}`;
}
