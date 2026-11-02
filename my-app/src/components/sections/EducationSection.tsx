import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { EducationCard } from "@/components/ui/EducationCard";
import { CertificationBadge } from "@/components/ui/CertificationBadge";
import { education, certifications } from "@/data/education";

export function EducationSection() {
  return (
    <SectionWrapper id="education" title="Education & Certifications">
      {/* Education */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-900">Education</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {education.map((edu) => (
            <EducationCard key={edu.institution} education={edu} />
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-10">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Certifications
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <CertificationBadge key={cert.name} certification={cert} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
