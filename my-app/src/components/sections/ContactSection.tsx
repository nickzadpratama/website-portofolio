import { Mail, Phone, MapPin } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Tertarik untuk berkolaborasi? Jangan ragu untuk menghubungi saya."
    >
      <div className="mx-auto max-w-xl text-center">
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Mail className="h-4 w-4" />
            <span>{profile.contact.email}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Phone className="h-4 w-4" />
            <span>{profile.contact.phone}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{profile.contact.location}</span>
          </div>
        </div>

        <div className="mt-8">
          <Button
            variant="primary"
            href={`mailto:${profile.contact.email}`}
          >
            <Mail className="mr-2 h-4 w-4" />
            Kirim Email
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
