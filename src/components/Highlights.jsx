import {
  FaRobot,
  FaBriefcase,
  FaChalkboardTeacher,
  FaGraduationCap,
} from "react-icons/fa";

const highlights = [
  {
    title: "Hands-On AI Training",
    description:
      "Gain practical skills in AI through immersive projects and real-world applications.",
    icon: <FaRobot className="text-blue-700 text-3xl" />,
  },
  {
    title: "Job Readiness Modules",
    description:
      "Learn resume writing, interview skills, and job search strategies tailored to AI careers.",
    icon: <FaBriefcase className="text-blue-600 text-3xl" />,
  },
  {
    title: "Business Mentorship",
    description:
      "Connect with experienced mentors to guide your journey in AI-related entrepreneurship.",
    icon: <FaChalkboardTeacher className="text-blue-500 text-3xl" />,
  },
  {
    title: "Internships and Certifications",
    description:
      "Earn globally recognized certifications and participate in internships to gain industry exposure.",
    icon: <FaGraduationCap className="text-blue-400 text-3xl" />,
  },
];

const ProgramHighlights = () => {
  return (
    <section
      id="program-highlights"
      className="bg-gray-100 py-16 flex justify-center items-center flex-col"
    >
      <div className="max-w-6xl w-full px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Empowering Steps Towards Success
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-6 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 ${
                index % 2 === 0 ? "animate-slide-left" : "animate-slide-right"
              }`}
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
