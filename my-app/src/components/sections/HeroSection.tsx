import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center"
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
          {profile.title}
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
          {profile.name}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
          Membangun solusi digital yang elegan dengan teknologi modern — dari
          aplikasi web full-stack hingga data pipeline yang andal.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="primary" href={profile.resumeUrl} download>
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          <Button variant="outline" href="#contact">
            Hubungi Saya
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="h-6 w-6 animate-bounce text-gray-400" />
      </div>
    </section>
  );
}
