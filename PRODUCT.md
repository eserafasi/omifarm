# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary users are farmers, agronomists, and agricultural supply stores in Colombia. Many visit from mid-range phones while outdoors, sometimes in bright sunlight and on slow mobile connections. They need to understand Omi Farm's products and reach the business for practical guidance.

## Product Purpose

The website presents Omi Farm Colombia, a family fertilizer business based in Tunja, explains its products and expertise, and helps visitors contact the team. The main conversion is a WhatsApp conversation. Every page should make that path obvious without becoming pushy.

## Positioning

Omi Farm combines specialized agricultural knowledge with the warmth and direct attention of a family business. The experience must feel trustworthy, expert, nutritive, and close rather than corporate, generic, or template-generated.

## Operating Context

- Visitors often browse on mobile devices in agricultural and outdoor settings.
- Visitors need to scan products by their agricultural use and then ask about a specific product through WhatsApp.
- Product decisions may involve farmers, agronomists, and agricultural supply-store staff.
- The business operates from Tunja and serves customers in Colombia.

## Capabilities and Constraints

- The site is a Spanish-language Next.js website and must address visitors as “usted.”
- Product information is maintained in `lib/products.ts`.
- Product facts, prices, contact numbers, and legal text must not change without explicit approval.
- Technical product information must remain accurate. Product claims, figures, testimonials, or other evidence must not be invented.
- WhatsApp is the primary contact channel. Product pages should support contextual messages that identify the product.
- Existing pages cover the home, product catalog and details, family story, coverage, testimonials, distributors, employment, P.Q.R.S., contact, and privacy policy.
- A future online store is planned, but it is not part of the current work. Current decisions must not block it.
- News, blog content, “Regístrate y Gana,” SEO work, and domain or URL setup are out of scope for the current phases.
- The current domain must not be hardcoded.

## Brand Commitments

- Preserve the Omi Farm Colombia name and existing logo identity.
- Keep and reuse the business's own photography. It may be cropped, resized, optimized, and art-directed, but it must not be replaced with stock imagery.
- The voice is clear, practical Spanish for Colombia and always addresses the visitor as “usted.”
- The brand should feel specialized, trustworthy, expert, warm, close, and family-led—never corporate-cold.
- The site must not resemble a generic product catalog, a template, or an AI-generated website.

## Evidence on Hand

- Existing logos are in `public/images/logo-mark.png` and `public/images/logo-mark-white.png`.
- Existing business, field, crop, team, and product photography is in `public/images/`.
- The existing product catalog and technical product content are in `lib/products.ts` and `public/downloads/catalogo-omi-farm.pdf`.
- Existing family, coverage, testimonial, contact, and legal copy is implemented in the current routes.
- No new product claims, performance figures, testimonials, or customer evidence should be fabricated.

## Product Principles

1. Help visitors understand what Omi Farm offers before asking them to act.
2. Keep WhatsApp easy to reach and relevant to the visitor's current page or product.
3. Prefer practical agricultural language and accurate product information over promotional abstraction.
4. Express expertise through clarity and evidence while retaining the warmth of a family business.
5. Keep the experience fast and dependable on mid-range phones and slow connections.

## Accessibility & Inclusion

- Prioritize legibility on phones, in bright outdoor light, and for older users.
- Maintain strong color contrast, clear hierarchy, generous touch targets, and straightforward navigation.
- Support responsive layouts at 360px, 768px, and 1280px and above.
- Respect reduced-motion preferences and avoid interaction or media choices that slow down common mobile devices.
