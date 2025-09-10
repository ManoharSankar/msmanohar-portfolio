import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2>About Me</h2>
      <p>
        DevOps & AI Cloud Engineer with 2.9 years of experience in automating, deploying,
        and maintaining cloud-native applications. Skilled in CI/CD, containerization,
        orchestration, cloud infrastructure (AWS), and monitoring (Prometheus, Grafana).
      </p>
      <p>
        <strong>Email:</strong> manoharsankar93@gmail.com | <strong>Phone:</strong> 9902199518
      </p>
      <p>
        <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/msmanohar" target="_blank">linkedin.com/in/msmanohar</a> | <strong>GitHub:</strong> <a href="https://github.com/ManoharSankar" target="_blank">github.com/ManoharSankar</a>
      </p>
    </motion.section>
  );
};

export default About;
