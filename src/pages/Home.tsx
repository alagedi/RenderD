import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Play, ChevronDown, MonitorPlay, GraduationCap, Building2, LineChart, Stethoscope, Mic2 } from "lucide-react";
import { videos, Video } from "../data/videos";
import VideoCard from "../components/VideoCard";
import VideoLightbox from "../components/VideoLightbox";

const FadeUp: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video / Gradient Placeholder */}
        <div className="absolute inset-0 z-0 bg-surface">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
          <img 
            src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop" 
            alt="Cinematic background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center flex flex-col items-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-[13px] uppercase tracking-[3px] text-text-secondary mb-6">
              AI-Powered Video Production
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-text-primary leading-tight mb-6">
              Complex ideas.<br />Cinematic clarity.
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-[600px] mx-auto mb-10">
              We produce 3-10 minute cinematic explainer videos that make your product, concept, or brand impossible to misunderstand.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                to="/work"
                className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-background px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                See our work
              </Link>
              <Link
                to="/order"
                className="w-full sm:w-auto bg-transparent border border-accent text-accent hover:bg-accent/10 px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Order a video
              </Link>
            </div>
            
            <p className="text-sm text-text-secondary">
              Starting at $497 &middot; Delivered in 48 hours
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-text-secondary"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* SECTION 2: WHAT WE DO */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="max-w-[1000px] mx-auto text-center">
          <FadeUp>
            <span className="block text-[13px] uppercase tracking-[2px] text-text-secondary mb-4">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-medium mb-8">
              Explainer videos that look like documentaries.
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-16 leading-relaxed">
              Most explainer videos look like PowerPoint presentations with a voiceover. Ours look like mini-documentaries — cinematic, narrated, and impossible to stop watching. We turn your complex product, service, or concept into a 3-10 minute video your audience actually understands.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "48hrs", label: "Average delivery time" },
              { num: "90%", label: "Cost savings vs traditional production" },
              { num: "$497", label: "Starting price per video" }
            ].map((stat, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-surface border border-border rounded-xl p-8 flex flex-col items-center justify-center h-full">
                  <div className="text-3xl font-mono text-accent mb-2">{stat.num}</div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: HOMEPAGE CAROUSEL */}
      <section className="py-24 px-6 bg-surface overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-medium mb-4">
                Our work
              </h2>
              <p className="text-lg text-text-secondary">
                Every video produced in under 2 hours.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <div className="relative">
              {/* Carousel Container */}
              <div 
                id="home-carousel"
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {videos.slice(0, 8).map((video) => (
                  <div 
                    key={video.id} 
                    className="snap-start shrink-0 w-[85vw] sm:w-[350px] md:w-[400px]"
                  >
                    <VideoCard video={video} onClick={setSelectedVideo} />
                  </div>
                ))}
              </div>
              
              {/* Navigation Arrows (Desktop mostly) */}
              <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-4 -right-4 justify-between pointer-events-none">
                <button 
                  onClick={() => {
                    const el = document.getElementById('home-carousel');
                    if (el) el.scrollBy({ left: -400, behavior: 'smooth' });
                  }}
                  className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-text-primary hover:text-accent hover:border-accent pointer-events-auto transition-colors shadow-lg"
                  aria-label="Scroll left"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button 
                  onClick={() => {
                    const el = document.getElementById('home-carousel');
                    if (el) el.scrollBy({ left: 400, behavior: 'smooth' });
                  }}
                  className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-text-primary hover:text-accent hover:border-accent pointer-events-auto transition-colors shadow-lg"
                  aria-label="Scroll right"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/work" className="text-text-primary hover:text-accent transition-colors font-medium inline-flex items-center gap-2">
                See all work &rarr;
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* SECTION 4: USE CASES */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <FadeUp>
              <span className="block text-[13px] uppercase tracking-[2px] text-text-secondary mb-4">
                Who It's For
              </span>
              <h2 className="text-3xl md:text-4xl font-medium">
                If it needs explaining, we can render it.
              </h2>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <MonitorPlay size={24} />, title: "SaaS & Software", desc: "Explain features, onboard users, convert prospects. Every product update deserves a video." },
              { icon: <GraduationCap size={24} />, title: "Online Courses", desc: "Turn each module into a cinematic lesson. Make your course feel like Netflix, not a lecture." },
              { icon: <Building2 size={24} />, title: "Agencies & Studios", desc: "White-label production for your clients. We produce, you deliver under your brand." },
              { icon: <LineChart size={24} />, title: "Finance & Insurance", desc: "Explain complex products clearly. Mortgages, policies, investments — made visual." },
              { icon: <Stethoscope size={24} />, title: "Healthcare & Pharma", desc: "Patient education, procedure explainers, treatment overviews — compliant and clear." },
              { icon: <Mic2 size={24} />, title: "Consultants & Coaches", desc: "Turn your framework into a visual. Replace the 'let me explain what I do' meeting." }
            ].map((card, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-surface border border-border rounded-xl p-8 h-full hover:bg-surface-hover transition-colors">
                  <div className="text-accent mb-6">{card.icon}</div>
                  <h3 className="text-lg font-medium mb-3">{card.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">{card.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section className="py-24 md:py-32 px-6 bg-surface">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-16">
            <FadeUp>
              <span className="block text-[13px] uppercase tracking-[2px] text-text-secondary mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-medium">
                Three steps. That's it.
              </h2>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
            {[
              { num: "01", title: "Tell us the concept", desc: "What needs explaining? A product, a process, an idea? Give us the topic and we'll handle the rest. Or send your own script if you have one." },
              { num: "02", title: "We produce your video", desc: "Our AI-powered pipeline generates a cinematic, narrated explainer video. 3-10 minutes. Horizontal. Professional quality." },
              { num: "03", title: "You publish everywhere", desc: "YouTube, your website, LinkedIn, sales decks, course platforms, ads — it's your video, use it anywhere." }
            ].map((step, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="flex flex-col">
                  <div className="text-4xl font-mono text-accent mb-4">{step.num}</div>
                  <h3 className="text-lg font-medium mb-3">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <div className="text-center">
              <Link
                to="/order"
                className="inline-block bg-accent hover:bg-accent-hover text-background px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Order your first video &rarr;
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* SECTION 6: RESULTS */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-[1000px] mx-auto text-center">
          <FadeUp>
            <span className="block text-[13px] uppercase tracking-[2px] text-text-secondary mb-4">
              Results
            </span>
            <h2 className="text-3xl md:text-4xl font-medium mb-12">
              What our clients are saying.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "50+", label: "Videos produced" },
              { stat: "12", label: "Industries served" },
              { stat: "48hr", label: "Avg delivery time" }
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-surface border border-border rounded-xl p-8 flex flex-col items-center justify-center">
                  <div className="text-4xl font-medium text-text-primary mb-2">{item.stat}</div>
                  <div className="text-sm text-text-secondary">{item.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: PRICING PREVIEW */}
      <section className="py-24 md:py-32 px-6 bg-surface">
        <div className="max-w-[900px] mx-auto text-center">
          <FadeUp>
            <span className="block text-[13px] uppercase tracking-[2px] text-text-secondary mb-4">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Simple pricing. No surprises.
            </h2>
            <p className="text-lg text-text-secondary mb-12">
              One-time videos or monthly subscriptions. Cancel anytime. No contracts.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
            {[
              { name: "Starter", price: "$897/mo", videos: "2 videos per month" },
              { name: "Growth", price: "$1,597/mo", videos: "4 videos per month", popular: true },
              { name: "Scale", price: "$2,897/mo", videos: "8 videos per month" }
            ].map((tier, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className={`bg-background border rounded-xl p-8 h-full flex flex-col ${tier.popular ? 'border-accent' : 'border-border'}`}>
                  {tier.popular && <span className="text-xs font-medium text-accent uppercase tracking-wider mb-2">Best Value</span>}
                  <h3 className="text-xl font-medium mb-2">{tier.name}</h3>
                  <div className="text-3xl font-mono text-text-primary mb-4">{tier.price}</div>
                  <p className="text-sm text-text-secondary mb-6">{tier.videos}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <div className="flex flex-col items-center gap-4">
              <p className="text-text-secondary">
                Need just one video? Starting at $497.{" "}
                <Link to="/order" className="text-accent hover:underline">Order now</Link>
              </p>
              <Link to="/pricing" className="text-text-primary hover:text-accent transition-colors font-medium">
                See full pricing &rarr;
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="py-32 px-6 bg-[#111111]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Ready to make something?
            </h2>
            <p className="text-lg md:text-xl text-text-secondary mb-10">
              Your first video can be delivered in 48 hours.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link
                to="/order"
                className="inline-block bg-accent hover:bg-accent-hover text-background px-10 py-4 rounded-lg text-lg font-medium transition-colors"
              >
                Order now &rarr;
              </Link>
              <Link to="/contact" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                or contact us for custom projects
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <VideoLightbox video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
}
