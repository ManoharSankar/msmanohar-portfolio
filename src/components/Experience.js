import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    role: "AI Cloud Engineer",
    company: "ArcapREIT AI Solutions – Hyderabad",
    period: "Jul 2025 – Present",
    details: [
      "Hands-on exposure to AWS, Docker, Kubernetes, and MLOps workflows.",
      "Cloud-native AI deployments, CI/CD automation, monitoring with Prometheus & Grafana."
    ]
  },
  {
    role: "Software Engineer",
    company: "Manthan (Client: Escalent) – Bangalore",
    period: "Jan 2019 – Jun 2019",
    details: [
      "Designed and managed AWS resources including EC2, S3, RDS, Lambda, ECS, EKS, DynamoDB.",
      "Implemented CI/CD with Jenkins and integrated SonarQube.",
      "Built containerized applications with Docker and deployed on AWS with auto-scaling."
    ]
  },
  {
    role: "Software Engineer",
    company: "dataGridz (Client: Manthan) – Bangalore",
    period: "Dec 2016 – Dec 2018",
    details: [
      "Maintained CI/CD pipelines using Jenkins.",
      "Developed containerized apps with Docker.",
      "Automated infra tasks with Bash scripting.",
      "Managed IAM, VPC, and CloudWatch monitoring."
    ]
  }
];

const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2>Work Experience</h2>
      {experiences.map((exp, idx) => (
        <div key={idx}>
          <h3>{exp.role}</h3>
          <p>
            <strong>{exp.company}</strong> | {exp.period}
          </p>
          <ul>
            {exp.details.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </motion.section>
  );
};

export default Experience;
