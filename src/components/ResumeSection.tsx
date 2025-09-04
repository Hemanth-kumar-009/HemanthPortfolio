import { useEffect, useRef, useState } from "react";
import { Download, FileText, Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownload = () => {
    // In a real implementation, this would trigger the actual download
    console.log("Downloading resume...");
  };

  const handlePreview = () => {
    // In a real implementation, this would open the resume in a new tab
    console.log("Opening resume preview...");
  };

  const resumeHighlights = [
    {
      icon: Star,
      text: "Comprehensive project portfolio showcasing technical skills",
    },
    {
      icon: Star,
      text: "Strong academic background in Electronics & Communication",
    },
    {
      icon: Star,
      text: "Hands-on experience with IoT and embedded systems",
    },
    {
      icon: Star,
      text: "Proficiency in multiple programming languages and tools",
    },
  ];

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-secondary/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Download My <span className="text-gradient">Resume</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
              Get a comprehensive overview of my skills, experience, and projects in a professionally formatted document.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Resume Preview Card */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="gradient-card p-8 rounded-xl shadow-custom text-center card-hover">
                <div className="w-24 h-24 gradient-primary rounded-xl mx-auto mb-6 flex items-center justify-center animate-pulse-glow">
                  <FileText className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Professional Resume
                </h3>
                <p className="text-muted-foreground mb-6">
                  A detailed document highlighting my technical skills, educational background, 
                  project experience, and professional achievements.
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleDownload}
                    className="btn-gradient flex-1 sm:flex-none animate-glow"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handlePreview}
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex-1 sm:flex-none"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Quick Preview
                  </Button>
                </div>
              </div>
            </div>

            {/* Resume Highlights */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                What You'll Find Inside
              </h3>
              <div className="space-y-4">
                {resumeHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 transition-all duration-500 ${
                      isVisible ? "animate-fade-in" : ""
                    }`}
                    style={{ animationDelay: `${700 + index * 200}ms` }}
                  >
                    <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <highlight.icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-muted-foreground pt-1">
                      {highlight.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> The resume is regularly updated 
                  with latest projects and achievements. Last updated: December 2024
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="gradient-card p-8 rounded-xl shadow-custom">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Interested in Working Together?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how my skills and passion can contribute to your team's success.
              </p>
              <Button
                className="btn-gradient"
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;