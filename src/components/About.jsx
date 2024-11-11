import React from "react";
import profile2 from "../assets/profile2.png";

const About = () => {
  return (
    <div className="bg-grayclr w-full h-[850px] text-white pt-20">
      <div className="justify-center items-center w-96 h-20 pl-[700px] font-Sour text-xl">
        About
      </div>
      <div className="flex">
        <div>
          <div class="h-96 w-80 bg-black relative top-28 left-20"></div>
          <img
            src={profile2}
            alt="image"
            className="w-80 h-96 relative bottom-80 left-36 border-solid border-8 border-black "
          />
        </div>
        <div className="pl-60 m-8 font-Robo text-xm p-10">
          <h1 className="text-2xl pb-4">Curious about me? Here you have it:</h1>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className="py-4">
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p className="py-4">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p>Finally, some quick bits about me.</p>
          <p className="py-4 flex gap-x-40 pl-14">
            <ol className="space-y-5 list-disc">
              <li>B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
            </ol>
            <ol className="space-y-5 list-disc">
              <li>Avid learner</li>
              <li>Aspiring indie hacker</li>
            </ol>
          </p>
          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
