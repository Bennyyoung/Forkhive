import React from 'react'
import BasicPlans from './BasicPlans';
import SilverPlans from './SilverPlans';
import PlatinumPlans from './PlatinumPlans';
import { Link } from 'gatsby';
import PriceComparisonTable from '../PriceComparisonTable'

const Plans = () => {
    return (
        <div className="container pt-2">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 mb-4" style={{textAlign: "center"}}><strong>Know what you are paying for</strong></h2>
          </div>
            {/* <BasicPlans />
            <SilverPlans />
            <PlatinumPlans /> */}

            <PriceComparisonTable />
        </div>
      </div>
    )
}

export default Plans;