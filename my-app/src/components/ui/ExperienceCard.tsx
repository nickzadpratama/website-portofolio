import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";
import type { ExperienceCardProps } from "@/types";

export function ExperienceCard({ experience, isLast = false }: ExperienceCardProps) {
  const periodText =
    experience.period ??
    `${formatDate(experience.startDate)} — ${formatDate(experience.endDate)}`;

  return (
    <div className={cn("relative pl-8", !isLast && "border-l-2 border-gray-200 pb-8")}>
      {/* Timeline dot */}
      <div className="absolute left-[-7px] top-0 h-3 w-3 rounded-full bg-gray-900 border-2 border-white" />

      <div>
        <h3 className="text-lg font-semibold text-gray-900">{experience.role}</h3>
        <p className="text-gray-600">{experience.company}</p>
        <p className="mt-1 text-sm text-gray-500">
          {periodText}
        </p>

        <p className="mt-3 text-sm text-gray-700 leading-relaxed">
          {experience.description}
        </p>

        {experience.responsibilities.length > 0 && (
          <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
            {experience.responsibilities.map((item, index) => (
              <li key={index} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
