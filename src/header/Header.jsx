import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

function Header() {
  const handleButtonClick = () => {
    window.open("https://github.com/HazemHassine/Portfolio", "_blank", "noopener,noreferrer");
  };

  return (
    <header className="relative py-16 bg-gradient-to-b to-teal-600/0 from-gray-900/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-[0_0_30px_rgba(20,144,186,0.7)]">
          Mohamed Hazem Hassine
        </h1>
        <h2 className="text-xl text-teal-300 mb-6">
          <TypeAnimation
            sequence={[
              "A machine learning enthusiast",
              2000,
              "A researcher",
              2000,
              "A student",
              2000,
              "Music lover",
              2000,
              "A developer",
              2000,
              "A boyfriend for the best girl in the world ❤️ ❤️ ❤️ ",
              2000,
              "A bookworm",
              2000,
              "Camper and adventurer",
              2000,
            ]}
            wrapper="span"
            speed={70}
            deletionSpeed={50}
            repeat={Infinity}
          />
        </h2>
        <button
          className="bg-teal-500/20 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-teal-400/40 transition-all duration-300 backdrop-blur-sm"
          onClick={handleButtonClick}
        >
          <FaGithub className="inline-block mr-2" />
          View Project on GitHub
        </button>
      </div>
    </header>
  );
}

export default Header;

