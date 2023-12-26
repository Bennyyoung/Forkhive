import React from 'react'
// import "./PriceComparisonTable.css"
import { Link } from 'gatsby'
import { Tooltip } from "react-tooltip";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
// import { Tooltip } from '@material-ui/core/Tooltip';


function PriceComparisonTable() {
    const darkMode = useSelector((state: RootState) => state.darkMode)
    return (
        <div className="container content">
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Features</th>
                            <th>Basic Plan (Suitable for Budget Applications) - <b> ₦500,000+ </b></th>
                            <th>Pro Plan (Suitable for Medium to Enterprise Applications) - <b> ₦1million+ </b></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <a className='socialMedia'>
                                    Integration of Social Media (<i className="fa fa-facebook-f"></i> <i className="fa fa-twitter"></i> <i className="fa fa-instagram"></i> <i className="fa fa-whatsapp"></i>)

                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.socialMedia'
                                    content='Get found on social media'
                                    style={{ width: '15rem' }}
                                />
                            </td>
                            <td><i className="fa fa-check"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td>
                                <a className='ssl_tsl'>SSL/TLS Certificate
                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.ssl_tsl'
                                    content='If your site has a login or accepts form submissions, HTTPS is essential for your users’ security and privacy. Google search results prioritize sites with HTTPS enabled'
                                    style={{ width: '15rem' }}
                                />
                            </td>
                            <td><i className="fa fa-check"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr>
                            <td>
                                <a className="fee">Hosting Fee
                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.fee'
                                    content="Hosting fee is free"
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-check"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td>
                                <a className="cms">CMS (Content Management System)
                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.cms'
                                    content="Would you love to create, manage, and modify content on your website without the need for our specialized technical knowledge"
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-check"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr>
                            <td>
                                <a className="cdr">Custom Domain Registration
                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.cdr'
                                    content='Register a custom address like www.YourBusinessOrName.com to your website or online store.'
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-check"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td>
                                <a className="form_">Form Submission
                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.form_'
                                    content='Netlify build bots do it by parsing your HTML files directly at deploy time, so there’s no need for us to make an API call or include extra JavaScript on your site'
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-check"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr>
                            <td>
                                <a className="support">
                                    24/7 Support {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.support'
                                    content='Friendly Forkhive Guides are standing by to answer your questions. Call +234 913 863 6045.'
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-check"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td>
                                <a className="online">Online Appointments and Reminders (Business Working hours) 
                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.online'
                                    content='You can book one-time, recurring appointments, a webinar, class, workshop, in-person or virtual event directly from your website and Remind customers of their upcoming bookings.'
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-check">Mon-Fri</i></td>
                            <td><i className="fa fa-check">Mon-Sun</i></td>
                        </tr>

                        <tr>
                            <td>
                                <a className="ecommerce">Ecommerce Functionality
                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.ecommerce'
                                    content='Accept credit card, Paystack, Flutterwave, Interswitch Webpay, Paypal, Amplify and Remita payments for products/orders. Transaction fees are dependent on your selected payment processor. We don’t charge additional fees and, with Paystack, offer one of the lowest transaction fees (Local Cards: 1.5% + 100NGN, International Cards: 3.9% + NGN, 100 NGN 100 fee is waived for transactions less than NGN 2500) compared to similar ecommerce plans.'
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-remove"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td>
                                <a className="database">Database Integration
                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.database'
                                    content='Does your website require database integration let us know'
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-remove"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr>
                            <td>
                                <a className="guidance">Guidance and Analytics
                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.guidance'
                                    content='If someone loads pages of your site on multiple different days, they will be counted as a unique visitor for each day. If someone loads pages of your site during multiple different hours, they will  be counted as a unique visitor for each hour. You could be watching  this metric'
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-remove"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td>
                                <a className="seo">Search Engine Optimization (SEO)
                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='seo'
                                    content='Get found on Google and other search engines with help Gatsby or Netlify'
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-remove"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>
                        <tr>
                            <td><b>Price Range</b></td>
                            <td><b>₦500,000+ </b>in addition to <b>recurrent costs</b> (<b>Note: </b>Prices are subject to the complexity of the project and nature of the market)</td>
                            <td><b>₦1million+ </b>in addition to <b>recurrent costs</b> (<b>Note: </b>Prices are subject to the complexity of the project and nature of the market)</td>
                        </tr>
                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
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
