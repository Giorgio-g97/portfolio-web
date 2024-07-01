import React from 'react'
import styles from "../sections/Projects/Projects.module.css"
import {motion} from "framer-motion"

const ProjectCard = ({src, link, liveLink, h3, isInView}) => {

  const projectItem = {
    start: { y: 20, opacity: 0 },
    end: { y: isInView ? 0 : 20, opacity: isInView ? 1 : 0, transition: { duration: 0.3 }}
  }

  return (
    <>
        <motion.a
          href={link}
          className={styles.containerLink} target='_blank'
          variants={projectItem}
        >
          <img src={src} alt={`${h3} logo`} />
          <h3>{h3}</h3>
          <div>
            <motion.a
            href={liveLink}
            initial={{scale: 1}}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            transition={{duration: 0.3}}
            >Streaming App</motion.a> {/* mettere icona */}
            <motion.a 
            href={link}
            initial={{scale: 1}}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            transition={{duration: 0.3}}
            >Github Code</motion.a> {/* mettere icona */}
          </div>
        </motion.a>
    </>
  )
}

export default ProjectCard