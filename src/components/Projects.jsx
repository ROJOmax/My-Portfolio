import React from "react";
import admin_p from "../assets/admin-dashboard.png";
import article_p from "../assets/article-card.jpg";
import manage_p from "../assets/manage-landing-page.jpg";
import mortgage_p from "../assets/mortgage-calculator.jpg";
import { motion } from "framer-motion";
import { div, image } from "framer-motion/client";

const projectData = [
  {
    image: admin_p,
    title: "Admin Dashboard",
    description:
      "User-friendly dashboard for a project management platform, featuring intuitive navigation, project tracking, and community updates.",
    technologies: ["HTML", "CSS"],
  },

  {
    image: article_p,
    title: "Article Card",
    description:
      "Article preview app with responsive design, social media sharing via a clickable icon, and interactive hover states. Built with minimal JavaScript.",
    technologies: ["HTML", "CSS", "JS"],
  },

  {
    image: manage_p,
    title: "Manage Landing Page",
    description:
      "Responsive landing page with a horizontal testimonial slider, newsletter sign-up with input validation, and interactive hover/focus states. Built with custom tools.",
    technologies: ["HTML", "CSS", "JS"],
  },

  {
    image: mortgage_p,
    title: "Mortgage Calculator",
    description:
      "Mortgage repayment calculator with dynamic input, monthly/total repayment display, form validation, keyboard navigation, responsive design, and interactive hover/focus states.",
    technologies: ["HTML", "CSS", "JS"],
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col justify-center items-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full m-w-[1000px] flex-col gap-16 text-white">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
