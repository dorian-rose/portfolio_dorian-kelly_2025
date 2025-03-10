import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-primary shadow-inner py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-primary dark:text-secondary-medium">
              © {new Date().getFullYear()} Dorian Kelly. All rights reserved.
            </p>
            <a
              href="mailto:dorianrkelly@gmail.com"
              className="text-primary dark:text-secondary-medium cursor-pointer flex items-center mt-2"
            >
              <Mail size={16} className="mr-2" /> dorianrkelly@gmail.com
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/dorian-rose"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary dark:text-secondary-medium hover:text-secondary dark:hover:text-secondary-light transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/dorian-kelly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary dark:text-secondary-medium hover:text-secondary dark:hover:text-secondary-light transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
