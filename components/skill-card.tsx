"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SkillCardProps {
  name: string
  category: string
  experience: string
  description: string
  icon: string
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  relatedTechs?: string[]
}

export function SkillCard({
  name,
  category,
  experience,
  description,
  icon,
  proficiency,
  relatedTechs,
}: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const proficiencyColors = {
    Beginner: "bg-yellow-500",
    Intermediate: "bg-blue-500",
    Advanced: "bg-green-500",
    Expert: "bg-purple-500",
  }

  return (
    <Card
      className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{icon}</div>
          <Badge className={`${proficiencyColors[proficiency]} text-white hover:${proficiencyColors[proficiency]}`}>
            {proficiency}
          </Badge>
        </div>

        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{name}</h3>

        <p className="text-sm text-muted-foreground mb-3">{experience} experience</p>

        <p className="text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>

        {relatedTechs && (
          <div className="flex flex-wrap gap-1">
            {relatedTechs.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </CardContent>
    </Card>
  )
}