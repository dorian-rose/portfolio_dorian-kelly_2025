import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { experience } from "../assets/data/experience";
import { education } from "../assets/data/education";
import dorian from "../assets/dorian.png";

const About: React.FC = () => {
  // const education = [
  //   {
  //     degree: "Master of Computer Science",
  //     institution: "Stanford University",
  //     period: "2018 - 2020",
  //     description:
  //       "Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.",
  //   },
  //   {
  //     degree: "Bachelor of Science in Computer Science",
  //     institution: "University of California, Berkeley",
  //     period: "2014 - 2018",
  //     description:
  //       "Focused on web development and database systems. Participated in multiple hackathons.",
  //   },
  // ];

  // const experience = [
  //   {
  //     position: "Senior Full Stack Developer",
  //     company: "Tech Innovations Inc.",
  //     period: "2021 - Present",
  //     description:
  //       "Lead developer for multiple web applications using the MERN stack. Implemented CI/CD pipelines and mentored junior developers.",
  //     achievements: [
  //       "Reduced application load time by 40% through code optimization",
  //       "Implemented microservices architecture that improved scalability",
  //       "Led a team of 5 developers to deliver projects on time and within budget",
  //     ],
  //   },
  //   {
  //     position: "Full Stack Developer",
  //     company: "Digital Solutions LLC",
  //     period: "2018 - 2021",
  //     description:
  //       "Developed and maintained web applications for clients in various industries. Worked with React, Node.js, and MongoDB.",
  //     achievements: [
  //       "Built an e-commerce platform that increased client sales by 25%",
  //       "Implemented responsive designs that improved mobile user engagement by 35%",
  //       "Integrated payment gateways and third-party APIs for enhanced functionality",
  //     ],
  //   },
  //   {
  //     position: "Web Development Intern",
  //     company: "StartUp Ventures",
  //     period: "2017 - 2018",
  //     description:
  //       "Assisted in the development of web applications and learned industry best practices.",
  //     achievements: [
  //       "Contributed to the front-end development of a social media dashboard",
  //       "Learned and implemented responsive design principles",
  //       "Participated in code reviews and agile development processes",
  //     ],
  //   },
  // ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* About Me Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-3xl font-bold mb-8 text-center">About Me</h1>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={dorian}
                  alt="Alex Developer"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">
                Dorian Kelly - Developer
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I am a passionate fullstack developer with professional
                experience delivering high-quality, user-focused web solutions.
                With a strong technical foundation in JavaScript, MongoDB, SQL,
                Express.js, React.js, and Node.js, I have successfully developed
                both front-end and back-end components of diverse applications.
                I am eager to further my career in the tech industry by tackling
                new challenges and expanding my skillset.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                In addition to my technical expertise, I bring eight years of
                experience in project coordination and stakeholder relations
                across various sectors. This diverse background has honed my
                problem-solving skills, adaptability, and ability to collaborate
                effectively within cross-functional teams.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                As a self-motivated and hard-working professional, I am
                enthusiastic about continuous learning and personal growth as a
                developer. I am eager to take on exciting and challenging
                projects that will push my boundaries and contribute to my
                professional development. If you are seeking someone with my
                profile, please feel free to <a href="/contact">reach out</a>. I
                am excited to connect and explore potential opportunities
                together.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <Briefcase className="mr-2" /> Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.position}</h3>
                    <p className="text-contrast dark:text-contrast">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    {job.period}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {job.description}
                </p>
                {job.achievements && (
                  <div>
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <GraduationCap className="mr-2" /> Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-contrast dark:text-contrast">
                      {edu.institution}
                    </p>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    {edu.period}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
