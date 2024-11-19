// import React, { useState } from "react";
// import { Link } from "react-scroll"; // Import Link from react-scroll
// import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu and close icon
// import pdf from "../assets/resume.pdf";

// const Nav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="w-full bg-black text-white h-14 items-center justify-between fixed top-0 left-0 z-10 px-4">
//       <div className="flex items-center justify-between w-full max-w-screen-lg mx-auto">
//         <div className="font-Sour text-xl">Vijay</div>
//         <div className="hidden md:flex space-x-8">
//           <ul className="flex space-x-6">
//             <li>
//               <Link to="about" smooth={true} duration={500} className="hover:underline">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="skills" smooth={true} duration={500} className="hover:underline">
//                 Skills
//               </Link>
//             </li>
//             <li>
//               <Link to="work" smooth={true} duration={500} className="hover:underline">
//                 Work
//               </Link>
//             </li>
//             <li>
//               <Link to="testimonials" smooth={true} duration={500} className="hover:underline">
//                 Testimonials
//               </Link>
//             </li>
//             <li>
//               <Link to="contact" smooth={true} duration={500} className="hover:underline">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//           <a href={pdf} download className="ml-4 border border-white px-3 py-1 hover:bg-white hover:text-black transition">
//             Download CV
//           </a>
//         </div>

//         {/* Hamburger Menu for mobile */}
//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMenu} className="focus:outline-none">
//             {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="md:hidden mt-4 bg-black w-full text-center">
//           <ul className="flex flex-col space-y-4">
//             <li>
//               <Link
//                 to="about"
//                 smooth={true}
//                 duration={500}
//                 className="hover:underline"
//                 onClick={toggleMenu}
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="skills"
//                 smooth={true}
//                 duration={500}
//                 className="hover:underline"
//                 onClick={toggleMenu}
//               >
//                 Skills
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="work"
//                 smooth={true}
//                 duration={500}
//                 className="hover:underline"
//                 onClick={toggleMenu}
//               >
//                 Work
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="testimonials"
//                 smooth={true}
//                 duration={500}
//                 className="hover:underline"
//                 onClick={toggleMenu}
//               >
//                 Testimonials
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="contact"
//                 smooth={true}
//                 duration={500}
//                 className="hover:underline"
//                 onClick={toggleMenu}
//               >
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <a
//                 href={pdf}
//                 download
//                 className="border border-white px-3 py-1 hover:bg-white hover:text-black transition"
//                 onClick={toggleMenu}
//               >
//                 Download CV
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Nav;

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
