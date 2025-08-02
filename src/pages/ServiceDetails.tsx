import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  Users,
  DollarSign,
  ArrowLeft,
  Share2,
  Heart,
  Star,
  Check,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-decoration.jpg";
import birthdayDecor from "@/assets/birthday-decoration.jpg";
import templeDecor from "@/assets/temple-decoration.jpg";
import marriageDecor from "@/assets/marriage-decoration.jpg";
import garbaDecor from "@/assets/garba-decoration.jpg";
import lightingDecor from "@/assets/lighting-decoration.jpg";

const ServiceDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();

  // Sample service data - in a real app, this would come from an API
  const services = {
    mandap: {
      id: "mandap",
      title: "Mandap Decoration",
      description:
        "Beautiful traditional mandap setups for weddings and ceremonies with fresh flowers, elegant draping, and traditional elements.",
      fullDescription:
        "Our mandap decoration service creates stunning traditional setups perfect for weddings and religious ceremonies. We use fresh marigold and rose flowers, elegant silk draping, and traditional elements like kalash, coconuts, and decorative items. Each mandap is customized according to your preferences and budget.\n\nOur expert team ensures every detail is perfect, from the entrance decoration to the main mandap structure. We work closely with you to understand your vision and create a memorable setup that reflects your cultural traditions and personal style.",
      price: "₹25,000+",
      category: "Wedding",
      duration: "6-8 hours",
      setupTime: "4-5 hours before event",
      includes: [
        "Fresh flowers (marigold, roses, jasmine)",
        "Silk draping and fabric",
        "Traditional decorative elements",
        "Complete setup and installation",
        "Cleanup after the event",
        "Basic lighting setup",
      ],
      features: [
        "Custom design consultation",
        "Fresh flower arrangements",
        "Traditional elements (kalash, coconuts)",
        "Elegant draping and fabric work",
        "Professional installation",
        "Post-event cleanup",
      ],
      image: heroImage,
      gallery: [heroImage, marriageDecor, templeDecor],
      rating: 4.8,
      reviews: 150,
      bookings: 150,
      gradient: "from-orange-500 to-red-500",
      icon: "🌸",
      popular: true,
    },
    birthday: {
      id: "birthday",
      title: "Birthday Party Decoration",
      description:
        "Colorful and fun birthday decorations with balloons, themes, and customized setups for all ages.",
      fullDescription:
        "Make birthdays special with our creative decoration services. We offer themed decorations, balloon arrangements, backdrop setups, table decorations, and customized elements. Perfect for children's parties, adult celebrations, and milestone birthdays.\n\nFrom princess themes to superhero parties, vintage celebrations to modern minimalist setups, we bring your vision to life. Our team handles everything from concept to cleanup, ensuring a stress-free celebration for you and your guests.",
      price: "₹5,000+",
      category: "Birthday",
      duration: "3-4 hours",
      setupTime: "2-3 hours before party",
      includes: [
        "Balloon arches and arrangements",
        "Themed backdrop and decorations",
        "Table centerpieces and setup",
        "Photo booth area decoration",
        "Entrance decoration",
        "Cleanup after party",
      ],
      features: [
        "Custom theme design",
        "Balloon artistry",
        "Photo booth setup",
        "Table decorations",
        "Entrance decoration",
        "Complete cleanup",
      ],
      image: birthdayDecor,
      gallery: [birthdayDecor, heroImage, lightingDecor],
      rating: 4.9,
      reviews: 200,
      bookings: 200,
      gradient: "from-pink-500 to-purple-500",
      icon: "🎈",
      popular: true,
    },
    temple: {
      id: "temple",
      title: "Temple Decoration",
      description:
        "Sacred temple decorations with flowers, diyas, and traditional spiritual elements for festivals.",
      fullDescription:
        "Our temple decoration service brings spiritual beauty to your religious celebrations. We specialize in flower arrangements, diya lighting, rangoli designs, and traditional decorative elements for festivals like Ganesh Chaturthi, Diwali, and other religious occasions.\n\nWe understand the spiritual significance of temple decorations and ensure every element is placed with respect and devotion. Our designs enhance the spiritual atmosphere while maintaining traditional aesthetics.",
      price: "₹8,000+",
      category: "Religious",
      duration: "4-6 hours",
      setupTime: "3-4 hours before ceremony",
      includes: [
        "Fresh flower garlands and arrangements",
        "Diya and candle lighting setup",
        "Rangoli and floor decorations",
        "Traditional decorative elements",
        "Complete setup and cleanup",
        "Spiritual consultation",
      ],
      features: [
        "Traditional flower arrangements",
        "Sacred lighting setup",
        "Rangoli and floor art",
        "Spiritual consultation",
        "Traditional elements",
        "Respectful installation",
      ],
      image: templeDecor,
      gallery: [templeDecor, heroImage, garbaDecor],
      rating: 4.7,
      reviews: 120,
      bookings: 120,
      gradient: "from-yellow-500 to-orange-500",
      icon: "🕉️",
      popular: false,
    },
    marriage: {
      id: "marriage",
      title: "Wedding Decoration",
      description:
        "Beautiful wedding decorations with fresh flowers, elegant draping, and traditional elements.",
      fullDescription:
        "Our wedding decoration service creates stunning setups perfect for weddings and religious ceremonies. We use fresh marigold and rose flowers, elegant silk draping, and traditional elements like kalash, coconuts, and decorative items. Each wedding is customized according to your preferences and budget.\n\nOur expert team ensures every detail is perfect, from the entrance decoration to the main wedding structure. We work closely with you to understand your vision and create a memorable setup that reflects your cultural traditions and personal style.",
      price: "₹25,000+",
      category: "Wedding",
      duration: "6-8 hours",
      setupTime: "4-5 hours before event",
      includes: [
        "Fresh flowers (marigold, roses, jasmine)",
        "Silk draping and fabric",
        "Traditional decorative elements",
        "Complete setup and installation",
        "Cleanup after the event",
      ],
      features: [
        "Custom design consultation",
        "Fresh flower arrangements",
        "Traditional elements (kalash, coconuts)",
        "Elegant draping and fabric work",
        "Professional installation",
        "Post-event cleanup",
      ],
      image: heroImage,
      gallery: [heroImage, marriageDecor, templeDecor],
      rating: 4.8,
      reviews: 150,
      bookings: 150,
      gradient: "from-orange-500 to-red-500",
      icon: "🌸",
      popular: true,
    },
    garba: {
      id: "garba",
      title: "Garba Night Decoration",
      description:
        "Vibrant and colorful decorations for Garba and Navratri celebrations with traditional Gujarati elements.",
      fullDescription:
        "Celebrate Navratri in style with our vibrant Garba night decorations. We create colorful setups with traditional Gujarati elements, including dandiya sticks, colorful fabrics, and festive lighting that captures the spirit of this joyous festival.\n\nOur decorations include entrance arches, stage decorations, lighting effects, and traditional elements that make your Garba night truly memorable and authentic.",
      price: "₹15,000+",
      category: "Festival",
      duration: "5-6 hours",
      setupTime: "3-4 hours before event",
      includes: [
        "Colorful entrance decoration",
        "Stage and performance area setup",
        "Traditional Gujarati elements",
        "Festive lighting and effects",
        "Dandiya stick arrangements",
        "Complete setup and cleanup",
      ],
      features: [
        "Traditional Gujarati elements",
        "Colorful fabric decorations",
        "Festive lighting effects",
        "Stage decoration",
        "Dandiya arrangements",
        "Cultural authenticity",
      ],
      image: garbaDecor,
      gallery: [garbaDecor, heroImage, lightingDecor],
      rating: 4.8,
      reviews: 180,
      bookings: 180,
      gradient: "from-green-500 to-blue-500",
      icon: "🕺",
      popular: true,
    },
    lighting: {
      id: "lighting",
      title: "Event Lighting & Ambiance",
      description:
        "Professional lighting solutions including string lights, LED setups, and ambient lighting for all occasions.",
      fullDescription:
        "Transform any space with our professional lighting and ambiance services. We offer string lights, LED setups, spotlights, and ambient lighting that create the perfect atmosphere for your event.\n\nFrom romantic wedding lighting to vibrant party atmospheres, our lighting solutions enhance the mood and create memorable experiences for your guests.",
      price: "₹10,000+",
      category: "Lighting",
      duration: "3-4 hours",
      setupTime: "2-3 hours before event",
      includes: [
        "Professional lighting setup",
        "String lights and LED arrangements",
        "Spotlights and ambient lighting",
        "Color coordination",
        "Setup and teardown",
        "Lighting consultation",
      ],
      features: [
        "Professional lighting design",
        "LED and string light setups",
        "Ambient lighting effects",
        "Color coordination",
        "Technical expertise",
        "Atmosphere enhancement",
      ],
      image: lightingDecor,
      gallery: [lightingDecor, heroImage, birthdayDecor],
      rating: 4.6,
      reviews: 90,
      bookings: 90,
      gradient: "from-blue-500 to-purple-500",
      icon: "✨",
      popular: false,
    },
  };

  const service = services[id as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    toast({
      title: "Booking request sent!",
      description:
        "We'll contact you within 24 hours to discuss your decoration requirements.",
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/services"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 lg:h-96 object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-gradient-primary text-white">
                {service.category}
              </Badge>
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-gradient-gold text-white">
                  Popular
                </Badge>
              )}
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button size="sm" variant="secondary">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="secondary">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Service Info */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{service.icon}</span>
                <h1 className="text-3xl lg:text-4xl font-bold">
                  {service.title}
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-6 text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {service.duration}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Setup: {service.setupTime}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {service.bookings} bookings
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-500" />
                  {service.rating} ({service.reviews} reviews)
                </div>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-3">
                  About This Service
                </h3>
                <div className="whitespace-pre-line text-muted-foreground">
                  {service.fullDescription}
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.includes.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-secondary/30 rounded-lg"
                  >
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.gallery.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`${service.title} ${index + 1}`}
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {service.price}
                  </div>
                  <p className="text-muted-foreground">Starting price</p>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Setup Time</span>
                    <span>{service.setupTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category</span>
                    <span>{service.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rating</span>
                    <span className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      {service.rating}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={handleBooking}
                  className="w-full bg-gradient-primary hover:opacity-90 mb-4"
                >
                  Book This Service
                </Button>

                <Button variant="outline" className="w-full mb-4">
                  <Phone className="w-4 h-4 mr-2" />
                  Call for Quote
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Free consultation included
                </p>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">
                      info@shreeganeshdecoration.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Valoti, Gujarat</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
