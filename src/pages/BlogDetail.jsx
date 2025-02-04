import { useParams } from "react-router-dom";
import blogPosts from "../constants/blogPosts.json";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl text-white">Blog post not found</h1>
      </div>
    );
  }

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6">
          {post.title}
        </h1>
        <p className="text-gray-400 text-sm mb-4">{post.date}</p>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-300 leading-relaxed">{post.content}</p>
      </div>
    </section>
  );
};

export default BlogDetail;
