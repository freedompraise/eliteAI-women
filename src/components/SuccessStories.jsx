import { motion } from "framer-motion";

import {
  review1,
  review2,
  review3,
  review4,
  review5,
  review6,
  review7,
  review8,
  review9,
  review10,
  review11,
  review12,
} from "../assets";

const reviews = [
  review1,
  review2,
  review3,
  review4,
  review5,
  review6,
  review7,
  review8,
  review9,
  review10,
  review11,
  review12,
];

const googleDriveLink =
  "https://drive.google.com/drive/folders/1X5y94FpikoGJsu-eLdbxQQnO1PNfv-yL";

const SuccessStories = () => {
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
      id="success-stories"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-gradient blur-3xl rounded-full -top-10 -left-10 opacity-40"></div>
        <div className="absolute w-96 h-96 bg-blue-gradient blur-3xl rounded-full bottom-0 right-0 opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 font-poppins text-gradient">
          Success Stories
        </h2>

        {/* Horizontal Scrollable Section */}
        <motion.div
          className="flex gap-8 overflow-x-auto pb-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative flex-shrink-0 w-96 h-96 md:w-[30rem] md:h-[30rem] rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 feature-card"
            >
              <img
                src={review}
                alt={`Success Story ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* See More Button */}
        <div className="mt-10">
          <a
            href={googleDriveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 px-8 font-poppin text-[16px] text-black bg-blue-gradient rounded-lg shadow-lg hover:shadow-woke transition-shadow duration-300"
          >
            See More Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
