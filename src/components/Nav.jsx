import React, { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import pdf from "../assets/resume.pdf";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white z-10">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="font-Sour text-xl">Vijay</div>

        {/* Hamburger Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <div
            className={`w-6 h-0.5 bg-white mb-1 transition-transform ${
              isMenuOpen ? "rotate-45 transform origin-top-left" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-opacity ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white mt-1 transition-transform ${
              isMenuOpen ? "-rotate-45 transform origin-bottom-left" : ""
            }`}
          ></div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <ul className="flex space-x-6">
            {["about", "skills", "work", "testimonials", "contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    className="hover:underline capitalize"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
          <a
            href={pdf}
            download
            className="ml-4 border border-white px-3 py-1 hover:bg-white hover:text-black transition"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center transition-transform transform md:hidden">
          <ul className="space-y-8">
            {["about", "skills", "work", "testimonials", "contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    className="text-2xl hover:underline capitalize"
                    onClick={toggleMenu} // Close menu on click
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
            <li>
              <a
                href={pdf}
                download
                className="border border-white px-3 py-1 hover:bg-white hover:text-black transition"
                onClick={toggleMenu} // Close menu on click
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
