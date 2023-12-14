import React from 'react';
import { Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const TeamManager = () => (
 <Layout bodyClass="page-teammanager">
  <SEO title="Team Manager" meta={[]} keywords={[]} />
  <div className="intro">
   <div className="container">
    <Link to="/career" className="button">
     Lets go back
    </Link>
    <div className="col-12">
     <h1>Team Manager</h1>
    </div>
   </div>
  </div>
  <div style={{ textAlign: 'center', marginTop: '-50px', paddingBottom: '-2px' }}>
   <Link to="/teammanager-form" className="button">
    APPLY FOR THIS JOB
  </Link>
  </div>

  <div className="container" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
   <p>Forkhive is looking for a qualified team leader to manage our team and provide effective guidance. You will be responsible for supervising, managing and motivating team members on a daily basis.

   As a team leader, you will be the contact point for all team members, so your communication skills should be excellent. You should also be able to act proactively to ensure smooth team operations and effective collaboration.

   Ultimately, you should lead by setting a good example and engage the team to achieve goals.</p>

   <div><strong>Requirements and qualifications</strong></div>
   <ul>
    <li>Proven work experience as a team leader or supervisor.</li>
    <li>In-depth knowledge of performance metrics.</li>
    <li>Good PC skills, especially MS Excel.</li>
    <li>Excellent communication and leadership skills.</li>
    <li>Organizational and time-management skills.</li>
    <li>Strong math skills (e.g. statistics, algebra)</li>
    <li>Decision-making skills.</li>
    <li>Degree in Management or training in team leading is a plus.</li>

   </ul>

   <div><strong>Duties and responsibilities</strong></div>
   <ul>
    <li>Create an inspiring team environment with an open communication culture</li>
    <li>Set clear team goals</li>
    <li>Delegate tasks and set deadlines</li>
    <li>Oversee day-to-day operation</li>
    <li>Monitor team performance and report on metrics</li>
    <li>Motivate team members</li>
    <li>Listen to team members’ feedback and resolve any issues or conflicts</li>
    <li>Recognize high performance and reward accomplishments</li>
    <li>Encourage creativity and risk-taking</li>
    <li>Suggest and organize team building activities</li>

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


export default TeamManager;
