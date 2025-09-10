import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  "Jenkins", "GitHub Actions", "AWS (EC2, S3, RDS, Lambda, ECS, EKS, etc.)",
  "Docker", "Kubernetes", "Helm", "Argocd", "Terraform", "CloudFormation",
  "Prometheus", "Grafana", "CloudWatch", "Git", "Python", "Shell Scripting"
];

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2>Core Competencies</h2>
      <ul className="skills-list">
        {skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
      </ul>
    </motion.section>
  );
};

export default Skills;
