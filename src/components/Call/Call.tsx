import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Trans, Link } from 'gatsby-plugin-react-i18next';

interface Call {
  button: boolean | undefined;
}

const Call: React.FC<Call> = (props) => {
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode)
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
          <strong><Trans>Phone 1</Trans>: </strong>
          <a href={`tel:${data.site.siteMetadata.contact.phone1}`}>
            {data.site.siteMetadata.contact.phone1}
          </a>
          <br />
          <strong><Trans>Phone 2</Trans>: </strong>
          <a href={`tel:${data.site.siteMetadata.contact.phone2}`}>
            {data.site.siteMetadata.contact.phone2}
          </a>
        </div>
        <div className="call-email">
          <strong><Trans>Email</Trans>: </strong>
          <a href={`mailto:${data.site.siteMetadata.contact.email}`}>
            {data.site.siteMetadata.contact.email}
          </a>
        </div>
      </div>
      {props.button && (
        <div className="call-box-bottom">
          <Link to="/contact" className="button" placeholder={undefined}>
            <Trans>Contact</Trans>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Call