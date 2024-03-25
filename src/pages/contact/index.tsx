import React, { useState } from 'react';
import SEO from '../../components/SEO/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call/Call';
import './index.css'
import { useForm, ValidationError } from '@formspree/react';
import ThankYouPage from '../thank-you';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { graphql } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';

export default function Contact() {
  const [state, handleSubmit] = useForm("mdoqnkzo");
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode)

  if (state.succeeded) {
    return (
      <Layout bodyClass="page-contact">
        <SEO title="Contact" meta={[]} keywords={[]} />
        <div className="intro intro-small">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Contact</h1>
              </div>
            </div>
          </div>
        </div>
        <ThankYouPage />
      </Layout>
    );
  }

  return (
    <Layout bodyClass="page-contact">
      <SEO title="Contact" meta={[]} keywords={[]} />
      <div className="intro intro-small">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1><Trans>Contact</Trans></h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="container col-12" style={{ paddingBottom: '20px' }}>
            <Call button={false} />
          </div>
        </div><br />
        <div className='container' style={{ margin: "0", paddingBottom: '80px' }}>
          <form
            onSubmit={handleSubmit}
          >

            <div>
              <p>
                <Trans>Full name</Trans>
                <input className={`${darkMode ? 'dark-mode' : ''} `} placeholder="Write your name here.." type="text" required name="full name"></input>
              </p>
            </div>
            <div>
              <p>
                <Trans>Company</Trans>
                <input className={`${darkMode ? 'dark-mode' : ''} `} placeholder="Write your company here.." type="text" required name="Company"></input>
              </p>
            </div>
            <div>
              <p>
                <Trans>Email</Trans>
                <input className={`${darkMode ? 'dark-mode' : ''} `} placeholder="Let us know how to contact you back.." type="email" required name="Email" ></input>
              </p>
            </div>

            <div>
              <p>
                <Trans>Phone number</Trans>:
                <input className={`${darkMode ? 'dark-mode' : ''} `} placeholder="Let us talk eg. +234 805 782 6599.." type="number" required name="Phone" ></input>
              </p>
            </div>

            <div>
              <p>
                <Trans>Website</Trans>
                <input className={`${darkMode ? 'dark-mode' : ''} `} placeholder="What name do you want for your website" type="text" required name="Website" ></input>
              </p>
            </div>
            <div>
              <p>
                <Trans>Domain</Trans>
                <input className={`${darkMode ? 'dark-mode' : ''} `} placeholder="Your Domain name" type="text" required name="Domain" ></input>
              </p>
            </div>
            <div>
              <p>
                <Trans>
                  Navigation items (number of pages), wanted functionalities, do you have a website that you like and why?
                  The more details you mention in your request, our offer will be more precise and detailed:
                </Trans>
                <textarea className={`${darkMode ? 'dark-mode' : ''} `} style={{ width: '100%', height: '300px' }} placeholder="Brief description of your needs" required name="message" ></textarea>
              </p>
            </div>

            <div>
              <p>
                <Trans>Websites you like</Trans>
                <input className={`${darkMode ? 'dark-mode' : ''} `} placeholder="Where do you want to draw inspiration from" type="text" required name="Website Inspiration" ></input>
              </p>
            </div>

            <div>
              <p>
                <Trans>Budget (USD or ₦)</Trans>
                <input className={`${darkMode ? 'dark-mode' : ''} `} placeholder="Let us still know your budget" type="text" required name="Budget" ></input>
              </p>
            </div>

            {/* <div data-netlify-recaptcha="true"></div> */}

            <button className={`${darkMode ? 'dark-mode' : ''} `} type="submit" disabled={state.submitting}><Trans>Hire Us</Trans></button><br />
          </form>
          <p style={{ paddingTop: '20px' }}><Trans>Or send us an email to</Trans>&nbsp;<a href="mailto:hello@forkhive.com"><Trans>hello@forkhive.com</Trans></a></p>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
