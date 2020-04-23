import React from 'react'
import StudentPlanServices from './StudentPlanServices'

const StudentPlans = () => {
    return (
        <div className="col-12 col-md-2 col-lg-4 mb-2">
            <div className="feature">
                <h2 className="feature-title">Student Plan ₦10,000 - ₦25,000</h2>
                <StudentPlanServices />
            </div>
        </div>        
    )
}

export default StudentPlans