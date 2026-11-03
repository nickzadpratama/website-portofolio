import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-5 md:gap-12">
        {/* Profile Image */}
        <div className="md:col-span-2">
          <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/5] w-full max-w-sm mx-auto md:max-w-none overflow-hidden rounded-2xl bg-gray-100 shadow-md border border-gray-200/80">
            <Image
              src={profile.avatarUrl || "/images/foto-profile.jpg"}
              alt={profile.name}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Bio & Contact Info */}
        <div className="md:col-span-3">
          <p className="text-lg leading-relaxed text-gray-600">
            {profile.bio}
          </p>

          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="h-4 w-4" />
              <span>{profile.contact.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Mail className="h-4 w-4" />
              <span>{profile.contact.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Phone className="h-4 w-4" />
              <span>{profile.contact.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
