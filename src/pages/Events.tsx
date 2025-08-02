import { useState } from "react";
import { Search, Filter, Calendar, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import EventCard from "@/components/EventCard";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  // Sample events data
  const allEvents = [
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
    {
      id: "4",
      title: "AI & Machine Learning Conference",
      description: "Explore the future of AI and machine learning with leading researchers and practitioners.",
      date: "April 5, 2024",
      time: "8:00 AM - 7:00 PM",
      location: "Tech Campus Auditorium",
      price: "$399",
      category: "Technology",
      attendees: 320,
      maxAttendees: 400,
      image: event1,
    },
    {
      id: "5",
      title: "Creative Design Workshop",
      description: "Hands-on workshop for designers to learn new techniques and tools for creative projects.",
      date: "April 12, 2024",
      time: "1:00 PM - 5:00 PM",
      location: "Design Studio Downtown",
      price: "$79",
      category: "Design",
      attendees: 45,
      maxAttendees: 60,
      image: event2,
    },
    {
      id: "6",
      title: "Business Leadership Summit",
      description: "Learn from successful business leaders and develop your leadership skills.",
      date: "April 18, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Executive Conference Center",
      price: "$249",
      category: "Business",
      attendees: 178,
      maxAttendees: 250,
      image: event3,
    },
  ];

  // Filter events based on search and filters
  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || event.category.toLowerCase() === selectedCategory;
    const matchesLocation = selectedLocation === "all" || event.location.toLowerCase().includes(selectedLocation.toLowerCase());
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const categories = ["all", "technology", "marketing", "networking", "design", "business"];
  const locations = ["all", "san francisco", "downtown", "innovation hub", "tech campus"];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">All Events</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing events happening near you. Learn, network, and grow with our community.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg shadow-card p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search events..."
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

            {/* Location Filter */}
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <MapPin className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location === "all" ? "All Locations" : location.charAt(0).toUpperCase() + location.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Clear Filters */}
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedLocation("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredEvents.length} of {allEvents.length} events
          </p>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No events found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or browse all events.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedLocation("all");
              }}
              className="bg-gradient-primary hover:opacity-90"
            >
              View All Events
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;