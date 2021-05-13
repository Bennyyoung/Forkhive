import React from 'react'
import "./PriceComparisonTable.css"
import { Link } from 'gatsby'
import ReactTooltip from "react-tooltip";
// import Tooltip from '@material-ui/core/Tooltip';

function PriceComparisonTable() {
 return (
  <div className="container content">
   <table className="table table-bordered table-responsive">
    <thead className="thead-dark">
     <tr>
      <th>Features</th>
      <th>Basic (For Personal Use)</th>
      <th>Pro (For Business Use)</th>
     </tr>
    </thead>

    <tbody>6
     <tr>
      <td>Integration of Social Media (<i class="fa fa-facebook-f"></i> <i class="fa fa-twitter"></i> <i class="fa fa-instagram"></i> <i class="fa fa-whatsapp"></i>) <a data-tip data-for="socialMedia">

       <i className="fa fa-question-circle"></i>
      </a>
       <ReactTooltip id="socialMedia" type="success">
        <p>Get found on social media</p>
       </ReactTooltip>
      </td>
      <td><i className="fa fa-check"></i></td>
      <td><i className="fa fa-check"></i></td>
     </tr>

     <tr>
      <td><a data-tip data-for="ssl_tsl">SSL/TLS Certificate
        <i className="fa fa-question-circle"> </i>
      </a>
       <ReactTooltip id="ssl_tsl" type="success">
        <p>If your site has a login or accepts<br /> form submissions, HTTPS is essential for <br /> your users’ security and privacy. Google search results<br /> prioritize sites with HTTPS enabled</p>
       </ReactTooltip>
      </td>
      <td><i className="fa fa-check"></i></td>
      <td><i className="fa fa-check"></i></td>
     </tr>

     <tr>
      <td><a data-tip data-for="fee">Hosting Fee <i className="fa fa-question-circle"></i>
      </a>
       <ReactTooltip id="fee" type="success">
        <p>Hosting fee is free</p>
       </ReactTooltip>
      </td>
      <td><i className="fa fa-check"></i></td>
      <td><i className="fa fa-check"></i></td>
     </tr>

     <tr>
      <td><a data-tip data-for="cms">CMS (Content Management System) <i className="fa fa-question-circle"></i>
      </a>
       <ReactTooltip id="cms" type="success">
        <p>Would you love to create, manage, and modify content on your website<br /> without the need for our specialized technical knowledge</p>
       </ReactTooltip>
      </td>
      <td><i className="fa fa-check"></i></td>
      <td><i className="fa fa-check"></i></td>
     </tr>

     <tr>
      <td><a data-tip data-for="cdr">Custom Domain Registration
        <i className="fa fa-question-circle"></i>
      </a>
       <ReactTooltip id="cdr" type="success">
        <p>Register a custom address like www.YourBusinessOrName.com <br />to your website or online store.</p>
       </ReactTooltip>
      </td>
      <td><i className="fa fa-check"></i></td>
      <td><i className="fa fa-check"></i></td>
     </tr>

     <tr>
      <td><a data-tip data-for="form">Form Submission <i className="fa fa-question-circle"></i>
      </a>
       <ReactTooltip id="form" type="success">
        <p>Netlify build bots do it by parsing your HTML files directly at deploy time, so there’s no need for us to make an API call or include extra JavaScript on your site</p>
       </ReactTooltip>
      </td>
      <td><i className="fa fa-check"></i></td>
      <td><i className="fa fa-check"></i></td>
     </tr>

     <tr>
      <td><a data-tip data-for="support">
       24/7 Support <i className="fa fa-question-circle"></i>
      </a>
       <ReactTooltip id="support" type="success">
        <span>Friendly Bloomhub Guides are standing by to answer your questions. Call +234 703 164 2200.</span>
       </ReactTooltip>
      </td>
      <td><i className="fa fa-check"></i></td>
      <td><i className="fa fa-check"></i></td>
     </tr>

     <tr>
      <td><a data-tip data-for="online">Online Appointments and Reminders (Business Working hours) <i className="fa fa-question-circle"></i>
      </a>
       <ReactTooltip id="online" type="success">
        <span>You can book one-time, recurring appointments, a webinar, class, workshop, in-person or virtual event directly from your website and Remind customers of their upcoming bookings.</span>
       </ReactTooltip>
      </td>
      <td><i className="fa fa-check">Mon-Fri</i></td>
      <td><i className="fa fa-check">Mon-Sun</i></td>
     </tr>

     <tr>
      <td><a data-tip data-for="ecommerce">Ecommerce Functionality <i className="fa fa-question-circle"></i>
      </a>
       <ReactTooltip id="ecommerce" type="success">
        <p>Accept credit card, Paystack, Flutterwave, Interswitch Webpay, Paypal, Amplify and Remita payments for products/orders. Transaction fees are dependent on your selected payment processor. We don’t charge additional fees and, with Paystack, offer one of the lowest transaction fees (Local Cards: 1.5% + 100NGN, International Cards: 3.9% + NGN, 100 NGN 100 fee is waived for transactions less than NGN 2500) compared to similar ecommerce plans.</p>
       </ReactTooltip>
      </td>
      <td><i className="fa fa-remove"></i></td>
      <td><i className="fa fa-check"></i></td>
     </tr>

     <tr>
      <td><a data-tip data-for="database">Database Integration <i className="fa fa-question-circle"></i>
      </a>
       <ReactTooltip id="database" type="success">
        <p>Does your website require database integration let us know</p>
       </ReactTooltip>
      </td>
      <td><i className="fa fa-remove"></i></td>
      <td><i className="fa fa-check"></i></td>
     </tr>

     <tr>
      <td><a data-tip data-for="guidance">Guidance and Analytics <i className="fa fa-question-circle"></i>
      </a>
       <ReactTooltip id="guidance" type="success">
        <p>If someone loads pages of your site on multiple different days, they will be counted as a unique visitor for each day. If someone loads pages of your site during multiple different hours, they will be counted as a unique visitor for each hour. You could be watching this metric</p>
       </ReactTooltip>
      </td>
      <td><i className="fa fa-remove"></i></td>
      <td><i className="fa fa-check"></i></td>
     </tr>

     <tr>
      <td><a data-tip data-for="seo">Search Engine Optimization (SEO) <i className="fa fa-question-circle"></i>
      </a>
       <ReactTooltip id="seo" type="success">
        <p>Get found on Google and other search engines with help Gatsby or Netlify</p>
       </ReactTooltip>
      </td>
      <td><i className="fa fa-remove"></i></td>
      <td><i className="fa fa-check"></i></td>
     </tr>
     <tr>
      <td></td>
      <td>      <div className="call-box-bottom">
       <Link to="/contact" style={{ textDecoration: 'none' }} className="button">
        Try Basic Plan
        </Link>
      </div></td>
      <td>      <div className="call-box-bottom">
       <Link to="/contact" style={{ textDecoration: 'none' }} className="button">
        Try Pro Plan
        </Link>
      </div></td>
     </tr>

    </tbody>
   </table>

  </div>
 )
}

export default PriceComparisonTable
