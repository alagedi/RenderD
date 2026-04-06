import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

const FadeUp: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const faqs = [
  {
    q: "What do I need to provide?",
    a: "Just tell us what needs explaining — a product, concept, process, or idea. You can provide a script, a rough outline, or just a topic. We handle the rest: scriptwriting, production, narration, and delivery."
  },
  {
    q: "What does the final video look like?",
    a: "A 3-10 minute horizontal cinematic explainer with narration. Think documentary-style, not PowerPoint. See examples on our Work page."
  },
  {
    q: "How fast do you deliver?",
    a: "Most videos are delivered in 48 hours. Rush delivery (24 hours) is available on Premium tier and all subscriptions."
  },
  {
    q: "Can I request revisions?",
    a: "Yes. Each tier includes revision rounds (1-3 depending on tier). Revisions typically mean adjusting the script and regenerating. Turnaround on revisions: 24 hours."
  },
  {
    q: "Do I own the video?",
    a: "Yes. Full ownership rights. Use it anywhere — YouTube, website, ads, courses, presentations, social media."
  },
  {
    q: "Can I cancel my subscription?",
    a: "Anytime. No contracts. No cancellation fees. Your remaining videos for the month will still be delivered."
  },
  {
    q: "What if I need more than 8 videos/month?",
    a: "Contact us for custom volume pricing. We work with agencies and large content teams that need 20+ videos/month."
  },
  {
    q: "Do you offer refunds?",
    a: "If you're not satisfied after revisions, we'll produce one replacement video at no charge. If still unsatisfied, we offer a full refund on that video."
  }
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-20">
          <FadeUp>
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Pricing</h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              One-time orders or monthly subscriptions. Traditional production charges $5,000-15,000 per video. We start at $497.
            </p>
          </FadeUp>
        </div>

        {/* ONE-TIME VIDEOS */}
        <div className="mb-32">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="block text-[13px] uppercase tracking-[2px] text-text-secondary mb-4">
                One-Time
              </span>
              <h2 className="text-3xl font-medium">Need a single video? No commitment.</h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeUp delay={0.1}>
              <div className="bg-surface border border-border rounded-2xl p-8 h-full flex flex-col">
                <h3 className="text-xl font-medium mb-2">Essentials</h3>
                <div className="text-4xl font-mono text-accent mb-2">$497</div>
                <div className="text-sm text-text-secondary mb-8 pb-8 border-b border-border">3-5 minute video</div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {["Script writing", "Cinematic generation", "Narration", "1 revision round", "48-hour delivery", "Full ownership rights"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check size={18} className="text-success shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/order?tier=essentials" className="block w-full text-center bg-background border border-border hover:border-accent text-text-primary py-3 rounded-lg font-medium transition-colors">
                  Order now
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-surface border-2 border-accent rounded-2xl p-8 h-full flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-accent/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-background text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  Popular
                </div>
                <h3 className="text-xl font-medium mb-2">Professional</h3>
                <div className="text-4xl font-mono text-accent mb-2">$897</div>
                <div className="text-sm text-text-secondary mb-8 pb-8 border-b border-border">5-8 minute video</div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3 text-sm font-medium">
                    <Check size={18} className="text-success shrink-0 mt-0.5" />
                    <span>Everything in Essentials</span>
                  </li>
                  {["Custom script consultation", "2 revision rounds", "YouTube-optimized metadata", "Thumbnail design"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check size={18} className="text-success shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/order?tier=professional" className="block w-full text-center bg-accent hover:bg-accent-hover text-background py-3 rounded-lg font-medium transition-colors">
                  Order now
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="bg-surface border border-border rounded-2xl p-8 h-full flex flex-col">
                <h3 className="text-xl font-medium mb-2">Premium</h3>
                <div className="text-4xl font-mono text-accent mb-2">$1,497</div>
                <div className="text-sm text-text-secondary mb-8 pb-8 border-b border-border">8-10 minute video</div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3 text-sm font-medium">
                    <Check size={18} className="text-success shrink-0 mt-0.5" />
                    <span>Everything in Professional</span>
                  </li>
                  {["Deep-dive concept development", "3 revision rounds", "24-hour rush delivery option", "Distribution strategy brief"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check size={18} className="text-success shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/order?tier=premium" className="block w-full text-center bg-background border border-border hover:border-accent text-text-primary py-3 rounded-lg font-medium transition-colors">
                  Order now
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* MONTHLY SUBSCRIPTIONS */}
        <div className="mb-24">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="block text-[13px] uppercase tracking-[2px] text-text-secondary mb-4">
                Monthly
              </span>
              <h2 className="text-3xl font-medium mb-4">Ongoing content? Subscribe and save.</h2>
              <p className="text-text-secondary">Cancel anytime. No contracts. No minimums.</p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeUp delay={0.1}>
              <div className="bg-background border border-border rounded-2xl p-8 h-full flex flex-col">
                <h3 className="text-xl font-medium mb-2">Starter</h3>
                <div className="text-4xl font-mono text-accent mb-2">$897<span className="text-lg text-text-secondary">/mo</span></div>
                <div className="text-sm font-medium mb-1">2 videos per month</div>
                <div className="text-xs text-text-secondary mb-8 pb-8 border-b border-border">$448/video</div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {["2 × 3-8 minute videos", "Script writing included", "1 revision per video", "5-day delivery per video", "Dedicated project thread"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check size={18} className="text-success shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-xs text-success text-center mb-4 font-medium">Save 10% vs one-time</div>
                <button className="w-full bg-surface border border-border hover:border-accent py-3 rounded-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-surface border border-border rounded-2xl p-8 h-full flex flex-col relative">
                <div className="absolute top-0 right-0 bg-accent text-background text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-bl-lg rounded-tr-xl">
                  Best Value
                </div>
                <h3 className="text-xl font-medium mb-2">Growth</h3>
                <div className="text-4xl font-mono text-accent mb-2">$1,597<span className="text-lg text-text-secondary">/mo</span></div>
                <div className="text-sm font-medium mb-1">4 videos per month</div>
                <div className="text-xs text-text-secondary mb-8 pb-8 border-b border-border">$399/video</div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {["4 × 3-8 minute videos", "Script writing included", "2 revisions per video", "48-hour delivery per video", "Content calendar planning", "YouTube SEO optimization"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check size={18} className="text-success shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-xs text-success text-center mb-4 font-medium">Save 20% vs one-time</div>
                <button className="w-full bg-accent hover:bg-accent-hover text-background py-3 rounded-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="bg-background border border-border rounded-2xl p-8 h-full flex flex-col">
                <h3 className="text-xl font-medium mb-2">Scale</h3>
                <div className="text-4xl font-mono text-accent mb-2">$2,897<span className="text-lg text-text-secondary">/mo</span></div>
                <div className="text-sm font-medium mb-1">8 videos per month</div>
                <div className="text-xs text-text-secondary mb-8 pb-8 border-b border-border">$362/video</div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3 text-sm font-medium">
                    <Check size={18} className="text-success shrink-0 mt-0.5" />
                    <span>Everything in Growth</span>
                  </li>
                  {["8 × 3-10 minute videos", "Priority delivery (24-48 hours)", "Monthly strategy call", "Dedicated account manager", "White-label option available"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check size={18} className="text-success shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-xs text-success text-center mb-4 font-medium">Save 28% vs one-time</div>
                <button className="w-full bg-surface border border-border hover:border-accent py-3 rounded-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </FadeUp>
          </div>
          
          <FadeUp delay={0.4}>
            <div className="mt-12 text-center p-8 bg-surface rounded-2xl border border-border">
              <h4 className="text-lg font-medium mb-2">Are you an agency?</h4>
              <p className="text-text-secondary mb-6">
                We offer white-label production at volume rates. Your brand, our production. Starting at $297/video.
              </p>
              <Link to="/contact" className="text-accent hover:underline font-medium">
                Contact us for agency pricing &rarr;
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* FAQ */}
        <div className="max-w-[800px] mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-medium">Frequently Asked Questions</h2>
            </div>
          </FadeUp>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="bg-surface border border-border rounded-xl overflow-hidden">
                  <button
                    className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-medium pr-8">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp size={20} className="text-text-secondary shrink-0" />
                    ) : (
                      <ChevronDown size={20} className="text-text-secondary shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 text-text-secondary leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
