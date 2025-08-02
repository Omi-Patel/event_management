import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Award, Calendar, Flower2, Sparkles, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-decoration.jpg";
import birthdayDecor from "@/assets/birthday-decoration.jpg";
import templeDecor from "@/assets/temple-decoration.jpg";
import marriageDecor from "@/assets/marriage-decoration.jpg";

const Home = () => {
  const services = [
    {
      id: "mandap",
      title: "Mandap Decoration",
      description: "Beautiful traditional mandap setups for weddings and ceremonies with flowers and elegant draping.",
      image: heroImage,
      price: "₹25,000+"
    },
    {
      id: "birthday",
      title: "Birthday Party Decoration",
      description: "Colorful and fun birthday decorations with balloons, themes, and customized setups.",
      image: birthdayDecor,
      price: "₹5,000+"
    },
    {
      id: "temple",
      title: "Temple Decoration",
      description: "Sacred temple decorations with flowers, diyas, and traditional spiritual elements.",
      image: templeDecor,
      price: "₹8,000+"
    },
    {
      id: "marriage",
      title: "Marriage Decoration",
      description: "Complete wedding decoration services including venue, stage, and photo booth setups.",
      image: marriageDecor,
      price: "₹50,000+"
    }
  ];

  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Calendar, label: "Events Decorated", value: "1000+" },
    { icon: Star, label: "Years Experience", value: "10+" },
    { icon: Award, label: "Awards Won", value: "5" },
  ];

  const features = [
    {
      icon: Flower2,
      title: "Fresh Flowers",
      description: "We use only the freshest flowers for all our decorations to ensure vibrant and beautiful setups."
    },
    {
      icon: Sparkles,
      title: "Creative Designs",
      description: "Our team creates unique and creative designs tailored to your specific event and preferences."
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "Every decoration is crafted with love and attention to detail to make your event special."
    },
    {
      icon: CheckCircle,
      title: "Quality Service",
      description: "We pride ourselves on delivering high-quality decoration services within your budget and timeline."
    }
  ];

  const specialServices = [
    "Garba Night Decoration",
    "Rakhi Festival Setup",
    "Corporate Event Decoration", 
    "Anniversary Celebration",
    "Housewarming Ceremony",
    "Festival Decoration"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Shree Ganesh Decoration
            <br />
            <span className="text-white/90">Making Celebrations Beautiful</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up">
            Professional decoration services for all your special occasions. From traditional mandaps 
            to modern birthday parties, we create magical moments that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-3">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Popular Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most sought-after decoration services for every celebration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={service.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-primary">
                    {service.price}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <Link to={`/services#${service.id}`}>
                    <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">We Also Specialize In</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Additional services to make every occasion memorable
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specialServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4">
                  <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Shree Ganesh Decoration?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quality, creativity, and dedication in every decoration we create
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Hear from our satisfied customers about their experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                event: "Wedding Decoration",
                review: "Absolutely stunning mandap decoration! The team exceeded our expectations and made our wedding day magical.",
                rating: 5
              },
              {
                name: "Rajesh Patel",
                event: "Birthday Party",
                review: "Amazing birthday decoration for my daughter. She was so happy with the colorful and creative setup!",
                rating: 5
              },
              {
                name: "Meera Singh",
                event: "Temple Festival",
                review: "Beautiful temple decoration for Ganesh Chaturthi. The team understood our traditional requirements perfectly.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Make Your Event Special?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today for a free consultation and quote for your upcoming celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                <Link to="/contact" className="flex items-center">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3">
                <Link to="/gallery">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;