import type { EducationCardProps } from "@/types";

export function EducationCard({ education }: EducationCardProps) {
  const periodText =
    education.period ??
    (education.startYear
      ? `${education.startYear} — ${education.endYear ?? "Sekarang"}`
      : "");

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5">
      <h3 className="font-semibold text-gray-900">{education.institution}</h3>
      <p className="mt-1 text-sm text-gray-700">
        {education.degree} — {education.field}
      </p>
      {periodText && (
        <p className="mt-1 text-sm text-gray-500">{periodText}</p>
      )}
    </div>
  );
}
