import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isaMenuOpen, setIsaMenuOpen] = useState(false);
  const [isScrolled, setisScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setisScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 tasnsition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          AG<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            size="sm"
            onClick={() => {
              window.location.hash = "#contact";
            }}
          >
            Contact Me
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => {
            console.log();
            
            setIsaMenuOpen(false); // action 1
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" }); // action 2
          }}
          className="md:hidden p-2 cursor-pointer text-foreground z-50"
        >
          {isaMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isaMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="glass rounded-2xl p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsaMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2 transition"
              >
                {link.label}
              </a>
            ))}

            <Button
              onClick={() => {
                setIsaMenuOpen(false);
                window.location.hash = "#contact";
              }}
              size="sm"
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
