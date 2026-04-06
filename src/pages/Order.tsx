import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Check, Lock } from "lucide-react";

const FadeUp: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const tiers = [
  { id: "essentials", name: "Essentials", price: 497, delivery: "48 hours", revisions: "1 round included" },
  { id: "professional", name: "Professional", price: 897, delivery: "48 hours", revisions: "2 rounds included" },
  { id: "premium", name: "Premium", price: 1497, delivery: "24-48 hours", revisions: "3 rounds included" }
];

export default function Order() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const initialTier = searchParams.get("tier") || "professional";
  const [selectedTier, setSelectedTier] = useState(initialTier);
  
  const [formData, setFormData] = useState({
    explaining: "",
    audience: "",
    outcome: "",
    length: "3-5 min",
    scriptStatus: "No, write it for me",
    scriptContent: "",
    company: "",
    name: "",
    email: "",
    website: "",
    extra: ""
  });

  // Load saved form data
  useEffect(() => {
    const saved = localStorage.getItem("renderd_order_form");
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        // ignore
      }
    }
  }, []);

  // Save form data on change
  useEffect(() => {
    localStorage.setItem("renderd_order_form", JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API to create a Stripe Checkout session
    console.log("Submitting order:", { tier: selectedTier, ...formData });
    
    // Simulate API call and redirect
    setTimeout(() => {
      localStorage.removeItem("renderd_order_form");
      alert("In a real app, you would be redirected to Stripe Checkout now.");
      // navigate("/thank-you");
    }, 1000);
  };

  const activeTierDetails = tiers.find(t => t.id === selectedTier) || tiers[1];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-background">
      <div className="max-w-[700px] mx-auto">
        <div className="text-center mb-16">
          <FadeUp>
            <h1 className="text-4xl md:text-5xl font-medium mb-4">Order your video</h1>
            <p className="text-lg text-text-secondary">
              Fill out the brief. Check out. We'll deliver in 48 hours.
            </p>
          </FadeUp>
        </div>

        <form onSubmit={handleSubmit} className="space-y-16">
          {/* STEP 1 */}
          <FadeUp delay={0.1}>
            <section>
              <h2 className="text-xl font-medium mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center text-sm font-mono text-accent">1</span>
                Select your tier
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {tiers.map((tier) => (
                  <div 
                    key={tier.id}
                    onClick={() => setSelectedTier(tier.id)}
                    className={`cursor-pointer rounded-xl p-5 border-2 transition-all ${
                      selectedTier === tier.id 
                        ? "border-accent bg-accent/5" 
                        : "border-border bg-surface hover:border-text-secondary"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{tier.name}</h3>
                      {selectedTier === tier.id && <Check size={18} className="text-accent" />}
                    </div>
                    <div className="text-2xl font-mono text-text-primary">${tier.price}</div>
                  </div>
                ))}
              </div>
            </section>
          </FadeUp>

          {/* STEP 2 */}
          <FadeUp delay={0.2}>
            <section>
              <h2 className="text-xl font-medium mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center text-sm font-mono text-accent">2</span>
                Tell us what to make
              </h2>
              
              <div className="space-y-6 bg-surface border border-border rounded-xl p-6 md:p-8">
                <div>
                  <label className="block text-sm font-medium mb-2">What needs explaining? *</label>
                  <input 
                    type="text" 
                    name="explaining"
                    required
                    value={formData.explaining}
                    onChange={handleInputChange}
                    placeholder="e.g., How our scheduling software works"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Who is the audience? *</label>
                  <input 
                    type="text" 
                    name="audience"
                    required
                    value={formData.audience}
                    onChange={handleInputChange}
                    placeholder="e.g., Small business owners considering our product"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">What should the viewer understand after watching? *</label>
                  <textarea 
                    name="outcome"
                    required
                    rows={3}
                    value={formData.outcome}
                    onChange={handleInputChange}
                    placeholder="e.g., They should understand the 3 main features and feel confident enough to start a free trial"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Preferred video length *</label>
                  <div className="flex flex-wrap gap-3">
                    {["3-5 min", "5-8 min", "8-10 min"].map(len => (
                      <button
                        key={len}
                        type="button"
                        onClick={() => handleRadioChange("length", len)}
                        className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                          formData.length === len 
                            ? "bg-text-primary text-background border-text-primary" 
                            : "bg-background border-border hover:border-text-secondary"
                        }`}
                      >
                        {len}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Do you have a script or outline? *</label>
                  <div className="flex flex-col gap-3">
                    {["No, write it for me", "Yes, I have a rough outline", "Yes, I have a full script"].map(opt => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input 
                          type="radio" 
                          name="scriptStatus" 
                          value={opt}
                          checked={formData.scriptStatus === opt}
                          onChange={() => handleRadioChange("scriptStatus", opt)}
                          className="w-4 h-4 accent-accent"
                        />
                        <span className="text-sm">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {formData.scriptStatus !== "No, write it for me" && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="pt-2"
                  >
                    <label className="block text-sm font-medium mb-2">Paste your script/outline here</label>
                    <textarea 
                      name="scriptContent"
                      rows={6}
                      value={formData.scriptContent}
                      onChange={handleInputChange}
                      placeholder="Paste text here..."
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your name *</label>
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
                    <label className="block text-sm font-medium mb-2">Company name *</label>
                    <input 
                      type="text" 
                      name="company"
                      required
                      value={formData.company}
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
                    <label className="block text-sm font-medium mb-2">Website</label>
                    <input 
                      type="url" 
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Anything else we should know?</label>
                  <textarea 
                    name="extra"
                    rows={2}
                    value={formData.extra}
                    onChange={handleInputChange}
                    placeholder="Brand guidelines, tone preferences, specific points to cover, etc."
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
              </div>
            </section>
          </FadeUp>

          {/* STEP 3 */}
          <FadeUp delay={0.3}>
            <section>
              <div className="bg-surface border border-border rounded-xl p-6 md:p-8 mb-6">
                <h3 className="text-lg font-medium mb-4 pb-4 border-b border-border">Order Summary</h3>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Selected tier</span>
                    <span className="font-medium">{activeTierDetails.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Delivery</span>
                    <span className="font-medium">{activeTierDetails.delivery}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Revisions</span>
                    <span className="font-medium">{activeTierDetails.revisions}</span>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-border mt-4">
                    <span className="font-medium">Total</span>
                    <span className="text-2xl font-mono text-accent">${activeTierDetails.price}</span>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-background py-4 rounded-lg text-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  Pay ${activeTierDetails.price} &rarr;
                </button>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-text-secondary mb-2">
                  <Lock size={16} />
                  <span className="text-sm font-medium">Secure payment via Stripe</span>
                </div>
                <p className="text-sm text-text-secondary">
                  100% satisfaction guarantee. Not happy? We'll redo it or refund it.
                </p>
              </div>
            </section>
          </FadeUp>
        </form>
      </div>
    </div>
  );
}
