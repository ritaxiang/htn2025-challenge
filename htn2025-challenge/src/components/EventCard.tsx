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
    <div className="bg-[#FDF6E3] p-5 rounded-xl shadow-[8px_8px_0px_#b7a5df] w-full max-w-sm min-h-[380px] flex flex-col justify-between border-2 border-gray-700">
      {/* Speaker Badge */}
      {speakers.length > 0 && (
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-8 bg-[#DED6E9] text-[#644A99] flex items-center justify-center rounded-full font-bold border-2 border-gray-600">
            {speakers[0].name.charAt(0)}
          </span>
          <p className="font-semibold text-gray-900 truncate w-full">Speaker: {speakers[0].name}</p>
        </div>
      )}

      {/* Event Title */}
      <p className="text-lg font-bold text-gray-900 h-[48px] overflow-hidden">{name}</p>

      {/* Placeholder Image */}
      <div className="mt-3 w-full h-36 bg-[#DDD5EB] rounded-lg flex items-center justify-center border-2 border-black">
        <span className="text-gray-700">Event Image</span>
      </div>

      {/* Event Time */}
      <p className="text-gray-700 mt-2 text-sm">
        {formattedStartTime} - {formattedEndTime}
      </p>
      {/* View Button - Smaller & Styled */}
      <div className="mt-auto flex justify-center">
        <Link to={`/event/${id}`} className="relative inline-block">
          <button
            className="relative px-4 py-1 bg-[#DED6E9] text-gray-900 rounded-lg shadow-md border-2 border-black 
              before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:right-[-2px] before:bottom-[-2px] 
              before:bg-[#fdf6e3] before:-z-10 before:rounded-lg
              hover:before:top-[4px] hover:before:left-[4px] hover:shadow-lg"
          >
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
