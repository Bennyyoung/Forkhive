import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface Call {
  button: boolean | undefined;
}


const Call: React.FC<Call> = (props) => {
  const darkMode = useSelector((state: RootState) => state.darkMode)
  const data = useStaticQuery(graphql`
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
`)
  return (
    <div className={`call ${darkMode ? 'dark-mode' : ''}`}>
      <div className="call-box-top">
        <div className="call-phone">
          <strong>Phone 1: </strong>
          <a href={`tel:${data.site.siteMetadata.contact.phone1}`}>
            {data.site.siteMetadata.contact.phone1}
          </a>
          <br />
          <strong>Phone 2: </strong>
          <a href={`tel:${data.site.siteMetadata.contact.phone2}`}>
            {data.site.siteMetadata.contact.phone2}
          </a>
        </div>
        <div className="call-email">
          <strong>Email: </strong>
          <a href={`mailto:${data.site.siteMetadata.contact.email}`}>
            {data.site.siteMetadata.contact.email}
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
}

export default Call