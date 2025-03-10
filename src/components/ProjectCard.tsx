import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: {
    frontend?: string;
    backend?: string;
  };
  liveUrl: string;
  delay: number;
  category: string | string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  delay,
  category,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-primary rounded-lg shadow-md overflow-hidden"
    >
      <div className="w-full aspect-video object-cover">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-black dark:text-secondary-light mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-secondary-light dark:bg-primary rounded-md text-xs font-medium border border-primary dark:border-secondary-light"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {category === "Full Stack" || category === "All" ? (
            // fullstack
            <>
              {githubUrl.frontend && (
                <a
                  href={githubUrl.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary dark:text-secondary-light hover:text-secondary dark:hover:text-secondary-medium transition-colors"
                >
                  <Github size={18} className="mr-1" />
                  <span>Front End</span>
                </a>
              )}
              {githubUrl.backend && (
                <a
                  href={githubUrl.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary dark:text-secondary-light hover:text-secondary dark:hover:text-secondary-medium transition-colors"
                >
                  <Github size={18} className="mr-1" />
                  <span>Back End</span>
                </a>
              )}
            </>
          ) : (
            // end fullstack
            <>
              {/* front */}
              {category === "Front End" && (
                <a
                  href={githubUrl.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary dark:text-secondary-light hover:text-secondary dark:hover:text-secondary-medium transition-colors"
                >
                  <Github size={18} className="mr-1" />
                  <span>Code</span>
                </a>
              )}
              {/* back */}
              {category === "Back End" && (
                <a
                  href={githubUrl.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary dark:text-secondary-light hover:text-secondary dark:hover:text-secondary-medium transition-colors"
                >
                  <Github size={18} className="mr-1" />
                  <span>Code</span>
                </a>
              )}
            </>
          )}

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-primary dark:text-secondary-light hover:text-secondary dark:hover:text-secondary-medium transition-colors"
          >
            <ExternalLink size={18} className="mr-1" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
