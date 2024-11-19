import React from "react";
import javascript from "../assets/icon-javscript.svg";
import typescript from "../assets/icon-typescript.png";
import react from "../assets/icon-react.svg";
import next from "../assets/icon-nextjs.png";
import node from "../assets/icon-nodejs.svg";
import express from "../assets/icon-express.svg";
import nest from "../assets/icon-nest.svg";
import socket from "../assets/icon-socket.svg";
import postgre from "../assets/icon-postgresql.svg";
import mongodb from "../assets/icon-mongodb.svg";
import sass from "../assets/icon-sass.svg";
import twl from "../assets/icon-tailwindcss.svg";
import figma from "../assets/icon-figma.svg";
import cypress from "../assets/icon-cypress.svg";
import storybook from "../assets/icon-storybook.svg";
import git from "../assets/icon-git.svg";

const Skills = () => {
  return (
    <div className="bg-defaultclr text-white font-Robo">
      <div className="pt-14 justify-items-center">
        <h1 className="font-Sour text-2xl py-4">Skills</h1>
        <h3>The skills, tools and technologies I am really good at:</h3>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 justify-items-center pt-20 gap-y-20 pb-28 items-center">
        <div className="space-y-2 justify-items-center">
            <img src={javascript} alt="javascript-icon" />
            <p>Javascript</p>
        </div>
        <div className="space-y-2 justify-items-center">
            <img src={typescript} alt="Typescript-icon" />
            <p>Typescript</p>
        </div>
        <div className="space-y-2 justify-items-center">
            <img src={react} alt="React-icon" />
            <p>React</p>
        </div>
        <div className="space-y-2 justify-items-center">
            <img src={next} alt="Next-icon" />
            <p>Next.js</p>
        </div>
        <div className="space-y-2 justify-items-center">
            <img src={node} alt="Node-icon" />
            <p>Node.js</p>
        </div>
        <div className="space-y-2 justify-items-center">
            <img src={express} alt="Express-icon" />
            <p>Express.js</p>
        </div>
        <div className="space-y-2 justify-items-center">
            <img src={nest} alt="Nest.js-icon" />
            <p>Nest.js</p>
        </div>
        <div className="space-y-2 justify-items-center">
            <img src={socket} alt="socket-icon" />
            <p>Socket.io</p>
        </div>
        <div className="space-y-2 justify-items-center">
            <img src={postgre} alt="postgreSQL-icon" />
            <p>PostgreSQL</p>
        </div>
        <div className="space-y-2 justify-items-center">
            <img src={mongodb} alt="mongodb-icon" />
            <p>MongoDB</p>
        </div>
        <div className="space-y-2 justify-items-center">
            <img src={sass} alt="sass/scss-icon" />
            <p>Sass/Scss</p>
        </div>
        <div className="space-y-2 justify-items-center">
            <img src={twl} alt="tailwindcss-icon" />
            <p>Tailwindcss</p>
        </div>
        <div className="space-y-2 justify-items-center">
            <img src={figma} alt="figma-icon" />
            <p>Figma</p>
        </div>
        <div className="space-y-2 justify-items-center">
            <img src={cypress} alt="cypress-icon" />
            <p>Cypress</p>
        </div>
        <div className="space-y-2 justify-items-center">
            <img src={storybook} alt="storybook-icon" />
            <p>Storybook</p>
        </div>
        <div className="space-y-2 justify-items-center">
            <img src={git} alt="git-icon" />
            <p>Git</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
