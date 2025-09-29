import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Custom TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Contact = () => {
  const contactInfo = [
    {
      icon: MessageCircle,
      title: "Whatsapp",
      detail: "+94754108211",
      url: "https://wa.me/94754108211",
      description: "Send us a message or call us for immediate assistance",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+94754108211",
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "info@salonsaash.com",
      description: "Send us your questions anytime",
    },
    {
      icon: MapPin,
      title: "Address",
      detail: "Salon Saash, 376c, pahala Eriyagama, Eriyagama, Peradeniya.",
      description: "Visit us at our elegant location",
    },
    {
      icon: Clock,
      title: "Hours",
      detail: "Mon-Fri: 8:AM-6PM",
      description: "Sat: 8AM-6PM, Sun: 8AM-6PM",
    },
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://web.facebook.com/profile.php?id=61579788151293",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/salonsaash",
    },
    {
      icon: TikTokIcon,
      name: "TikTok",
      url: "https://www.tiktok.com/@salonsaash",
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://www.youtube.com/@salonsaash",
    },
    {
      icon: Twitter,
      name: "X",
      url: "https://x.com/salonsaash",
    },
  ];

  return (
    <div className="min-h-screen py-20 pt-40">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;d love to hear from you. Send us a message and we&apos;ll
            respond as soon as possible.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="subtle-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.url ? (
                          <a href={info.url} target="_blank">
                            <p className="font-medium text-primary mb-1">
                              {info.detail}
                            </p>
                          </a>
                        ) : (
                          <p className="font-medium text-primary mb-1">
                            {info.detail}
                          </p>
                        )}

                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="elegant-card p-6">
                <h3 className="font-heading text-lg font-semibold mb-4">
                  Our Location
                </h3>
                <div className="bg-accent/30 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">
                      Interactive map coming soon
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Salon Saash 376c, pahala Eriyagama, Eriyagama, Peradeniya.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="elegant-card p-6">
                <h3 className="font-heading text-lg font-semibold mb-4">
                  Follow Us
                </h3>
                <div className="space-y-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent/20 transition-colors group"
                    >
                      <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <social.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Quick Contact */}
          <Card className="elegant-card p-6 bg-accent/20 mb-12">
            <div className="text-center">
              <h3 className="font-heading text-lg font-semibold mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="text-muted-foreground mb-4">
                For urgent appointment requests or questions, call us directly:
              </p>
              <Button className="luxury-button" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                Call +94 75 410 8211
              </Button>
            </div>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto elegant-card p-8 bg-accent/20">
            <h3 className="font-heading text-xl font-bold mb-4">
              We&apos;re Here to Help
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Whether you have questions about our services, want to schedule an
              appointment, or need beauty advice from our experts, we&apos;re
              always happy to help. Our team typically responds to inquiries
              within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
