import { useEffect, useState } from "react";
import { fetchEvents } from "../api/events";
import { TEvent } from "../types/events";
import EventCard from "../components/EventCard";
import Header from "../components/Header";
import { Search, Menu } from "lucide-react";
import { SearchIcon } from "raster-react";
import LoginModal from "../components/LoginModal";

const EventsPage = () => {
  const [events, setEvents] = useState<TEvent[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<TEvent[]>([]);
  const [filter, setFilter] = useState<"all" | "workshop" | "activity" | "tech_talk">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<TEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<TEvent | null>(null); // Store selected event
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  useEffect(() => {
    const getEvents = async () => {
      const data = await fetchEvents();
      setEvents(data.sort((a, b) => a.start_time - b.start_time));
    };
    getEvents();
  }, []);

  useEffect(() => {
    let filtered = events;

    if (!isAuthenticated) {
      filtered = filtered.filter(event => event.permission !== "private");
    }

    if (filter !== "all") {
      filtered = filtered.filter(event => event.event_type === filter);
    }

    if (searchQuery) {
      setSearchResults(
        events.filter(event => event.name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    } else {
      setSearchResults([]);
    }

    setFilteredEvents(filtered);
  }, [events, filter, searchQuery, isAuthenticated]);

  // Handle search icon click
  const handleSearchClick = () => {
    if (searchQuery && searchResults.length > 0) {
      setSelectedEvent(searchResults[0]); // Show first matched event
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header setIsModalOpen={setIsModalOpen} />

      {/* Blur effect when modal is open */}
      <div className={`p-8 transition ${isModalOpen ? "backdrop-blur-lg pointer-events-none" : ""}`}>
        
        {/* Search Bar & Categories */}
        <div className="flex justify-center items-center gap-6 mb-6">
          {/* Search Bar (Moved Further Left) */}
          <div className="relative flex items-center w-1/3 max-w-lg bg-[#eee6f5] rounded-full px-6 py-2.5 ml-[-50px]">
            <Menu className="text-gray-600 mr-2" size={20} />
            <input
              type="text"
              placeholder="Search for events"
              className="bg-transparent outline-none w-full text-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* Search Icon Clickable */}
            <button onClick={handleSearchClick}>
              <SearchIcon size={35} strokeWidth={0.25} radius={1} />
            </button>

            {/* Search Dropdown */}
            {searchQuery && searchResults.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg mt-1 rounded-lg max-h-48 overflow-y-auto z-50">
                {searchResults.map(event => (
                  <div 
                    key={event.id}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => setSelectedEvent(event)}
                  >
                    {event.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Categories (Made Smaller) */}
          <div className="flex gap-2">
            {["all", "workshop", "activity", "tech_talk"].map(type => (
              <button
                key={type}
                onClick={() => {
                  setFilter(type as any);
                  setSelectedEvent(null); // Reset selection when category changes
                }}
                className={`px-3 py-1 text-sm rounded-full transition ${
                  filter === type ? "bg-purple-700 text-white" : "bg-gray-300 text-gray-700"
                }`}
              >
                {type === "all" ? "All Events" : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Events Display */}
        <div className="relative overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Show only selected event if one is clicked */}
            {selectedEvent ? (
              <EventCard key={selectedEvent.id} event={selectedEvent} isAuthenticated={isAuthenticated} />
            ) : (
              filteredEvents.length > 0 ? (
                filteredEvents.map(event => (
                  <EventCard key={event.id} event={event} isAuthenticated={isAuthenticated} />
                ))
              ) : (
                // Empty Grid Space if Not Enough Events to Fill a Row
                [...Array(4)].map((_, index) => (
                  <div key={`empty-${index}`} className="opacity-0">Placeholder</div>
                ))
              )
            )}
          </div>
        </div>
      </div>

      {/* Show Login Modal */}
      {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default EventsPage;
