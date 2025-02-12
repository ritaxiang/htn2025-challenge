import { Link } from "react-router-dom";
import { TEvent } from "../types/events";
import { format } from "date-fns";

type EventCardProps = {
  event: TEvent;
  isAuthenticated: boolean;
};

const EventCard: React.FC<EventCardProps> = ({ event, isAuthenticated }) => {
  const { id, name, event_type, start_time, end_time, speakers, permission } = event;

  // Convert timestamps to readable format
  const formattedStartTime = format(new Date(start_time), "MMM d, yyyy • h:mm a");
  const formattedEndTime = format(new Date(end_time), "h:mm a");

  // Hide private events if user is not authenticated
  if (permission === "private" && !isAuthenticated) return null;

  return (
    <div className="bg-white p-5 rounded-xl shadow-md w-full max-w-sm min-h-[380px] flex flex-col justify-between">
      {/* Speaker Badge */}
      {speakers.length > 0 && (
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-8 bg-purple-200 text-purple-700 flex items-center justify-center rounded-full font-bold">
            {speakers[0].name.charAt(0)}
          </span>
          <p className="font-semibold text-gray-900 truncate w-full">Speaker: {speakers[0].name}</p>
        </div>
      )}

      {/* Event Title */}
      <h2 className="text-lg font-bold text-gray-900 h-[48px] overflow-hidden">{name}</h2>

      {/* Placeholder Image */}
      <div className="mt-3 w-full h-36 bg-gray-300 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">Event Image</span>
      </div>

      {/* Event Time */}
      <p className="text-gray-600 mt-2 text-sm">
        {formattedStartTime} - {formattedEndTime}
      </p>

      {/* View Button */}
      <div className="mt-auto">
        <Link to={`/event/${id}`} className="relative inline-block w-full">
          <button
            className="relative px-6 py-3 bg-[#DED6E9] text-gray-900 rounded-lg shadow-lg transition 
              before:content-[''] before:absolute before:top-[4px] before:left-[4px] before:right-[-4px] before:bottom-[-4px] 
              before:bg-[#fdf6e3] before:-z-10 before:rounded-lg
              hover:before:top-[6px] hover:before:left-[6px] hover:shadow-xl w-full"
          >
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
