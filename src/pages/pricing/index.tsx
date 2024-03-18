import React from 'react';
import SEO from '../../components/SEO/SEO';
import Layout from '../../layouts/index';
import PriceComparisonTable from '../../components/PriceComparisonTable/PriceComparisonTable'
import { Trans } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import './style.css';

const Mernstack = () => (
  <Layout bodyClass="page-pricing">
    <SEO title="Pricing" meta={[]} keywords={[]} />
    <div className='intro intro-small'>
      <div className='container'>
        <div className="col-12">
          <h1 style={{ textAlign: "left", color: '#EBA937' }}><Trans>Pricing</Trans></h1>
          <h5 style={{ textAlign: 'left', wordSpacing: '0.2rem' }}>
            <Trans>Price Comparison Table</Trans>
          </h5>
          <h4 className='pricing'><Trans>Pricing Built For Businesses Of All Sizes</Trans></h4>
        </div>
      </div>
    </div>

    <div className="container" style={{ paddingTop: '2px', paddingBottom: '2px' }}>
      <p className="container">
        <Trans>
          Prior to embarking on the construction of a website for your business, gaining a comprehensive understanding of the associated costs is crucial. This proactive approach ensures that you allocate your budget effectively for the project.
        </Trans>
        <br />
        <br />
        <Trans>
          Contrary to a common misconception among business owners that website development is a one-time endeavor, it's essential to recognize both fixed and recurring costs entailed in establishing and maintaining a business website. This awareness enables you to make informed decisions and facilitates a more sustainable and successful online presence for your business.
        </Trans>
      </p>
      <p className="container"><i><Trans>Dollar rate</Trans>:<strong style={{color: 'red'}}>N1,500 per $USD</strong></i></p>
      <PriceComparisonTable />
    </div>

  </Layout>
);

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;


export default Mernstack;
