// Header component

import { Link } from "react-router-dom";
import { useState } from "react";
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
import { Menu, X } from "lucide-react"; // For mobile menu toggle

const Header = ({
  setIsModalOpen,
}: {
  setIsModalOpen: (open: boolean) => void;
}) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.reload();
  };

  return (
    <header className=" px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 w-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex gap-4 text-gray-700">
            <a
              href="https://www.instagram.com/hackthenorth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://x.com/hackthenorth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
            </a>
            <a
              href="https://www.facebook.com/hackthenorth/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com/company/hack-the-north/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://www.tiktok.com/@hackthenorth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} size="lg" />
            </a>
            <a
              href="https://hackthenorth.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMedium} size="lg" />
            </a>
          </div>

          {/* Buttons */}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu (responsive design) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-4 pb-4 border-t border-gray-300">
          {/* Social Icons */}
          <div className="flex gap-4 text-gray-700">
            <a
              href="https://www.instagram.com/hackthenorth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://x.com/hackthenorth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
            </a>
            <a
              href="https://www.facebook.com/hackthenorth/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com/company/hack-the-north/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://www.tiktok.com/@hackthenorth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} size="lg" />
            </a>
            <a
              href="https://hackthenorth.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMedium} size="lg" />
            </a>
          </div>

          {/* Buttons */}
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
      )}
    </header>
  );
};

export default Header;
