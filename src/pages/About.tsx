import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart, Calendar, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To simplify event management and help create meaningful connections through exceptional experiences."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a platform that brings people together and fosters collaboration in every event."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering high-quality tools and services that exceed expectations and drive success."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about events and committed to helping organizers create amazing experiences."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Events Hosted" },
    { number: "500,000+", label: "Happy Attendees" },
    { number: "50+", label: "Countries Served" },
    { number: "99%", label: "Customer Satisfaction" },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "Former event coordinator with 15+ years of experience in corporate event management."
    },
    {
      name: "Mike Chen",
      role: "CTO",
      description: "Tech entrepreneur focused on building scalable platforms that solve real-world problems."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      description: "Product designer passionate about creating intuitive user experiences."
    },
    {
      name: "David Park",
      role: "VP of Sales",
      description: "Sales leader with extensive experience in the event and hospitality industry."
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About EventFlow</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to revolutionize event management by providing powerful, 
            intuitive tools that help organizers create unforgettable experiences.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                EventFlow was born out of frustration with complicated event management systems 
                that made organizing events more difficult than it should be. Our founders, 
                experienced event organizers themselves, knew there had to be a better way.
              </p>
              <p>
                In 2020, we set out to build a platform that would simplify every aspect of 
                event management - from initial planning to post-event analytics. We wanted 
                to create tools that were powerful enough for enterprise clients but simple 
                enough for first-time event organizers.
              </p>
              <p>
                Today, EventFlow powers thousands of events worldwide, from intimate workshops 
                to large-scale conferences. We're proud to be the trusted partner for event 
                organizers who want to focus on creating amazing experiences rather than 
                wrestling with technology.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-primary rounded-lg p-8 text-white">
              <Calendar className="w-16 h-16 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Founded in 2020</h3>
              <p className="text-white/90">
                Started by a team of event professionals and technologists who believed 
                event management could be better, simpler, and more effective.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
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

        {/* Stats Section */}
        <div className="bg-secondary/30 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">EventFlow by the Numbers</h2>
            <p className="text-xl text-muted-foreground">
              Our impact on the event management industry
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
              The passionate people behind EventFlow
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

        {/* Global Reach */}
        <div className="text-center bg-card rounded-lg p-8">
          <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Global Reach, Local Impact</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From San Francisco to Singapore, EventFlow empowers event organizers 
            around the world to create meaningful connections and lasting memories 
            in their local communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;