import React from 'react'
import SEO from '../../components/SEO'
import Layout from '../../layouts/index'
import lof_home_screenshot from './lof_homepage_screenshot.jpg'
import sunrise_home_screenshot from './sunrise_homepage_screenshot.jpg'

export default function index() {
 return (
  <Layout bodyClass="our-works">
   <SEO title="Our-Works" />
   <div className="col-12" style={{ padding: '4rem 0 3rem 6rem' }}>
    <h1 style={{ textAlign: "left", color: 'blue' }}>Our Works</h1>
    <h5 style={{ textAlign: 'left', wordSpacing: '0.2rem' }}>
     A showcase of our works
     </h5>
   </div>

   <div className="container">
    <div className="row">
     <div className="col">
      <h3>A social network</h3>
      <a href="https://leagueoffriends.vercel.app/" style={{ textDecoration: 'none', color: 'black', cursor: 'hover' }}>
       <div className="card">
        <img src={lof_home_screenshot} width="320px" height="180px" className="card-img-top" alt="..." />
        <div className="card-body" style={{ padding: '5px' }}>
         <h5 className="card-title">League of friends</h5>
         <p className="card-text">League of friends is a Nigerian social media<br /> service and image sharing designed to create<br /> status or class for people in form of discussion<br /> groups based on your interest</p>
        </div>
        <div className="card-footer" style={{ padding: '5px' }}>
         <small className="text-muted"><a href="https://leagueoffriends.vercel.app/">https://leagueoffriends.vercel.app/</a></small>
        </div>
       </div>
      </a>
     </div>

     <div className="col">
      <h3>School management system</h3>

      <a href="https://skms.netlify.app/" style={{ textDecoration: 'none', color: 'black', cursor: 'hover' }}>
       <div className="card">
        <img src={sunrise_home_screenshot} width="410px" height="180px" className="card-img-top" alt="..." />
        <div className="card-body" style={{ padding: '5px' }}>
         <h5 className="card-title">Sunrise Keepers School Management<br /> System</h5>
         <p className="card-text">A school management system to record staffs,<br /> students and expenses</p>
        </div>
        <div className="card-footer" style={{ padding: '5px' }}>
         <small className="text-muted"><a href="https://skms.netlify.app">https://skms.netlify.app/</a></small>
        </div>
       </div>
      </a>
     </div>

    </div>
   </div>
  </Layout>
 )
}