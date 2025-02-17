import { motion } from 'framer-motion';

export const LEDDiscordIcon = ({ className }) => (
  <motion.svg 
    className={className} 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M85 30C85 25 80 15 65 15H35C20 15 15 25 15 30V70C15 75 20 85 35 85H65C80 85 85 75 85 70V30Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M40 40C40 35 45 30 50 30C55 30 60 35 60 40M35 60C35 65 40 70 50 70C60 70 65 65 65 60"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
    />
  </motion.svg>
);

export const ForumIcon = ({ className }) => (
  <motion.svg 
    className={className} 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M20 20H80V60H50L35 75V60H20V20Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M30 35H70M30 45H70"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="4 4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
    />
  </motion.svg>
);

export const WebsiteIcon = ({ className }) => (
  <motion.svg 
    className={className} 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M20 20L50 10L80 20L80 80L50 90L20 80L20 20Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M50 10L50 90M20 50L80 50"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="4 4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
    />
    <motion.path
      d="M35 35L65 65M65 35L35 65"
      stroke="currentColor"
      strokeWidth="1"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
    />
  </motion.svg>
);