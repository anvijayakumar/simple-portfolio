import React from "react";
import logo from "../assets/logo-upwork.png";

const Experience = () => {
  return (
    <div className="bg-grayclr w-full h-[1000px] text-white font-Robo pt-10">
      <div className="justify-items-center">
        <h1 className="font-Sour text-2xl py-8">Experience</h1>
        <p>Here is a quick summary of my most recent experiences:</p>
      </div>

      <div className="pt-20 justify-items-center space-y-5">
        <div className="bg-litegray w-[800px] h-60 rounded-lg pt-5">
          <div className="flex justify-between px-10">
            <img src={logo} alt="logo" />
            <p>Sr. Frontend Developer</p>
            <p>Nov 2021 - Present</p>
          </div>
          <ol className="justify-items-start list-disc pt-6 space-y-3 pl-80 ">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
            <li>Sed quis justo ac magna.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ol>
        </div>
        <div className="bg-litegray w-[800px] h-60 rounded-lg pt-5">
          <div className="flex justify-between px-10">
            <img src={logo} alt="logo" />
            <p>Team Lead</p>
            <p>Jul 2017 - Oct 2021</p>
          </div>
          <ol className="justify-items-start list-disc pt-6 space-y-3 pl-80 ">
            <li>Sed quis justo ac magna.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Sed quis justo ac magna.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ol>
        </div>
        <div className="bg-litegray w-[800px] h-40 rounded-lg pt-5">
          <div className="flex justify-between px-10">
            <img src={logo} alt="logo" />
            <p>Full Stack Developer</p>
            <p>Dec 2015 - May 2017</p>
          </div>
          <ol className="justify-items-start list-disc p-20 pt-6 space-y-3 pl-80 ">
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
