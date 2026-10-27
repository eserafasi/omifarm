# Omi Farm Colombia

Sitio web institucional y catálogo de productos de Omi Farm Colombia S.A.S.

```bash
npm install
npm run dev
```

La aplicación usa Next.js, TypeScript y App Router. Los productos viven en
`lib/products.ts`; esta estructura permite sumar una tienda posteriormente sin
rehacer la navegación ni las fichas de producto.

## GitHub Pages

Cada cambio enviado a `main` genera un sitio estático y lo publica con GitHub
Actions. En **Settings → Pages**, seleccione **GitHub Actions** como fuente de
publicación. El flujo detecta automáticamente si el sitio usa el subdirectorio
del repositorio o un dominio personalizado.
