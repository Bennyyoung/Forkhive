import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Trans, Link } from 'gatsby-plugin-react-i18next';
import diagonalArrow from '../../images/diagonal_arrow.svg'
import whatsapp_color from '../../images/whatsapp_color.svg'
import phone_call from '../../images/phone_call.svg'

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
          <a href={`http://wa.me/${data.site.siteMetadata.contact.phone1}`}>
            {/* {data.site.siteMetadata.contact.phone1} */}
            WhatsApp <img src={whatsapp_color} width={'18rem'} height={'18rem'} />
          </a>
          <br />
          <strong><Trans>Phone 2</Trans>: </strong>
          <a href={`tel:${data.site.siteMetadata.contact.phone2}`}>
            {/* {data.site.siteMetadata.contact.phone2} */}
            Mobile Call <img src={phone_call} width={'18rem'} height={'18rem'} />
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
            <Trans>Get In Touch</Trans>
          </Link><br />
          <Link to='/contact' placeholder={undefined}>
            {/* <img src={diagonalArrow} width={'32rem'} height={'32rem'} style={{ marginLeft: '5rem', marginTop: '0.5rem' }} /> */}

          </Link>
        </div>
      )}
    </div>
  );
}

export default Call