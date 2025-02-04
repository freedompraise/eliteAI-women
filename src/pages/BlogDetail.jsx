import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import blogPosts from "../constants/blogPosts.json";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const renderContent = (content) => {
    // ... (same renderContent function as before)
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-gradient blur-3xl rounded-full -top-10 -left-10 opacity-40"></div>
        <div className="absolute w-96 h-96 bg-blue-gradient blur-3xl rounded-full bottom-0 right-0 opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4 font-poppins">
              {post.title}
            </h1>
            <p className="text-gray-400 text-sm">{post.date}</p>
          </div>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-2xl mb-8 shadow-xl"
          />

          <div className="prose prose-invert max-w-none">
            {renderContent(post.content)}
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default BlogDetail;
