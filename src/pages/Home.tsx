import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Trophy, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import EventCard from "@/components/EventCard";
import heroImage from "@/assets/hero-image.jpg";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";

const Home = () => {
  const featuredEvents = [
    {
      id: "1",
      title: "Tech Innovation Summit 2024",
      description: "Join industry leaders for the latest in technology and innovation. Network with professionals and discover cutting-edge solutions.",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco Convention Center",
      price: "$299",
      category: "Technology",
      attendees: 245,
      maxAttendees: 500,
      image: event1,
    },
    {
      id: "2",
      title: "Digital Marketing Masterclass",
      description: "Learn advanced digital marketing strategies from experts. Perfect for marketers looking to enhance their skills.",
      date: "March 22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Downtown Business Center",
      price: "$149",
      category: "Marketing",
      attendees: 89,
      maxAttendees: 150,
      image: event2,
    },
    {
      id: "3",
      title: "Startup Networking Night",
      description: "Connect with fellow entrepreneurs and investors. Build meaningful relationships in the startup ecosystem.",
      date: "March 28, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Innovation Hub",
      price: "Free",
      category: "Networking",
      attendees: 156,
      maxAttendees: 200,
      image: event3,
    },
  ];

  const stats = [
    { icon: Calendar, label: "Events Created", value: "5,000+" },
    { icon: Users, label: "Happy Attendees", value: "250,000+" },
    { icon: Trophy, label: "Success Rate", value: "98%" },
    { icon: Star, label: "Average Rating", value: "4.9/5" },
  ];

  const features = [
    {
      title: "Easy Event Creation",
      description: "Create and customize your events in minutes with our intuitive interface."
    },
    {
      title: "Registration Management",
      description: "Handle attendee registration and payments seamlessly."
    },
    {
      title: "Real-time Analytics",
      description: "Track your event performance with detailed analytics and insights."
    },
    {
      title: "Marketing Tools",
      description: "Promote your events with built-in marketing and social media tools."
    }
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
            Create Amazing Events
            <br />
            <span className="text-white/90">That People Love</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up">
            Professional event management made simple. From conferences to workshops, 
            create memorable experiences that engage and inspire your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-3">
              Start Creating Events
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link to="/events">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
                Browse Events
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

      {/* Featured Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Events</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover upcoming events that match your interests and professional goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredEvents.map((event, index) => (
              <EventCard 
                key={event.id} 
                event={event} 
                className="animate-fade-in"
              />
            ))}
          </div>

          <div className="text-center">
            <Link to="/events">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                View All Events
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose EventFlow?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, manage, and promote successful events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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
              Ready to Create Your Next Event?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of event organizers who trust EventFlow to deliver exceptional experiences.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 px-8 py-3">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;