import React from "react";
import pic from "../assets/picture.png";
import linkicon from "../assets/link-icon.png";

const Work = () => {
  return (
    <div className="w-full bg-defaultclr text-white">
      <div className="justify-items-center space-y-8 pt-20">
        <h1 className="text-2xl font-Sour">Work</h1>
        <p>Some of the noteworthy projects I have built:</p>
      </div>

      <div className="flex p-20 space-x-40">
        <img src={pic} alt="image" />
        <div className="bg-grayclr px-20 pt-10 space-y-6">
          <div>
            <p className="text-xl pb-5 font-bold">Fiskil</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
          </div>
          <div className="grid grid-cols-4 items-center text-center gap-y-2">
            <p className="bg-defaultclr w-20 h-7 rounded-3xl">React</p>
            <p className="bg-defaultclr w-20 h-7 rounded-3xl">Next.js</p>
            <p className="bg-defaultclr w-28 h-7 rounded-3xl">Typescript</p>
            <p className="bg-defaultclr w-20 h-7 rounded-3xl">Nest.js</p>
            <p className="bg-defaultclr w-28 h-7 rounded-3xl">PostgreSQL</p>
            <p className="bg-defaultclr w-28 h-7 rounded-3xl">Tailwindcss</p>
            <p className="bg-defaultclr w-20 h-7 rounded-3xl">Figma</p>
            <p className="bg-defaultclr w-20 h-7 rounded-3xl">Cypress</p>
            <p className="bg-defaultclr w-28 h-7 rounded-3xl">Storybook</p>
            <p className="bg-defaultclr w-20 h-7 rounded-3xl">Git</p>
          </div>
          <div>
            <a href="#">
              <img src={linkicon} alt="icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex p-20 space-x-40">
        <div className="bg-grayclr px-20 pt-10 space-y-6">
          <div>
            <p className="text-xl pb-5 font-bold">Fiskil</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
          </div>
          <div className="grid grid-cols-4 items-center text-center gap-y-2">
            <p className="bg-defaultclr w-20 h-7 rounded-3xl">React</p>
            <p className="bg-defaultclr w-20 h-7 rounded-3xl">Next.js</p>
            <p className="bg-defaultclr w-28 h-7 rounded-3xl">Typescript</p>
            <p className="bg-defaultclr w-20 h-7 rounded-3xl">Nest.js</p>
            <p className="bg-defaultclr w-28 h-7 rounded-3xl">PostgreSQL</p>
            <p className="bg-defaultclr w-28 h-7 rounded-3xl">Tailwindcss</p>
            <p className="bg-defaultclr w-20 h-7 rounded-3xl">Figma</p>
            <p className="bg-defaultclr w-20 h-7 rounded-3xl">Cypress</p>
            <p className="bg-defaultclr w-28 h-7 rounded-3xl">Storybook</p>
            <p className="bg-defaultclr w-20 h-7 rounded-3xl">Git</p>
          </div>
          <div>
            <a href="#">
              <img src={linkicon} alt="icon" />
            </a>
          </div>
        </div>
        <img src={pic} alt="image" />
      </div>

      <div className="flex p-20 space-x-40">
        <img src={pic} alt="image" />
        <div className="bg-grayclr px-20 pt-10 space-y-6">
          <div>
            <p className="text-xl pb-5 font-bold">Fiskil</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
          </div>
          <div className="grid grid-cols-4 items-center text-center gap-y-2">
            <p className="bg-defaultclr w-20 h-7 rounded-3xl">React</p>
            <p className="bg-defaultclr w-20 h-7 rounded-3xl">Next.js</p>
            <p className="bg-defaultclr w-28 h-7 rounded-3xl">Typescript</p>
            <p className="bg-defaultclr w-20 h-7 rounded-3xl">Nest.js</p>
            <p className="bg-defaultclr w-28 h-7 rounded-3xl">PostgreSQL</p>
            <p className="bg-defaultclr w-28 h-7 rounded-3xl">Tailwindcss</p>
            <p className="bg-defaultclr w-20 h-7 rounded-3xl">Figma</p>
            <p className="bg-defaultclr w-20 h-7 rounded-3xl">Cypress</p>
            <p className="bg-defaultclr w-28 h-7 rounded-3xl">Storybook</p>
            <p className="bg-defaultclr w-20 h-7 rounded-3xl">Git</p>
          </div>
          <div>
            <a href="#">
              <img src={linkicon} alt="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
