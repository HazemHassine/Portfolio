import React from 'react';
import { motion } from 'framer-motion';

function BioElement( props ) {
  return (
    <motion.div 
      className="mt-4 text-white p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      id={props.id || ""}
    >
      <h2 className="font-bold text-teal-300 mb-2">{props.title}</h2>
      <p className="text-gray-300">{props.text}</p>
    </motion.div>
  );
}

export default BioElement;