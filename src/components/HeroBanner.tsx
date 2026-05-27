interface HeroBannerProps {
  title: string
  subtitle: string
  description: string
}

export function HeroBanner({ title, subtitle, description }: HeroBannerProps) {
  return (
    <section className="hero-banner">
      <p className="hero-subtitle">{subtitle}</p>
      <h1 className="hero-title">{title}</h1>
      <p className="hero-description">{description}</p>
    </section>
  )
}
