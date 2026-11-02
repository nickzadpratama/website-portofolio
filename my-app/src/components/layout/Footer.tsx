"use client";

import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";

export function Footer() {
  const [year, setYear] = useState<number>(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-gray-200 bg-white py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-gray-500">
            © {year} Nickzad Pratama. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {profile.contact.github && (
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 transition-colors duration-200 hover:text-gray-600"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            )}
            {profile.contact.linkedin && (
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 transition-colors duration-200 hover:text-gray-600"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            )}
            <a
              href={`mailto:${profile.contact.email}`}
              aria-label="Email"
              className="text-gray-400 transition-colors duration-200 hover:text-gray-600"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
