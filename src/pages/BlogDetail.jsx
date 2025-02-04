import { useParams } from "react-router-dom";
import blogPosts from "../constants/blogPosts.json";
import { MDXProvider } from "@mdx-js/react";
import { motion } from "framer-motion";

// Define custom components for MDX
const components = {
  h1: (props) => (
    <h1 className="text-4xl font-bold text-gradient mb-4" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-3xl font-bold text-gradient mt-8 mb-4" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-2xl font-bold text-gradient mt-6 mb-3" {...props} />
  ),
  p: (props) => <p className="text-gray-300 mb-4" {...props} />,
  a: (props) => (
    <a
      className="text-cyan-400 hover:text-cyan-300 underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  ul: (props) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
  ol: (props) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-purple-400 pl-4 my-8 italic text-gray-400"
      {...props}
    />
  ),
  img: (props) => (
    <img className="rounded-lg my-4" style={{ maxWidth: "100%" }} {...props} />
  ),
};

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="text-center py-20 text-gray-300">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-lg">Post not found</p>
      </div>
    );
  }

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
          transition={{ duration: 0.5 }}
        >
          {/* Post Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4 font-poppins">
              {post.title}
            </h1>
            <p className="text-gray-400 text-sm">{post.date}</p>
          </div>

          {/* Featured Image */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-2xl mb-8 shadow-xl"
          />

          {/* Excerpt */}
          <p className="text-gray-300 text-lg italic mb-8 border-l-4 border-cyan-400 pl-4">
            {post.excerpt}
          </p>

          {/* MDX Content */}
          <div className="prose prose-invert max-w-none">
            <MDXProvider components={components}>{post.content}</MDXProvider>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default BlogDetail;
