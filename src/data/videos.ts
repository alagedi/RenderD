export interface Video {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  image: string;
}

export const videos: Video[] = [
  { id: 1, title: "How Cyber Insurance Actually Works", description: "A deep dive into cyber liability coverage for modern businesses.", category: "Insurance", duration: "4:12", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop" },
  { id: 10, title: "How RenderD Works", description: "Our AI-powered process from concept to final render.", category: "SaaS", duration: "3:45", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "The Future of Finance", description: "Explaining decentralized finance concepts to traditional investors.", category: "Finance", duration: "5:12", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "Patient Onboarding", description: "A welcoming guide for new patients navigating our healthcare portal.", category: "Healthcare", duration: "4:20", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, title: "Mastering React", description: "Advanced patterns and performance optimization techniques.", category: "Education", duration: "8:15", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop" },
  { id: 5, title: "Zero Trust Architecture", description: "Why perimeter security is no longer enough in the modern enterprise.", category: "Cybersecurity", duration: "6:30", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" },
  { id: 6, title: "Commercial Real Estate Trends", description: "Market analysis and forecasts for the upcoming quarter.", category: "Real Estate", duration: "3:45", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" },
  { id: 7, title: "Understanding IP Law", description: "A primer on intellectual property rights for startups.", category: "Legal", duration: "5:50", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop" },
  { id: 8, title: "Automated Payroll Systems", description: "Streamlining HR processes with our new integration.", category: "HR", duration: "2:50", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop" },
  { id: 9, title: "Growing Your Channel", description: "Strategies for audience retention and algorithmic success.", category: "YouTube", duration: "7:20", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" },
];
