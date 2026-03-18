// Tech.jsx
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div className="w-full text-center py-10">
        <h2 className={`${styles.sectionHeadText} md:!text-[72px] sm:!text-[60px] xs:!text-[50px] !text-[40px]`}>Technologies</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div className="sm:w-36 w-28 h-28 sm:h-36" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
