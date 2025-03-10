import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { allProjects } from "../assets/data/allProjects";

const Projects: React.FC = () => {
  // const allProjects = [
  //   {
  //     title: "E-Commerce Platform",
  //     description:
  //       "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
  //     image:
  //       "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  //     technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
  //     githubUrl: "https://github.com",
  //     liveUrl: "https://example.com",
  //     category: "Full Stack",
  //   },
  //   {
  //     title: "Task Management App",
  //     description:
  //       "A collaborative task management application with real-time updates and team collaboration features.",
  //     image:
  //       "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  //     technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
  //     githubUrl: "https://github.com",
  //     liveUrl: "https://example.com",
  //     category: "Front End",
  //   },
  //   {
  //     title: "Weather Dashboard",
  //     description:
  //       "A weather dashboard that displays current and forecasted weather data for multiple locations.",
  //     image:
  //       "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  //     technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
  //     githubUrl: "https://github.com",
  //     liveUrl: "https://example.com",
  //     category: "Front End",
  //   },
  //   {
  //     title: "Blog Platform",
  //     description:
  //       "A content management system for creating and managing blog posts with user authentication.",
  //     image:
  //       "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  //     technologies: ["Next.js", "MongoDB", "Tailwind CSS", "NextAuth.js"],
  //     githubUrl: "https://github.com",
  //     liveUrl: "https://example.com",
  //     category: "Full Stack",
  //   },
  //   {
  //     title: "Fitness Tracker",
  //     description:
  //       "An application to track workouts, set goals, and visualize progress over time.",
  //     image:
  //       "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  //     technologies: ["React Native", "Redux", "Node.js", "Express", "MongoDB"],
  //     githubUrl: "https://github.com",
  //     liveUrl: "https://example.com",
  //     category: "Mobile",
  //   },
  //   {
  //     title: "Recipe API",
  //     description:
  //       "A RESTful API for managing and sharing recipes with user authentication and authorization.",
  //     image:
  //       "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  //     technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
  //     githubUrl: "https://github.com",
  //     liveUrl: "https://example.com",
  //     category: "Back End",
  //   },
  // ];

  const categories = ["All", "Front End", "Back End", "Full Stack"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((project) =>
          project.category.includes(activeCategory)
        );

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold mb-4">My Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Browse through my portfolio of projects showcasing my skills in web
            development, from responsive front-end designs to robust back-end
            systems.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                activeCategory === cat
                  ? "bg-contrast text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              category={activeCategory}
              delay={index}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found in this category. Please check back later!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
