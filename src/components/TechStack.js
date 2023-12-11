import React from 'react'
import rapid_miner from '../images/rapid-miner.jpg'
import { Icon, InlineIcon } from '@iconify/react';
import netlifyIcon from '@iconify/icons-logos/netlify';
import gatsbyIcon from '@iconify/icons-cib/gatsby';


const TechStack = () => {
    return (
        <div>
          <h2 className="title-3 text-dark mb-3" style={{textAlign: "center"}}><strong>Your vision is built with</strong></h2>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">

          </div>
              {/* 48px, 96px, 144px, 240px and 480px are the pixels size */}
            <ul>
              <li style={{display: 'inline', float: 'left', padding: '0px 20px 0px 0px'}}>
                <img src="https://img.icons8.com/color/48/000000/javascript.png" />
              <h6><strong>JAVASCRIPT</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 0px -3px'}}>
                <Icon icon={netlifyIcon} width="48px" height="48px" />
              <h6><strong>NETLIFY</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 0px 0px'}}>
                <img src="https://img.icons8.com/color/48/000000/sublime-text.png" />
                <h6><strong>SUBLIME IDE</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 0px 0px'}}>
                <img src="https://img.icons8.com/color/48/000000/tableau-software.png"/>
                <h6><strong>TABLEAU</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 0px 0px'}}>
                <img src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" />
                <h6><strong>VS CODE</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 0px 0px'}}>
                <img src="https://img.icons8.com/color/48/000000/html-5.png" />
                <h6><strong>HTML 5</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 0px 0px'}}>
                <img src="https://img.icons8.com/color/48/000000/css3.png" />
                <h6><strong>CSS 3</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 0px 0px'}}>
                <img src="https://img.icons8.com/color/48/000000/linux.png" />
                <h6><strong>LINUX</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 0px 0px'}}>
                <img src="https://img.icons8.com/color/48/000000/graphql.png" />
                <h6><strong>GRAPHQL</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 0px 0px'}}>
                <img src="https://img.icons8.com/color/48/000000/sass.png" />
                <h6><strong>SASS</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 0px 0px'}}>
              <img src="https://img.icons8.com/color/48/000000/adobe-illustrator.png" />
              <h6><strong>ADOBE ILLUSTRATOR</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 0px 0px'}}>
                <img src="https://img.icons8.com/color/48/000000/adobe-photoshop.png" />
                <h6><strong>ADOBE PHOTOSHOP</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 0px 0px'}}>
                <img src="https://img.icons8.com/color/48/000000/github.png" />
                <h6><strong>GITHUB</strong></h6>
              </li>

                
              <li style={{display: 'inline', float: 'left',padding: '0px 20px 0px 0px'}}>
                <img src="https://img.icons8.com/color/48/000000/r.png" />
                <h6><strong>R</strong></h6>
              </li>
                
              <li style={{display: 'inline', float: 'left',padding: '0px 20px 0px 0px'}}>
                <img src="https://img.icons8.com/color/48/000000/mongodb.png" />
                <h6><strong>MONGO DB</strong></h6>
                
              </li>
                
              <li style={{display: 'inline', float: 'left',padding: '0px 20px 0px 0px'}}>
                <img src="https://img.icons8.com/color/48/000000/python.png" />
                <h6><strong>PYTHON</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left',padding: '0px 20px 0px 0px'}}>
                <img src="https://img.icons8.com/color/48/000000/npm.png" />
                <h6><strong>NPM</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left',padding: '0px 20px 0px 0px'}}>
                <img src="https://img.icons8.com/color/48/000000/nodejs.png" />
                <h6><strong>NODE JS</strong></h6>
              </li>
                
              <li style={{display: 'inline', float: 'left',padding: '0px 20px 0px 0px'}}>
                <img src="https://img.icons8.com/color/48/000000/react-native.png" />
                <h6><strong>REACT NATIVE</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left',padding: '0px 20px 0px 0px'}}>
                <img src="https://img.icons8.com/plasticine/48/000000/react.png"/>
                <h6><strong>REACT</strong></h6>
              </li>  

              <li style={{display: 'inline', float: 'left',padding: '0px 20px 0px 0px'}}>
              <img src="https://img.icons8.com/color/48/000000/angularjs.png"/>
                <h6><strong>ANGULAR</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '5px 20px 0px 0px'}}>
                <Icon icon={gatsbyIcon} width="48px" height="48px" />
                <h6><strong>GATSBY</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '5px 20px 0px 0px'}}>
                <img src={rapid_miner} width="210px" height="48px" />
                <h6><strong>RAPID MINER</strong></h6>
              </li>
            </ul>
          </div>
    )
} 

export default TechStack