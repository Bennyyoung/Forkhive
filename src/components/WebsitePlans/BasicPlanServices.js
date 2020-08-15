import React from 'react'
import ReactTooltip from 'react-tooltip';

const BasicPlanServices = () => {
    return (
        <div>
            <table>
                    <tr style={{marginTop: '20px'}}>
                        <td style={{fontWeight: 'bold'}}>Services</td>
                        <td style={{fontWeight: 'bold'}}>Prices(₦)</td>
                    </tr>
                    <hr />

                    <tr style={{marginTop: '-20px'}}>
                        <td>Home, About, Services and Contact Pages</td>
                        <td style={{color:'grey', fontWeight: 'bold'}}>5,000</td>     
                    </tr>
                    <hr />

                    <tr>
                    <td>Integration of Social Media business accounts such as facebook, twitter, linkedIn and google</td>
                        <td style={{color:'grey', fontWeight: 'bold'}}>1,000</td>
                    </tr>
                    <hr />

                    
                    <tr>
                        <td>.com domain registration</td>
                        <td style={{color:'grey', fontWeight: 'bold'}}>4,000</td>
                    </tr>
                    <hr />

                    <tr>
                        <td>.com.ng domain registration</td>
                        <td style={{color:'grey', fontWeight: 'bold'}}>1,500</td>
                    </tr>
                    <hr />

                    <tr style={{marginTop: '-20px'}}>
                        <td>Website maintenance fee</td>
                        <td style={{color:'grey', fontWeight: 'bold'}}>12,000/yr </td>     
                    </tr>
                    <hr />

                    <tr style={{marginTop: '-20px'}}>
                        <td>Development time</td>
                        <td style={{color:'grey', fontWeight: 'bold'}}>20,000 </td>     
                    </tr>
                    <hr />

                <a data-tip data-for='global'>    
                    <tr>
                    <td>
                        <del>
                            SEO setup
                        </del>
                            <ReactTooltip id='global' aria-haspopup='true' role='example'>
                                <p>Not available in this plan</p>
                            </ReactTooltip>
                    </td>
                        <td style={{color:'grey', fontWeight: 'bold'}}>-</td>
                    </tr>
                    <hr />
                </a>

                <a data-tip data-for='global'>    
                    <tr>
                    <td>
                        <del>
                            Analytics
                        </del>
                            <ReactTooltip id='global' aria-haspopup='true' role='example'>
                                <p>Not available in this plan</p>
                            </ReactTooltip>
                    </td>
                        <td style={{color:'grey', fontWeight: 'bold'}}>-</td>
                    </tr>
                    <hr />
                </a>
                        


                    <tr>
                    <td>Free SSL/TLS certificate</td> 
                    </tr>
                    <hr />

                    <tr>
                    <td>Hosting fee</td>
                        <td style={{color:'grey', fontWeight: 'bold'}}>Free</td>
                    </tr>
                    <hr />
                </table>
        </div>
    )
}

export default BasicPlanServices