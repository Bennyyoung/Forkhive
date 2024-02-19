import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';
import whatsapp_color from "../../images/whatsapp_color.svg"
import phone_call from '../../images/phone_call.svg'


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
                  <br />
                  <strong><Trans>Email</Trans>: </strong>{' '}
                  <a href={`mailto:${data.site.siteMetadata.contact.email}`}>
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
