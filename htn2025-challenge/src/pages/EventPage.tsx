import { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { fetchEventById } from "../api/events";
import { TEvent } from "../types/events";
import { CalendarIcon, MapPinIcon, ClockIcon, ArrowLeft } from "lucide-react"; // Import icons

const EventPage = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<TEvent | null>(null);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const getEvent = async () => {
      const data = await fetchEventById(Number(id));
      setEvent(data);
    };
    getEvent();
  }, [id]);

  if (!event) return <p className="text-center text-gray-500">Loading...</p>;
  if (event.permission === "private" && !isAuthenticated)
    return <Navigate to="/login" />;

  return (
    <div className="min-h-screen bg-[url('/src/assets/background.jpeg')] bg-cover bg-no-repeat flex justify-center items-center p-6 relative">
      {/* Back Button - Positioned at the top-left of the page */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 bg-[#f9f7ff] text-gray-900 px-6 py-2 rounded-full shadow-md hover:bg-[#dfd3f0] transition flex items-center gap-2 z-10"
      >
        <ArrowLeft size={18} />
      </button>

      <div className="relative max-w-3xl w-full bg-[#fefcf5] shadow-lg rounded-lg overflow-hidden p-6">
        {/* Event Name */}
        <h1 className="text-4xl font-bold text-gray-900">{event.name}</h1>

        {/* Event Information (Date, Time, Location) */}
        <div className="flex flex-wrap gap-4 mt-4 text-gray-700">
          <p className="flex items-center gap-2">
            <CalendarIcon size={18} />
            {new Date(event.start_time).toLocaleDateString()}
          </p>
          <p className="flex items-center gap-2">
            <ClockIcon size={18} />
            {new Date(event.start_time).toLocaleTimeString()} -{" "}
            {new Date(event.end_time).toLocaleTimeString()}
          </p>
        </div>

        {/* Event Type */}
        <div className="mt-4 flex gap-2">
          <span className="px-3 py-1 text-sm rounded-full bg-[#C6B8E6] text-white">
            {event.event_type}
          </span>
        </div>

        {/* Speaker Information */}
        {event.speakers.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Speakers:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {event.speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-[#DED6E9] px-3 py-1 rounded-full text-[#644A99] border-2 border-white"
                >
                  <span className="w-8 h-8 bg-[#C6B8E6] text-white flex items-center justify-center rounded-full font-bold">
                    {speaker.name.charAt(0)}
                  </span>
                  <p className="text-sm">{speaker.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Description with Poppins Font */}
        <h2 className="mt-6 text-gray-700 leading-relaxed">
          {event.description}
        </h2>
      </div>
    </div>
  );
};

export default EventPage;
