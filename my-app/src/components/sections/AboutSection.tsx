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
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-200">
            <Image
              src={profile.avatarUrl}
              alt={profile.name}
              width={400}
              height={400}
              className="h-full w-full object-cover"
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
