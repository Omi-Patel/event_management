import { useState } from "react";
import { Search, Filter, Flower2, Heart, Sparkles, Star, Calendar, Clock, Users, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
      description: "Beautiful traditional mandap setups for weddings and ceremonies with fresh flowers, elegant draping, and traditional elements.",
      fullDescription: "Our mandap decoration service creates stunning traditional setups perfect for weddings and religious ceremonies. We use fresh marigold and rose flowers, elegant silk draping, and traditional elements like kalash, coconuts, and decorative items. Each mandap is customized according to your preferences and budget.",
      price: "₹25,000+",
      category: "Wedding",
      duration: "6-8 hours",
      includes: ["Fresh flowers", "Silk draping", "Traditional decorations", "Setup & cleanup"],
      image: heroImage,
      rating: 4.8,
      bookings: 150
    },
    {
      id: "birthday",
      title: "Birthday Party Decoration",
      description: "Colorful and fun birthday decorations with balloons, themes, and customized setups for all ages.",
      fullDescription: "Make birthdays special with our creative decoration services. We offer themed decorations, balloon arrangements, backdrop setups, table decorations, and customized elements. Perfect for children's parties, adult celebrations, and milestone birthdays.",
      price: "₹5,000+",
      category: "Birthday",
      duration: "3-4 hours",
      includes: ["Balloons", "Themed decorations", "Backdrop", "Table setup"],
      image: birthdayDecor,
      rating: 4.9,
      bookings: 200
    },
    {
      id: "temple",
      title: "Temple Decoration",
      description: "Sacred temple decorations with flowers, diyas, and traditional spiritual elements for festivals.",
      fullDescription: "Our temple decoration service brings spiritual beauty to your religious celebrations. We specialize in flower arrangements, diya lighting, rangoli designs, and traditional decorative elements for festivals like Ganesh Chaturthi, Diwali, and other religious occasions.",
      price: "₹8,000+",
      category: "Religious",
      duration: "4-5 hours",
      includes: ["Flower arrangements", "Diyas", "Rangoli", "Traditional elements"],
      image: templeDecor,
      rating: 4.7,
      bookings: 120
    },
    {
      id: "marriage",
      title: "Marriage Decoration",
      description: "Complete wedding decoration services including venue decoration, stage setup, and photo booth arrangements.",
      fullDescription: "Comprehensive wedding decoration services covering all aspects of your special day. From entrance decoration to stage setup, guest seating arrangements, photo booth creation, and venue transformation. We handle everything to make your wedding unforgettable.",
      price: "₹50,000+",
      category: "Wedding",
      duration: "12-15 hours",
      includes: ["Venue decoration", "Stage setup", "Photo booth", "Complete styling"],
      image: marriageDecor,
      rating: 4.9,
      bookings: 80
    },
    {
      id: "garba",
      title: "Garba Night Decoration",
      description: "Vibrant Garba and Navratri decorations with traditional colors, rangoli, and festive lighting.",
      fullDescription: "Celebrate Navratri with our spectacular Garba night decorations. We create vibrant setups with traditional colors, beautiful rangoli designs, festive lighting, and cultural elements that capture the spirit of this joyous festival.",
      price: "₹15,000+",
      category: "Festival",
      duration: "6-8 hours",
      includes: ["Colorful decorations", "Rangoli", "Festive lighting", "Cultural elements"],
      image: garbaDecor,
      rating: 4.8,
      bookings: 90
    },
    {
      id: "lighting",
      title: "Event Lighting",
      description: "Professional lighting solutions including string lights, LED setups, and ambient lighting for all occasions.",
      fullDescription: "Transform any space with our professional lighting services. We offer string lights, LED arrangements, colored lighting, spotlights, and ambient lighting solutions that create the perfect atmosphere for your event.",
      price: "₹8,000+",
      category: "Lighting",
      duration: "4-6 hours",
      includes: ["LED lights", "String lights", "Colored lighting", "Professional setup"],
      image: lightingDecor,
      rating: 4.6,
      bookings: 160
    }
  ];

  // Filter services
  const filteredServices = allServices.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || service.category.toLowerCase() === selectedCategory;
    const matchesPrice = selectedPriceRange === "all" || 
      (selectedPriceRange === "budget" && parseInt(service.price.replace(/[^\d]/g, '')) < 15000) ||
      (selectedPriceRange === "premium" && parseInt(service.price.replace(/[^\d]/g, '')) >= 15000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const categories = ["all", "wedding", "birthday", "religious", "festival", "lighting"];
  const priceRanges = ["all", "budget", "premium"];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional decoration services for every occasion. From traditional ceremonies to modern celebrations.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg shadow-card p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Range Filter */}
            <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
              <SelectTrigger>
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
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredServices.length} of {allServices.length} services
          </p>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-gradient-primary text-white">
                    {service.category}
                  </Badge>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-primary">
                    {service.price}
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span>{service.rating}</span>
                      <span className="ml-2">({service.bookings} bookings)</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      Duration: {service.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Sparkles className="w-4 h-4 mr-2" />
                      {service.includes.length} services included
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Flower2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No services found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or browse all services.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedPriceRange("all");
              }}
              className="bg-gradient-primary hover:opacity-90"
            >
              View All Services
            </Button>
          </div>
        )}

        {/* Additional Services */}
        <div className="mt-16 bg-secondary/30 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-muted-foreground">
              We also provide specialized decoration services for unique occasions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Rakhi Festival",
              "Housewarming",
              "Anniversary",
              "Corporate Events",
              "Baby Shower",
              "Engagement",
              "Sangeet",
              "Mehendi",
              "Reception",
              "Thread Ceremony",
              "Naming Ceremony",
              "Festival Decoration"
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4">
                  <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-gradient-primary hover:opacity-90">
              Contact for Custom Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;