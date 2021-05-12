import React from 'react'
// import { ReactTinyLink } from 'react-tiny-link'
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
      {/* <ReactTinyLink
                                cardSize="small"
                                showGraphic={true}
                                header="URL Bookmark Manager"
                                description="The URL Bookmark manager allows you to save and organize your content on 
                                            your local storage."
                                maxLine={2}
                                minLine={1}
                                url="https://ben-angular-urlbookmarkmanager2.stackblitz.io"

                            /> */}
     </div>
    </div>
    <div className="card" style={{ float: 'left', margin: '16px 9px' }}>
     <div className="card-body">
      {/* <ReactTinyLink
                                cardSize="small"
                                showGraphic={true}
                                header="HippoDocs"
                                description="HippoDocs is a PDF Conversion API for dynamic generation of PDF from system provided 
                                            or user provided templates."
                                maxLine={2}
                                minLine={1}
                                url="https://ben-angular-hippodocs.stackblitz.io"
                            /> */}
     </div>
    </div>
    <div className="card" style={{ float: 'left', margin: '16px 9px' }}>
     <div className="card-body">
      {/* <ReactTinyLink
                                cardSize="small"
                                showGraphic={true}
                                header="Heart Matters Foundation"
                                description="THE ENCYLOPEDIA OF RELATIONSHIP MATTERS"
                                maxLine={2}
                                minLine={1}
                                url="https://heartmatters.netlify.app/"
                            /> */}
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

