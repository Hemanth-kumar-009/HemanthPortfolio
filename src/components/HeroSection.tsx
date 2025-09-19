import { useEffect, useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-secondary/20 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-accent/20 rounded-full animate-float delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div
            className={`mb-8 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            <div className="relative inline-block">
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-primary/20 animate-pulse-glow">
                <img
                  src={heroPortrait}
                  alt="Profile"
                  className="w-full h-full object-cover object-center scale-125"
                  style={{ objectPosition: '50% 25%' }}
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20"></div>
            </div>
          </div>

          {/* Main Heading */}
          <div
            className={`mb-6 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="text-gradient">Polavaram  Hemanth Kumar</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
              Electronics & Communication Engineering Student
            </h2>
          </div>

          {/* Tagline */}
          <div
            className={`mb-8 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about IoT, Embedded Systems, and innovative technology solutions.
              Building the future one circuit at a time.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`mb-12 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Button className="btn-interactive">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button
              className="btn-interactive bg-gradient-to-r from-accent via-primary to-secondary"
              onClick={() => scrollToNext()}
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center space-x-6 transition-all duration-1000 delay-1100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Mail, label: "Email", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-card shadow-custom hover:shadow-glow transition-all duration-300 hover:scale-110 animate-bounce-subtle"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNext}
          className="animate-bounce-subtle p-2 rounded-full hover:bg-primary/10 transition-colors"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
