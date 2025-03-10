import React from "react";
import { motion } from "framer-motion";

interface TechItemProps {
  name: string;
  icon: string;
  delay: number;
}

const TechItem: React.FC<TechItemProps> = ({ name, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-4"
    >
      <div className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 flex items-center justify-center mb-3 bg-white dark:bg-secondary-medium rounded-lg shadow-md">
        <img src={icon} alt={name} className="w-full h-full p-4" />
      </div>
      <span className="text-sm font-medium text-black dark:text-secondary-light">
        {name}
      </span>
    </motion.div>
  );
};

const TechStack: React.FC = () => {
  const technologies = [
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "SASS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      name: "Jest",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
  ];

  return (
    <section className="py-16 bg-secondary-light dark:bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <p className="text-black dark:text-secondary-light max-w-2xl mx-auto">
            I specialize in the MERN stack and work with a variety of modern
            technologies to build robust, scalable applications.
          </p>
        </motion.div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {technologies.map((tech, index) => (
            <TechItem
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
