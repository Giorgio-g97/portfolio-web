import React from 'react'
import {motion} from "framer-motion"

const SkillCard = ({skillIcon, p, isInView}) => {

  //uso variants di Framer Motion
  const skillItem = {
    start: { y: 20, opacity: 0 },
    end: { y: isInView ? 0 : 20, opacity:isInView ? 1 : 0, transition: { duration: 0.3} }
}

  return (
    <>
        <motion.span
          variants={skillItem}
        >
            {skillIcon}
            <p>{p}</p>
        </motion.span>
    </>
  )
}

export default SkillCard