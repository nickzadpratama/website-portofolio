import type { EducationCardProps } from "@/types";

export function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5">
      <h3 className="font-semibold text-gray-900">{education.institution}</h3>
      <p className="mt-1 text-sm text-gray-700">
        {education.degree} — {education.field}
      </p>
      <p className="mt-1 text-sm text-gray-500">
        {education.startYear} — {education.endYear ?? "Sekarang"}
      </p>
    </div>
  );
}
