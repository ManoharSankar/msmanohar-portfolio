import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Education = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      id="education"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2>Education</h2>
      <p>
        <strong>Bachelor of Engineering (ECE)</strong> – JNTU Anantapur | 2015 | 71%
      </p>
    </motion.section>
  );
};

export default Education;
