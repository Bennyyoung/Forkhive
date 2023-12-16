import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const SubFooter = () => {
const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          contact {
            email
            phone1
            phone2
          }
        }
      }
    }
`)

  return (
    <div className="sub-footer-strip">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sub-footer">
              <ul>
                <li>
                  <strong>Phone1: </strong>
                  {data.site.siteMetadata.contact.phone1}
                  <br />
                  <strong>Phone2: </strong>
                  {data.site.siteMetadata.contact.phone2}
                  <br />
                  <strong>Email: </strong>{' '}
                  <a style={{textDecoration: 'none'}} href={`mailto:${data.site.siteMetadata.contact.email}`}>
                    {data.site.siteMetadata.contact.email}
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  {/* A place to put our child companies link bloom tailor */}
                  {/* <a href="https://www.zerostatic.io">www.zerostatic.io</a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubFooter
