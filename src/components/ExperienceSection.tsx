import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Award, BookOpen } from "lucide-react";

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const timelineItems = [
    {
      id: 1,
      type: "education",
      title: "B.Tech in Electronics & Communication Engineering",
      organization: "Your University Name",
      location: "City, State",
      period: "2021 - 2025",
      description: "Pursuing comprehensive education in ECE with focus on digital signal processing, communication systems, and embedded technologies.",
      highlights: ["Relevant Coursework: Digital Electronics, Microprocessors, Communication Systems", "CGPA: 8.5/10 (Current)"],
      icon: BookOpen,
    },
    {
      id: 2,
      type: "certification",
      title: "IoT Development Certification",
      organization: "Tech Institute",
      location: "Online",
      period: "2023",
      description: "Comprehensive certification covering IoT architecture, sensor integration, and cloud connectivity.",
      highlights: ["Hands-on projects with Arduino and ESP32", "Cloud integration with AWS IoT"],
      icon: Award,
    },
    {
      id: 3,
      type: "internship",
      title: "Electronics Intern",
      organization: "Tech Company Name",
      location: "City, State",
      period: "Summer 2023",
      description: "Gained practical experience in embedded systems development and IoT project implementation.",
      highlights: ["Worked on sensor data acquisition systems", "Developed firmware for microcontrollers"],
      icon: Calendar,
    },
    {
      id: 4,
      type: "certification",
      title: "Power BI Data Analytics",
      organization: "Microsoft",
      location: "Online",
      period: "2023",
      description: "Earned certification in business intelligence and data visualization using Microsoft Power BI.",
      highlights: ["Advanced DAX functions", "Dashboard design and optimization"],
      icon: Award,
    },
  ];

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

  const getTypeColor = (type: string) => {
    switch (type) {
      case "education":
        return "text-primary bg-primary/10";
      case "internship":
        return "text-secondary bg-secondary/10";
      case "certification":
        return "text-accent bg-accent/10";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "education":
        return BookOpen;
      case "internship":
        return Calendar;
      case "certification":
        return Award;
      default:
        return Calendar;
    }
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 gradient-hero"
    >
      <div className="container mx-auto px-4">
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
              Experience & <span className="text-gradient">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
              My academic journey and professional experiences that shaped my technical expertise.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent"></div>

            <div className="space-y-12">
              {timelineItems.map((item, index) => {
                const IconComponent = getTypeIcon(item.type);
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={item.id}
                    className={`relative transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 300}ms` }}
                  >
                    <div className={`md:flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                      {/* Content Card */}
                      <div className={`md:w-5/12 ml-16 md:ml-0 ${isEven ? "" : "md:mr-0"}`}>
                        <div className="gradient-card p-6 rounded-xl shadow-custom card-hover">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-foreground mb-2">
                                {item.title}
                              </h3>
                              <p className="text-primary font-medium mb-1">
                                {item.organization}
                              </p>
                              <div className="flex items-center text-muted-foreground text-sm space-x-4">
                                <span className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {item.period}
                                </span>
                                <span className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {item.location}
                                </span>
                              </div>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getTypeColor(item.type)}`}>
                              {item.type}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground mb-4">
                            {item.description}
                          </p>

                          {/* Highlights */}
                          {item.highlights && (
                            <ul className="space-y-2">
                              {item.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-muted-foreground">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>

                      {/* Timeline Icon */}
                      <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 gradient-primary rounded-full flex items-center justify-center shadow-glow z-10">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>

                      {/* Spacer for desktop */}
                      <div className="hidden md:block w-5/12"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;