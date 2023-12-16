import React from "react"
import Layout from '../layouts/index';
import { Link } from 'gatsby'

const ThankYouPage = () => (
  <>
    <div className="container">
      <div className='container'>
        <h3 className='mt-4'>Glad, we've received your submission!</h3>
        <Link to="/" className="button" style={{marginTop: '2rem'}}>Go to home</Link>
      </div>
    </div>
  </>
)

export default ThankYouPage