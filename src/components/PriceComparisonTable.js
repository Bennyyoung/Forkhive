import React from 'react'
import "./PriceComparisonTable.css"
import { Link } from 'gatsby'
import ReactTooltip from "react-tooltip";
// import Tooltip from '@material-ui/core/Tooltip';

function PriceComparisonTable() {
    return (
        <div className="container content">
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Features</th>
                            <th>Basic Plan (Suitable for Budget Applications) - <b>NGN35,000 - NGN75,000 </b></th>
                            <th>Pro Plan (Suitable for Medium to Enterprise Applications) - <b>NGN75,000 and above </b></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><a data-tip data-for="socialMedia">Integration of Social Media (<i class="fa fa-facebook-f"></i> <i class="fa fa-twitter"></i> <i class="fa fa-instagram"></i> <i class="fa fa-whatsapp"></i>)

       <i className="fa fa-question-circle"></i>
                            </a>
                                <ReactTooltip style={{ maxWidth: '95%' }} id="socialMedia" type="success">
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
                                <ReactTooltip style={{ maxWidth: '95%' }} id="ssl_tsl" type="success">
                                    <p style={{ maxWidth: '95%' }}>If your site has a login or accepts<br /> form submissions, HTTPS is essential for <br /> your users’ security and privacy. Google search results<br /> prioritize sites with HTTPS enabled</p>
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
                                    <p>Would you love to create, manage, and modify <br />content on your website without the need for<br /> our specialized technical knowledge</p>
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
                                    <p>Friendly Bloomhub Guides are standing by to answer your questions. Call +234 703 164 2200.</p>
                                </ReactTooltip>
                            </td>
                            <td><i className="fa fa-check"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr>
                            <td><a data-tip data-for="online">Online Appointments and Reminders (Business Working hours) <i className="fa fa-question-circle"></i>
                            </a>
                                <ReactTooltip id="online" type="success">
                                    <p>You can book one-time, recurring appointments, a webinar,<br /> class, workshop, in-person or virtual event directly from <br />your website and Remind customers of their upcoming bookings.</p>
                                </ReactTooltip>
                            </td>
                            <td><i className="fa fa-check">Mon-Fri</i></td>
                            <td><i className="fa fa-check">Mon-Sun</i></td>
                        </tr>

                        <tr>
                            <td><a data-tip data-for="ecommerce">Ecommerce Functionality <i className="fa fa-question-circle"></i>
                            </a>
                                <ReactTooltip id="ecommerce" type="success">
                                    <p>Accept credit card, Paystack, Flutterwave, Interswitch Webpay, Paypal,<br /> Amplify and Remita payments for products/orders. Transaction fees<br /> are dependent on your selected payment processor. We don’t charge <br />additional fees and, with Paystack, offer one of the lowest transaction fees <br />(Local Cards: 1.5% + 100NGN, International Cards: 3.9% + NGN, <br />100 NGN 100 fee is waived for transactions less than NGN 2500) compared <br />to similar ecommerce plans.</p>
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
                                    <p>If someone loads pages of your site on multiple different days,<br /> they will be counted as a unique visitor for each day. If someone<br /> loads pages of your site during multiple different hours, they will <br /> be counted as a unique visitor for each hour. You could be watching <br /> this metric</p>
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
                            <td><b>Price Range</b></td>
                            <td><b>NGN35,000 - NGN75,000 </b>in addition to <b>recurrent costs</b> (<b>Note: </b>Prices are subject to the complexity of the project and nature of the market)</td>
                            <td><b>NGN75,000 and above </b>in addition to <b>recurrent costs</b> (<b>Note: </b>Prices are subject to the complexity of the project and nature of the market)</td>
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
        </div>
    )
}

export default PriceComparisonTable
