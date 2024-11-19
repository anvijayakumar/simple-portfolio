import React from "react";
import logo from "../assets/logo-upwork.png";

const Experience = () => {
  return (
    <div className="bg-grayclr w-full h-[1350px] md:h-[1000px] lg:h-[1000px] text-white font-Robo pt-10">
      <div className="justify-items-center">
        <h1 className="font-Sour text-2xl py-8">Experience</h1>
        <p>Here is a quick summary of my most recent experiences:</p>
      </div>

      <div className="pt-20 justify-items-center space-y-5">
        <div className="bg-litegray w-[300px] md:w-[700px] lg:w-[800px] h-96 md:h-60 lg:h-60 rounded-lg pt-5">
          <div className="flex-none md:flex lg:flex justify-between px-10">
            <img src={logo} alt="logo" />
            <p className="pt-5 md:pt-0 lg:pt-0">Sr. Frontend Developer</p>
            <p>Nov 2021 - Present</p>
          </div>
          <ol className="justify-items-start list-disc pt-6 space-y-3 pl-8 md:pl-60 lg:pl-80 ">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
            <li>Sed quis justo ac magna.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ol>
        </div>
        <div className="bg-litegray w-[300px] md:w-[700px] lg:w-[800px] h-96 md:h-60 lg:h-60 rounded-lg pt-5">
          <div className="flex-none md:flex lg:flex justify-between px-10">
            <img src={logo} alt="logo" />
            <p className="pt-5 md:pt-0 lg:pt-0">Team Lead</p>
            <p>Jul 2017 - Oct 2021</p>
          </div>
          <ol className="justify-items-start list-disc pt-6 space-y-3 pl-8 md:pl-60 lg:pl-80">
            <li>Sed quis justo ac magna.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Sed quis justo ac magna.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ol>
        </div>
        <div className="bg-litegray w-[300px] md:w-[700px] lg:w-[800px] h-64 md:h-40 lg:h-40 rounded-lg pt-5">
          <div className="flex-none md:flex lg:flex justify-between px-10">
            <img src={logo} alt="logo" />
            <p className="pt-5 md:pt-0 lg:pt-0">Full Stack Developer</p>
            <p>Dec 2015 - May 2017</p>
          </div>
          <ol className="justify-items-start list-disc p-20 pt-6 space-y-3 pl-10 md:pl-60 lg:pl-80 ">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Experience;
