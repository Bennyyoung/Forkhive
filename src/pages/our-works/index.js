import React from 'react'
import { ReactTinyLink } from 'react-tiny-link'
import SEO from '../../components/SEO'
import Layout from '../../layouts/index'

export default function index() {
 return (
  <Layout bodyClass="our-works">
   <SEO title="Our-Works" />



   <div className="col-12" style={{ padding: '4rem 0 3rem 6rem' }}>
    <h1 style={{ textAlign: "left", color: 'blue' }}>Our Works</h1>
    <p style={{ textAlign: 'left', wordSpacing: '0.2rem' }}>
     A showcase of our works
                    </p>
   </div>

   <div className="card-group" style={{ margin: '10px', padding: '5px' }}>
    <div className="card" style={{ float: 'left', margin: '16px 9px' }}>
     <div className="card-body">
      <ReactTinyLink
      style={{textDecoration: 'none'}}
       cardSize="large"
       showGraphic={true}
       width="400px"
       header="School Management System"
       description="A school management system to record staffs, students and expenses"
       maxLine={4}
       minLine={1}
       url="https://skms.netlify.app/"
      />
     </div>
    </div>

    <div className="card" style={{ float: 'left', margin: '16px 9px' }}>
     <div className="card-body">
      <ReactTinyLink
      style={{textDecoration: 'none'}}
       cardSize="large"
       showGraphic={true}
       width="400px"
       header="League of friends"
       description="League of friends is a Nigerian social media service and image sharing designed to create status or class for people in form of discussion groups based on your interest"
       maxLine={4}
       minLine={1}
       url="https://leagueoffriends.vercel.app"
      />
     </div>
    </div>
   </div>


   <div className="card" style={{ float: 'left', margin: '16px 9px' }}>
    <div className="card-body" >
     {/* <ReactTinyLink
                                cardSize="small"
                                showGraphic={true}
                                header="SYLVIA-GOLD PROPERTIES - creating happy landlords"
                                description="A Real Estate Site"
                                maxLine={2}
                                minLine={1}
                                url="https://www.sylviagoldproperties.com/properties.html"
                            /> */}
    </div>
   </div>

   <div className="card" style={{ float: 'left', margin: '16px 9px' }}>
    <div className="card-body" >
     {/* <ReactTinyLink
      cardSize="small"
      showGraphic={true}
      header="Hi, I'm Tolu Afilaka"
      description="A COMEDIAN AND CURRENCY TRADER"

      url="http://toluafilaka.herokuapp.com/"
     /> */}
    </div>
   </div>
  </Layout>
 )
}

