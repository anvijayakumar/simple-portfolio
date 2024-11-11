import React from "react";
import locicon from "../assets/location-icon.png";
import profile from "../assets/profile.png";

const Home = () => {
  return (
    <div className="bg-defaultclr w-full h-[400px]">
      <div className="flex p-5 text-white ml-20 pt-16">
        <div className="w-2/3 font-Robo text-base">
          <h1 className="font-bold text-3xl font-Sour">
            Hi, I'm VIJAYA KUMAR A N
          </h1>
          <h4 className="py-5">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </h4>
          <h4 className="flex pb-4 gap-2">
            <img src={locicon} alt="Icon" className="backdrop-invert w-4 h-6"/>
            Coimbatore, India
          </h4>
          <h4>Available for new projects</h4>
        </div>
        <div className="w-1/2 pl-40">
            <div class="h-60 w-60 bg-grayclr relative top-16 left-20"></div>
            <img src={profile} alt="profile image" className="w-60 h-60 border-solid border-8 border-grayclr relative bottom-56 left-8" />
        </div>
      </div>
    </div>
  );
};

export default Home;
