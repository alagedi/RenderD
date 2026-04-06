import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Youtube, Linkedin, Twitter } from "lucide-react";
import { cn } from "../lib/utils";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Work", path: "/work" },
    { name: "Pricing", path: "/pricing" },
    { name: "Order", path: "/order" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary">
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
          isScrolled || !isHome || mobileMenuOpen
            ? "bg-[#0A0A0A]/90 backdrop-blur-md border-border py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold tracking-tight text-text-primary z-50">
            RenderD
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/order"
              className="bg-accent hover:bg-accent-hover text-background px-5 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-text-primary z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-2xl font-medium text-text-primary border-b border-border pb-4"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/order"
              className="bg-accent text-background text-center py-4 rounded-lg text-lg font-medium mt-4"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-background border-t border-border py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} RenderD
          </div>
          
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 text-text-secondary">
            <a href="#" className="hover:text-text-primary transition-colors">
              <Youtube size={20} />
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-6 text-center md:text-left text-sm text-text-secondary">
          <a href="mailto:hello@renderd.co" className="hover:text-text-primary transition-colors">
            hello@renderd.co
          </a>
        </div>
      </footer>
    </div>
  );
}
