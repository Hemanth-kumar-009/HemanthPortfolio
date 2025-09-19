import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Smartphone, Database, Wrench, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: "IoT-Based Agriculture Monitoring System",
      description: "A smart agriculture project for monitoring soil moisture, pH levels, and environmental conditions.",
      fullDescription:
        "Developed using Arduino and IoT simulations, this project monitors soil health parameters to support precision farming. Implemented on Wokwi for virtual hardware simulation, with efficient water usage insights and automated alerts.",
      technologies: ["Arduino", "IoT", "C Programming", "Wokwi"],
      icon: Wrench,
      category: "IoT & Embedded",
      status: "Completed",
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Embedded Weather Station",
      description: "Wireless weather monitoring system with real-time data logging capabilities.",
      fullDescription:
        "Designed an embedded system with sensors to measure temperature, humidity, and pressure. Features include wireless data transmission, local storage, and real-time monitoring for environmental analysis.",
      technologies: ["C", "Embedded C", "Sensors", "Wireless Communication"],
      icon: Cpu,
      category: "Embedded Systems",
      status: "Completed",
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Fruit Sorting using Image Processing",
      description: "A Python-based virtual project that classifies and sorts fruits based on color features.",
      fullDescription:
        "Implemented with Python and OpenCV, this project applies image processing techniques to detect and classify fruits virtually. Showcases feature extraction, color-based classification, and automation in sorting applications.",
      technologies: ["Python", "OpenCV", "Image Processing"],
      icon: Smartphone,
      category: "Machine Learning & Image Processing",
      status: "Completed",
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "MATLAB Simulations",
      description: "Hands-on simulation projects in MATLAB covering Onramp, Simulink, and Image Processing.",
      fullDescription:
        "Explored MATLAB Onramp, Simulink modeling, and Image Processing applications to strengthen theoretical and simulation knowledge. Projects included signal processing, control system analysis, and feature extraction experiments.",
      technologies: ["MATLAB", "Simulink", "Image Processing"],
      icon: Database,
      category: "Simulation & Modeling",
      status: "Completed",
      github: "#",
      demo: "#",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (projectId: number) => {
    setSelectedProject(selectedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my technical projects spanning IoT, embedded systems,
              simulations, and image processing.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              const isExpanded = selectedProject === project.id;

              return (
                <div
                  key={project.id}
                  className={`transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`gradient-card rounded-xl shadow-custom overflow-hidden cursor-pointer card-hover transition-all duration-300 ${
                      isExpanded ? "shadow-glow scale-[1.02]" : ""
                    }`}
                    onClick={() => handleCardClick(project.id)}
                    aria-expanded={isExpanded}
                  >
                    {/* Card Header */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">
                              {project.title}
                            </h3>
                            <span className="text-sm text-muted-foreground">
                              {project.category}
                            </span>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === "Completed"
                              ? "bg-success/20 text-success"
                              : "bg-warning/20 text-warning"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {isExpanded ? project.fullDescription : project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="px-6 pb-6 animate-fade-in">
                        <div className="flex space-x-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full hover:bg-primary hover:text-primary-foreground"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </Button>
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            <Button size="sm" className="w-full btn-gradient">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* View More Projects Button */}
          <div
            className={`text-center mt-12 transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

