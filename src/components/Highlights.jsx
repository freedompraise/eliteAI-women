import { FaLaptopCode, FaGlobe, FaUsers, FaCertificate } from "react-icons/fa";

const highlights = [
  {
    title: "AI in Local Industries",
    description:
      "Learn how AI impacts sectors like agriculture, healthcare, and education with real-world applications.",
    icon: <FaLaptopCode className="text-green-700 text-3xl" />,
  },
  {
    title: "Global Exposure",
    description:
      "Get connected with international experts and attend virtual conferences to broaden your horizon.",
    icon: <FaGlobe className="text-blue-600 text-3xl" />,
  },
  {
    title: "Empowering Communities",
    description:
      "Develop projects that directly benefit your community, fostering sustainable development.",
    icon: <FaUsers className="text-purple-600 text-3xl" />,
  },
  {
    title: "Accredited Certifications",
    description:
      "Earn globally recognized certifications to establish your expertise in the AI domain.",
    icon: <FaCertificate className="text-yellow-500 text-3xl" />,
  },
];

const ProgramHighlights = () => {
  return (
    <section
      id="program-highlights"
      className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black py-16 flex justify-center items-center flex-col"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/t-shirt.jpg"
          alt="T-Shirt Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full px-6 text-white">
        <h2 className="text-4xl font-bold text-center">
          Unlock Your AI Potential
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-6 p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
