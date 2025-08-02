import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Users,
  Award,
  Calendar,
  Flower2,
  Sparkles,
  Heart,
  CheckCircle,
  Play,
  Quote,
  Phone,
  MapPin,
  Clock,
  Zap,
  Crown,
  Home as HomeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-decoration.jpg";
import birthdayDecor from "@/assets/birthday-decoration.jpg";
import templeDecor from "@/assets/temple-decoration.jpg";
import marriageDecor from "@/assets/marriage-decoration.jpg";

const Home = () => {
  const services = [
    {
      id: "mandap",
      title: "Mandap Decoration",
      description:
        "Beautiful traditional mandap setups for weddings and ceremonies with flowers and elegant draping.",
      image: heroImage,
      price: "₹25,000+",
      icon: Flower2,
      gradient: "from-orange-500 to-red-500",
      features: ["Fresh Flowers", "Silk Draping", "Traditional Elements"],
    },
    {
      id: "birthday",
      title: "Birthday Party Decoration",
      description:
        "Colorful and fun birthday decorations with balloons, themes, and customized setups.",
      image: birthdayDecor,
      price: "₹5,000+",
      icon: Sparkles,
      gradient: "from-pink-500 to-purple-500",
      features: ["Balloon Arches", "Themed Setup", "Photo Booth"],
    },
    {
      id: "marriage",
      title: "Marriage Decoration",
      description:
        "Complete wedding decoration services including venue, stage, and photo booth setups.",
      image: marriageDecor,
      price: "₹50,000+",
      icon: Crown,
      gradient: "from-red-500 to-pink-500",
      features: ["Venue Styling", "Stage Setup", "Complete Package"],
    },
  ];

  const stats = [
    {
      icon: Users,
      label: "Happy Clients",
      value: "500+",
      color: "text-blue-500",
    },
    {
      icon: Calendar,
      label: "Events Decorated",
      value: "1000+",
      color: "text-green-500",
    },
    {
      icon: Award,
      label: "Years Experience",
      value: "10+",
      color: "text-purple-500",
    },
    { icon: Star, label: "Awards Won", value: "5", color: "text-yellow-500" },
  ];

  const features = [
    {
      icon: Flower2,
      title: "Fresh Flowers",
      description:
        "We use only the freshest flowers for all our decorations to ensure vibrant and beautiful setups.",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Sparkles,
      title: "Creative Designs",
      description:
        "Our team creates unique and creative designs tailored to your specific event and preferences.",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description:
        "Every decoration is crafted with love and attention to detail to make your event special.",
      gradient: "from-red-400 to-pink-500",
    },
    {
      icon: CheckCircle,
      title: "Quality Service",
      description:
        "We pride ourselves on delivering high-quality decoration services within your budget and timeline.",
      gradient: "from-blue-400 to-cyan-500",
    },
  ];

  const specialServices = [
    {
      name: "Garba Night Decoration",
      icon: Sparkles,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      name: "Rakhi Festival Setup",
      icon: Heart,
      color: "bg-gradient-to-r from-red-500 to-orange-500",
    },
    {
      name: "Corporate Event Decoration",
      icon: Users,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      name: "Anniversary Celebration",
      icon: Crown,
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
    {
      name: "Housewarming Ceremony",
      icon: HomeIcon,
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      name: "Festival Decoration",
      icon: Flower2,
      color: "bg-gradient-to-r from-pink-500 to-red-500",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      event: "Wedding Decoration",
      review:
        "Absolutely stunning mandap decoration! The team exceeded our expectations and made our wedding day magical.",
      rating: 5,
      avatar: "PS",
    },
    {
      name: "Rajesh Patel",
      event: "Birthday Party",
      review:
        "Amazing birthday decoration for my daughter. She was so happy with the colorful and creative setup!",
      rating: 5,
      avatar: "RP",
    },
    {
      name: "Meera Singh",
      event: "Temple Festival",
      review:
        "Beautiful temple decoration for Ganesh Chaturthi. The team understood our traditional requirements perfectly.",
      rating: 5,
      avatar: "MS",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 sm:py-0">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float" />
          <div
            className="absolute top-40 right-20 w-16 h-16 bg-gradient-gold rounded-full opacity-30 animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-sunset rounded-full opacity-25 animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <Badge className="mb-8 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-300 animate-fade-in">
              <Sparkles className="w-4 h-4 mr-2" />
              Award-Winning Decoration Services
            </Badge>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl  font-bold mb-6 animate-fade-in">
              <span className="text-gradient-animate">Shree Ganesh</span>
              <br />
              <span className="text-white/90 font-light">Decoration</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up leading-relaxed">
              Transforming ordinary spaces into extraordinary celebrations. From
              traditional mandaps to modern birthday parties, we create magical
              moments that last a lifetime.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up mb-12">
              <Button
                size="lg"
                className="btn-modern bg-gradient-primary hover:shadow-glow text-white px-8 py-4 text-lg font-semibold rounded-2xl"
              >
                <Quote className="mr-2 w-5 h-5" />
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-primary hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm"
                >
                  <Play className="mr-2 w-5 h-5" />
                  View Services
                </Button>
              </Link>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80 animate-fade-in">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Valoti, Gujarat</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>24/7 Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-soft group-hover:shadow-elegant">
                    <stat.icon className={`w-10 h-10 ${stat.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-primary text-white border-0">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Popular <span className="gradient-text">Decoration</span> Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our most sought-after decoration services for every
              celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="group card-hover border-0 shadow-soft overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`bg-gradient-to-r ${service.gradient} text-white border-0 font-semibold`}
                    >
                      {service.price}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-glow`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Link to={`/services/${service.id}`}>
                    <Button className="w-full btn-modern bg-gradient-primary hover:shadow-glow text-white font-semibold rounded-xl">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button
                size="lg"
                className="btn-modern bg-gradient-primary hover:shadow-glow text-white font-semibold px-8 py-4 rounded-2xl"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-gold text-white border-0">
              <Crown className="w-4 h-4 mr-2" />
              Specializations
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              We Also <span className="gradient-text">Specialize</span> In
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Additional services to make every occasion memorable
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {specialServices.map((service, index) => (
              <Card
                key={index}
                className="text-center card-hover border-0 shadow-soft group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-soft`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold leading-tight">
                    {service.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-sunset text-white border-0">
              <Heart className="w-4 h-4 mr-2" />
              Why Choose Us
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Shree Ganesh</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quality, creativity, and dedication in every decoration we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center card-hover border-0 shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glow`}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-secondary/50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-ocean text-white border-0">
              <Star className="w-4 h-4 mr-2" />
              Testimonials
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What Our <span className="gradient-text">Clients</span> Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from our satisfied customers about their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="card-hover border-0 shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.event}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.review}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-gradient-primary text-white border-0">
              <Sparkles className="w-4 h-4 mr-2" />
              Get Started
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Make Your <span className="gradient-text">Event</span>{" "}
              Special?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Contact us today for a free consultation and quote for your
              upcoming celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-modern bg-gradient-primary hover:shadow-glow text-white font-semibold px-8 py-4 rounded-2xl"
              >
                <Link to="/contact" className="flex items-center">
                  <Quote className="mr-2 w-5 h-5" />
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-2xl"
              >
                <Link to="/gallery" className="flex items-center">
                  <Sparkles className="mr-2 w-5 h-5" />
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
