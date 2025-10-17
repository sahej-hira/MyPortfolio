import React, { useState } from "react";
import { FaExternalLinkAlt, FaHeart, FaCalendarAlt, FaFilter } from "react-icons/fa";
import { motion } from "framer-motion";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Poetry and blog posts from Medium and potential future posts
  const posts = [
    {
      id: 1,
      title: "The uncertain",
      excerpt: "for times when life feels too heavy..",
      date: "Sep 26, 2024",
      category: "poetry",
      claps: 50,
      mediumLink: "https://medium.com/@sahej.k.hira",
      tags: ["recovery", "mental health", "life"],
      content: "A reflection on navigating life's heaviest moments..."
    },
    {
      id: 2,
      title: "Us-flowers🌸",
      excerpt: "Let us assume we're flowers..",
      date: "Jun 30, 2024",
      category: "poetry",
      claps: 50,
      mediumLink: "https://medium.com/@sahej.k.hira",
      tags: ["nature", "metaphor", "growth"],
      content: "A beautiful metaphor comparing human experiences to flowers..."
    },
    {
      id: 3,
      title: "Pseudo-Hero Aftermath",
      excerpt: "When Wounds Were Falsified",
      date: "Jun 30, 2024",
      category: "poetry",
      claps: 50,
      mediumLink: "https://medium.com/@sahej.k.hira",
      tags: ["healing", "authenticity", "personal growth"],
      content: "Exploring the complexity of perceived heroism and genuine healing..."
    },
    {
      id: 4,
      title: "I WAS a page",
      excerpt: "The page that watched the book burn to ashes",
      date: "Jun 23, 2024",
      category: "poetry",
      claps: 50,
      mediumLink: "https://medium.com/@sahej.k.hira",
      tags: ["loss", "witness", "transformation"],
      content: "A powerful metaphor about witnessing destruction and transformation..."
    },
    {
      id: 5,
      title: "The Valley to Silence",
      excerpt: "The part no one prepares you for",
      date: "Jun 22, 2024",
      category: "poetry",
      claps: 50,
      mediumLink: "https://medium.com/@sahej.k.hira",
      tags: ["silence", "introspection", "journey"],
      content: "About the quiet spaces in recovery that no one talks about..."
    },
    {
      id: 6,
      title: "braveface",
      excerpt: "Some days feel like waking up inside a trap you can't see — only feel.",
      date: "Jun 14, 2024",
      category: "poetry",
      claps: 1,
      mediumLink: "https://medium.com/@sahej.k.hira",
      tags: ["vulnerability", "mental health", "courage"],
      content: "About the invisible struggles and the courage to continue..."
    },
    {
      id: 7,
      title: "When I will grow old",
      excerpt: "I was a little unwell when someone close to me said, 'I can't have you go through this.'",
      date: "Apr 22, 2024",
      category: "poetry",
      claps: 5,
      mediumLink: "https://medium.com/@sahej.k.hira",
      tags: ["care", "aging", "relationships"],
      content: "Reflections on care, aging, and the people who love us..."
    },
    {
      id: 8,
      title: "When life gives you tangerines",
      excerpt: "Inspired by the series 'When Life Gives You Tangerines'",
      date: "Apr 8, 2024",
      category: "poetry",
      claps: 7,
      mediumLink: "https://medium.com/@sahej.k.hira",
      tags: ["inspiration", "life lessons", "gratitude"],
      content: "A moment that stayed with me long after the credits rolled..."
    },
    {
      id: 9,
      title: "Centuries",
      excerpt: "Of love, legacy, and the stories only hearts remember.",
      date: "Mar 19, 2024",
      category: "poetry",
      claps: 3,
      mediumLink: "https://medium.com/@sahej.k.hira",
      tags: ["love", "legacy", "memory"],
      content: "About the enduring nature of love and the stories hearts carry..."
    },
    {
      id: 10,
      title: "Underpainted Break: A Poem for the Burnt-Out and Brave",
      excerpt: "When burnout sets in, remember: resting isn't quitting; it's part of the art.",
      date: "Mar 11, 2024",
      category: "poetry",
      claps: 32,
      mediumLink: "https://medium.com/@sahej.k.hira",
      tags: ["burnout", "rest", "self-care", "bravery"],
      content: "A reminder that rest is not giving up—it's part of the creative process..."
    }
  ];

  const categories = [
    { id: "all", name: "All", count: posts.length },
    { id: "poetry", name: "Poetry", count: posts.filter(p => p.category === "poetry").length },
    { id: "tech", name: "Tech", count: posts.filter(p => p.category === "tech").length },
    { id: "personal", name: "Personal", count: posts.filter(p => p.category === "personal").length }
  ];

  const filteredPosts = selectedCategory === "all" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen pt-40 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[var(--accent)] via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Words & Code
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Where poetry meets programming. Exploring the intersection of creativity, recovery, 
            and technology through words that heal and code that builds.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-400">
            <span>✍️ Poet</span>
            <span>•</span>
            <span>💻 Developer</span>
            <span>•</span>
            <span>🌱 Recovery Advocate</span>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <FaFilter className="text-[var(--accent)] mr-2" />
            <span className="text-gray-300 font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                    : "border-gray-600 text-gray-300 hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass rounded-xl p-6 border border-white/10 hover:border-[var(--accent)]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/10"
            >
              {/* Post Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                    post.category === 'poetry' ? 'bg-pink-500/20 text-pink-300' :
                    post.category === 'tech' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-purple-500/20 text-purple-300'
                  }`}>
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h3>
                </div>
              </div>

              {/* Post Content */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Post Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt size={12} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaHeart size={12} />
                    {post.claps}
                  </div>
                </div>
                <a
                  href={post.mediumLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent)]/80 transition-colors text-sm font-medium"
                >
                  Read on Medium
                  <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Follow My Writing Journey
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join me as I explore the intersection of recovery, creativity, and technology. 
              New poems and thoughts are shared regularly on Medium.
            </p>
            <a
              href="https://medium.com/@sahej.k.hira"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[var(--accent)] to-purple-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[var(--accent)]/25 transition-all duration-300"
            >
              Follow on Medium
              <FaExternalLinkAlt />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;