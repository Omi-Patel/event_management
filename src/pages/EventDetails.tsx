import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Users, DollarSign, ArrowLeft, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";

const EventDetails = () => {
  const { id } = useParams();

  // Sample event data - in a real app, this would come from an API
  const events = {
    "1": {
      id: "1",
      title: "Tech Innovation Summit 2024",
      description: "Join industry leaders for the latest in technology and innovation. Network with professionals and discover cutting-edge solutions.",
      fullDescription: "The Tech Innovation Summit 2024 is the premier event for technology professionals, entrepreneurs, and innovators. This comprehensive conference will feature keynote speakers from leading tech companies, interactive workshops, and networking opportunities that will help you stay ahead of the curve in the rapidly evolving tech landscape.\n\nKey highlights include:\n• Keynote presentations from industry leaders\n• Hands-on workshops and technical sessions\n• Startup pitch competition\n• Innovation showcase\n• Networking lunch and evening reception\n\nWhether you're a seasoned professional or just starting your tech journey, this summit will provide valuable insights, practical knowledge, and meaningful connections that will accelerate your career and business growth.",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco Convention Center",
      address: "747 Howard St, San Francisco, CA 94103",
      price: "$299",
      category: "Technology",
      attendees: 245,
      maxAttendees: 500,
      image: event1,
      organizer: "Tech Events Inc.",
      speakers: ["Sarah Johnson - CEO, TechCorp", "Mike Chen - CTO, InnovateLabs", "Dr. Emily Rodriguez - AI Research Director"],
      agenda: [
        { time: "9:00 AM", activity: "Registration & Welcome Coffee" },
        { time: "10:00 AM", activity: "Keynote: The Future of Technology" },
        { time: "11:30 AM", activity: "Panel: AI in Business" },
        { time: "1:00 PM", activity: "Networking Lunch" },
        { time: "2:30 PM", activity: "Workshop: Building Scalable Apps" },
        { time: "4:00 PM", activity: "Startup Pitch Competition" },
        { time: "5:30 PM", activity: "Closing Remarks & Networking" },
      ]
    },
    "2": {
      id: "2",
      title: "Digital Marketing Masterclass",
      description: "Learn advanced digital marketing strategies from experts. Perfect for marketers looking to enhance their skills.",
      fullDescription: "This intensive masterclass is designed for marketing professionals who want to stay ahead in the digital marketing landscape. Led by industry experts with proven track records, this session will cover the latest strategies, tools, and techniques that drive real results.\n\nWhat you'll learn:\n• Advanced SEO and content marketing strategies\n• Social media marketing best practices\n• Email marketing automation\n• Analytics and data-driven decision making\n• Conversion optimization techniques\n• Future trends in digital marketing\n\nThis hands-on workshop includes practical exercises, case studies, and actionable insights you can implement immediately.",
      date: "March 22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Downtown Business Center",
      address: "123 Business Ave, Downtown, CA 90210",
      price: "$149",
      category: "Marketing",
      attendees: 89,
      maxAttendees: 150,
      image: event2,
      organizer: "Marketing Pros Academy",
      speakers: ["Amanda Smith - Digital Marketing Director", "James Wilson - Content Strategy Expert"],
      agenda: [
        { time: "10:00 AM", activity: "Welcome & Overview" },
        { time: "10:30 AM", activity: "Advanced SEO Strategies" },
        { time: "12:00 PM", activity: "Lunch Break" },
        { time: "1:00 PM", activity: "Social Media Marketing" },
        { time: "2:30 PM", activity: "Email Marketing Automation" },
        { time: "3:30 PM", activity: "Q&A and Networking" },
      ]
    },
    "3": {
      id: "3",
      title: "Startup Networking Night",
      description: "Connect with fellow entrepreneurs and investors. Build meaningful relationships in the startup ecosystem.",
      fullDescription: "Join the vibrant startup community for an evening of networking, knowledge sharing, and relationship building. This event brings together entrepreneurs, investors, mentors, and startup enthusiasts in a relaxed, conducive environment for meaningful connections.\n\nEvent features:\n• Speed networking sessions\n• Investor pitch corner\n• Startup showcase\n• Panel discussion on funding strategies\n• Cocktails and appetizers\n• One-on-one mentoring sessions\n\nWhether you're launching your first startup, looking for funding, or seeking to expand your professional network, this event offers valuable opportunities to connect with like-minded individuals and potential collaborators.",
      date: "March 28, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Innovation Hub",
      address: "456 Innovation Way, Tech District, CA 94105",
      price: "Free",
      category: "Networking",
      attendees: 156,
      maxAttendees: 200,
      image: event3,
      organizer: "Startup Community SF",
      speakers: ["David Park - Angel Investor", "Lisa Chang - Serial Entrepreneur"],
      agenda: [
        { time: "6:00 PM", activity: "Registration & Welcome Drinks" },
        { time: "6:30 PM", activity: "Speed Networking Session" },
        { time: "7:30 PM", activity: "Panel: Funding Your Startup" },
        { time: "8:30 PM", activity: "Startup Showcase" },
        { time: "9:00 PM", activity: "Open Networking & Cocktails" },
      ]
    }
  };

  const event = events[id as keyof typeof events];

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
          <Link to="/events">
            <Button>Back to Events</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/events" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Events
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 lg:h-96 object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-gradient-primary text-white">
                {event.category}
              </Badge>
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button size="sm" variant="secondary">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="secondary">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Event Info */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">{event.title}</h1>
              <div className="flex flex-wrap items-center gap-4 mb-6 text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {event.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {event.attendees}/{event.maxAttendees} attendees
                </div>
              </div>
              
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-3">About This Event</h3>
                <div className="whitespace-pre-line text-muted-foreground">
                  {event.fullDescription}
                </div>
              </div>
            </div>

            {/* Speakers */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Featured Speakers</h3>
              <div className="space-y-2">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="flex items-center p-3 bg-secondary/30 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {speaker.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span>{speaker}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Agenda */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Event Agenda</h3>
              <div className="space-y-3">
                {event.agenda.map((item, index) => (
                  <div key={index} className="flex items-start p-4 bg-card rounded-lg border">
                    <div className="text-primary font-semibold min-w-20 mr-4">
                      {item.time}
                    </div>
                    <div>{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Registration Card */}
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {event.price}
                  </div>
                  <p className="text-muted-foreground">per person</p>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="text-right">{event.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Spots Left</span>
                    <span>{event.maxAttendees - event.attendees}</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary hover:opacity-90 mb-4">
                  Register Now
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Organized by {event.organizer}
                </p>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Location Details</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 mr-2 mt-1 text-muted-foreground" />
                    <div>
                      <div className="font-medium">{event.location}</div>
                      <div className="text-sm text-muted-foreground">{event.address}</div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View on Map
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;