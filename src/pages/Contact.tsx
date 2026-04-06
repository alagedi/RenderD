import React, { useState } from "react";
import { motion } from "motion/react";

const FadeUp: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    budget: "Under $1,000"
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-[600px]">
        <div className="text-center mb-12">
          <FadeUp>
            <h1 className="text-4xl md:text-5xl font-medium mb-4">Let's talk</h1>
            <p className="text-lg text-text-secondary">
              For custom projects, agency partnerships, volume pricing, or questions.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.1}>
          {submitted ? (
            <div className="bg-surface border border-border rounded-xl p-12 text-center">
              <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h2 className="text-2xl font-medium mb-2">Message sent</h2>
              <p className="text-text-secondary mb-8">We'll get back to you within 24 hours.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-accent hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">What are you looking for? *</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Budget range</label>
                <div className="relative">
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none"
                  >
                    <option value="Under $1,000">Under $1,000</option>
                    <option value="$1,000-5,000">$1,000-5,000</option>
                    <option value="$5,000-10,000">$5,000-10,000</option>
                    <option value="$10,000+">$10,000+</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-text-secondary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-background py-3 rounded-lg font-medium transition-colors"
              >
                Send message
              </button>
            </form>
          )}
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="text-center mt-12 text-sm text-text-secondary">
            <p className="mb-2">Or email us directly: <a href="mailto:hello@renderd.co" className="text-text-primary hover:text-accent transition-colors">hello@renderd.co</a></p>
            <p>Response time: within 24 hours.</p>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
