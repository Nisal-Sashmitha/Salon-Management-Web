import AboutSection from "@/components/home/AboutSection";
import Link from "next/link";
import ContactUsSection from "@/components/home/ContactUsSection";
import ServicePreviewSection from "@/components/home/ServicePreviewSection";

export default function Home() {
  return (
    <>
      <div
        className="relative w-full md:h-screen h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/HomeHeaderImage.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="flex flex-col items-center justify-center text-center text-white px-4 md:px-6 h-full">
          <blockquote className="text-3xl md:text-5xl md:text-nowrap font-semibold italic max-w-2xl md:max-w-3xl mx-auto z-10">
            &quot;Capturing the Essence of You.&quot;
          </blockquote>
          <p className="mt-4 text-base md:text-xl text-gray-300">
            Ladies Hair and Beauty Salon.
          </p>
          {/* bg-gradient-to-r from-pink-500 to-red-500 */}
          <Link href="/appointment">
            <button className="mt-8 px-6 py-3 md:px-9 md:py-3 bg-white text-black font-bold text-base md:text-lg rounded-full hover:shadow-lg hover:scale-105 transition transform">
              Book Now
            </button>
          </Link>
        </div>
      </div>
  <AboutSection />
  <ServicePreviewSection />
  <ContactUsSection />
    </>
  );
}
