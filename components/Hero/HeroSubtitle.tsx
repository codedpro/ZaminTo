"use client"
import { motion } from "framer-motion";

const HeroSubtitle: React.FC<{ subtitle: string }> = ({ subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.5 } }}
      className="text-2xl font-medium z-30 mt-2 text-gray-100 mb-8"
    >
      <motion.span
        key={subtitle} 
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 0, duration: 0.5 },
        }}
      >
        {subtitle}
      </motion.span>
    </motion.div>
  );
};
export default HeroSubtitle;
