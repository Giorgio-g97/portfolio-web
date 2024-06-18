import React from 'react'

const SkillCard = ({skillIcon, p}) => {
  return (
    <>
        <span>
            {skillIcon}
            <p>{p}</p>
        </span>
    </>
  )
}

export default SkillCard