import { Award, Heart, Users, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Heart,
    title: "Passion for Beauty",
    description:
      "We are passionate about bringing out the natural beauty in every client through expert care and attention.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in every service, using only the finest products and latest techniques.",
  },
  {
    icon: Users,
    title: "Client-Centered",
    description:
      "Your satisfaction and comfort are our top priorities. We listen, understand, and deliver.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "We stay ahead of beauty trends and continuously improve our skills and services.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen py-20 pt-48">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            About Salon Saash
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Welcome to the future of beauty and wellness. We&apos;re launching
            with a vision to redefine luxury salon experiences through
            innovation, quality, and personalized care.
          </p>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-6">Our Vision</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Salon Saash represents the next generation of beauty
                establishments, where cutting-edge techniques meet timeless
                elegance. We&apos;re bringing fresh energy to the beauty
                industry with our modern approach and commitment to excellence.
              </p>
              <p>
                Our philosophy centers on creating personalized beauty
                experiences that reflect your unique style and personality. We
                believe in the power of transformation and the confidence that
                comes with looking and feeling your best.
              </p>
              <p>
                With state-of-the-art equipment, premium products, and a team
                passionate about beauty innovation, we&apos;re ready to make
                your beauty dreams a reality. Experience the difference of a
                salon designed for the modern client.
              </p>
            </div>
          </div>
          <div className="elegant-card p-8 bg-accent/30">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-2">
                  New
                </div>
                <div className="text-muted-foreground">Modern Facilities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-2">
                  Premium
                </div>
                <div className="text-muted-foreground">Quality Products</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-2">
                  Expert
                </div>
                <div className="text-muted-foreground">Professional Team</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="subtle-card p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        {/* <div>
          <h2 className="font-heading text-3xl font-bold text-center mb-12">
            Meet Our Expert Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="subtle-card overflow-hidden">
                <div className="p-6 text-center">
                  <div className="w-20 h-20 bg-accent/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-heading font-bold text-primary">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    {member.role}
                  </p>
                  <p className="text-primary text-sm font-medium mb-2">
                    {member.experience}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Specialty: {member.specialty}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto elegant-card p-8 bg-accent/20">
            <h2 className="font-heading text-2xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To revolutionize the salon experience through complete
              transparency and uncompromising quality. We&apos;re dedicated to
              using only the finest products that enhance and protect our
              clients&apos; natural beauty, while providing clear, honest
              pricing and exceptional service. Our mission is to build lasting
              relationships with our clients by making professional beauty care
              accessible, trustworthy, and genuinely caring - because you
              deserve to know exactly what you&apos;re paying for and
              what&apos;s being used on your hair and skin.
            </p>
            <div className="mt-6">
              <span className="text-primary font-heading text-lg">
                — Nisal Sashmitha, Founder
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
