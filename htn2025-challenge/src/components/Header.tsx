import { Link } from "react-router-dom";
import logo from "../assets/htn-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebookF,
  faLinkedin,
  faTiktok,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

const Header = ({ setIsModalOpen }: { setIsModalOpen: (open: boolean) => void }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.reload();
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#fdf6e3]">
      {/* Left: Logo */}
      <div className="flex items-center gap-6 ml-10">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-10" />
        </Link>
      </div>

      {/* Right: Log In & Events Buttons */}
      <div className="flex gap-4 items-center mr-10">

        {/* Social Media Icons */}
        <div className="flex gap-4 text-gray-700">
          <a href="https://www.instagram.com/hackthenorth" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://x.com/hackthenorth" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </a>
          <a href="https://www.facebook.com/hackthenorth/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a href="https://www.linkedin.com/company/hack-the-north/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://www.tiktok.com/@hackthenorth" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} size="lg" />
          </a>
          <a href="https://hackthenorth.medium.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMedium} size="lg" />
          </a>
        </div>
        <Link to="/">
          <button className="px-4 py-2 bg-[#eee6f5] text-gray-700 font-pixel rounded-full hover:bg-[#dfd3f0] transition">
            Events
          </button>
        </Link>
        {isAuthenticated ? (
          <button
            className="px-4 py-2 bg-[#d7bde2] text-white rounded-full hover:text-gray-700 hover:bg-[#FFFACD] transition"
            onClick={handleLogout}
          >
            Log Out
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-[#eee6f5] text-gray-700 rounded-full hover:bg-[#dfd3f0] transition"
            onClick={() => setIsModalOpen(true)}
          >
            Log In
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
