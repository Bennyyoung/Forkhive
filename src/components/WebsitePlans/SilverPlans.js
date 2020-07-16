import React from 'react'
import SilverPlanServices from './SilverPlanServices'
import SilverPayment from './SilverPayment'

const SilverPlans = () => {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
              <h2 className="feature-title">Investment Dashboards - ₦98,500</h2>
                <SilverPlanServices />
                <SilverPayment />
            </div>
        </div>
    )
}

export default SilverPlans