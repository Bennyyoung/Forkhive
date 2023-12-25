import React from 'react';
import { Link } from 'gatsby';
import SEO from '../../components/SEO/SEO';
import Layout from '../../layouts/index';

const UIUX = () => (
 <Layout bodyClass="page-uiux">
  <SEO title="UI UX" meta={[]} keywords={[]} />
  <div className="intro">
   <div className="container">
    <Link to="/career" className="button">
     Lets go back
    </Link>
    <div className="col-12">
     <h1>UI UX</h1>
    </div>
   </div>
  </div>
  <div style={{ textAlign: 'center', marginTop: '-50px', paddingBottom: '-2px' }}>
   <Link to="/uiux-form" className="button">
    APPLY FOR THIS JOB
  </Link>
  </div>

  <div className="container" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
   <p>We are looking for an experienced and creative UI/UX Designer to join our team!

   As an UI-UX Designer , you will be responsible for delivering the best online user experience, which makes your role extremely important for our success and ensuring customer satisfaction and loyalty.

   You will be designing ideas using various methods and latest technology. You will be designing graphic user interface elements, like menus, tabs, forms, and widgets.</p>

   <div><strong>Requirements and qualifications</strong></div>
   <ul>
    <li> 3+ years of experience as an UI-UX Designer or similar role</li>
    <li>UI design portfolio</li>
    <li>Bachelor’s degree in relevant field</li>
    <li>Excellent interpersonal and communication skills</li>
    <li>Ability to discuss and explain design options</li>
    <li>Detail oriented</li>
    <li>Critical thinker</li>
    <li>Knowledge of Adobe range of products including Photoshop, Illustrator, InDesign, Acrobat and Dreamweaver</li>
    <li>3+ years of experience with HTML5 & CSS3</li>
    <li>Some knowledge of Usability Factors in Human Computer Interaction</li>


   </ul>

   <div><strong>Duties and responsibilities</strong></div>
   <ul>
    <li>Communicate with clients to understand their business goals and objectives</li>
    <li>Plan and implement new designs</li>
    <li>Optimize existing user interface designs</li>
    <li>Test for intuitivity and experience</li>
    <li>Develop technical and business requirements and always strive to deliver intuitive and user-centered solutions</li>
    <li>Combine creativity with an awareness of the design elements</li>
    <li>Create prototypes for new product ideas</li>
    <li>Test new ideas before implementing</li>
    <li>Conduct an ongoing user research</li>

   </ul>

   <div><strong>Benefits</strong></div>
   <ul>
    <li>You can work anywhere within Nigeria timezones. Whether it’s your restaurant or your living room, Forkhive gives you the flexibility to work wherever you will be most effective. We travel somewhere new once a quarter so that everyone can meet up in person.</li>
    <li>Feel good about what you do. We believe in solving real problems, working with integrity, and sharing that work (and code) with the team.</li>
    <li>We're stable and capable of focusing on what is best for users without distractions.</li>
   </ul>
   <div>
    <i>Forkhive is an equal opportunity employer. All applicants will be considered for employment regardless of race, color, national origin, religion, sex, age.</i>
   </div>
   <div style={{ textAlign: 'center', margin: '40px 0' }}>
    <Link to="/datascience-form" className="button">
     APPLY FOR THIS JOB
  </Link>
   </div>
  </div>
 </Layout>
);


export default UIUX;
