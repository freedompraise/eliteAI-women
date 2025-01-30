import { motion } from "framer-motion";
import { useState } from "react";

const VideoStories = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const videos = [
    {
      id: "VdFM9250bms",
      title: "Breaking Barriers",
      placeholder: "https://img.youtube.com/vi/VdFM9250bms/maxresdefault.jpg",
    },
    {
      id: "alvxvGwCUpg",
      title: "Against All Odds",
      placeholder: "https://img.youtube.com/vi/alvxvGwCUpg/maxresdefault.jpg",
    },
    {
      id: "Sgk0Vb7_Wlw",
      title: "Chasing Her Dreams",
      placeholder: "https://img.youtube.com/vi/Sgk0Vb7_Wlw/maxresdefault.jpg",
    },
    {
      id: "-cB-7fyRB1s",
      title: "Trailblazers",
      placeholder: "https://img.youtube.com/vi/-cB-7fyRB1s/maxresdefault.jpg",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="video-stories"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 overflow-hidden"
    >
      {/* Glowing Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[40rem] h-[40rem] bg-indigo-500/20 blur-[100px] rounded-full -top-20 -left-20"></div>
        <div className="absolute w-[40rem] h-[40rem] bg-cyan-500/20 blur-[100px] rounded-full -bottom-20 -right-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-poppins"
        >
          Untold Stories
        </motion.h2>

        {/* Video Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              variants={item}
              className="relative group aspect-video rounded-2xl overflow-hidden shadow-2xl hover:shadow-indigo-500/20 transition-shadow duration-300"
            >
              {playingVideo === video.id ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&modestbranding=1&rel=0`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                />
              ) : (
                <div
                  className="relative cursor-pointer w-full h-full bg-gray-800"
                  onClick={() => setPlayingVideo(video.id)}
                >
                  <img
                    src={video.placeholder}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-center justify-center">
                    <div className="absolute bottom-6 left-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {video.title}
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-indigo-400 to-cyan-400"></div>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-indigo-500/20 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-indigo-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://www.youtube.com/@EliteGlobalAI"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 font-semibold rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            Explore More Stories
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoStories;
