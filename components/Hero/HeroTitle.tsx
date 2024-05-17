import { motion } from 'framer-motion';

interface HeroTitleProps {
  title: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ title }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1.05, transition: { delay: 0.4, duration: 0.8, yoyo: Infinity } }}
      className="text-6xl font-bold text-white mb-8 z-20"
    >
      {title}
    </motion.h1>
  );
};

export default HeroTitle;