import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blogPosts from "../constants/blogPosts.json";

const BlogList = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-gradient blur-3xl rounded-full -top-10 -left-10 opacity-40"></div>
        <div className="absolute w-96 h-96 bg-blue-gradient blur-3xl rounded-full bottom-0 right-0 opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-12 font-poppins text-center">
          Our Blog
        </h1>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={`/blogs/${post.slug}`} className="block">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4">{post.date}</p>
                  <p className="text-gray-300">{post.excerpt}</p>
                  <div className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                    Read More →
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
