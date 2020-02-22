import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const SubFooter = props => (
  <div className="sub-footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="sub-footer">
            <ul>
              <li>
                <strong>Phone1: </strong>
                {props.data.site.siteMetadata.contact.phone1}
                <br />
                <strong>Phone2: </strong>
                {props.data.site.siteMetadata.contact.phone2}
                <br />
                <strong>Email: </strong>{' '}
                <a href={`mailto:${props.data.site.siteMetadata.contact.email}`}>
                  {props.data.site.siteMetadata.contact.email}
                </a>
              </li>
            </ul>
            <ul>
              <li>
                {/* A place to put our child companies link blom tailor */}
                {/* <a href="https://www.zerostatic.io">www.zerostatic.io</a> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => <SubFooter data={data} />}
  />
);
