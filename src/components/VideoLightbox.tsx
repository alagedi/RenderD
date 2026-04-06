import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Video } from "../data/videos";

interface VideoLightboxProps {
  video: Video | null;
  onClose: () => void;
}

export default function VideoLightbox({ video, onClose }: VideoLightboxProps) {
  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
          onClick={onClose}
        >
          <button 
            className="absolute top-6 right-6 text-text-secondary hover:text-text-primary transition-colors"
            onClick={onClose}
          >
            <X size={32} />
          </button>
          
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="w-full max-w-5xl flex flex-col bg-surface rounded-xl overflow-hidden shadow-2xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video Player Placeholder */}
            <div className="w-full aspect-video bg-black relative flex flex-col items-center justify-center text-text-secondary">
              <img 
                src={video.image} 
                alt={video.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 flex flex-col items-center">
                <Play size={64} className="mb-4 opacity-80 text-white" fill="currentColor" />
                <p className="text-white font-medium">Video Player Placeholder</p>
              </div>
            </div>
            
            {/* Video Details & CTA */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-medium text-text-primary mb-2">{video.title}</h3>
                <p className="text-text-secondary mb-4">{video.description}</p>
                <div className="flex items-center gap-3">
                  <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-xs text-text-secondary">
                    {video.category}
                  </span>
                  <span className="text-sm text-text-secondary">{video.duration}</span>
                </div>
              </div>
              
              <div className="w-full md:w-auto flex flex-col items-start md:items-end gap-3 bg-background p-5 rounded-lg border border-border">
                <p className="text-sm font-medium text-text-primary">Want a video like this for your business?</p>
                <Link
                  to="/order"
                  className="w-full md:w-auto text-center bg-accent hover:bg-accent-hover text-background px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  onClick={onClose}
                >
                  Order now &rarr;
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
