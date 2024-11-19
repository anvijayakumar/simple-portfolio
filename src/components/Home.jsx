import React from "react";
import locicon from "../assets/location-icon.png";
import profile from "../assets/profile.png";

const Home = () => {
  return (
    <div className="bg-defaultclr w-full h-[650px] md:h-[400px] lg:h-[400px]">
      <div className="flex-none md:flex lg:flex p-2 md:p-5 lg:p-5 text-white ml-10 md:ml-20 lg:ml-20 mr-5 md:mr-0 lg:mr-0 pt-16">
        <div className="w-full md:w-2/3 lg:w-2/3 font-Robo text-base pt-60 md:pt-0 lg:pt-28">
          <h1 className="font-bold text-xl md:text-3xl lg:text-3xl font-Sour">
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
        <div className="w-1/2 pl-0 relative">
            <div class="h-40 w-40 md:h-48 md:w-48 lg:h-60 lg:w-60 bg-grayclr absolute bottom-[350px] md:bottom-0 lg:bottom-0 left-14 md:left-10 lg:left-32"></div>
            <img src={profile} alt="profile image" className="h-40 w-40 md:h-48 md:w-48 lg:h-60 lg:w-60 border-solid border-8 border-grayclr absolute bottom-[360px] md:bottom-4 lg:bottom-5 left-12 md:left-6 lg:left-[110px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
