import React from 'react'
import SEO from '../../components/SEO/SEO'
import Layout from '../../layouts/index'
import lof_home_screenshot from './lof_homepage_screenshot.jpg'
import sunrise_home_screenshot from './sunrise_homepage_screenshot.jpg'
import beebah_cakes_screenshot from './beebah_cakes_screenshot.jpg'


export default function index() {
  return (
    <Layout bodyClass="our-works">
      <SEO title="Our-Works" />
      <div className="col-12" style={{ padding: '4rem 0 3rem 6rem' }}>
        <h1 style={{ textAlign: "left", color: '#EBA937' }}>Our Works</h1>
        <h5 style={{ textAlign: 'left', wordSpacing: '0.2rem' }}>
          A showcase of our works
        </h5>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="work-box" style={{ height: '10px' }}>
              <h5 style={{ color: '#EBA937' }}><strong>A social network</strong></h5>
              <a href="https://leagueoffriends.vercel.app/" style={{ textDecoration: 'none', color: 'black', cursor: 'hover' }}>
                <div className="work-img">
                  <img src={lof_home_screenshot} className="img-fluid" alt="..." />
                </div>

                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h5>League of friends</h5>

                      <div className="more">
                        <p>League of friends is a Nigerian social media service and image sharing designed to create status or class for people in form of discussion groups based on your interest</p>

                        <span className="category">Web App</span>
                        <span className="date">- 24 April 2021 </span>
                      </div>
                    </div>
                  </div>

                </div>
              </a>
            </div>
          </div>


          <div className="col-md-4">

            <div className="work-box">
              <h5 style={{ color: '#EBA937' }}><strong>School management system</strong></h5>
              <a href="https://skms.netlify.app/" style={{ textDecoration: 'none', color: 'black', cursor: 'hover' }}>
                <div className="work-img">
                  <img src={sunrise_home_screenshot} className="img-fluid" alt="..." />
                </div>

                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h5>Sunrise Keepers School Management System</h5>

                      <div className="more">
                        <p>A school management system to record staffs, students and expenses</p>

                        <span className="category">Web App</span>
                        <span className="date"> - 23 Feb 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>

          <div className="col-md-4">

            <div className="work-box">
              <h5 style={{ color: '#EBA937' }}><strong>Cakes and Confectionery</strong></h5>
              <a href="https://beebahcakes.netlify.app/" style={{ textDecoration: 'none', color: 'black', cursor: 'hover' }}>
                <div className="work-img">
                  <img src={beebah_cakes_screenshot} className="img-fluid" alt="..." />
                </div>

                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h5>Beebah cakes</h5>

                      <div className="more">
                        <p>At Beebah cakes they sell a lot of delicious cakes for your events</p>

                        <span className="category">Web App</span>
                        <span className="date"> - 21 June 2021</span>
                      </div>
                    </div>
                  </div>

                </div>
              </a>
            </div>
          </div>


        </div>
      </div>
      <div className="text-center" style={{justifyContent: 'center', margin: '3rem'}}>
        <a href="https://linktr.ee/bloomhubng" className="button button-primary mt-2">
          More Works
        </a>
      </div>
    </Layout>
  )
}