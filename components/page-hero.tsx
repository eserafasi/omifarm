import Image from "next/image";

type PageHeroProps = {
  title: string;
  text: string;
  compact?: boolean;
  children?: React.ReactNode;
};

export function PageHero({ title, text, compact = false, children }: PageHeroProps) {
  return (
    <section className={`page-hero${compact ? " compact-hero" : ""}`}>
      <Image
        className="page-hero-image"
        src="/images/linea-omi.jpeg"
        alt=""
        fill
        sizes="100vw"
        priority
      />
      <div className="page-hero-wash" />
      <div className="container page-hero-content">
        <h1>{title}</h1>
        <p>{text}</p>
        {children}
      </div>
    </section>
  );
}
