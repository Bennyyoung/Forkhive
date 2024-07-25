// import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
// // @ts-ignore
// // import Link from 'gatsby-plugin-transition-link';
// import logo from '../../images/forkhive_logo.jpeg'
// import Socials from '../Socials/Socials';
// import { useTranslation, Trans, Link } from "gatsby-plugin-react-i18next"
// import { useSelector } from 'react-redux';
// import { RootAction, RootState } from '../../redux/store';
// import subfooter_forkhive_logo_dark_bg from '../../images/subfooter_forkhive_logo_dark_bg.jpg'
// import FORKHIVEblack from '../../images/FORKHIVE-black2.png'


// const Footer = () => {
//   const { t } = useTranslation()

//   const darkMode = useSelector((state: RootState) => {
//     return state.darkMode.darkMode
//   });
//   return (
//     <footer className="footer-strip">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className="footer">
//               <Link to="/" placeholder={undefined}>
//                 {<img alt="logo_black_background" src={FORKHIVEblack} style={{ height: '55px', width: '100px' }} />

//                 }
//               </Link>
//               <ul className="footer-menu">
//                 <li>
//                   {' '}
//                   <Link style={{ textDecoration: 'none' }} to="/" placeholder={undefined}><Trans>Home</Trans></Link>
//                 </li>
//                 <li>
//                   {' '}
//                   <Link style={{ textDecoration: 'none' }} to="/contact" placeholder={undefined}><Trans>Contact</Trans></Link>
//                 </li>
//                 <li className="copyright" style={{ fontSize: '13px' }}>
//                   {/* ©{' '}{new Date().getFullYear()}{' '}{data.site.siteMetadata.title}. All rights reserved */}
//                 </li>
//                 <Socials />
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export const query = graphql`
//   query ($language: String!) {
//     locales: allLocale(filter: {language: {eq: $language}}) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `;

// console.log('query', query)

// export default Footer

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import logo from '../../images/forkhive_logo.jpeg';
import Socials from '../Socials/Socials';
import { useTranslation, Trans, Link } from 'gatsby-plugin-react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import subfooter_forkhive_logo_dark_bg from '../../images/subfooter_forkhive_logo_dark_bg.jpg';
import FORKHIVEblack from '../../images/FORKHIVE-black2.png';

const Footer = () => {
  const { t } = useTranslation();

  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);

  return (
    <footer className="footer-strip">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer">
              <Link to="/">
                <img alt="logo_black_background" src={FORKHIVEblack} style={{ height: '55px', width: '100px' }} />
              </Link>
              <ul className="footer-menu">
                <li>
                  <Link style={{ textDecoration: 'none' }} to="/"><Trans>Home</Trans></Link>
                </li>
                <li>
                  <Link style={{ textDecoration: 'none' }} to="/contact"><Trans>Contact</Trans></Link>
                </li>
                <li className="copyright" style={{ fontSize: '13px' }}>
                  {/* © {new Date().getFullYear()} {data.site.siteMetadata.title}. All rights reserved */}
                </li>
                <Socials />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

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

export default Footer;
