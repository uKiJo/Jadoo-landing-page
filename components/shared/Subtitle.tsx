import { motion } from 'framer-motion';
import React from 'react';

interface SubtitleProps {
  children: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return (
    <h2 className="font-poppins font-bold text-paragraph uppercase mb-4">
      {children}
    </h2>
  );
};

export default Subtitle;
