const ProgramDetails = () => {
  const steps = [
    {
      title: "Selection Process",
      description:
        "A comprehensive evaluation to ensure participants are the right fit for the program.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 17l4-4m0 0l-4-4m4 4H3m13 0a9 9 0 110-18 9 9 0 010 18z"
          />
        </svg>
      ),
    },
    {
      title: "Training Modules",
      description:
        "Interactive modules covering the fundamentals and advanced concepts in AI.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 15.5l-4.5 4.5-4.5-4.5m9-6L12 5l-4.5 4.5"
          />
        </svg>
      ),
    },
    {
      title: "Mentorship & Networking",
      description:
        "Get guidance from industry experts and connect with peers and professionals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 9l3 3m0 0l3-3m-3 3V3"
          />
        </svg>
      ),
    },
    {
      title: "Internships & Job Placements",
      description:
        "Hands-on industry experience and career opportunities to build your resume.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
    },
    {
      title: "Certification",
      description:
        "Receive globally recognized certifications to boost your career prospects.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="program-details"
      className="relative bg-gray-100 py-16 flex flex-col items-center overflow-hidden"
    >
      <div className="max-w-5xl w-full px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Program Details
        </h2>
        <div className="relative flex flex-col">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-300"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex items-center gap-6 py-12 px-6 rounded-lg animate-slide-top ${
                index % 2 === 0
                  ? "justify-start text-left"
                  : "justify-end text-right"
              }`}
            >
              {/* Step Content */}
              <div
                className={`relative ${
                  index % 2 === 0 ? "pr-16" : "pl-16"
                } max-w-lg`}
              >
                <h3 className="text-xl font-bold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>

              {/* Step Icon */}
              <div
                className={`absolute w-14 h-14 rounded-full flex items-center justify-center bg-black-gradient ${
                  index % 2 === 0 ? "left-1/2 -ml-7" : "right-1/2 -mr-7"
                }`}
              >
                {step.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
