import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

function ArrowElement({ children, more }) {
  const [isMoreVisible, setIsMoreVisible] = useState(false);

  return (
    <div 
      className="group relative flex items-center text-xl gap-2 w-fit cursor-pointer"
      onMouseEnter={() => setIsMoreVisible(true)}
      onMouseLeave={() => setIsMoreVisible(false)}
    >
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isMoreVisible ? 5 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="text-teal-500"
      >
        <ChevronRight size={24} />
      </motion.div>
      <h1 className="text-white group-hover:text-teal-300 transition-colors duration-300">
        {children}
      </h1>
      <AnimatePresence>
        {more && isMoreVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-full ml-4 top-0 p-5 text-white italic bg-gray-800 border-l-4 border-teal-500 rounded-r-lg shadow-lg max-w-md z-10"
          >
            <h3 className="font-semibold mb-2 text-teal-300">{more.bac.header}</h3>
            <p className="text-sm">{more.bac.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ArrowElement;
