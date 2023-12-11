import React from 'react';
import { Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const UIUX = () => (
 <Layout bodyClass="page-projectmanager">
  <SEO title="UI UX" />
  <div className="intro">
   <div className="container">
    <Link to="/career" className="button">
     Lets go back
    </Link>
    <div className="col-12">
     <h1>Project Manager</h1>
    </div>
   </div>
  </div>
  <div style={{ textAlign: 'center', marginTop: '-50px', paddingBottom: '-2px' }}>
   <Link to="/projectmanager-form" className="button">
    APPLY FOR THIS JOB
  </Link>
  </div>

  <div className="container" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
   <p>We are looking for an experienced Project Manager who would be responsible for planning, overseeing and leading projects from ideation through to completion. This is a senior role at the organisation and requires interaction with a range of internal and external stakeholders, most often managing several moving project parts simultaneously.</p>

   <div><strong>Requirements and qualifications</strong></div>
   <ul>
    <li> 5+ years of experience in Engineering,
    IT or Computer Science,
    Business or Business Administration
Management</li>
    <li>Written and verbal communication skills</li>
    <li>Capacity to manage high stress situations</li>
    <li>Ability to multi-task and manage various project elements simultaneously</li>
    <li>Big-picture thinking and vision</li>
    <li>Detail oriented</li>
    <li>Attention to detail</li>
    <li>Conflict resolution skills</li>
   </ul>

   <div><strong>Duties and responsibilities</strong></div>
   <ul>
    <li>Leading project planning sessions</li>
    <li>Coordinating staff and internal resources</li>
    <li>Managing project progress and adapt work as required</li>
    <li>Ensuring projects meet deadlines</li>
    <li>Managing relationships with clients and stakeholders</li>
    <li>Designing and signing off on contracts</li>
    <li>Overseeing all incoming and outgoing project documentation</li>
    <li>Participating in tender process i.e. design, submission and review</li>
    <li>Conducting project review and creating detailed reports for executive staff</li>
    <li>Optimising and improving processes and the overall approach where necessary</li>
    <li>Securing growth opportunities and initiating new projects</li>
    <li>Managing large and diverse teams</li>
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
