import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const certifications = [
  "CKA – Certified Kubernetes Administrator – KodeKloud (Feb’ 2025)",
  "DevOps Program – GUVI | HCL (Jul’ 2024 – Oct’ 2024)",
  "DevOps Program – Hey DevOps (Nov’ 2023 – Jul’ 2024)",
  "AWS Certified Solutions Architect – Associate (Apr’ 2023)"
];

const Certifications = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      id="certifications"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2>Certifications</h2>
      <ul>
        {certifications.map((cert, idx) => (
          <li key={idx}>{cert}</li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Certifications;
