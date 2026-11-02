import type { CertificationBadgeProps } from "@/types";

export function CertificationBadge({ certification }: CertificationBadgeProps) {
  const content = (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
      <h3 className="font-medium text-gray-900">{certification.name}</h3>
      <p className="mt-1 text-sm text-gray-600">{certification.issuer}</p>
      <p className="mt-0.5 text-sm text-gray-500">{certification.year}</p>
    </div>
  );

  if (certification.credentialUrl) {
    return (
      <a
        href={certification.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:opacity-80 transition-colors duration-200"
      >
        {content}
      </a>
    );
  }

  return content;
}
