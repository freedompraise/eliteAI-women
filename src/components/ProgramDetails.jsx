import {
  FaUsers,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaBriefcase,
} from "react-icons/fa";

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

  return (
    <section
      id="program-details"
      className="bg-black py-16 flex flex-col items-center"
    >
      <div className="max-w-5xl w-full px-6">
        <h2 className="text-4xl font-bold font-inter text-center text-white mb-12">
          Program Details at a Glance
        </h2>
        <div className="relative flex flex-col space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-6 p-8 rounded-lg bg-white shadow-lg transform hover:scale-105 transition-transform duration-300 ${
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
