import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import pdf from "../assets/resume.pdf";

const Nav = () => {
  return (
    <div className="flex w-full bg-black text-white h-14 items-center justify-center fixed top-0 left-0 z-10">
      <div className="w-1/3 pl-20 font-Sour">Vijay</div>
      <div className="flex w-2/3">
        <ul className="flex ml-56 w-96 justify-between">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="hover:underline"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="hover:underline"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              className="hover:underline"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:underline"
            >
              Contact
            </Link>
          </li>
        </ul>
        <a
          href={pdf}
          download
          className="justify-end pl-40 border-spacing-2 border-white border-solid"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Nav;
