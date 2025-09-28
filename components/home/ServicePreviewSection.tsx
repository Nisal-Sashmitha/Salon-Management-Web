import React from "react";
import { Card } from "../ui/card";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Hair Colors, tearments & Styling",
    description:
      "Expert cuts, colors, and treatments for stunning transformations.",
    image: "/assets/hair-styling.png",
    price: "From Rs. 1200",
  },
  {
    title: "Beauty Treatments",
    description: "Rejuvenating facials and skincare for radiant, glowing skin.",
    image: "/assets/facial.png",
    price: "From Rs. 100",
  },
  {
    title: "Nail Art",
    description:
      "Precise manicures and creative nail designs for perfect hands.",
    image: "/assets/nail-art.png",
    price: "From $45",
  },
];

const ServicePreviewSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Our Signature Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Indulge in our premium beauty and wellness treatments, crafted to
            enhance your natural elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="subtle-card group overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  width={400}
                  height={256}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-primary">
                    {service.price}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link href="/services">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePreviewSection;
