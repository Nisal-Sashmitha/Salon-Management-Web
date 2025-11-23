"use client";

import { useMemo, useState } from "react";
import { Search, Filter, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { getDiscountPercentage } from "@/components/helpers";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const services = [
  {
    id: 1,
    title: "Aroma Magic Gold facial",
    category: "beauty",
    description:
      "A luxurious facial with natural gold extracts to brighten, rejuvenate, and give your skin a radiant glow",
    duration: "75 min",
    originalPrice: 5000,
    currentPrice: 3500,
    discount: true,
    rating: 5.0,
    popular: true,
  },
  {
    id: 2,
    title: "Aroma Magic Pearl Facial (Pimple Care)",
    category: "beauty",
    description:
      "Ideal for pimple-prone skin; calms, clears, and brightens with a natural pearl glow.",
    duration: "75 min",
    originalPrice: 5500,
    currentPrice: 3700,
    discount: true,
    rating: 4.8,
  },
  {
    id: 3,
    title: "Ume Care Cleanup",
    category: "beauty",
    description:
      "Deep pore cleansing facial using premium Ume Care products and high frequency technology to purify skin, reduce bacteria, and promote healthy cell renewal for a radiant complexion.",
    duration: "60 min",
    originalPrice: 5000,
    currentPrice: 5000,
    discount: false,
    rating: 4.9,
    popular: false,
  },
  {
    id: 4,
    title: "Ume Care Hydra Facial",
    category: "beauty",
    description:
      "Comprehensive hydrating treatment using Ume Care products with hydradermabrasion, galvanic therapy, high frequency, proton light therapy, and rejuvenating jelly mask for ultimate skin renewal.",
    duration: "90 min",
    originalPrice: 9000,
    currentPrice: 6000,
    discount: true,
    rating: 4.7,
    popular: true,
  },
  {
    id: 5,
    title: "Derma pro cleanup",
    category: "beauty",
    description:
      "Essential basic facial cleansing treatment to remove impurities, unclog pores, and refresh skin using professional techniques and derma pro products.",
    duration: "45 min",
    originalPrice: 1500,
    currentPrice: 1500,
    discount: false,
    rating: 4.7,
    popular: false,
  },
  {
    id: 6,
    title: "Derma pro facial",
    category: "beauty",
    description:
      "Facial treatment targeting deep cleansing, exfoliation, and nourishment using professional techniques and derma pro products for rejuvenated, healthy-looking skin.",
    duration: "60 min",
    originalPrice: 2000,
    currentPrice: 2000,
    discount: false,
    rating: 4.7,
    popular: false,
  },
  {
    id: 7,
    title: "Full Dressing",
    category: "beauty",
    description:
      "Full Dressing Complete bridal/event styling including professional saree draping, expert hair styling, and flawless MAC makeup application for weddings, special occasions, and photoshoots.",
    duration: "90 min",
    originalPrice: 3700,
    currentPrice: 3000,
    discount: true,
    rating: 4.8,
  },
  {
    id: 8,
    title: "Make Up",
    category: "beauty",
    description:
      "Professional makeup application using premium MAC cosmetics for flawless, long-lasting coverage. Perfect for events, photoshoots, or everyday glamour with expert color matching and technique",
    duration: "25 min",
    originalPrice: 2200,
    currentPrice: 1500,
    discount: true,
    popular: true,
  },
  {
    id: 9,
    title: "Hair Style",
    category: "hair",
    description:
      "Professional hair styling using expert techniques and quality products to create beautiful, long-lasting looks tailored to your preferences and occasion",
    duration: "20 min",
    originalPrice: 1000,
    currentPrice: 1000,
    discount: false,
    rating: 4.8,
  },
  {
    id: 10,
    title: "Saree Drapping",
    category: "beauty",
    description: "Kandyan and indian saree drapping for all occasions",
    duration: "10 min",
    originalPrice: 500,
    currentPrice: 500,
    discount: false,
    rating: 4.8,
  },
  {
    id: 11,
    title: "Eyebrow Shaping",
    category: "beauty",
    description: "Professional eyebrow threading and shaping",
    duration: "7 min",
    originalPrice: 250,
    currentPrice: 200,
    discount: true,
    rating: 4.6,
  },
  {
    id: 12,
    title: "Upperlip",
    category: "beauty",
    description: "",
    duration: "5 min",
    originalPrice: 100,
    currentPrice: 100,
    discount: false,
    rating: 4.7,
  },
  {
    id: 13,
    title: "Eyebrow shaping and Upperlip",
    category: "beauty",
    description: "",
    duration: "90 min",
    originalPrice: 400,
    currentPrice: 300,
    discount: true,
    rating: 4.9,
  },
  {
    id: 16,
    title: "Relaxing/ Rebonding",
    category: "hair",
    description:
      "Professional hair straightening services using L'Oréal products for smooth, manageable hair. Pricing varies by hair length and thickness. Special discount currently available.",
    duration: "4 hours (depending on the hair)",
    originalPrice: 2000,
    currentPrice: 1500,
    discount: false,
    contactUsForPrice: true,
    popular: true,
  },
  {
    id: 17,
    title: "Keratin Treatment",
    category: "hair",
    description:
      "Keratin Treatment Smoothing treatment using Hannalee keratin products to reduce frizz, add shine, and improve manageability while maintaining natural hair movement and health.",
    duration: "5 hours (depending on the hair)",
    originalPrice: 2000,
    currentPrice: 1500,
    discount: false,
    contactUsForPrice: true,
    popular: true,
  },
  {
    id: 18,
    title: "Condition Treatment",
    category: "hair",
    description:
      "Deep conditioning therapy using L'Oréal products with hair steaming and vitamin infusion to restore moisture, repair damage, and enhance hair health and shine.",
    duration: "45 - 60 min (depending on the hair)",
    originalPrice: 2000,
    currentPrice: 1700,
    discount: true,
    contactUsForPrice: false,
    popular: false,
  },
  {
    id: 19,
    title: "Blowdry",
    category: "hair",
    description:
      "Complete hair color transformation using L'Oréal professional color products. Pricing varies by hair length and thickness. Special discount available - expert application guaranteed.",
    duration: "2 hours (depending on the hair)",
    originalPrice: 1000,
    currentPrice: 800,
    contactUsForPrice: false,
    discount: true,
    rating: 4.9,
  },
  {
    id: 20,
    title: "Iron",
    category: "hair",
    description:
      "Complete hair color transformation using L'Oréal professional color products. Pricing varies by hair length and thickness. Special discount available - expert application guaranteed.",
    duration: "2 hours (depending on the hair)",
    originalPrice: 1500,
    currentPrice: 1000,
    contactUsForPrice: false,
    discount: true,
    rating: 4.9,
  },
  {
    id: 21,
    title: "Full hair fashion color",
    category: "hair",
    description:
      "Complete hair color transformation using L'Oréal professional color products. Pricing varies by hair length and thickness. Special discount available - expert application guaranteed.",
    duration: "2 hours (depending on the hair)",
    originalPrice: 2000,
    currentPrice: 1500,
    contactUsForPrice: true,
    discount: false,
    rating: 4.9,
  },
  {
    id: 22,
    title: "Full hair lines",
    category: "hair",
    description:
      "Professional hair highlighting using L'Oréal products to create dimensional color and brightness. Pricing varies by hair length and thickness. Special discount available.",
    duration: "3 hours (depending on the hair)",
    originalPrice: 2000,
    currentPrice: 1500,
    contactUsForPrice: true,
    discount: false,
    rating: 4.9,
  },
  {
    id: 23,
    title: "Balayage",
    category: "hair",
    description:
      "Balayage Hand-painted highlighting technique using L'Oréal products. Pricing varies by hair length and thickness. Special discount currently available",
    duration: "4 hours (depending on the hair)",
    originalPrice: 2000,
    currentPrice: 1500,
    contactUsForPrice: true,
    discount: false,
    rating: 4.9,
  },
  {
    id: 24,
    title: "Ombré",
    category: "hair",
    description:
      "Ombré Gradient color technique using L'Oréal products transitioning from dark roots to lighter ends for a natural, dimensional look. Pricing varies by hair length.",
    duration: "3 hours (depending on the hair)",
    originalPrice: 2000,
    currentPrice: 1500,
    contactUsForPrice: true,
    discount: false,
    rating: 4.9,
  },
  {
    id: 25,
    title: "Gray Hair Cover",
    category: "hair",
    description:
      "Gray Hair Cover Complete gray coverage using L'Oréal professional color products for natural-looking results. Pricing varies by hair length and thickness. Special discount currently available.",
    duration: "1 hours (depending on the hair)",
    originalPrice: 2000,
    currentPrice: 1500,
    contactUsForPrice: true,
    discount: false,
    rating: 4.9,
  },
  {
    id: 26,
    title: "Hand wax (full hand)",
    category: "beauty",
    description:
      "Gentle hair removal for hands using normal waxing products for smooth, long-lasting results with minimal discomfort and professional aftercare guidance.",
    duration: "20 min",
    originalPrice: 2500,
    currentPrice: 1900,
    discount: true,
    rating: 4.9,
  },
  {
    id: 27,
    title: "Leg wax - Half leg",
    category: "beauty",
    description:
      "Professional leg hair removal using normal waxing products for smooth, long-lasting results with expert technique and proper aftercare for comfortable experience.",
    duration: "20 min",
    originalPrice: 2500,
    currentPrice: 1800,
    discount: true,
    rating: 4.9,
  },
  {
    id: 28,
    title: "Leg wax - Full leg",
    category: "beauty",
    description:
      "Professional leg hair removal using normal waxing products for smooth, long-lasting results with expert technique and proper aftercare for comfortable experience.",
    duration: "20 min",
    originalPrice: 4200,
    currentPrice: 2500,
    discount: true,
    rating: 4.9,
  },
];

const categories = [
  { value: "all", label: "All Services" },
  { value: "hair", label: "Hair Services" },
  { value: "beauty", label: "Beauty Treatments" },
  { value: "nails", label: "Nail Services" },
];

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices = useMemo(
    () =>
      services.filter((service) => {
        const matchesSearch =
          service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
          selectedCategory === "all" || service.category === selectedCategory;
        return matchesSearch && matchesCategory;
      }),
    [searchTerm, selectedCategory]
  );

  return (
    <TooltipProvider>
      <div className="min-h-screen py-20  pt-44">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our Premium Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of luxury beauty and wellness
              treatments, designed to enhance your natural elegance.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-full sm:w-48 pl-10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card
                key={service.id}
                className="subtle-card group overflow-hidden"
              >
                <div className="p-6 border flex flex-col h-full">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4 flex-1">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-heading text-xl font-semibold">
                          {service.title}
                        </h3>
                        {service.popular && (
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Duration and Rating */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </div>
                    {/* <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                    {service.rating}
                  </div> */}
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      {service.contactUsForPrice ? (
                        <span className="text-2xl font-bold text-primary">
                          Contact Us for Price
                        </span>
                      ) : (
                        <>
                          <span className="text-2xl font-bold text-primary">
                            Rs. {service.currentPrice}
                          </span>
                          {service.originalPrice > service.currentPrice && (
                            <span className="text-lg text-muted-foreground line-through">
                              Rs. {service.originalPrice}
                            </span>
                          )}
                        </>
                      )}
                    </div>
                    {!service.contactUsForPrice && service.discount && (
                      <Badge variant="destructive" className="text-xs">
                        {getDiscountPercentage(
                          service.originalPrice,
                          service.currentPrice
                        )}{" "}
                        OFF
                      </Badge>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          asChild
                          className="w-full luxury-button"
                          disabled
                        >
                          <Link aria-disabled="true" href={`/contact`}>
                            Book Now
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Coming Soon</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          asChild
                          variant="outline"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                          disabled
                        >
                          <span>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Coming Soon</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No services found matching your criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Can&apos;t find what you&apos;re looking for? Our experts are here
              to help.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Services;
