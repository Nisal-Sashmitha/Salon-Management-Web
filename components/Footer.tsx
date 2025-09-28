import {
  Scissors,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scissors className="h-6 w-6" />
              <span className="font-heading text-xl font-semibold">
                Salon Sash
              </span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Experience quality and elegance in every service. Where beauty
              meets sophistication.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+94 75 410 8211</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>info@salonsaash.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>
                  Salon Saash 376c, pahala Eriyagama, Eriyagama, Peradeniya.
                </span>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Hours</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Fri: 9AM-7PM</span>
              </div>
              <div className="ml-6">Sat: 9AM-6PM</div>
              <div className="ml-6">Sun: 10AM-5PM</div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="https://www.instagram.com/salonsaash"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://web.facebook.com/profile.php?id=61579788151293"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2025 Salon Saash. All rights reserved. Crafted with elegance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
