import React, { useRef } from 'react'
import styles from "./Projects.module.css"
import TodoList from "../../assets/project-1.png"
import BilingsSite from "../../assets/project-2.png"
import ProjectCard from '../../common/ProjectCard'
import {motion, useInView} from "framer-motion"

const Projects = () => {

  const ref = useRef();
  const isInView = useInView(ref);

  const projectsContainer = {
    start: {
      scale: 0,
      y: 20
    },
    end: {
      scale: 1,
      y: isInView ? 0 : 20,
      transition: {
        delayChildren: isInView ? 0.3 : 0,
        staggerChildren: isInView ? 0.1 : 0,
      }
    }
  }
  return (
    <>
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <motion.div 
              className={styles.projectsContainer}
              ref={ref}
              variants={projectsContainer}
              initial="start"
              animate="end"  
            >
                <ProjectCard
                    isInView={isInView} 
                    src={TodoList}
                    link="https://github.com/Giorgio-g97/todolist-react"
                    liveLink="https://todolist-react-giorgio.netlify.app/"
                    h3="TodoList App"
                />
                <ProjectCard
                  isInView={isInView}
                  src={BilingsSite}
                  liveLink="https://billings-project.netlify.app/"
                  link="https://github.com/Giorgio-g97/billings-project"
                  h3="Billings Method Website"
                />
            </motion.div>
        </section>
    </>
  )
}

export default Projects
