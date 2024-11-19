import React from "react";
import user from "../assets/icon-user.png";

const Testimonials = () => {
  return (
    <div className="bg-grayclr text-white w-full pt-16 font-Robo">
      <div className="justify-items-center space-y-5">
        <h1 className="font-Sour text-2xl">Testimonials</h1>
        <p>Nice things people have said about me:</p>
      </div>

      <div className="flex-none md:flex lg:flex p-12 md:p-10 lg:p-32 space-x-0 md:space-x-5 lg:space-x-20 space-y-5 md:space-y-0 lg:space-y-0">
        <div className="bg-litegray space-y-5 md:space-y-2 lg:space-y-5 h-80 w-[300px] md:w-[500px] lg:w-[500px] justify-items-center p-4 md:p-4 lg:p-10 rounded-xl">
          <img src={user} alt="user-icon" className="bg-userbg rounded-full w-12 h-12 p-2"/>
          <p>
            “Job well done! I am really impressed. He is very very good at what
            he does:) I would recommend Sagar and will rehire in the future for
            Frontend development.”
          </p>
          <p>John Doe</p>
          <p>Founder - xyz.com</p>
        </div>
        <div className="bg-litegray space-y-5 md:space-y-2 lg:space-y-5 h-80 w-[300px] md:w-[500px] lg:w-[500px] justify-items-center p-4 md:p-4 lg:p-10 rounded-xl">
          <img src={user} alt="user-icon" className="bg-userbg rounded-full w-12 h-12 p-2"/>
          <p>
            “Great guy, highly recommended for any COMPLEX front-end development
            job! His skills are top-notch and he will be an amazing addition to
            any team.”
          </p>
          <p>John Doe</p>
          <p>Founder - abc.com</p>
        </div>
        <div className="bg-litegray space-y-4 md:space-y-1 lg:space-y-5 h-80 w-[300px] md:w-[500px] lg:w-[500px] justify-items-center p-4 md:p-3 lg:p-8 rounded-xl">
          <img src={user} alt="user-icon" className="bg-userbg rounded-full w-12 h-12 p-2"/>
          <p>
            “Sagar was extremely easy and pleasant to work with and he truly
            cares about the project being a success. Sagar has a high level of
            knowledge and was able to work on my MERN stack application without
            any issues.”
          </p>
          <p>John Doe</p>
          <p>Freelancer</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
