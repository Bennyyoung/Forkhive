import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import { Link } from 'gatsby';

const DataScienceForm = props => (
 <Layout bodyClass="page-datascience-form">
  <SEO title="DataScience Developer Form" />
  <div className="intro intro-small">
   <div className="container">
   <Link to="/datascience" className="button">
     Lets go back
    </Link>
    <div className="row">
     <div className="col-12">
      <h1>Datascience Engineer</h1>
     </div>
    </div>
   </div>
  </div>

  <div className="container">
   <div className="row">
   </div><br />
   <div style={{ margin: "0", paddingBottom: '80px' }}>
    <form
     className="container"
     name="datascience-application-form"
     method="post"
     data-netlify="true"
     data-netlify-honeypot="bot-field"
     action="/thank-you"
    >
     <input type="hidden" name="form-name" value="datascience-application-form" />

     <h3 className="mt-4">SUBMIT YOUR APPLICATION</h3>
     <p type="Resume/CV:">
      <input placeholder="ATTACH RESUME/CV" name="resume" type="file" required />
     </p>
     <p type="Full name:">
      <input type="text" required name="name"></input>
     </p>
     <p type="Email:">
      <input type="email" required name="email"></input>
     </p>
     <p type="Phone number:">
      <input type="number" required name="phone"></input>
     </p>
     <p type="Current company">
      <input type="text" required name="org"></input>
     </p>
     <h6><strong>LINKS</strong></h6>
     <p type="LinkedIn URL">
      <input type="url" placeholder="https://example.com" required pattern="^(https?://)?([a-zA-Z0-9]([a-zA-ZäöüÄÖÜ0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$"></input>
     </p>
     <p type="Twitter URL">
      <input type="url" placeholder="https://example.com" required pattern="^(https?://)?([a-zA-Z0-9]([a-zA-ZäöüÄÖÜ0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$" name="Twitter URL"></input>
     </p>
     <p type="GitHub URL">
      <input type="url" placeholder="https://example.com" required pattern="^(https?://)?([a-zA-Z0-9]([a-zA-ZäöüÄÖÜ0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$" name="Github URL"></input>
     </p>
     <p type="Portfolio URL">
      <input type="url" placeholder="https://example.com" required pattern="^(https?://)?([a-zA-Z0-9]([a-zA-ZäöüÄÖÜ0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$" name="Portfolio URL"></input>
     </p>
     <p type="Other website">
      <input type="url" placeholder="https://example.com" required pattern="^(https?://)?([a-zA-Z0-9]([a-zA-ZäöüÄÖÜ0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$" name="Other website"></input>
     </p>
     <h6><strong>ADDITIONAL INFORMATION</strong></h6>
     <p>
      <textarea style={{ width: '100%', height: '300px' }} type="text" placeholder="Add a cover letter or anything else you want to share." name="comment"></textarea>
     </p>
     <button type="submit">SUBMIT APPLICATION</button>
    </form>

   </div>

   <div className="col-8">
    <h4 className="mt-4">Business Hours</h4>
    <table className="table table-sm opening-hours-table table-bordered table-hover">
     <tbody>
      <tr>
       <td className="day font-weight-bold">Monday</td>
       <td className="opens">9:00am - 5:00pm</td>
      </tr>
      <tr>
       <td className="day font-weight-bold">Tuesday</td>
       <td className="opens">9:00am - 5:00pm</td>
      </tr>
      <tr>
       <td className="day font-weight-bold">Wednesday</td>
       <td className="opens">9:00am - 5:00pm</td>
      </tr>
      <tr>
       <td className="day font-weight-bold">Thursday</td>
       <td className="opens">9:00am - 5:00pm</td>
      </tr>
      <tr>
       <td className="day font-weight-bold">Friday</td>
       <td className="opens">9:00am - 5:00pm</td>
      </tr>
      <tr>
       <td className="day font-weight-bold">Saturday</td>
       <td className="opens">12:00pm - 5:00pm</td>
      </tr>
     </tbody>
    </table>
   </div>
  </div>

 </Layout>
);

export default DataScienceForm;
