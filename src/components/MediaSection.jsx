const MediaSection = () => {
  return (
    <section
      id="media-section"
      className="bg-black-gradient relative py-16 flex flex-col md:flex-row items-center justify-center md:justify-between"
    >
      <div
        className="w-full md:w-1/2 flex justify-center items-center animate-slide-left"
        style={{ perspective: "1000px" }}
      >
        <div className="relative w-4/5 rounded-lg overflow-hidden border-2 border-gray-300 shadow-lg">
          <video
            className="w-full h-[500px] object-cover"
            poster="/thumbnail.png"
            controls
            loading="lazy"
            playsInline
          >
            <source src="/story.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start px-6 md:px-10 animate-fade"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0)), url('/t-shirt.png')",
          backgroundSize: "cover",
          backgroundBlendMode: "lighten",
        }}
      >
        <div className="p-8 bg-gray-gradient bg-opacity-80 rounded-lg shadow-md">
          <p className="text-xl italic text-white font-medium text-center md:text-left">
            "This program is a game-changer for women like me, enabling us to
            rise above challenges."
          </p>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
