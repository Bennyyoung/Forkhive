import React from 'react'
import StudentPlans from '../WebsitePlans/StudentPlans';
import SilverPlans from '../WebsitePlans/SilverPlans';
import PlatinumPlans from '../WebsitePlans/PlatinumPlans';

const Plans = () => {
    return (
        <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-4" style={{textAlign: "center"}}><strong>Website Plans</strong></h2>
          </div>
            <StudentPlans />
            <SilverPlans />
            <PlatinumPlans /> 
            <p style={{textAlign: 'center', fontWeight: 'bold'}}><a href = "mailto: softbloom28@gmail.com" style={{textDecoration: "none"}}>Kindly email us your plan</a> </p>
        </div>
      </div>
    )
}

export default Plans;