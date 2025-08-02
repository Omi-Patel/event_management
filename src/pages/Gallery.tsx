import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Share2 } from "lucide-react";
import heroImage from "@/assets/hero-decoration.jpg";
import birthdayDecor from "@/assets/birthday-decoration.jpg";
import templeDecor from "@/assets/temple-decoration.jpg";
import marriageDecor from "@/assets/marriage-decoration.jpg";
import garbaDecor from "@/assets/garba-decoration.jpg";
import lightingDecor from "@/assets/lighting-decoration.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryImages = [
    {
      id: 1,
      title: "Traditional Mandap Setup",
      category: "Wedding",
      image: heroImage,
      description: "Beautiful mandap decoration with fresh marigold flowers and elegant silk draping"
    },
    {
      id: 2,
      title: "Colorful Birthday Celebration",
      category: "Birthday",
      image: birthdayDecor,
      description: "Fun and vibrant birthday party decoration with themed balloons and backdrop"
    },
    {
      id: 3,
      title: "Sacred Temple Decoration",
      category: "Religious",
      image: templeDecor,
      description: "Traditional temple decoration with flowers, diyas, and spiritual elements"
    },
    {
      id: 4,
      title: "Grand Marriage Celebration",
      category: "Wedding",
      image: marriageDecor,
      description: "Elegant marriage decoration with complete venue transformation"
    },
    {
      id: 5,
      title: "Vibrant Garba Night",
      category: "Festival",
      image: garbaDecor,
      description: "Colorful Garba night decoration with traditional rangoli and festive lighting"
    },
    {
      id: 6,
      title: "Ambient Event Lighting",
      category: "Lighting",
      image: lightingDecor,
      description: "Professional lighting setup creating magical ambiance for special occasions"
    },
    {
      id: 7,
      title: "Wedding Stage Decoration",
      category: "Wedding",
      image: marriageDecor,
      description: "Elegant stage decoration for wedding ceremonies with floral arrangements"
    },
    {
      id: 8,
      title: "Children's Birthday Theme",
      category: "Birthday",
      image: birthdayDecor,
      description: "Themed birthday decoration designed specifically for children's parties"
    },
    {
      id: 9,
      title: "Festival Temple Setup",
      category: "Religious",
      image: templeDecor,
      description: "Special festival decoration for religious ceremonies and celebrations"
    }
  ];

  const categories = ["all", "Wedding", "Birthday", "Religious", "Festival", "Lighting"];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our beautiful decoration work and get inspired for your next celebration
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-gradient-primary" : ""}
            >
              {category === "all" ? "All Categories" : category}
            </Button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            Showing {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
            {selectedCategory !== "all" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <Badge className="absolute top-3 left-3 bg-gradient-primary text-white">
                  {item.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-secondary/30 rounded-lg p-8">
                      <h2 className="text-3xl font-bold mb-4">Love What You See?</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Let us create something equally beautiful for your special occasion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Get Your Quote
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>

        {/* Services Preview */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground">
              Professional decoration services for every type of celebration
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Mandap Decoration",
              "Wedding Decoration", 
              "Birthday Parties",
              "Temple Decoration",
              "Garba Night",
              "Event Lighting",
              "Anniversary",
              "Corporate Events",
              "Baby Shower",
              "Housewarming",
              "Festival Decoration",
              "Photo Booth Setup"
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4">
                  <p className="text-sm font-medium">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;