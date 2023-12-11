import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const Call = props => (
  <div className="call">
    <div className="call-box-top">
      <div className="call-phone">
        <strong>Phone 1: </strong>
        <a href={`tel:${props.data.site.siteMetadata.contact.phone}`}>
        {props.data.site.siteMetadata.contact.phone1}
        </a>
        <br />
        <strong>Phone 2: </strong>
        <a href={`tel:${props.data.site.siteMetadata.contact.phone}`}>
        {props.data.site.siteMetadata.contact.phone2}
        </a>
      </div>
      <div className="call-email">
        <strong>Email: </strong>
        <a href={`mailto:${props.data.site.siteMetadata.contact.email}`}>
          {props.data.site.siteMetadata.contact.email}
        </a>
      </div>
    </div>
    {props.button && (
      <div className="call-box-bottom">
        <Link to="/contact" className="button">
          Contact
        </Link>
      </div>
    )}
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            contact {
              email
              phone1
              phone2
            }
          }
        }
      }
    `}
    render={data => <Call button={props.button} data={data} />}
  />
);
