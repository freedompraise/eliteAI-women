import {
  FaUsers,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaBriefcase,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ProgramDetails = () => {
  const steps = [
    {
      title: "Inclusive Selection",
      description:
        "Focused on identifying passionate individuals, especially women, from underserved regions.",
      icon: <FaUsers className="text-red-600 text-2xl" />,
    },
    {
      title: "AI-Focused Curriculum",
      description:
        "Comprehensive modules from AI basics to advanced concepts tailored for impactful learning.",
      icon: <FaLaptopCode className="text-green-600 text-2xl" />,
    },
    {
      title: "Industry Mentorship",
      description:
        "Guidance from seasoned professionals to nurture entrepreneurial and technical growth.",
      icon: <FaChalkboardTeacher className="text-blue-600 text-2xl" />,
    },
    {
      title: "Entrepreneurial Focus",
      description:
        "Training in AI tools for small business innovation and success stories to inspire.",
      icon: <FaBriefcase className="text-yellow-600 text-2xl" />,
    },
  ];

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80, rotate: -10 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="program-details"
      className="bg-black py-16 flex flex-col items-center"
    >
      <div className="max-w-5xl w-full px-6">
        <h2 className="text-4xl font-bold font-inter text-center text-white mb-12">
          Program Details at a Glance
        </h2>
        <motion.div
          className="relative flex flex-col space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex items-center gap-6 p-8 rounded-lg bg-white shadow-lg transform hover:scale-110 transition-transform duration-300 ${
                index % 2 === 0 ? "bg-opacity-90" : "bg-opacity-80"
              }`}
            >
              <div className="text-center flex-shrink-0">{step.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramDetails;
