import React from "react";
import { Star, Sparkles, Clock, Award } from "lucide-react";

const stats = [
  { icon: Star, value: "Friendly", label: "Service" },
  { icon: Award, value: "Premium", label: "Quality Products" },
  { icon: Sparkles, value: "Modern", label: "Equipments" },
  { icon: Clock, value: "Flexible", label: "Booking Hours" },
];

const FeaturesSection = () => (
  <>
    {/* Stats Section */}
    <section className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="font-heading text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default FeaturesSection;
