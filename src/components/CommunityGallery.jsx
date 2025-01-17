import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  member1,
  member2,
  member3,
  member4,
  member5,
  member6,
  member7,
  member8,
} from "../assets";

const members = [
  member1,
  member2,
  member3,
  member4,
  member5,
  member6,
  member7,
  member8,
];

const CommunityGallery = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="community-gallery"
      className="relative bg-blue-gradient-2 py-12 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute w-64 h-64 bg-gradient-to-br from-pink-500 to-purple-500 blur-3xl rounded-full -top-10 -left-10 opacity-40"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        ></div>
        <div
          className="absolute w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-600 blur-3xl rounded-full bottom-0 right-0 opacity-40"
          style={{ transform: `translateY(${offsetY * 0.3}px)` }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 font-sans">
          Meet Our Amazing Community
        </h2>

        {/* Desktop Grid Layout */}
        <motion.div
          className="hidden sm:grid grid-cols-4 gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member}
                alt={`Community Member ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Horizontal Scroller */}
        <motion.div
          className="flex sm:hidden overflow-x-auto space-x-4 scrollbar-hide"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex-shrink-0 w-64 h-64 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member}
                alt={`Community Member ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityGallery;
