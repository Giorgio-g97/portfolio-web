import React from 'react'
import styles from "./Projects.module.css"
import TodoList from "../../assets/project-1.png"
import BilingsSite from "../../assets/project-2.png"
import ProjectCard from '../../common/ProjectCard'

const Projects = () => {
  return (
    <>
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard 
                    src={TodoList}
                    link="https://github.com/Giorgio-g97/todolist-react"
                    h3="TodoList App"
                />
                <ProjectCard
                  src={BilingsSite}
                  link="https://github.com/Giorgio-g97/billings-project"
                  h3="Billings Method Website"
                />
            </div>
        </section>
    </>
  )
}

export default Projects
