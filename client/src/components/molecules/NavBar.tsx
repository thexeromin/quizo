import { useState } from "react";
import { X, AlignJustify } from "lucide-react";
import Logo from "../atoms/Logo";
import { Button } from "../atoms/button";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const links = ["Home", "About", "Quizzes", "Contact"];

  return (
    <nav className="w-full flex justify-between items-center p-5 bg-white border-b border-gray-300">
      <Logo />

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-black font-medium">
        {links.map((link, index) => (
          <li key={index} className="cursor-pointer hover:text-gray-500">
            {link}
          </li>
        ))}
      </ul>

      {/* Sign In / Sign Out Button */}
      <button
        className="hidden md:block bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
        onClick={() => setIsAuthenticated(!isAuthenticated)}
      >
        {isAuthenticated ? "Logout" : "Login"}
      </button>

      {/* Mobile Menu Button */}
      <Button
        className="md:hidden text-2xl focus:outline-none"
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <AlignJustify />}
      </Button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white border-t border-gray-300 flex flex-col items-center space-y-4 py-4 md:hidden">
          {links.map((link, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-gray-500"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </li>
          ))}
          <li>
            <button
              className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
              onClick={() => {
                setIsAuthenticated(!isAuthenticated);
                setIsOpen(false);
              }}
            >
              {isAuthenticated ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
