import React from 'react'
import rapid_miner from '../../images/rapid-miner.jpg'
import techStack from '../../data/techStack';
import "./TechStack.css"
import { Tooltip } from "react-tooltip";

const TechStack = () => {
  return (
    <>
      <h2 className="title-3 text-dark mb-3" style={{ textAlign: "center" }}><strong>Your vision is built with</strong></h2>

      <div className='grid-container'>

        {
          techStack.map((el, index) => (
            <div className={`grid-item grid-item_${index}`}>
              <img src={el.img} alt={el.text.toLowerCase()} />
              <h6><strong>{el.text}</strong></h6>

              <Tooltip
                anchorSelect={`.grid-item_${index}`}
                content={el.content}
                style={{ width: '15rem' }}
              />
            </div>
          ))
        }
        <div className='rapid-miner'>
          <img src={rapid_miner} width="210px" height="68px" />
          <h6><strong>RAPID MINER</strong></h6>
          <Tooltip
                anchorSelect={`.rapid-miner`}
                content={'RapidMiner is a data science platform that provides an integrated environment for end-to-end data science and machine learning processes. It allows users to perform tasks such as data preparation, machine learning modeling, and deployment of predictive models. RapidMiner is designed to be user-friendly, making it accessible to a wide range of users, including data scientists, analysts, and business professionals.'}
                style={{ width: '15rem' }}
              />
        </div>
      </div>
    </>
  )
}

export default TechStack