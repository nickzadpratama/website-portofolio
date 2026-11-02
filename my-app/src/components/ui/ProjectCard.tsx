import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import type { ProjectCardProps } from "@/types";

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={600}
          height={340}
          className="aspect-video object-cover rounded-t-xl"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600"
            >
              {tech.name}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <GithubIcon className="h-4 w-4" />
              Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
