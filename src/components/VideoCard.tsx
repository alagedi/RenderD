import React from "react";
import { Play } from "lucide-react";
import { Video } from "../data/videos";

interface VideoCardProps {
  video: Video;
  onClick: (video: Video) => void;
  className?: string;
}

export default function VideoCard({ video, onClick, className = "" }: VideoCardProps) {
  return (
    <div className={`group flex flex-col gap-3 cursor-pointer ${className}`} onClick={() => onClick(video)}>
      <div className="relative aspect-video bg-surface rounded-xl overflow-hidden border border-border">
        <img 
          src={video.image} 
          alt={video.title} 
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center text-background transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play size={24} className="ml-1" fill="currentColor" />
          </div>
        </div>
        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded flex items-center gap-1.5">
          <Play size={10} fill="currentColor" />
          {video.duration}
        </div>
      </div>
      
      <div>
        <h3 className="text-base font-medium text-text-primary mb-1.5 group-hover:text-accent transition-colors line-clamp-1">
          {video.title}
        </h3>
        <p className="text-sm text-text-secondary line-clamp-2 mb-3">
          {video.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="inline-block px-2.5 py-0.5 bg-surface border border-border rounded-full text-[11px] text-text-secondary">
            {video.category}
          </span>
          <span className="text-[13px] text-text-secondary">{video.duration}</span>
        </div>
      </div>
    </div>
  );
}
