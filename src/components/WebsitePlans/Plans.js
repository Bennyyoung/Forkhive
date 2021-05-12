import React from 'react'
import BasicPlans from './BasicPlans';
import SilverPlans from './SilverPlans';
import PlatinumPlans from './PlatinumPlans';
import { Link } from 'gatsby';

const Plans = () => {
    return (
        <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-4" style={{textAlign: "center"}}><strong>Know what you are paying for</strong></h2>
          </div>
            <BasicPlans />
            <SilverPlans />
            <PlatinumPlans />
            <p style={{textAlign: 'center'}}><Link to="/contact" style={{textDecoration: "none", fontWeight: 'bold'}}>Contact us</Link></p>
        </div>
      </div>
    )
}

export default Plans;