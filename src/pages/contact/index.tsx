import React, { useState } from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';
import './index.css'
import { navigate } from 'gatsby-link';
import { IForm } from '../../components/Interface/Form/IForm';
import encode from '../../utils/encode';
import { IHandleChange } from '../../components/Interface/Form/IHandleChange';
import { IHandleAttachment } from '../../components/Interface/Form/IHandleAttachment';
import { IHandleSubmit } from '../../components/Interface/Form/IHandleSubmit';
import { useForm, ValidationError } from '@formspree/react';
import ThankYouPage from '../thank-you';

export default function Contact() {
  const [state, handleSubmit] = useForm("mdoqnkzo");
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

  // const handleChange = (e: IHandleChange) => {
  //   setState({ ...state, [e.target.name]: e.target.value })
  // }
  // const handleAttachment = (e: IHandleAttachment) => {
  //   setState({ ...state, [e.target.name]: e.target.files?.[0] || '' })
  // }

  // const handleSubmit = (e: IHandleSubmit) => {
  //   e.preventDefault()
  //   const form = e.currentTarget

  //   if (form) {
  //     fetch('/', {
  //       method: 'POST',
  //       body: encode({
  //         'form-name': form.getAttribute('name'),
  //         ...state,
  //       }),
  //     })
  //       .then(() => {
  //         const action = form.getAttribute('action')
  //         if (action) {
  //           navigate(action)
  //         }
  //       })
  //       .catch((error) => alert(error))
  //   }
  // }

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

      <div className="container">
        <div className="row">
          <div className="col-12" style={{ paddingBottom: '20px' }}>
            <Call button={false} />
          </div>
        </div><br />
        <div style={{ margin: "0", paddingBottom: '80px' }}>
          <form
            onSubmit={handleSubmit}
          >
            <h3 className="mt-4">Your request</h3>
            <label className="container">Create a product
              <input type="checkbox" name="Create a product" />
              <span className="checkmark"></span>
            </label>
            <label className="container">Enhance your team
              <input type="checkbox" name="Enhance your team" />
              <span className="checkmark"></span>
            </label>
            <label className="container">Training
              <input type="checkbox" name="Training" />
              <span className="checkmark"></span>
            </label>

            {/* <label for="training" style={{ fontSize: '20px', color: 'red', fontWeight: 'bold' }} >
              Training
            </label> */}

            {/* <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">HTML</label>

            <input type="radio" id="css" name="fav_language" value="HTML" />
            <label for="css">CSS</label><br />

            <input type="radio" id="javascript" name="fav_language" value="HTML" />
            <label for="javascript">JavaScript</label> */}

            <div>
              <p>
                Full name
                <input placeholder="Write your name here.." type="text" required name="full name"></input>
              </p>
            </div>
            <div>
              <p>
                Email
                <input placeholder="Let us know how to contact you back.." type="email" required name="email" ></input>
              </p>
            </div>

            <div>
              <p>
                Phone number:
                <input placeholder="Let us talk eg. +234 805 782 6599.." type="number" required name="phone" ></input>
              </p>
            </div>

            <label>
              Starting Date:
            </label>
            <input style={{ width: '50%' }} type="date" required name="Project Start Date"></input><br />

            <label>
              Finishing Date:
            </label>
            <input style={{ width: '50%' }} type="date" required name="Project End Date"></input>

            <div>
              <p>
                Attach a file (CV) Not mandatory: 📂
                <input placeholder="Attach your dream project here, lets build" name="Resume/CV" type="file" />
              </p>
            </div>

            <div>
              <p>
                For the Training (Only for those undergoing the training)
              </p>

              <label className="container">Basic Web Design
                <input type="checkbox" name="Basic Web Design" />
                <span className="checkmark"></span>
              </label>
              <label className="container">Basic UX Design
                <input type="checkbox" name="Basic UX Design" />
                <span className="checkmark"></span>
              </label>
              <label className="container">HTML and CSS
                <input type="checkbox" name="HTML and CSS" />
                <span className="checkmark"></span>
              </label>
              <label className="container">JavaScript (React)
                <input type="checkbox" name="JavaScript (React)" />
                <span className="checkmark"></span>
              </label>
              <label className="container">Azure ML
                <input type="checkbox" name="Azure ML" />
                <span className="checkmark"></span>
              </label>
              <label className="container">Python
                <input type="checkbox" name="Python" />
                <span className="checkmark"></span>
              </label>
            </div>

            <div>
              <p>
                Message (Brief description of your needs):
                <textarea style={{ width: '100%', height: '300px' }} placeholder="Brief description of your needs" required name="message" ></textarea>
              </p>
            </div>
            <div data-netlify-recaptcha="true"></div>

            <button type="submit" disabled={state.submitting}>Hire Us</button><br />
          </form>
          <p style={{ paddingTop: '20px' }}>Or send us an email to&nbsp;<a href="mailto:forkhivetech@gmail.com">forkhivetech@gmail.com</a></p>
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

    </Layout >
  )
}
