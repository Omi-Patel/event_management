import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart, Calendar, Flower2, Star, Crown } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To transform every celebration into a memorable experience through beautiful and creative decorations."
    },
    {
      icon: Heart,
      title: "Passion for Beauty",
      description: "We believe every occasion deserves to be beautiful, and we pour our heart into every decoration."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Using only the finest materials and fresh flowers to ensure superior quality in every project."
    },
    {
      icon: Users,
      title: "Client First",
      description: "Our clients' satisfaction is our priority. We listen, understand, and deliver beyond expectations."
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Celebrations" },
    { number: "500+", label: "Satisfied Families" },
    { number: "10+", label: "Years of Experience" },
    { number: "15+", label: "Types of Events" },
  ];

  const team = [
    {
      name: "Rajesh Sharma",
      role: "Founder & Lead Designer",
      description: "With 10+ years in decoration industry, specializing in traditional and contemporary designs."
    },
    {
      name: "Priya Patel",
      role: "Creative Director",
      description: "Expert in floral arrangements and color coordination with an eye for aesthetic perfection."
    },
    {
      name: "Vikash Kumar",
      role: "Operations Manager",
      description: "Ensures smooth execution of every project with attention to detail and timely delivery."
    },
    {
      name: "Sunita Devi",
      role: "Traditional Specialist",
      description: "Specialist in traditional Indian decorations and religious ceremony setups."
    }
  ];

  const specialties = [
    {
      icon: Crown,
      title: "Traditional Expertise",
      description: "Deep knowledge of Indian traditions and customs in decoration"
    },
    {
      icon: Flower2,
      title: "Fresh Flowers",
      description: "Direct sourcing of fresh flowers for vibrant and long-lasting decorations"
    },
    {
      icon: Star,
      title: "Custom Designs",
      description: "Personalized decoration designs tailored to your preferences and budget"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Shree Ganesh Decoration</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over a decade, we've been dedicated to making celebrations beautiful and memorable 
            through our passion for creative decoration and attention to detail.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Shree Ganesh Decoration was founded in 2014 with a simple belief - every celebration 
                deserves to be beautiful. What started as a small family business has grown into one 
                of Mumbai's most trusted decoration services.
              </p>
              <p>
                Our founder, Rajesh Sharma, began this journey with a passion for creating beautiful 
                spaces that bring joy to people's lives. With experience in traditional Indian 
                decorations and a keen eye for modern aesthetics, we've successfully decorated 
                over 1000 celebrations.
              </p>
              <p>
                Today, Shree Ganesh Decoration is known for our commitment to quality, creativity, 
                and customer satisfaction. We take pride in being part of your most precious moments 
                and making them unforgettable through our decorative artistry.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-primary rounded-lg p-8 text-white">
              <Calendar className="w-16 h-16 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Established 2014</h3>
              <p className="text-white/90">
                Started with the vision to bring beauty and joy to every celebration through 
                exceptional decoration services and traditional craftsmanship.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide our work and relationships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Specialties */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Makes Us Special</h2>
            <p className="text-xl text-muted-foreground">
              Our unique approach to decoration services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <specialty.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{specialty.title}</h3>
                  <p className="text-muted-foreground">{specialty.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-secondary/30 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-muted-foreground">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              The talented individuals behind our beautiful decorations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="bg-card rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground">
              How we bring your decoration dreams to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We discuss your requirements, preferences, and budget"
              },
              {
                step: "2", 
                title: "Design",
                description: "Our team creates a customized decoration plan for your event"
              },
              {
                step: "3",
                title: "Preparation",
                description: "We source materials and prepare all decoration elements"
              },
              {
                step: "4",
                title: "Execution",
                description: "Our team sets up the decoration and ensures everything is perfect"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="text-center bg-gradient-primary text-white rounded-lg p-8">
          <Flower2 className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            To be the most trusted and preferred decoration service in India, known for our creativity, 
            quality, and ability to transform ordinary spaces into extraordinary celebrations that create 
            lasting memories for families and communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;