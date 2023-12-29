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
        <div className="container content">
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th><Trans>Features</Trans></th>
                            <th><Trans>Basic Plan (Suitable for Budget Applications)</Trans> - <b> ₦500,000+ </b></th>
                            <th><Trans>Pro Plan (Suitable for Medium to Enterprise Applications)</Trans> - <b> ₦1million+ </b></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <a className='socialMedia'>
                                    <Trans>Integration of Social Media</Trans> (<i className="fa fa-facebook-f"></i> <i className="fa fa-twitter"></i> <i className="fa fa-instagram"></i> <i className="fa fa-whatsapp"></i>)

                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.socialMedia'
                                    // @ts-ignore
                                    content={<Trans>Get found on social media</Trans>}
                                    style={{ width: '15rem' }}
                                />
                            </td>
                            <td><i className="fa fa-check"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td>
                                <a className='ssl_tsl'><Trans>SSL/TLS Certificate</Trans>
                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.ssl_tsl'
                                    // @ts-ignore
                                    content={<Trans>If your site has a login or accepts form submissions, HTTPS is essential for your users’ security and privacy. Google search results prioritize sites with HTTPS enabled</Trans>}
                                    style={{ width: '15rem' }}
                                />
                            </td>
                            <td><i className="fa fa-check"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr>
                            <td>
                                <a className="fee"><Trans>Hosting Fee</Trans>
                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.fee'
                                    // @ts-ignore
                                    content={<Trans>Hosting fee is free</Trans>}
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-check"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td>
                                <a className="cms"><Trans>CMS (Content Management System)</Trans>
                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.cms'
                                    // @ts-ignore
                                    content={<Trans>Would you love to create, manage, and modify content on your website without the need for our specialized technical knowledge</Trans>}
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-check"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr>
                            <td>
                                <a className="cdr"><Trans>Custom Domain Registration</Trans>
                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.cdr'
                                    // @ts-ignore
                                    content={<Trans>Register a custom address like www.YourBusinessOrName.com to your website or online store</Trans>}
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-check"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td>
                                <a className="form_"><Trans>Form Submission</Trans>
                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.form_'
                                    // @ts-ignore
                                    content={<Trans>Netlify build bots do it by parsing your HTML files directly at deploy time, so there’s no need for us to make an API call or include extra JavaScript on your site</Trans>}
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-check"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr>
                            <td>
                                <a className="support">
                                    <Trans>24/7 Support</Trans> {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.support'
                                    // @ts-ignore
                                    content={<Trans>Friendly Forkhive Guides are standing by to answer your questions. Call +234 913 863 6045</Trans>}
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-check"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td>
                                <a className="online"><Trans>Online Appointments and Reminders (Business Working hours)</Trans>
                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.online'
                                    // @ts-ignore
                                    content={<Trans>You can book one-time, recurring appointments, a webinar, class, workshop, in-person or virtual event directly from your website and Remind customers of their upcoming bookings</Trans>}
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-check"><Trans>Mon-Fri</Trans></i></td>
                            <td><i className="fa fa-check"><Trans>Mon-Sun</Trans></i></td>
                        </tr>

                        <tr>
                            <td>
                                <a className="ecommerce"><Trans>Ecommerce Functionality</Trans>
                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.ecommerce'
                                    // @ts-ignore
                                    content={<Trans>Accept credit card, Paystack, Flutterwave, Interswitch Webpay, Paypal, Amplify and Remita payments for products/orders. Transaction fees are dependent on your selected payment processor. We don’t charge additional fees and, with Paystack, offer one of the lowest transaction fees (Local Cards: 1.5% + 100NGN, International Cards: 3.9% + NGN, 100 NGN 100 fee is waived for transactions less than NGN 2500) compared to similar ecommerce plans</Trans>}
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-remove"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td>
                                <a className="database"><Trans>Database Integration</Trans>
                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.database'
                                    //@ts-ignore
                                    content={<Trans>Does your website require database integration let us know</Trans>}
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-remove"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr>
                            <td>
                                <a className="guidance"><Trans>Guidance and Analytics</Trans>
                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.guidance'
                                    // @ts-ignore
                                    content={<Trans>If someone loads pages of your site on multiple different days, they will be counted as a unique visitor for each day. If someone loads pages of your site during multiple different hours, they will  be counted as a unique visitor for each hour. You could be watching  this metric</Trans>}
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-remove"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>

                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td>
                                <a className="seo"><Trans>Search Engine Optimization (SEO)</Trans>
                                    {' '}<i className="fa fa-question-circle"></i>
                                </a>
                                <Tooltip
                                    anchorSelect='.seo'
                                    // @ts-ignore
                                    content={<Trans>Get found on Google and other search engines with help Gatsby or Netlify</Trans>}
                                    style={{ width: '15rem' }}

                                />
                            </td>
                            <td><i className="fa fa-remove"></i></td>
                            <td><i className="fa fa-check"></i></td>
                        </tr>
                        <tr>
                            <td><b><Trans>Price Range</Trans></b></td>
                            <td><b><Trans>₦500,000+</Trans> </b><Trans>in addition to</Trans> <b>recurrent costs</b> (<b><Trans>Note</Trans>: </b><Trans>Prices are subject to the complexity of the project and nature of the market</Trans>)</td>
                            <td><b><Trans>₦1million+</Trans> </b><Trans>in addition to</Trans> <b>recurrent costs</b> (<b><Trans>Note</Trans>: </b><Trans>Prices are subject to the complexity of the project and nature of the market</Trans>)</td>
                        </tr>
                        <tr className={`${darkMode ? 'dark-mode' : ''}`}>
                            <td></td>
                            <td>      <div className="call-box-bottom">
                                <Link to="/contact" style={{ textDecoration: 'none' }} className="button">
                                    <Trans>Try Basic Plan</Trans>
                                </Link>
                            </div></td>
                            <td>      <div className="call-box-bottom">
                                <Link to="/contact" style={{ textDecoration: 'none' }} className="button">
                                    <Trans>Try Pro Plan</Trans>
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
