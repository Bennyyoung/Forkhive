import React, { useState } from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';
import './index.css'
import { navigate } from 'gatsby-link';

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default function Contact() {
  const [state, setState] = useState({})
  const [create, setCreate] = useState('');
  const [enhance, setEnhance] = useState('');
  const [training, setTraining] = useState('')

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleCreateChange = (e) => {
    setCreate({ ...create, [e.target.name]: e.target.value })
  }
  const handleEnhanceChange = (e) => {
    setEnhance({ ...enhance, [e.target.name]: e.target.value })
  }
  const handleTrainingChange = (e) => {
    setTraining({ ...training, [e.target.name]: e.target.value })
  }
  const handleAttachment = (e) => {
    setState({ ...state, [e.target.name]: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
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
            action="/thank-you"
            autocomplete="on"
            onSubmit={handleSubmit}
          >
            <h3 className="mt-4">Your request</h3>
            <label className="container">Create a product
              <input type="checkbox" onChange={handleChange} name="Create a product" />
              <span className="checkmark"></span>
            </label>
            <label className="container">Enhance your team
              <input type="checkbox" onChange={handleChange} name="Enhance your team" />
              <span className="checkmark"></span>
            </label>
            <label className="container">Training
              <input type="checkbox" onChange={handleChange} name="Training" />
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

            <p type="Full name:">
              <input placeholder="Write your name here.." type="text" required name="full name" onChange={handleChange}></input>
            </p>



            <p type="Email:">
              <input placeholder="Let us know how to contact you back.." type="email" required name="email" onChange={handleChange} ></input>
            </p>
            <p type="Phone number:">
              <input placeholder="Let us talk eg. +234 805 782 6599.." type="number" required name="phone" onChange={handleChange} ></input>
            </p>
            <p type="Budget">
              <select required onChange={handleChange}>
                <option name="---" value selected="selected" onChange={handleChange}>---</option>
                <option name="Less than  ₦20,000" value onChange={handleChange}>Less than  ₦20,000</option>
                <option name="₦20,000 -  ₦40,000" value onChange={handleChange}> ₦20,000 -  ₦40,000</option>
                <option name="₦40,000 -  ₦60,000" value onChange={handleChange}> ₦40,000 -  ₦60,000</option>
                <option name="₦60,000 -  ₦80,000" value onChange={handleChange}> ₦60,000 -  ₦80,000</option>
                <option name="₦80,000 -  ₦100,000" value onChange={handleChange}> ₦80,000 -  ₦100,000</option>
                <option name="More than  ₦100,000" value onChange={handleChange}>More than  ₦100,000</option>
                <option name="Not determined" value onChange={handleChange}>Not determined</option>
              </select>

            </p>
            <label>
              Starting Date:
            </label>
            <input style={{ width: '50%' }} type="date" required onChange={handleChange} name="Project Start Date"></input><br />

            <label>
              Finishing Date:
            </label>
            <input style={{ width: '50%' }} type="date" required onChange={handleChange} name="Project End Date"></input>

            <p type="Attach a file (CV) Not mandatory: 📂">
              <input placeholder="Attach your dream project here, lets build" name="Resume/CV" type="file" onChange={handleAttachment} />
            </p>

            <p type="For the Training (Only for those undergoing the training)">

              <label className="container">Basic Web Design
                <input type="checkbox" onChange={handleChange} name="Basic Web Design" />
                <span className="checkmark"></span>
              </label>
              <label className="container">Basic UX Design
                <input type="checkbox" onChange={handleChange} name="Basic UX Design" />
                <span className="checkmark"></span>
              </label>
              <label className="container">HTML and CSS
                <input type="checkbox" onChange={handleChange} name="HTML and CSS" />
                <span className="checkmark"></span>
              </label>
              <label className="container">JavaScript (React)
                <input type="checkbox" onChange={handleChange} name="JavaScript (React)" />
                <span className="checkmark"></span>
              </label>
              <label className="container">Azure ML
                <input type="checkbox" onChange={handleChange} name="Azure ML" />
                <span className="checkmark"></span>
              </label>
              <label className="container">Python
                <input type="checkbox" onChange={handleChange} name="Python" />
                <span className="checkmark"></span>
              </label>
            </p>


            <p type="Message (Brief description of your needs): ">
              <textarea style={{ width: '100%', height: '300px' }} type="text" placeholder="Brief description of your needs" required name="message" onChange={handleChange} ></textarea>
            </p>
            <div data-netlify-recaptcha="true"></div>

            <button type="submit">Hire Us</button><br />
          </form>

          <p style={{ paddingTop: '20px' }}>Or send us an email to&nbsp;<a href="mailto:softbloom28@gmail.com">softbloom28@gmail.com</a></p>

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

