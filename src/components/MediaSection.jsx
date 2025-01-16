import { story as videoFile, tshirt as tshirtImage } from "../assets";

const MediaSection = () => {
  return (
    <section
      id="media-section"
      className="bg-blue-gradient relative py-16 flex flex-col md:flex-row items-center justify-center md:justify-between"
    >
      {/* Left Side: Video */}
      <div
        className="w-full md:w-1/2 flex justify-center items-center animate-slide-left"
        style={{ perspective: "1000px" }}
      >
        <div className="relative w-4/5 rounded-lg overflow-hidden border-2 border-gray-300 shadow-lg">
          <video
            className="w-full h-[500px] object-cover"
            poster="path-to-placeholder-image.jpg"
            controls
            loading="lazy"
          >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <button className="w-16 h-16 flex justify-center items-center rounded-full bg-white bg-opacity-90 hover:bg-opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-3.197-2.132a.75.75 0 00-1.155.63v4.268a.75.75 0 001.155.63l3.197-2.132a.75.75 0 000-1.26z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12c0 4.971-4.029 9-9 9s-9-4.029-9-9 4.029-9 9-9 9 4.029 9 9z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Right Side: Quote */}
      <div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start px-6 md:px-10 animate-fade"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0)), url(${tshirtImage})`,
          backgroundSize: "cover",
          backgroundBlendMode: "lighten",
        }}
      >
        <div className="p-8 bg-gray-gradient bg-opacity-80 rounded-lg shadow-md">
          <p className="text-xl italic text-gray-800 font-medium text-center md:text-left">
            "This program is a game-changer for women like me, enabling us to
            rise above challenges."
          </p>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
