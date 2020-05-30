import React from 'react'
import StudentPlanServices from './StudentPlanServices'
import StudentPayment from './StudentPayment'

const StudentPlans = () => {
    return (
        <div className="col-12 col-md-2 col-lg-4 mb-2">
            <div className="feature">
                <h2 className="feature-title"><strong>Student Plan ₦11,500</strong></h2>
                <StudentPlanServices />
                <StudentPayment />
            </div>
        </div>        
    )
}

export default StudentPlans