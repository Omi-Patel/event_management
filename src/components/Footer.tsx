import { Link } from "react-router-dom";
import {
  Flower2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Sparkles,
  Heart,
  Award,
  Clock,
  ExternalLink,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-primary rounded-full animate-float" />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-gold rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-sunset rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                    <Flower2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-gold rounded-full flex items-center justify-center">
                    <Sparkles className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold gradient-text">
                    Shree Ganesh
                  </span>
                  <span className="text-sm font-medium text-gray-400 -mt-1">
                    Decoration
                  </span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Professional decoration services for all occasions. Making your
                celebrations memorable with beautiful decorations and creative
                designs.
              </p>

              <div className="flex items-center space-x-4">
                <Badge className="bg-gradient-primary text-white border-0">
                  <Award className="w-3 h-3 mr-1" />
                  Award Winning
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/10 text-gray-300 border-white/20"
                >
                  <Clock className="w-3 h-3 mr-1" />
                  24/7 Available
                </Badge>
              </div>

              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 p-0 rounded-xl bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 p-0 rounded-xl bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 p-0 rounded-xl bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 p-0 rounded-xl bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h3>
              <div className="space-y-3">
                <Link
                  to="/"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <span className="flex items-center">
                    <div className="w-1 h-1 bg-gradient-primary rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
                    Home
                  </span>
                </Link>
                <Link
                  to="/services"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <span className="flex items-center">
                    <div className="w-1 h-1 bg-gradient-primary rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
                    Services
                  </span>
                </Link>
                <Link
                  to="/gallery"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <span className="flex items-center">
                    <div className="w-1 h-1 bg-gradient-primary rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
                    Gallery
                  </span>
                </Link>
                <Link
                  to="/about"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <span className="flex items-center">
                    <div className="w-1 h-1 bg-gradient-primary rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
                    About Us
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <span className="flex items-center">
                    <div className="w-1 h-1 bg-gradient-primary rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
                    Contact
                  </span>
                </Link>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Our Services
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 group">
                  <div className="w-1 h-1 bg-gradient-gold rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
                  <span>Mandap Decoration</span>
                </div>
                <div className="flex items-center text-gray-300 group">
                  <div className="w-1 h-1 bg-gradient-gold rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
                  <span>Wedding Decoration</span>
                </div>
                <div className="flex items-center text-gray-300 group">
                  <div className="w-1 h-1 bg-gradient-gold rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
                  <span>Birthday Parties</span>
                </div>
                <div className="flex items-center text-gray-300 group">
                  <div className="w-1 h-1 bg-gradient-gold rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
                  <span>Temple Decoration</span>
                </div>
                <div className="flex items-center text-gray-300 group">
                  <div className="w-1 h-1 bg-gradient-gold rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
                  <span>Event Lighting</span>
                </div>
                <div className="flex items-center text-gray-300 group">
                  <div className="w-1 h-1 bg-gradient-gold rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
                  <span>Corporate Events</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="text-gray-300 hover:text-white transition-colors duration-300">
                      info@shreeganeshdecoration.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="text-gray-300 hover:text-white transition-colors duration-300">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-sunset rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-gray-300 hover:text-white transition-colors duration-300">
                      Valoti, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="pt-4">
                <h4 className="text-sm font-semibold text-white mb-3">
                  Stay Updated
                </h4>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Button
                    size="sm"
                    className="bg-gradient-primary hover:shadow-glow text-white px-4 py-4 rounded-full"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap justify-center items-center space-x-4 space-y-2 md:space-y-0 text-gray-400 text-sm">
                <span>
                  © {currentYear} Shree Ganesh Decoration. All rights reserved.
                </span>
                <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full" />
                <span>Made with ❤️ in India</span>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/sitemap"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
