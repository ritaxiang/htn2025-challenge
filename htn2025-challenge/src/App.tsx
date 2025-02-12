import { Routes, Route } from "react-router-dom";
import EventsPage from "./pages/EventsPage"; 
import EventPage from "./pages/EventPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EventsPage />} />
      <Route path="/event/:id" element={<EventPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
