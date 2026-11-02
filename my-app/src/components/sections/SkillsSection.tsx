import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" title="Skills & Technologies">
      {skillGroups.map((group, index) => (
        <div
          key={group.category}
          className={index === skillGroups.length - 1 ? "mb-0" : "mb-8"}
        >
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
}
