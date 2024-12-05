import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaCog, FaEnvelope } from 'react-icons/fa';

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.button
        className="bg-teal-500 text-white p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleNav}
      >
        <FaCog className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-full right-0 mb-4 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <NavButton icon={<FaHome />} onClick={() => scrollToSection('home')} label="Home" />
            <NavButton icon={<FaUser />} onClick={() => scrollToSection('about')} label="About" />
            <NavButton icon={<FaCode />} onClick={() => scrollToSection('projects')} label="Projects" />
            <NavButton icon={<FaCog />} onClick={() => scrollToSection('skills')} label="Skills" />
            <NavButton icon={<FaEnvelope />} onClick={() => scrollToSection('contact')} label="Contact" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavButton = ({ icon, onClick, label }) => (
  <motion.button
    className="bg-gray-800 text-white p-3 rounded-full shadow-md flex items-center space-x-2"
    whileHover={{ scale: 1.05, x: -8 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <span className="sr-only">{label}</span>
    {icon}
    <span className="hidden group-hover:inline">{label}</span>
  </motion.button>
);

export default FloatingNav;