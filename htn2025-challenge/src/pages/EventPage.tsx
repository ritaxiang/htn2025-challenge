import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { fetchEventById } from "../api/events";
import { TEvent } from "../types/events";

const EventPage = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<TEvent | null>(null);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  useEffect(() => {
    const getEvent = async () => {
      const data = await fetchEventById(Number(id));
      setEvent(data);
    };
    getEvent();
  }, [id]);

  if (!event) return <p className="text-center text-gray-500">Loading...</p>;
  if (event.permission === "private" && !isAuthenticated) return <Navigate to="/login" />;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold">{event.name}</h1>
      <p className="text-gray-700 mt-4">{event.description}</p>
    </div>
  );
};

export default EventPage;
