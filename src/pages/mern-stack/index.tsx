import React from 'react';
import { Link } from 'gatsby';
import SEO from '../../components/SEO/SEO';
import Layout from '../../layouts/index';

const Mernstack = () => (
 <Layout bodyClass="page-mern-stack">
  <SEO title="React Native Developer" meta={[]} keywords={[]} />
  <div className="intro">
   <div className="container">
    <div className="col-12">
     <Link to="/career" className="button">
      Lets go back
  </Link>
     <h1>Mern/Mean stack Developer</h1>
    </div>
   </div>
  </div>
  <div style={{ textAlign: 'center', marginTop: '-50px', paddingBottom: '-2px' }}>
   <Link to="/mernstack-form" className="button">
    APPLY FOR THIS JOB
  </Link>
  </div>

  <div className="container" style={{ paddingTop: '2px', paddingBottom: '2px' }}>
   <p>Forkhive is hiring Mern/Mean stack developers to help make private communication simple. If you care about code quality as much as you care about user privacy, you should fit right in. This role is an opportunity to have an immediate impact while working closely with a talented team to solve challenging problems and ship new features to millions of users.</p>

   <div><strong>Developer job description</strong></div>
   <p>We are looking for a Mern stack developer interested in building performant mobile apps on both the iOS and Android platforms. You will be responsible for architecting and building these applications, as well as coordinating with the teams responsible for other layers of the product infrastructure. Building a product is a highly collaborative effort, and as such, a strong team player with a commitment to perfection is required
   </p>

   <div><strong>Requirements</strong></div>
   <ul><li>Fluent knowledge of latest HTML/CSS standards and best practices</li><li>Working knowledge of React and AngularJS</li><li>Working knowledge of Node.js and Express</li><li>Solid Understanding of HTTP protocol and how server-side code is processed on the client</li><li>Some experience with Photoshop or Sketch is a plus (creating sprites, optimizing, cutting or adjusting images)</li><li>Working knowledge of front end optimization and performance techniques</li><li>Obsession with lean, clean and organized front-end code</li><li>Cross-browser development and troubleshooting</li><li>Experience building Responsive websites for web, tablet and mobile devices</li><li>Eye for details is crucial</li><li>Able to handle multiple projects and competing deadlines</li><li>Good understanding of overall web design including basic usability, accessibility, industry standards, architecture, and navigation</li><li>Portfolio of work required. Include examples of all areas of interaction design (user flows, wireframes, final graphical display)</li></ul>

   <div><strong>Qualifications</strong></div>
   <ul><li>2-3 years minimum in creating complex HTML based solutions</li><li>Detail oriented experience as a Web Developer creating Angular based solutions</li><li>1-2 years with Node.js and Express</li><li>Ability to work both independently and in collaborative teams to communicate design and build ideas effectively</li><li>Experience using asynchronous RESTful services (JSON)</li></ul>

   <div><strong>Developer duties and responsibilities</strong></div>
   <ul>
    <li>Ability to translate Wireframes and PSD Designs into functional web apps using HTML5, AngularJS, React , Node.js, and Mongo</li>
    <li>Binding of UI elements to JavaScript object models</li>
    <li>Creating RESTful services with Node.js</li>
    <li>Architect scalable web architectures</li>
    <li>Work in a cross-functional team to deliver a complete user experience</li>
    <li>Create Unit and Integration tests to ensure the quality of code</li>
    <li>Be responsive to change requests and feature requests</li>
    <li>Write code that is cross-platform and cross-device compatible</li>
    <li>Ability to wear many hats and learn new technologies quickly</li>
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
    <Link to="/mernstack-form" className="button">
     APPLY FOR THIS JOB
  </Link>
   </div>
  </div>

 </Layout>
);


export default Mernstack;
