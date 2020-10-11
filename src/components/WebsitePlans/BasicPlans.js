import React from 'react'
import BasicPlanServices from './BasicPlanServices'
import BasicPayment from './BasicPayment'

const BasicPlans = () => {
    return (
        <div className="col-12 col-md-2 col-lg-4 mb-2">
            <div className="feature">
                <h2 className="feature-title"><strong>Student - ₦43,500</strong></h2>
                <BasicPlanServices />
                <BasicPayment />
            </div>
        </div>        
    )
}

export default BasicPlans