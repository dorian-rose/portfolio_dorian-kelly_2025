import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProjects } from "../assets/data/featuredProjects";
import TechStack from "../components/TechStack";
import ProjectCard from "../components/ProjectCard";
import dorian from "../assets/dorian.png";

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="text-contrast dark:text-contrast">Dorian</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Full Stack Developer
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg">
                I build responsive, user-friendly web applications with modern
                technologies. Specializing in the MERN stack, I create seamless
                experiences from front-end to back-end.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/projects"
                  className="bg-contrast text-white border border-contrast font-medium py-2 px-6 rounded-md hover:bg-white hover:text-contrast dark:text-gray-900 dark:hover:text-contrast dark:hover:bg-gray-800 transition-colors duration-300"
                >
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className="border border-contrast text-contrast dark:border-contrast dark:text-contrast hover:bg-contrast hover:text-white dark:hover:bg-gray-800 font-medium py-2 px-6 rounded-md transition-colors duration-300"
                >
                  Contact Me
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                  <img
                    src={dorian}
                    alt="Dorian Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
                  <div className="bg-contrast text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold">
                    5+
                  </div>
                </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              expertise in full-stack development.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                category={"All"}
                delay={index}
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center text-contrast dark:text-contrast hover:text-contrast dark:hover:text-contrast font-medium"
            >
              View all projects
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
