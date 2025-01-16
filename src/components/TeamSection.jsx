import { bg, blessingImage, amakaImage, olaImage } from "../assets";

const TeamSection = () => {
  const team = [
    {
      name: "Blessing Ikpia",
      role: "Project Lead",
      image: blessingImage,
    },
    {
      name: "Ugbor Ukamaka",
      role: "Assistant Project Lead",
      image: amakaImage,
    },
    {
      name: "Adeleke Olamide",
      role: "Project Secretary",
      image: olaImage,
    },
  ];

  return (
    <section
      id="team-section"
      className="relative bg-black-gradient py-16 flex flex-col items-center"
    >
      {/* Transparent Background Image */}
      <div
        className="absolute inset-0 opacity-10 bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-white text-center mb-16">
        Meet the Visionaries Behind the Program
      </h2>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 font-mono lg:grid-cols-3 gap-10 relative z-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 bg-blue-gradient-2 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
          >
            {/* Photo */}
            <div className="w-36 h-36 rounded-full border-4 border-gray-300 overflow-hidden mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-2xl font-semibold text-gray-900">
              {member.name}
            </h3>

            {/* Role */}
            <p className="text-lg text-white">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
