import React from 'react';
import { PageProps, withPrefix, graphql } from 'gatsby';
import SEO from '../../components/SEO/SEO';
import { Trans } from 'gatsby-plugin-react-i18next';
import { RootState } from '../../redux/store';
import Layout from '../../layouts/index';


import { useSelector } from 'react-redux';
interface IWorks extends PageProps{
  data: {
    allWorksJson: {
      edges: Array<{
      node: {
        id: string;
        category: string,
        date: string
        description: string,
        image: string,
        name: string,
        title: string,
        website: string
      }
    }>
    }
  }
}



const Works: React.FC<IWorks> = (props) => {
  
  const json = props.data.allWorksJson.edges;
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);

  return (
    <Layout bodyClass="our-works">
      <SEO title="Our Works" meta={[]} keywords={[]} />
      <div className="col-12" style={{ padding: '4rem 0 3rem 6rem' }}>
        <h1 style={{ textAlign: "left", color: '#EBA937' }}>Our Works</h1>
        <h5 style={{ textAlign: 'left', wordSpacing: '0.2rem', color: darkMode ? '#fff' : 'initial' }}>
         <Trans> A showcase of our works</Trans>
        </h5>
      </div>

      <div className="container bg-secondary bg-gradient p-2 mb-5 " >
        <div className="row">
        {json.map(edge => (
          <div className="col-md-4 " key={edge.node.id}>
            <div className="work-box">
            <h5 style={{ color: '#EBA937' }}><strong>{edge.node.title}</strong></h5>
            <a href={edge.node.website} style={{ textDecoration: 'none', color: darkMode ? '#fff' : 'black', cursor: 'hover' }}>
              <div className="work-img">
                <img src={withPrefix(edge.node.image)} className="img-fluid " style={{height: '200px'}} alt={`${edge.node.name} Screenshot`} />
              </div>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h5 style={{ color: '#EBA937' }}><strong><Trans>{edge.node.name}</Trans></strong></h5>
                    <div className="more">
                      <p style={{ color: darkMode ? '#fff' : 'white' }}>{edge.node.description}</p>
                      <span className="category">{edge.node.category}</span>
                      <span className="date" style={{ color: darkMode ? '#fff' : 'white' }}> {edge.node.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
          ))}
        </div>
      </div>

      <div className="text-center" style={{ justifyContent: 'center', margin: '3rem' }}>
        <a href="https://linktr.ee/bloomhubng" className="button button-primary mt-2">
          More Works
        </a>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query WorksPageInfo {
    allWorksJson {
      edges{
        node {
          id
          category
          date
          description
          image
          name
          title
          website
        }
      }
    }
}

`

export default Works;
