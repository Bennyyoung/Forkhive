import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';
import './index.css'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Contact = props => (
 <Layout bodyClass="page-contact">
  <SEO title="Contact" />
  <div className="intro intro-small">
   <div className="container">
    <div className="row">
     <div className="col-12">
      <h1>Contact</h1>
     </div>
    </div>
   </div>
  </div>

  <div className="container">
   <div className="row">
    <div className="col-12" style={{ paddingBottom: '20px' }}>
     <Call button={false} />
    </div>
   </div><br />
   <div style={{ margin: "0", paddingBottom: '80px' }}>
    <form
     name="contact-form"
     method="post"
     data-netlify="true"
     data-netlify-honeypot="bot-field"
     data-netlify-recaptcha="true"
     action="/thank-you"
     autocomplete="on"
    >
     <h3 className="mt-4">Send Us A Message</h3>
     <p type="Full name:">
      <input placeholder="Write your name here.." type="text" required name="full name"></input>
     </p>
     <p type="Email:">
      <input placeholder="Let us know how to contact you back.." type="email" required name="email"></input>
     </p>
     <p type="Phone number:">
      <input placeholder="Let us talk eg. +234 805 782 6599.." type="number" required name="phone"></input>
     </p>
     <p type="Message:">
      <textarea style={{ width: '100%', height: '300px' }} type="text" placeholder="What would you like to tell us.." required name="message"></textarea>
     </p>
     <div data-netlify-recaptcha="true"></div>

     <button type="submit">Send Message</button>
    </form>

   </div>

   <div className="col-8">
    <h4 className="mt-4">Business Hours</h4>
    <table className="table table-sm opening-hours-table">
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

export default Contact;
