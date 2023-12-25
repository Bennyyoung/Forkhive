import React from 'react';
import { Link } from 'gatsby';
import SEO from '../../components/SEO/SEO';
import Layout from '../../layouts/index';

const Datascience = () => (
 <Layout bodyClass="page-datascience">
  <SEO title="Datascience, AI and ML Engineer" meta={[]} keywords={[]} />
  <div className="intro">
   <div className="container">
    <Link to="/career" className="button">
     Lets go back
    </Link>
    <div className="col-12">
     <h1>Datascience, AI and ML Engineer</h1>
    </div>
   </div>
  </div>
  <div style={{ textAlign: 'center', marginTop: '-50px', paddingBottom: '-2px' }}>
   <Link to="/datascience-form" className="button">
    APPLY FOR THIS JOB
  </Link>
  </div>

  <div className="container" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
   <p>Forkhive is looking for a Data Scientist to analyze large amounts of raw information to find patterns that will help improve our company. We will rely on you to build data products to extract valuable business insights.

   In this role, you should be highly analytical with a knack for analysis, math and statistics. Critical thinking and problem-solving skills are essential for interpreting data. We also want to see a passion for machine-learning and research.

Your goal will be to help our company analyze trends to make better decisions.</p>

   <div><strong>Requirements and qualifications</strong></div>
   <ul>
    <li>Experience using business intelligence tools (e.g. Tableau and Rapid Miner) and data frameworks (e.g. Hadoop)</li>
    <li>Capable of communicating effectively. We're a small organization; you will be involved in every aspect.</li>
    <li>Proven experience as a Data Scientist or Data Analyst</li>
    <li>Analytical mind and business acumen</li>
    <li>Knowledge of R, SQL and Python; familiarity with Scala, Java or C++ is an asset</li>
    <li>Strong math skills (e.g. statistics, algebra)</li>
    <li>Understanding of machine-learning and operations research</li>
    <li>Problem-solving aptitude</li>
    <li>Excellent communication and presentation skills</li>
    <li>BSc/BA in Computer Science, Engineering or relevant field; graduate degree in Data Science or other quantitative field is preferred</li>

   </ul>

   <div><strong>Developer duties and responsibilities</strong></div>
   <ul>
    <li>Identify valuable data sources and automate collection processes</li>
    <li>Undertake preprocessing of structured and unstructured data</li>
    <li>Analyze large amounts of information to discover trends and patterns</li>
    <li>Build predictive models and machine-learning algorithms</li>
    <li>Combine models through ensemble modeling</li>
    <li>Present information using data visualization techniques</li>
    <li>Propose solutions and strategies to business challenges</li>
    <li>Collaborate with engineering and product development teams</li>
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


export default Datascience;
