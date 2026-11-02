import type { SocialLinkProps } from "@/types";

export function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
    >
      {icon}
      <span className="sr-only">{label}</span>
    </a>
  );
}
