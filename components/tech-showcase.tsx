"use client"

import { Card, CardContent } from "@/components/ui/card"

interface TechShowcaseProps {
  title: string
  technologies: {
    name: string
    icon: string
    color: string
  }[]
}

export function TechShowcase({ title, technologies }: TechShowcaseProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-center">{title}</h3>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {technologies.map((tech) => (
          <Card key={tech.name} className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-4 text-center">
              <div
                className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </div>
              <p className="text-sm font-medium">{tech.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}