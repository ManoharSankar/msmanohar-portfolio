import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "CI/CD Pipeline for React App",
    description: "Built an automated pipeline using Jenkins and Docker. Integrated GitHub for source control and deployed to AWS EC2. Configured monitoring with Prometheus & Grafana.",
    github: "https://github.com/ManoharSankar",
    demo: "#"
  },
  {
    title: "Cloud Infrastructure Automation",
    description: "Implemented Terraform scripts for AWS infrastructure automation including EC2, S3, VPC, and EKS deployment.",
    github: "https://github.com/ManoharSankar",
    demo: "#"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map((project, idx) => (
        <AnimatedCard key={idx} project={project} />
      ))}
    </div>
  </section>
);

const AnimatedCard = ({ project }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
      </div>
    </motion.div>
  );
};

export default Projects;
