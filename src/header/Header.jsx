import React from "react";
import { FaGithub } from "react-icons/fa";
import "./button.css";
import { TypeAnimation } from "react-type-animation";

function Header() {
  const handleButtonClick = () => {
    window.open("https://github.com/HazemHassine/Portfolio", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex lg:items-start md:items-start sm:items-center flex-col pt-4 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(255,255,255,0.0)] md:px-[25%] px-[5%] h-fit sm:text-left lg:text-center md:text-center">
      <h2 className="text-6xl font-bold text-teal-500 drop-shadow-[0_0_30px_rgba(20,144,186,0.7)]">
        Mohamed Hazem Hassine
      </h2>
      <h4 className="stext-lg text-gray-300">
        <TypeAnimation
          sequence={[
            "A machine learning enthusiast",
            2000, // Wait 2 seconds
            "",
            500, // Pause briefly before the next phrase
            "A researcher",
            2000,
            "",
            500,
            "A student",
            2000,
            "",
            500,
            "Music lover",
            2000,
            "",
            500,
            "A developer",
            2000,
            "",
            500,
            "A boyfriend for the best girl in the world ❤️ ❤️ ❤️ ",
            2000,
            "",
            500,
            "A bookworm",
            2000,
            "",
            500,
            "Camper and adventurer",
            2000,
            "",
            500,
          ]}
          wrapper="span"
          speed={70}
          deletionSpeed={50}
          repeat={Infinity}
        />
      </h4>
      <button
        className="bg-black text-gray-300 w-fit mt-2 text-sm font-bold py-2 px-4 rounded-full border-2 border-transparent hover:border-teal-500 hover:text-teal-500 transition-all duration-300 animate-glow"
        onClick={handleButtonClick}
      >
        <FaGithub className="inline-block mr-2" />
        View Project on GitHub
      </button>
      <div className="mt-6 -z-10">
        <div className="absolute left-0 w-screen h-3 blur-3xl opacity-50 bg-teal-500 " />
      </div>
    </div>
  );
}

export default Header;
