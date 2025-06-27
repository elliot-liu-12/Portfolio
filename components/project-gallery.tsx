'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProjectCard } from './project-card'; // adjust this if needed

export function ProjectGallery() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "UF SASE Website",
      description:
        "Automated fetching event slides from Google Drive API, implemented various admin tools.",
      image: "/thumbnails/sase-website.png",
      githubUrl: "https://github.com/ufsasewebmaster/UF-SASE-Website",
      liveUrl: "https://ufsase.com",
      tags: ["TypeScript", "React", "TanStack", "Google Cloud API", "Tailwind CSS"],
    },
    {
      title: "Tube Amp Simulator",
      description:
        "A cross-platform audio plugin that simulates the sound signature of a tube amplifier.",
      image: "/thumbnails/tube-amp-simulator.png",
      githubUrl: "https://github.com/elliot-liu-12/TubeAmpSimulator",
      liveUrl: undefined,
      tags: ["Modern C++", "JUCE"],
    },
    {
      title: "Minetest Migration",
      description:
        "Rewrote and tested 200+ API functions for an open source 3D game engine to integrate additional programming languages.",
      image: "/thumbnails/minetest.png",
      githubUrl: "https://github.com/elliot-liu-12/minetest",
      liveUrl: undefined,
      tags: ["C++", "Lua"],
    },
    {
      title: "E-commerce App",
      description:
        "An e-commerce website with product management, cart functionality, and payment processing.",
      image: "/thumbnails/e-commerce-app.png",
      lightBackground: true,
      githubUrl: "https://github.com/elliot-liu-12/e-commerce_web_app",
      liveUrl: undefined,
      tags: ["React", "MaterialUI", "MySQL", "Stripe"],
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            lightBackground={project.lightBackground}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            tags={project.tags}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        {showAll ? (
          <Button
            variant="outline"
            className="rounded-full"
            size="lg"
            asChild
          >
            <Link href="https://github.com/elliot-liu-12?tab=repositories" target="_blank">
              View All Projects
            </Link>
          </Button>
        ) : (
          <Button
            variant="outline"
            className="rounded-full"
            size="lg"
            onClick={() => setShowAll(true)}
          >
            Show More
          </Button>
        )}
      </div>
    </>
  );
}
