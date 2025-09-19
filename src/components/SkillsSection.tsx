import { useEffect, useRef, useState } from "react";
import { Code, Cpu, Database, Wrench } from "lucide-react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
const technicalSkills = [
  { name: "Python", level: 80, icon: Code },
  { name: "C Programming", level: 60, icon: Code },
  { name: "MATLAB (Simulink, Image Processing)", level: 75, icon: Database },
  { name: "Arduino Programming", level: 90, icon: Cpu },
  { name: "IoT Development (Wokwi, Simulations)", level: 85, icon: Wrench },
  { name: "Embedded Systems Design", level: 80, icon: Cpu },
  { name: "Power BI (Data Modeling, DAX, Reports)", level: 70, icon: Database },
];

const softSkills = [
  { name: "Problem-Solving", level: 90 },
  { name: "Teamwork & Collaboration", level: 85 },
  { name: "Effective Communication", level: 80 },
  { name: "Leadership & Coordination", level: 75 },
  { name: "Analytical Thinking", level: 88 },
  { name: "Adaptability & Flexibility", level: 85 },
];


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay progress bar animation
          setTimeout(() => setAnimateProgress(true), 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const ProgressBar = ({ skill, index, showProgress }: { skill: any, index: number, showProgress: boolean }) => (
    <div
      className={`transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          {skill.icon && <skill.icon className="w-4 h-4 text-primary" />}
          <span className="font-medium text-foreground">{skill.name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <div
          className="h-full gradient-primary rounded-full transition-all duration-1000 ease-out"
          style={{
            width: showProgress ? `${skill.level}%` : "0%",
            transitionDelay: `${index * 150}ms`,
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 gradient-hero"
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
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
              A blend of technical expertise and soft skills that drive innovation and collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="gradient-card p-8 rounded-xl shadow-custom">
                <h3 className="text-2xl font-semibold mb-8 text-center">
                  <Code className="w-6 h-6 inline mr-2 text-primary" />
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <ProgressBar
                      key={skill.name}
                      skill={skill}
                      index={index}
                      showProgress={animateProgress}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="gradient-card p-8 rounded-xl shadow-custom">
                <h3 className="text-2xl font-semibold mb-8 text-center">
                  <Wrench className="w-6 h-6 inline mr-2 text-primary" />
                  Soft Skills
                </h3>
                <div className="space-y-6">
                  {softSkills.map((skill, index) => (
                    <ProgressBar
                      key={skill.name}
                      skill={skill}
                      index={index + technicalSkills.length}
                      showProgress={animateProgress}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
