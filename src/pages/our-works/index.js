import React from 'react'
import { ReactTinyLink } from 'react-tiny-link'
import SEO from '../../components/SEO'
import Layout from '../../layouts/index'
import lof_home_screenshot from '../../images/lof_homepage_screenshot.jpg'
import sunrise_home_screenshot from '../../images/sunrise_homepage_screenshot.jpg'


export default function index() {
 return (
  <Layout bodyClass="our-works">
   <SEO title="Our-Works" />






   {/* <div className="card-group">
    <div className="card">
     <img className="card-img-top" alt="..." />
     <div className="card-body">
      <h5 className="card-title">League of friends</h5>
      <p className="card-text">League of friends is a Nigerian social media service and image sharing designed to create status or class for people in form of discussion groups based on your interest</p>
     </div>
     <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
     </div>
    </div>
    <div className="card">
     <img src="..." className="card-img-top" alt="..." />
     <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
     </div>
     <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
     </div>
    </div>
    <div className="card">
     <img src="..." className="card-img-top" alt="..." />
     <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
     </div>
     <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
     </div>
    </div>
   </div>


 */}



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
        <img src={lof_home_screenshot} width="320px" height="220px" className="card-img-top" alt="..." />
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
        <img src={sunrise_home_screenshot} width="450px" height="220px" className="card-img-top" alt="..." />
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

