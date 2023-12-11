import React from 'react'
import { Tooltip } from 'react-tooltip'

const PlatinumPlanServices = () => {
 return (
  <table>
   <tr style={{ marginTop: '20px' }}>
    <td style={{ fontWeight: 'bold' }}>Services</td>
    <td style={{ fontWeight: 'bold' }}>Prices(₦)</td>
   </tr>
   <hr />

   <tr style={{ marginTop: '-20px' }}>
    <td>Home, About, Services and Contact Pages</td>
    <td style={{ color: 'grey', fontWeight: 'bold' }}>5,000</td>
   </tr>
   <hr />

   <tr>
    <td>Integration of Social Media business accounts such as facebook, twitter, linkedIn and google</td>
    <td style={{ color: 'grey', fontWeight: 'bold' }}>1,000</td>
   </tr>
   <hr />


   <tr>
    <td>.com domain registration</td>
    <td style={{ color: 'grey', fontWeight: 'bold' }}>4,000</td>
   </tr>
   <hr />

   <tr>
    <td>.com.ng domain registration</td>
    <td style={{ color: 'grey', fontWeight: 'bold' }}>1,500</td>
   </tr>
   <hr />

   <tr style={{ marginTop: '-20px' }}>
    <td>Website maintenance fee</td>
    <td style={{ color: 'grey', fontWeight: 'bold' }}>24,000/yr </td>
   </tr>
   <hr />

   <tr style={{ marginTop: '-20px' }}>
    <td>Development time</td>
    <td style={{ color: 'grey', fontWeight: 'bold' }}>45,000 </td>
   </tr>
   <hr />

   <tr>
    <td>SEO setup</td>
    <td style={{ color: 'grey', fontWeight: 'bold' }}>32,000</td>
   </tr>
   <hr />

   <tr>
    <td>
     <a data-tip>
      Analytics
                            <Tooltip aria-haspopup='true' role='example'>
       <h3>How Analytics works</h3>
       <p style={{ textAlign: 'justify', wordSpacing: '0.2rem' }}>
        Data for Analytics comes from a Content Delivery Network (CDN) <br /> server logs.
                                  Since there's no client-side code involved, the <br /> performance of your site doesn't suffer.
                                  This also means that <br /> data integrity isn't affected when your visitors use ad blockers or <br /> disable JavaScript.
                                  Because site activity is tracked anonymously <br /> without cookies or personally identifying
                                  information, Analytics <br /> is fully GDPR compliant.</p>
      </Tooltip>
     </a>
    </td>
    <td style={{ color: 'grey', fontWeight: 'bold' }}>40,000/yr</td>
   </tr>
   <hr />

   <tr>
    <td>Free SSL/TLS certificate</td>
   </tr>
   <hr />

   <tr>
    <td>Free hosting for 6 months</td>
    <td style={{ color: 'grey', fontWeight: 'bold' }}></td>
   </tr>
   <hr />
  </table>
 )
}

export default PlatinumPlanServices