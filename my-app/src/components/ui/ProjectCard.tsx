import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import type { ProjectCardProps } from "@/types";

export function ProjectCard({ project }: ProjectCardProps) {
  const targetUrl = project.liveUrl || project.repoUrl;

  return (
    <div className="group flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Project Image Preview */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        {targetUrl ? (
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full w-full cursor-pointer"
            aria-label={`Buka ${project.title}`}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        ) : (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top"
          />
        )}
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-gray-900">
          {targetUrl ? (
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-gray-600 transition-colors"
            >
              {project.title}
              <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </a>
          ) : (
            project.title
          )}
        </h3>

        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600"
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="mt-auto flex items-center gap-3 pt-5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gray-900 px-3.5 py-2 text-xs font-medium text-white hover:bg-gray-800 transition-colors duration-200"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Kunjungi Web
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
