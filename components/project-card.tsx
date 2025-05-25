import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  lightBackground?: boolean | undefined
  githubUrl: string
  liveUrl?: string | undefined
  tags: string[]
}

export function ProjectCard({ title, description, image, lightBackground, githubUrl, liveUrl, tags }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        {lightBackground ?
            (
          <div>
            <h3 className="font-bold text-xl text-zinc-800 mb-2">{title}</h3>
            <p className="text-zinc-800/90 mb-4 line-clamp-2">{description}</p>
          </div>
          )
         : (
            <div>
              <h3 className="font-bold text-xl text-white mb-2">{title}</h3>
              <p className="text-white/90 mb-4 line-clamp-2">{description}</p>
            </div>
         )}


        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="bg-white/20 border-white/20 text-white hover:bg-white/30 hover:text-white"
            asChild
          >
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Code
            </Link>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="bg-white/20 border-white/20 text-white hover:bg-white/30 hover:text-white"
            asChild
          >
            {liveUrl && 
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Demo
            </Link>
            }

          </Button>
        </div>
      </div>
    </div>
  )
}
