import React from 'react'
import PlatinumPlanServices from './PlatinumPlanServices'
import PlatinumPayment from './PlatinumPayment'

const PlatinumPlans = () => {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
              <h2 className="feature-title">Dashboard with analytics - ₦152,500</h2>
                    <PlatinumPlanServices />
                    <PlatinumPayment />
              </div>
            </div>
    )
}

export default PlatinumPlans;