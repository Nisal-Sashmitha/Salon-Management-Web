import Image from "next/image";
import FeaturesSection from "@/components/home/AboutSection";
import Link from "next/link";
import ServicePreviewSection from "@/components/home/ServicePreviewSection";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
// import { ArrowRight, Star, Sparkles, Clock, Award } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="relative w-full md:h-screen h-[70vh] bg-cover bg-center overflow-hidden">
        {/* Optimized background image */}
        <Image
          src="/assets/HomeHeaderImage.png"
          alt="Salon Header"
          fill
          priority
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        <div className="flex flex-col items-center justify-center text-center text-white px-4 md:px-6 h-full relative z-20">
          <blockquote className="text-3xl md:text-5xl md:text-nowrap font-semibold italic max-w-2xl md:max-w-3xl mx-auto">
            &quot;Capturing the Essence of You.&quot;
          </blockquote>
          <p className="mt-4 text-base md:text-xl text-gray-300">
            Ladies Hair and Beauty Salon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Button
              asChild
              size="lg"
              className="luxury-button text-lg px-8 py-4"
            >
              <Link href="/appointment">
                Book Your Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>
      <FeaturesSection />
      <ServicePreviewSection />
      <CTASection />
    </>
  );
}
