import React from 'react'
import { Tooltip } from 'react-tooltip';

const BasicPlanServices = () => {
 return (
  <div>
   <table>
    <tr style={{ marginTop: '20px' }}>
     <td style={{ fontWeight: 'bold' }}>Services</td>
     <td style={{ fontWeight: 'bold' }}>Prices(₦)</td>
    </tr>
    <hr />

    <tr style={{ marginTop: '-20px' }}>
     <td>Number of Pages</td>
     <td style={{ color: 'grey', fontWeight: 'bold' }}>10,000</td>
    </tr>
    <hr />

    <tr style={{ marginTop: '-20px' }}>
     <td>Copywriting # of Pages</td>
     <td style={{ color: 'grey', fontWeight: 'bold' }}>20,000</td>
    </tr>
    <hr />

    <tr>
     <td>Style of design</td>
     <td style={{ color: 'grey', fontWeight: 'bold' }}>10,000</td>
    </tr>
    <hr />

    <tr>
     <td>Responsive Design</td>
     <td style={{ color: 'grey', fontWeight: 'bold' }}>10,000</td>
    </tr>
    <hr />

    <tr style={{ marginTop: '-20px' }}>
     <td>Ecommerce functiionality</td>
     <td style={{ color: 'grey', fontWeight: 'bold' }}>None </td>
    </tr>
    <hr />

    <tr style={{ marginTop: '-20px' }}>
     <td>CMS</td>
     <td style={{ color: 'grey', fontWeight: 'bold' }}>None </td>
    </tr>
    <hr />

    <tr>
     <td>Database integration</td>
     <td style={{ color: 'grey', fontWeight: 'bold' }}>None</td>
    </tr>
    <hr />

    <a data-tip data-for='global'>
     <tr>
      <td>
       <del>
        Analytics
                        </del>
       <Tooltip id='global' aria-haspopup='true' role='example'>
        <p>Not available in this plan</p>
       </Tooltip>
      </td>
      <td style={{ color: 'grey', fontWeight: 'bold' }}>-</td>
     </tr>
     <hr />
    </a>



    <tr>
     <td>Free SSL/TLS certificate</td>
    </tr>
    <hr />

    <tr>
     <td>Hosting fee</td>
     <td style={{ color: 'grey', fontWeight: 'bold' }}>Free</td>
    </tr>
    <hr />
   </table>
  </div>
 )
}

export default BasicPlanServices