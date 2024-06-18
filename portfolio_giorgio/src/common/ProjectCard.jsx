import React from 'react'
import styles from "../sections/Projects/Projects.module.css"

const ProjectCard = ({src, link, h3}) => {
  return (
    <>
        <a href={link} className={styles.containerLink} target='_blank'>
          <img src={src} alt={`${h3} logo`} />
          <h3>{h3}</h3>
          <p>Streaming App</p>
        </a>
    </>
  )
}

export default ProjectCard