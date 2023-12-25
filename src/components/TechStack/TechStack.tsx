import React from 'react'
import rapid_miner from '../../images/rapid-miner.jpg'
import techStack from '../../data/techStack';
import "./TechStack.css"

const TechStack = () => {
  return (
    <>
      <h2 className="title-3 text-dark mb-3" style={{ textAlign: "center" }}><strong>Your vision is built with</strong></h2>

      <div className='grid-container'>

        {
          techStack.map(el => (
            <div className='grid-item'>
              <img src={el.img} alt={el.text.toLowerCase()} />
              <h6><strong>{el.text}</strong></h6>
            </div>
          ))
        }
        <div>
          <img src={rapid_miner} width="210px" height="48px" />
          <h6><strong>RAPID MINER</strong></h6>
        </div>
      </div>
    </>
  )
}

export default TechStack