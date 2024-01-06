import React from 'react'
import rapid_miner from '../../images/rapid-miner.jpg'
import techStack from '../../data/techStack';
import "./TechStack.css"
import { Tooltip } from "react-tooltip";
import { Trans } from 'gatsby-plugin-react-i18next';

const TechStack = () => {
  return (
    <>
      <h2 className="title-3 mb-3" style={{ textAlign: "center" }}><strong><Trans>Your vision is built with</Trans></strong></h2>

      <div className='grid-container'>

        {
          techStack.map((el, index) => (
            <div key={`grid-item_${index}`} className={`grid-item grid-item_${index}`}>
              <img src={el.img} alt={el.text.toLowerCase()} />
              <h6><strong>{el.text}</strong></h6>

              <Tooltip
                anchorSelect={`.grid-item_${index}`}
                // @ts-ignore
                content={<Trans>{el.content}</Trans>}
                style={{ width: '25rem' }}
              />
            </div>
          ))
        }
        <div className='rapid-miner'>
          <img src={rapid_miner} width="190px" height="60px" />
          <h6><strong>RAPID MINER</strong></h6>
          <Tooltip
                anchorSelect={`.rapid-miner`}
                // @ts-ignore
                content={<Trans>RapidMiner is a data science platform that provides an integrated environment for end-to-end data science and machine learning processes. It allows users to perform tasks such as data preparation, machine learning modeling, and deployment of predictive models. RapidMiner is designed to be user-friendly, making it accessible to a wide range of users, including data scientists, analysts, and business professionals.</Trans>}
                style={{ width: '25rem' }}
              />
        </div>
      </div>
    </>
  )
}

export default TechStack