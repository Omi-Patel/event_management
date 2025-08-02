import { useState } from "react";
import {
  Search,
  Filter,
  Flower2,
  Heart,
  Sparkles,
  Star,
  Calendar,
  Clock,
  Users,
  MapPin,
  ArrowRight,
  Zap,
  Crown,
  Award,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-decoration.jpg";
import birthdayDecor from "@/assets/birthday-decoration.jpg";
import templeDecor from "@/assets/temple-decoration.jpg";
import marriageDecor from "@/assets/marriage-decoration.jpg";
import garbaDecor from "@/assets/garba-decoration.jpg";
import lightingDecor from "@/assets/lighting-decoration.jpg";

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");

  const allServices = [
    {
      id: "mandap",
      title: "Mandap Decoration",
      description:
        "Beautiful traditional mandap setups for weddings and ceremonies with fresh flowers, elegant draping, and traditional elements.",
      fullDescription:
        "Our mandap decoration service creates stunning traditional setups perfect for weddings and religious ceremonies. We use fresh marigold and rose flowers, elegant silk draping, and traditional elements like kalash, coconuts, and decorative items. Each mandap is customized according to your preferences and budget.",
      price: "₹25,000+",
      category: "Wedding",
      duration: "6-8 hours",
      includes: [
        "Fresh flowers",
        "Silk draping",
        "Traditional decorations",
        "Setup & cleanup",
      ],
      image: heroImage,
      rating: 4.8,
      bookings: 150,
      gradient: "from-orange-500 to-red-500",
      icon: Flower2,
      features: [
        "Fresh Flowers",
        "Silk Draping",
        "Traditional Elements",
        "Custom Design",
      ],
    },
    {
      id: "birthday",
      title: "Birthday Party Decoration",
      description:
        "Colorful and fun birthday decorations with balloons, themes, and customized setups for all ages.",
      fullDescription:
        "Make birthdays special with our creative decoration services. We offer themed decorations, balloon arrangements, backdrop setups, table decorations, and customized elements. Perfect for children's parties, adult celebrations, and milestone birthdays.",
      price: "₹5,000+",
      category: "Birthday",
      duration: "3-4 hours",
      includes: ["Balloons", "Themed decorations", "Backdrop", "Table setup"],
      image: birthdayDecor,
      rating: 4.9,
      bookings: 200,
      gradient: "from-pink-500 to-purple-500",
      icon: Sparkles,
      features: [
        "Balloon Arches",
        "Themed Setup",
        "Photo Booth",
        "Custom Themes",
      ],
    },
    {
      id: "temple",
      title: "Temple Decoration",
      description:
        "Sacred temple decorations with flowers, diyas, and traditional spiritual elements for festivals.",
      fullDescription:
        "Our temple decoration service brings spiritual beauty to your religious celebrations. We specialize in flower arrangements, diya lighting, rangoli designs, and traditional decorative elements for festivals like Ganesh Chaturthi, Diwali, and other religious occasions.",
      price: "₹8,000+",
      category: "Religious",
      duration: "4-5 hours",
      includes: [
        "Flower arrangements",
        "Diyas",
        "Rangoli",
        "Traditional elements",
      ],
      image: templeDecor,
      rating: 4.7,
      bookings: 120,
      gradient: "from-yellow-500 to-orange-500",
      icon: Heart,
      features: ["Flower Garlands", "Diyas", "Rangoli", "Spiritual Elements"],
    },
    {
      id: "marriage",
      title: "Marriage Decoration",
      description:
        "Complete wedding decoration services including venue decoration, stage setup, and photo booth arrangements.",
      fullDescription:
        "Comprehensive wedding decoration services covering all aspects of your special day. From entrance decoration to stage setup, guest seating arrangements, photo booth creation, and venue transformation. We handle everything to make your wedding unforgettable.",
      price: "₹50,000+",
      category: "Wedding",
      duration: "12-15 hours",
      includes: [
        "Venue decoration",
        "Stage setup",
        "Photo booth",
        "Complete styling",
      ],
      image: marriageDecor,
      rating: 4.9,
      bookings: 80,
      gradient: "from-red-500 to-pink-500",
      icon: Crown,
      features: [
        "Venue Styling",
        "Stage Setup",
        "Photo Booth",
        "Complete Package",
      ],
    },
    {
      id: "garba",
      title: "Garba Night Decoration",
      description:
        "Vibrant Garba and Navratri decorations with traditional colors, rangoli, and festive lighting.",
      fullDescription:
        "Celebrate Navratri with our spectacular Garba night decorations. We create vibrant setups with traditional colors, beautiful rangoli designs, festive lighting, and cultural elements that capture the spirit of this joyous festival.",
      price: "₹15,000+",
      category: "Festival",
      duration: "6-8 hours",
      includes: [
        "Colorful decorations",
        "Rangoli",
        "Festive lighting",
        "Cultural elements",
      ],
      image: garbaDecor,
      rating: 4.8,
      bookings: 90,
      gradient: "from-purple-500 to-pink-500",
      icon: Sparkles,
      features: [
        "Colorful Decorations",
        "Rangoli",
        "Festive Lighting",
        "Cultural Elements",
      ],
    },
    {
      id: "lighting",
      title: "Event Lighting",
      description:
        "Professional lighting solutions including string lights, LED setups, and ambient lighting for all occasions.",
      fullDescription:
        "Transform any space with our professional lighting services. We offer string lights, LED arrangements, colored lighting, spotlights, and ambient lighting solutions that create the perfect atmosphere for your event.",
      price: "₹8,000+",
      category: "Lighting",
      duration: "4-6 hours",
      includes: [
        "LED lights",
        "String lights",
        "Colored lighting",
        "Professional setup",
      ],
      image: lightingDecor,
      rating: 4.6,
      bookings: 160,
      gradient: "from-blue-500 to-cyan-500",
      icon: Zap,
      features: [
        "LED Lights",
        "String Lights",
        "Colored Lighting",
        "Professional Setup",
      ],
    },
  ];

  // Filter services
  const filteredServices = allServices.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      service.category.toLowerCase() === selectedCategory;
    const matchesPrice =
      selectedPriceRange === "all" ||
      (selectedPriceRange === "budget" &&
        parseInt(service.price.replace(/[^\d]/g, "")) < 15000) ||
      (selectedPriceRange === "premium" &&
        parseInt(service.price.replace(/[^\d]/g, "")) >= 15000);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const categories = [
    "all",
    "wedding",
    "birthday",
    "religious",
    "festival",
    "lighting",
  ];
  const priceRanges = ["all", "budget", "premium"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-secondary/30 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-float" />
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-gold rounded-full opacity-10 animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-sunset rounded-full opacity-10 animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-gradient-primary text-white border-0">
            <Sparkles className="w-4 h-4 mr-2" />
            Our Services
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Professional <span className="gradient-text">Decoration</span>{" "}
            Services
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up leading-relaxed">
            From traditional ceremonies to modern celebrations, we create
            magical moments that last a lifetime.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Search and Filters */}
        <div className="glass rounded-2xl shadow-soft p-8 mb-12 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 rounded-xl border-white/20 bg-white/10 backdrop-blur-sm"
              />
            </div>

            {/* Category Filter */}
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="h-12 rounded-xl border-white/20 bg-white/10 backdrop-blur-sm">
                <Filter className="w-5 h-5 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all"
                      ? "All Categories"
                      : category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Range Filter */}
            <Select
              value={selectedPriceRange}
              onValueChange={setSelectedPriceRange}
            >
              <SelectTrigger className="h-12 rounded-xl border-white/20 bg-white/10 backdrop-blur-sm">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="budget">Budget (Under ₹15,000)</SelectItem>
                <SelectItem value="premium">Premium (₹15,000+)</SelectItem>
              </SelectContent>
            </Select>

            {/* Clear Filters */}
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedPriceRange("all");
              }}
              className="h-12 rounded-xl border-primary/30 text-primary hover:bg-primary hover:text-white"
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground text-lg">
              Showing{" "}
              <span className="font-semibold text-primary">
                {filteredServices.length}
              </span>{" "}
              of <span className="font-semibold">{allServices.length}</span>{" "}
              services
            </p>
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20"
            >
              <Award className="w-4 h-4 mr-2" />
              Award Winning Services
            </Badge>
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <Card
                key={service.id}
                className="group card-hover border-0 shadow-soft overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`bg-gradient-to-r ${service.gradient} text-white border-0 font-semibold`}
                    >
                      {service.price}
                    </Badge>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-glow`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">
                        {service.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs bg-secondary/50"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {service.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {service.bookings}+ bookings
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full btn-modern bg-gradient-primary hover:shadow-glow text-white font-semibold rounded-xl">
                    <Sparkles className="mr-2 w-4 h-4" />
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 animate-fade-in">
            <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">No services found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or filters to find what you're
              looking for.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedPriceRange("all");
              }}
              className="bg-gradient-primary hover:shadow-glow text-white"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
