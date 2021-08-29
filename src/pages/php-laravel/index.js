import React from 'react';
import { Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const PhpLaravelDeveloper = () => (
 <Layout bodyClass="page-php-laravel-developer">
  <SEO title="PHP-LARAVEL Developer" />
  <div className="intro">
   <div className="container">
    <div className="col-12">
     <Link to="/career" className="button">
      Lets go back
  </Link>
     <h1>PHP-LARAVEL Developer</h1>
    </div>
   </div>
  </div>
  <div style={{ textAlign: 'center', marginTop: '-50px', paddingBottom: '-2px' }}>
   <Link to="/php-laravel-form" className="button">
    APPLY FOR THIS JOB
  </Link>
  </div>

  <div className="container" style={{ paddingTop: '2px', paddingBottom: '2px' }}>
   <p>Bloomhub is hiring Php-Laravel developers to help clients products. If you care about code quality as much as you care about user privacy, you should fit right in. This role is an opportunity to have an immediate impact while working closely with a talented team to solve challenging problems and ship new features to millions of users.</p>

   <div><strong>Developer job description</strong></div>
   <p>We are looking for an experienced top-notch full-stack developer to grow with our dev team. As a PHP-LARAVEL Developer, you will be involved from conception to completion with projects that are technologically sound and aesthetically impressive
   </p>

   <div><strong>Requirements and qualifications</strong></div>
   <ul>
    <li>B.S Degree in Computer Science</li>
    <li>Experience with JavaScript</li>
    <li>Experience with HTML / CSS</li>
    <li>Experience with PHP Laravel Framework</li>
    <li>Experience with REST API's</li>
    <li>Git knowledge is a plus</li>
    <li>Team player</li>
    <li>Good time-management skills</li>
    <li>Great interpersonal and communication skills</li>

   </ul>

   <div><strong>Developer duties and responsibilities</strong></div>
   <ul>
    <li>Responsible for development of new highly-responsive, web-based user interface</li>
    <li>Construct visualizations that are able to depict vast amounts of data</li>
    <li>Experience with HTML / CSS</li>
    <li>Experience with PHP-LARAVEL</li>
    <li>Experience with REST API's</li>
    <li>Work and collaborate with the rest of the engineering team</li>
    <li>Work with product team and graphic designers</li>
    <li>Learn and understand user interactions</li>
    <li>Great interpersonal and communication skills</li>
    <li>Develop a flexible and well-structured front-end architecture, along with the APIs to support it</li>
   </ul>

   <div><strong>Benefits</strong></div>
   <ul>
    <li>You can work anywhere within Nigeria timezones. Whether it’s your restaurant or your living room, Bloomhub gives you the flexibility to work wherever you will be most effective. We travel somewhere new once a quarter so that everyone can meet up in person.</li>
    <li>Feel good about what you do. We believe in solving real problems, working with integrity, and sharing that work (and code) with the team.</li>
    <li>We're stable and capable of focusing on what is best for users without distractions.</li>
   </ul>
   <div>
    <i>Bloomhub is an equal opportunity employer. All applicants will be considered for employment regardless of race, color, national origin, religion, sex, age.</i>
   </div>

   <div style={{ textAlign: 'center', margin: '40px 0'}}>
    <Link to="/php-laravel-form" className="button">
     APPLY FOR THIS JOB
  </Link>
   </div>
  </div>

 </Layout>
);


export default PhpLaravelDeveloper;
