import { useEffect, useRef, useState } from "react";
import { GraduationCap, Heart, Target } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech in Electronics & Communication Engineering",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "IoT, Embedded Systems, and Innovation",
    },
    {
      icon: Target,
      title: "Goal",
      description: "Building smart solutions for real-world problems",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Text */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Hello! I'm an aspiring engineer passionate about technology.
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Currently pursuing my B.Tech in Electronics & Communication Engineering,
                  I'm deeply fascinated by the intersection of hardware and software in
                  creating intelligent systems.
                </p>
                <p>
                  My journey in technology began with curiosity about how devices communicate
                  and has evolved into a passion for IoT and embedded systems. I love
                  exploring how we can make everyday objects smarter and more connected.
                </p>
                <p>
                  When I'm not studying or working on projects, I enjoy learning new
                  programming languages, experimenting with Arduino and microcontrollers,
                  and staying updated with the latest in technology trends.
                </p>
                <p>
                  I'm also expanding my skills into software development, recognizing
                  the importance of full-stack capabilities in today's tech landscape.
                </p>
              </div>
            </div>

            {/* Highlights Cards */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="space-y-6">
                {highlights.map(({ icon: Icon, title, description }, index) => (
                  <div
                    key={title}
                    className={`gradient-card p-6 rounded-xl shadow-custom card-hover transition-all duration-500 ${
                      isVisible ? "animate-scale-up" : ""
                    }`}
                    style={{ animationDelay: `${800 + index * 200}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-foreground">
                          {title}
                        </h4>
                        <p className="text-muted-foreground">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;