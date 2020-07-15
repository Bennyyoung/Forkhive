import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';
import './css/main.css'
import './css/util.css'
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './fonts/Linearicons-Free-v1.0.0/icon-font.min.css'
import bg from './images/bg-01.jpg'

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
        <div className="col-12" style={{paddingBottom: '10px'}}>
          <Call button={false} />
        </div>
        
                <div className="container-contact100">
                        <div>
                          <form 
                          name="contact-form"
                          className="wrap-contact100"
                          method="post"
                          data-netlify="true"
                          data-netlify-honeypot="bot-field"
                          className="contact100-form validate-form"
                          >
                            <span className="contact100-form-title">
                              Send Us A Message
                            </span>
            
                            <label className="label-input100" for="first-name">Tell us your name *</label>
                            <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type first name">
                              <input id="first-name" className="input100" type="text" name="first-name" placeholder="First name" />
                              <span className="focus-input100"></span>
                            </div>
                            <div className="wrap-input100 rs2-wrap-input100 validate-input" data-validate="Type last name">
                              <input className="input100" type="text" name="last-name" placeholder="Last name" />
                              <span className="focus-input100"></span>
                            </div>
            
                            <label className="label-input100" for="email">Enter your email *</label>
                            <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                              <input id="email" className="input100" type="text" name="email" placeholder="Eg. example@email.com" />
                              <span className="focus-input100"></span>
                            </div>
            
                            <label className="label-input100" for="phone">Enter phone number</label>
                            <div className="wrap-input100">
                              <input id="phone" className="input100" type="text" name="phone" placeholder="Eg. +234 907 846 7458" />
                              <span className="focus-input100"></span>
                            </div>
            
                            <label className="label-input100" for="message">Message *</label>
                            <div className="wrap-input100 validate-input" data-validate = "Message is required">
                              <textarea id="message" className="input100" name="message" placeholder="Write us a message"></textarea>
                              <span className="focus-input100"></span>
                            </div>
            
                            <div className="container-contact100-form-btn">
                              <button className="contact100-form-btn">
                                Send Message
                              </button>
                            </div>
                          </form>
            
                          <div className="contact100-more flex-col-c-m" style={{backgroundImage: `url("${bg}")`}}>
                            <div className="flex-w size1 p-b-47">
                                        <div className="txt1 p-r-25">
                                            <span className="lnr lnr-map-marker"></span>
                                        </div>
            
                                    <div className="flex-col size2">
                                        <span className="txt1 p-b-20">
                                            Address
                                        </span>
            
                                        <span className="txt2">
                                            No 5 Weli Crescent St, PortHarcourt, Rumaugholu, Nigeria.
                                        </span>
                                    </div>
                                </div>    
                    
            
                        <div className="dis-flex size1 p-b-47">
                      <div className="txt1 p-r-25">
                        <span className="lnr lnr-phone-handset"></span>
                      </div>
            
                      <div className="flex-col size2">
                        <span className="txt1 p-b-20">
                          Lets Talk
                        </span>
            
                        <span className="txt3">
                          +234 805 782 6599
                        </span>
                      </div>
                    </div>
            
                        <div className="dis-flex size1 p-b-47">
                      <div className="txt1 p-r-25">
                        <span className="lnr lnr-envelope"></span>
                      </div>
            
                      <div className="flex-col size2">
                        <span className="txt1 p-b-20">
                          General Support
                        </span>
            
                        <span className="txt3">
                         softbloom28@gmail.com
                        </span>
                      </div>
                    </div>
                            </div>
                        </div>
                        </div>
        
        <div className="col-8">
          <h4 className="mt-4">Business Hours</h4>
          <table className="table table-sm opening-hours-table">
            <tbody>
              <tr>
                <td className="day font-weight-bold">Monday</td>
                <td className="opens">9:00am - 5:00pm</td>
                {/* <td>-</td>
                <td className="closes">5:00pm</td> */}
              </tr>
              <tr>
                <td className="day font-weight-bold">Tuesday</td>
                <td className="opens">9:00am - 5:00pm</td>
                {/* <td>-</td>
                <td className="closes">5:00pm</td> */}
              </tr>
              <tr>
                <td className="day font-weight-bold">Wednesday</td>
                <td className="opens">9:00am - 5:00pm</td>
                {/* <td>-</td>
                <td className="closes">5:00pm</td> */}
              </tr>
              <tr>
                <td className="day font-weight-bold">Thursday</td>
                <td className="opens">9:00am - 5:00pm</td>
                {/* <td>-</td>
                <td className="closes">5:00pm</td> */}
              </tr>
              <tr>
                <td className="day font-weight-bold">Friday</td>
                <td className="opens">9:00am - 5:00pm</td>
                {/* <td>-</td>
                <td className="closes">5:00pm</td> */}
              </tr>
              <tr>
                <td className="day font-weight-bold">Saturday</td>
                <td className="opens">12:00pm - 5:00pm</td>
                {/* <td />
                <td className="closes" /> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </Layout>
);

export default Contact;
