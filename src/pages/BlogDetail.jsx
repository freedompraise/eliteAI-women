import { useParams, Link } from "react-router-dom";
import blogPosts from "../constants/blogPosts.json";
import Markdown from "markdown-to-jsx";
import { motion } from "framer-motion";

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
        <div className="absolute w-96 h-96 bg-blue-gradient blur-3xl rounded-full -top-10 -left-10 opacity-30"></div>
        <div className="absolute w-96 h-96 bg-blue-gradient blur-3xl rounded-full bottom-0 right-0 opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Breadcrumbs */}
          <nav className="mb-6 text-sm text-gray-400">
            <Link to="/blogs" className="text-blue-400 hover:text-cyan-300">
              ← Back to Posts
            </Link>
          </nav>

          {/* Post Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-blue-400 to-cyan-400 mb-4 font-inter lg:leading-tight">
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

          {/* Markdown Content */}
          <div className="prose prose-invert max-w-none text-gray-200">
            <Markdown
              options={{
                overrides: {
                  h1: {
                    component: "h1",
                    props: {
                      className: "text-4xl font-bold text-gradient mb-4",
                    },
                  },
                  h2: {
                    component: "h2",
                    props: {
                      className: "text-3xl font-bold text-gradient mt-8 mb-4",
                    },
                  },
                  h3: {
                    component: "h3",
                    props: {
                      className: "text-2xl font-bold text-gradient mt-6 mb-3",
                    },
                  },
                  p: {
                    component: "p",
                    props: { className: "text-gray-200 lg:text-lg mb-4" },
                  },
                  a: {
                    component: "a",
                    props: {
                      className: "text-cyan-400 hover:text-cyan-300 underline",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                  },
                  ul: {
                    component: "ul",
                    props: { className: "list-disc pl-6 mb-4 space-y-2" },
                  },
                  ol: {
                    component: "ol",
                    props: { className: "list-decimal pl-6 mb-4 space-y-2" },
                  },
                  blockquote: {
                    component: "blockquote",
                    props: {
                      className:
                        "border-l-4 border-blue-400 pl-4 my-8 italic text-gray-400",
                    },
                  },
                  img: {
                    component: "img",
                    props: {
                      className: "rounded-lg my-4",
                      style: { maxWidth: "100%" },
                    },
                  },
                },
              }}
            >
              {post.content}
            </Markdown>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default BlogDetail;
