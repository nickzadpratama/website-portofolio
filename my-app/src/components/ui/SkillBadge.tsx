import type { SkillBadgeProps } from "@/types";

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
      {skill.name}
    </span>
  );
}
