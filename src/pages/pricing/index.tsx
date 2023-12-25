import React from 'react';
import { Link } from 'gatsby';
import SEO from '../../components/SEO/SEO';
import Layout from '../../layouts/index';
import PriceComparisonTable from '../../components/PriceComparisonTable/PriceComparisonTable'

const Mernstack = () => (
    <Layout bodyClass="page-pricing">
        <SEO title="Pricing" meta={[]} keywords={[]} />
        <div className='intro intro-small'>
            <div className='container'>
                <div className="col-12">
                    <h1 style={{ textAlign: "left", color: '#EBA937' }}>Pricing</h1>
                    <h5 style={{ textAlign: 'left', wordSpacing: '0.2rem' }}>
                        Price comparison Table
                    </h5>
                    <h4 style={{ textAlign: "center" }}><strong>Pricing Built For Businesses Of All Sizes</strong></h4>
                </div>
            </div>
        </div>

        <div className="container" style={{ paddingTop: '2px', paddingBottom: '2px' }}>
            <p>Before building a website for your business, it is important to know the costs involved. This will ensure you budget adequately for the project. Some business owners think building a website is a one-off thing. You just build it and you go to sleep. However, there are fixed costs and recurrent costs involved in building a business website.</p>
            <PriceComparisonTable />
        </div>

    </Layout>
);


export default Mernstack;
