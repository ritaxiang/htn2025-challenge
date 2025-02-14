import { Routes, Route } from "react-router-dom";
import EventsPage from "./pages/EventsPage"; 
import EventPage from "./pages/EventPage";
import NoiseEffect from "./components/NoiseEffect";
import "./styles/global.css";

function App() {
  return (
    <div className="relative min-h-screen">
      <NoiseEffect /> {/* Ensures background noise effect is always applied */}
      <Routes>
        <Route path="/" element={<EventsPage />} />
        <Route path="/event/:id" element={<EventPage />} />
      </Routes>
    </div>
  );
}

export default App;
