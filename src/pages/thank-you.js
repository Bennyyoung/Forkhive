import React from "react"
import Layout from '../layouts/index';
import { Link } from 'gatsby'

const ThankYouPage = () => (
  <Layout>
    <div className="container">
      <h1>Contact</h1>
      <p>Thank you for your submission!</p>
      <Link to="/">Go to home</Link>
    </div>
  </Layout>
)

export default ThankYouPage