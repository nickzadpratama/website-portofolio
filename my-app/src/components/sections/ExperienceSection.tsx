import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { experiences } from "@/data/experiences";

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" title="Work Experience">
      <div className="space-y-0">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
