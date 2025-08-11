interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
}

export function SectionHeader({ title, subtitle, align = "left" }: SectionHeaderProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }[align]

  return (
    <div className={`max-w-xl mb-12 ${alignClass}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
        <span className="text-gradient">{title}</span>
        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-primary to-pink-600 rounded-full transition-all duration-300 hover:w-full"></span>
      </h2>
      {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
    </div>
  )
}
