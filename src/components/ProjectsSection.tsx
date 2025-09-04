import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Code, BarChart3, Smartphone, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: "Digital Resume Builder",
      description: "A web application that allows users to create professional resumes with customizable templates and real-time preview.",
      fullDescription: "Built with React and TypeScript, this application features drag-and-drop functionality, multiple template options, PDF export, and responsive design. Includes user authentication and cloud storage for resume data.",
      technologies: ["React", "TypeScript", "CSS", "PDF.js"],
      icon: Code,
      category: "Web Development",
      status: "Completed",
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "IoT Home Automation System",
      description: "Smart home solution using Arduino and IoT sensors for automated lighting, temperature control, and security monitoring.",
      fullDescription: "An end-to-end IoT solution featuring multiple sensors, real-time data monitoring, mobile app control, and automated responses. Implemented using Arduino, ESP32, and cloud integration for remote monitoring.",
      technologies: ["Arduino", "C++", "IoT", "ESP32", "Firebase"],
      icon: Smartphone,
      category: "IoT & Embedded",
      status: "In Progress",
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      description: "Interactive Power BI dashboard for analyzing student performance data with dynamic visualizations and insights.",
      fullDescription: "Comprehensive analytics solution processing large datasets to generate actionable insights. Features include interactive charts, filtering capabilities, automated reporting, and predictive analytics models.",
      technologies: ["Power BI", "SQL", "Python", "Data Analysis"],
      icon: BarChart3,
      category: "Data Analytics",
      status: "Completed",
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Embedded Weather Station",
      description: "Wireless weather monitoring system with multiple sensors and real-time data logging capabilities.",
      fullDescription: "Professional weather station built with embedded systems, featuring temperature, humidity, pressure, and wind sensors. Includes wireless data transmission, local storage, and web-based monitoring interface.",
      technologies: ["C", "Embedded C", "Sensors", "Wireless Communication"],
      icon: Database,
      category: "Embedded Systems",
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
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my technical projects spanning web development, IoT, embedded systems, and data analytics.
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
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`gradient-card rounded-xl shadow-custom overflow-hidden cursor-pointer card-hover transition-all duration-300 ${
                      isExpanded ? "shadow-glow scale-[1.02]" : ""
                    }`}
                    onClick={() => handleCardClick(project.id)}
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
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 hover:bg-primary hover:text-primary-foreground"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                          <Button
                            size="sm"
                            className="flex-1 btn-gradient"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
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
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;