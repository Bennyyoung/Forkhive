import React from 'react'
// import "./PriceComparisonTable.css"
import { Link } from 'gatsby'
import { Tooltip } from "react-tooltip";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Trans } from 'gatsby-plugin-react-i18next';


function PriceComparisonTable() {
    const darkMode = useSelector((state: RootState) => state.darkMode.darkMode)
    return (
        <div className="container mb-9 content">
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th><Trans>Features</Trans></th>
                            <th><Trans>Basic Plan (Budget Applications)</Trans><b> <br />$167 - $580 = ₦300,000 - ₦870,000 </b></th>
                            <th><Trans>Pro Plan</Trans><b> <br />$580 - $1,526 = ₦870,000 - ₦2,289,000 </b></th>
                            <th><Trans>Enterprise Plan</Trans><b> <br />$1,526 - $2,772 = ₦2,289,000 - ₦4,158,000 </b></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><Trans></Trans></td>
                            <td><Trans>4-6 months</Trans></td>
                            <td><Trans>3-4 months</Trans></td>
                            <td><Trans>2-3 months</Trans></td>
                        </tr>
                        <tr>
                            <td>
                                <a className='socialMedia'>
                                    <Trans>Developers Fee (3 or 5 or 7)</Trans>

                                    {/* {' '}<i className="fa fa-question-circle"></i> */}
                                </a>
                                <Tooltip
                                    anchorSelect='.socialMedia'
                                    // @ts-ignore
                                    content={<Trans>Get found on social media</Trans>}
                                    style={{ width: '15rem' }}
                                />
                            </td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}$167/Developer</td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}$267/Developer</td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}$367/Developer</td>
                        </tr>
                        <tr>
                            <td>
                                <a className='socialMedia'>
                                    <Trans>Integration of Social Media</Trans> (<i className="fa fa-facebook-f"></i> <i className="fa fa-twitter"></i> <i className="fa fa-instagram"></i> <i className="fa fa-whatsapp"></i>)

                                    {/* {' '}<i className="fa fa-question-circle"></i> */}
                                </a>
                                <Tooltip
                                    anchorSelect='.socialMedia'
                                    // @ts-ignore
                                    content={<Trans>Get found on social media</Trans>}
                                    style={{ width: '15rem' }}
                                />
                            </td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}$5</td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}$5</td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}$5</td>
                        </tr>

                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td>
                                <a className='ssl_tsl'><Trans>SSL/TLS Certificate</Trans>
                                    {/* {' '}<i className="fa fa-question-circle"></i> */}
                                </a>
                                <Tooltip
                                    anchorSelect='.ssl_tsl'
                                    // @ts-ignore
                                    content={<Trans>If your site has a login or accepts form submissions, HTTPS is essential for your users’ security and privacy. Google search results prioritize sites with HTTPS enabled</Trans>}
                                    style={{ width: '15rem' }}
                                />
                            </td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}</td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i></td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i></td>
                        </tr>

                        <tr>
                            <td>
                                <a className="fee"><Trans>Hosting Fee</Trans>
                                    {/* {' '}<i className="fa fa-question-circle"></i> */}
                                </a>
                                <Tooltip
                                    anchorSelect='.fee'
                                    // @ts-ignore
                                    content={<Trans>Hosting fee is free</Trans>}
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}</td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i></td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i></td>
                        </tr>

                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td>
                                <a className="cms"><Trans>CMS (Content Management System)</Trans>
                                    {/* {' '}<i className="fa fa-question-circle"></i> */}
                                </a>
                                <Tooltip
                                    anchorSelect='.cms'
                                    // @ts-ignore
                                    content={<Trans>Would you love to create, manage, and modify content on your website without the need for our specialized technical knowledge</Trans>}
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}Your choice</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                        <tr>
                            <td>
                                <a className="cdr"><Trans>Domain Registration/Renewal/Maintenance</Trans>
                                    {/* {' '}<i className="fa fa-question-circle"></i> */}
                                </a>
                                <Tooltip
                                    anchorSelect='.cdr'
                                    // @ts-ignore
                                    content={<Trans>Register a custom address like www.YourBusinessOrName.com to your website or online store</Trans>}
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}$50/yr</td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}$50/yr</td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}$50/yr</td>
                        </tr>

                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td>
                                <a className="form_"><Trans>Form Submission</Trans>
                                    {/* {' '}<i className="fa fa-question-circle"></i> */}
                                </a>
                                <Tooltip
                                    anchorSelect='.form_'
                                    // @ts-ignore
                                    content={<Trans>Netlify build bots do it by parsing your HTML files directly at deploy time, so there’s no need for us to make an API call or include extra JavaScript on your site</Trans>}
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}$12/yr</td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}$12/yr</td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}$12/yr</td>
                        </tr>

                        <tr>
                            <td>
                                <a className="support">
                                    {/* <Trans>12/5 or 24/7 Support</Trans> {' '}<i className="fa fa-question-circle"></i> */}
                                </a>
                                <Tooltip
                                    anchorSelect='.support'
                                    // @ts-ignore
                                    content={<Trans>Friendly Forkhive Guides are standing by to answer your questions. Call +234 913 863 6045</Trans>}
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}$12/yr</td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}$24/yr</td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}$36/yr</td>
                        </tr>

                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td>
                                <a className="online"><Trans>Online Appointments and Reminders (Business Working hours)</Trans>
                                    {/* {' '}<i className="fa fa-question-circle"></i> */}
                                </a>
                                <Tooltip
                                    anchorSelect='.online'
                                    // @ts-ignore
                                    content={<Trans>You can book one-time, recurring appointments, a webinar, class, workshop, in-person or virtual event directly from your website and Remind customers of their upcoming bookings</Trans>}
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}><Trans>Mon-Fri</Trans></i>{' '}</td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}><Trans>Mon-Sun</Trans></i></td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}><Trans>Mon-Sun</Trans></i></td>
                        </tr>

                        <tr>
                            <td>
                                <a className="ecommerce"><Trans>Ecommerce Functionality</Trans>
                                    {/* {' '}<i className="fa fa-question-circle"></i> */}
                                </a>
                                <Tooltip
                                    anchorSelect='.ecommerce'
                                    // @ts-ignore
                                    content={<Trans>Accept credit card, Paystack, Flutterwave, Interswitch Webpay, Paypal, Amplify and Remita payments for products/orders. Transaction fees are dependent on your selected payment processor. We don’t charge additional fees and, with Paystack, offer one of the lowest transaction fees (Local Cards: 1.5% + 100NGN, International Cards: 3.9% + NGN, 100 NGN 100 fee is waived for transactions less than NGN 2500) compared to similar ecommerce plans</Trans>}
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-remove"></i></td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i></td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i></td>
                        </tr>

                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td>
                                <a className="database"><Trans>Database Integration</Trans>
                                    {/* {' '}<i className="fa fa-question-circle"></i> */}
                                </a>
                                <Tooltip
                                    anchorSelect='.database'
                                    //@ts-ignore
                                    content={<Trans>Does your website require database integration let us know</Trans>}
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-remove"></i></td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}<Trans>512MB to 5GB of storage</Trans></td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}<Trans>Up to 1TB of storage</Trans></td>
                        </tr>

                        <tr>
                            <td>
                                <a className="guidance"><Trans>Guidance and Analytics</Trans>
                                    {/* {' '}<i className="fa fa-question-circle"></i> */}
                                </a>
                                <Tooltip
                                    anchorSelect='.guidance'
                                    // @ts-ignore
                                    content={<Trans>If someone loads pages of your site on multiple different days, they will be counted as a unique visitor for each day. If someone loads pages of your site during multiple different hours, they will  be counted as a unique visitor for each hour. You could be watching  this metric</Trans>}
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-remove"></i></td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>$50</td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>$50</td>
                        </tr>

                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td>
                                <a className="seo"><Trans>Search Engine Optimization (SEO)</Trans>
                                    {/* {' '}<i className="fa fa-question-circle"></i> */}
                                </a>
                                <Tooltip
                                    anchorSelect='.seo'
                                    // @ts-ignore
                                    content={<Trans>Get found on Google and other search engines with help Gatsby or Netlify</Trans>}
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-remove"></i></td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}$50</td>
                            <td><i className={`fa fa-check ${darkMode ? 'dark-mode' : ''}`}></i>{' '}$50</td>
                        </tr>
                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td>
                                <a className="seo"><Trans>Examples</Trans>
                                </a>
                            </td>
                            <td>
                                <Trans>Simple E-commerce Store, Personal Blog, Budget Tracker, Event Management App, To-Do List App
                                </Trans>
                            </td>
                            <td>
                                <Trans>Social Networking App, Advanced E-commerce Store, Health & Fitness App, Food Delivery App, Travel Booking App
                                </Trans>
                            </td>
                            <td>
                                <Trans>Comprehensive CRM System, Enterprise Resource Planning (ERP) System, Marketplace Platform, Custom Healthcare Solution, Fintech Application
                                </Trans>
                            </td>
                        </tr>
                        <tr>
                            <td><b><Trans>Price Range</Trans></b></td>
                            <td>
                                <b><Trans>Cost Details</Trans>:</b> <Trans>Starting at $580 = ₦870,000 with additional recurrent costs.</Trans> {' '}

                                <span style={{ color: 'red', fontStyle: 'italic' }}>
                                    (<b><Trans>Please note</Trans>:</b> <Trans>Prices may vary based on the project's complexity and market dynamics.</Trans>)
                                </span>
                            </td>


                            <td>
                                <b><Trans>Cost Details</Trans>: </b><Trans>Starting at $1,526 = ₦2,289,000 with additional recurrent costs.</Trans> {' '}

                                <span style={{ color: 'red', fontStyle: 'italic' }}>
                                    (<b><Trans>Please note</Trans>:</b> <Trans>Prices may vary based on the project's complexity and market dynamics.</Trans>)
                                </span>
                            </td>
                            <td>
                                <b><Trans>Cost Details</Trans>: </b><Trans>Starting at $2,772 = ₦4,158,000 with additional recurrent costs.</Trans> {' '}

                                <span style={{ color: 'red', fontStyle: 'italic' }}>
                                    (<b><Trans>Please note</Trans>:</b> <Trans>Prices may vary based on the project's complexity and market dynamics.</Trans>)
                                </span>
                            </td>
                        </tr>
                        
                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td></td>
                            <td>
                                <div className="call-box-bottom">
                                    <Link to="/contact" style={{ textDecoration: 'none' }} className="button">
                                        <Trans>Try Basic Plan</Trans>
                                    </Link>
                                </div></td>
                            <td>
                                <div className="call-box-bottom">
                                    <Link to="/contact" style={{ textDecoration: 'none' }} className="button">
                                        <Trans>Try Pro Plan</Trans>
                                    </Link>
                                </div>
                            </td>
                            <td>
                                <div className="call-box-bottom">
                                    <Link to="/contact" style={{ textDecoration: 'none' }} className="button">
                                        <Trans>Try Enterprise Plan</Trans>
                                    </Link>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PriceComparisonTable
