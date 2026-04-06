import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { videos, Video } from "../data/videos";
import VideoCard from "../components/VideoCard";
import VideoLightbox from "../components/VideoLightbox";

const FadeUp: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const categories = ["All", "Insurance", "SaaS", "Finance", "Healthcare", "Education", "Cybersecurity", "Real Estate", "Legal", "HR", "YouTube"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const filteredVideos = activeCategory === "All" 
    ? videos 
    : videos.filter(v => v.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <FadeUp>
            <h1 className="text-4xl md:text-5xl font-medium mb-4">Our work</h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Every video produced in under 2 hours using AI-powered cinematic generation.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.1}>
          <div className="flex flex-wrap justify-center gap-6 mb-12 border-b border-border pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-medium transition-all relative pb-4 -mb-[17px] ${
                  activeCategory === cat 
                    ? "text-accent" 
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </button>
            ))}
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <VideoCard video={video} onClick={setSelectedVideo} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <FadeUp delay={0.2}>
          <div className="text-center bg-surface border border-border rounded-2xl p-12">
            <h2 className="text-2xl font-medium mb-6">Like what you see?</h2>
            <Link
              to="/order"
              className="inline-block bg-accent hover:bg-accent-hover text-background px-8 py-3 rounded-lg text-base font-medium transition-colors"
            >
              Order your video &rarr;
            </Link>
          </div>
        </FadeUp>
      </div>

      <VideoLightbox video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
}
