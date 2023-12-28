import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';

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
                  <strong><Trans>Phone 1</Trans>: </strong>
                  {data.site.siteMetadata.contact.phone1}
                  <br />
                  <strong><Trans>Phone 2</Trans>: </strong>
                  {data.site.siteMetadata.contact.phone2}
                  <br />
                  <strong><Trans>Email</Trans>: </strong>{' '}
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
