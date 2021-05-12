import React from 'react';
import { Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';



const ReactNative = () => (
 <Layout bodyClass="page-react-native">
  <SEO title="React Native Developer" />
  <div className="intro">
   <div className="container">
    <div className="col-12">
     <Link to="/career" className="button">
      Lets go back
  </Link>
     <h1>React Native Developer</h1>
    </div>
   </div>
  </div>
  <div style={{ textAlign: 'center', marginTop: '-50px', paddingBottom: '-2px' }}>
   <Link to="/react-native-form" className="button">
    APPLY FOR THIS JOB
  </Link>
  </div>

  <div className="container" style={{ paddingTop: '2px', paddingBottom: '2px' }}>
   <p>Bloomhub is hiring React Native developers to help make private communication simple. If you care about code quality as much as you care about user privacy, you should fit right in. This role is an opportunity to have an immediate impact while working closely with a talented team to solve challenging problems and ship new features to millions of users.</p>

   <div><strong>Developer job description</strong></div>
   <p>We are looking for a React Native developer interested in building performant mobile apps on both the iOS and Android platforms. You will be responsible for architecting and building these applications, as well as coordinating with the teams responsible for other layers of the product infrastructure. Building a product is a highly collaborative effort, and as such, a strong team player with a commitment to perfection is required
   </p>

   <div><strong>Requirements and qualifications</strong></div>
   <ul>
    <li>Firm grasp of the JavaScript <strong>and TypeScript or ClojureScript</strong> language and its nuances, including ES6+ syntax</li>
    <li>Knowledge of <strong>functional or object- oriented</strong> programming</li>
    <li>Ability to write well-documented, clean Javascript code</li>
    <li>Rock solid at working with third-party dependencies and debugging dependency conflicts</li>
    <li>Familiarity with native build tools, like XCode, Gradle <strong>Android Studio, IntelliJ</strong></li>
    <li>Understanding of REST APIs, the document request model, and offline storage</li>
    <li>Experience with automated testing suites, like <strong>Jest or Mocha </strong></li>
   </ul>

   <div><strong>Developer duties and responsibilities</strong></div>
   <ul>
    <li>Build pixel-perfect, buttery smooth UIs across both mobile platforms.</li>
    <li>Leverage native APIs for deep integrations with both platforms.</li>
    <li>Experience with HTML / CSS</li>
    <li>Experience with REST API's</li>
    <li>Diagnose and fix bugs and performance bottlenecks for performance that feels native.</li>
    <li>Reach out to the open source community to encourage and help implement mission-critical software fixes—React Native moves fast and often breaks things.</li>
    <li>Maintain code and write automated tests to ensure the product is of the highest quality.</li>
    <li>Transition existing React web apps to React Native.</li>
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

   <div style={{ textAlign: 'center', margin: '40px 0' }}>
    <Link to="/react-native-form" className="button">
     APPLY FOR THIS JOB
  </Link>
   </div>
  </div>

 </Layout>
);


export default ReactNative;