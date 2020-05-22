import React from 'react'
import gatsby from '../images/gatsby.png'


const TechStack = () => {
    return (
        <div>
          <h2 className="title-3 text-dark mb-3" style={{textAlign: "center"}}><strong>Current TechStack</strong></h2>
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            {/* Indicators */}
            {/* <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol> */}

              {/* Wrapper for slides */}

            {/* <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="https://img.icons8.com/color/144/000000/javascript.png" />
            </div>

            <div className="item">
              <img src="https://img.icons8.com/color/144/000000/javascript.png" />
            </div>

            <div className="item">
              <img src="https://img.icons8.com/color/144/000000/javascript.png" />
            </div>
          </div> */}

          {/* Left and right controls */}
          {/* <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a className="left carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a> */}

          </div>
              {/* 48px, 96px, 144px, 240px and 480px are the pixels size */}
            <ul>
              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/96/000000/javascript.png" />
              <h6><strong>JAVASCRIPT</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/96/000000/sublime-text.png" />
                <h6><strong>SUBLIME IDE</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/96/000000/tableau-software.png"/>
                <h6><strong>TABLEAU</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png" />
                <h6><strong>VS CODE</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/96/000000/html-5.png" />
                <h6><strong>HTML 5</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/96/000000/css3.png" />
                <h6><strong>CSS 3</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/96/000000/linux.png" />
                <h6><strong>LINUX</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/96/000000/graphql.png" />
                <h6><strong>GRAPHQL</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/96/000000/sass.png" />
                <h6><strong>SASS</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
              <img src="https://img.icons8.com/color/96/000000/adobe-illustrator.png" />
              <h6><strong>ADOBE ILLUSTRATOR</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/96/000000/adobe-photoshop.png" />
                <h6><strong>ADOBE PHOTOSHOP</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/96/000000/github.png" />
                <h6><strong>GITHUB</strong></h6>
              </li>

                
              <li style={{display: 'inline', float: 'left',padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/96/000000/r.png" />
                <h6><strong>R</strong></h6>
              </li>
                
              <li style={{display: 'inline', float: 'left',padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/96/000000/mongodb.png" />
                <h6><strong>MONGO DB</strong></h6>
                
              </li>
                
              <li style={{display: 'inline', float: 'left',padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/96/000000/python.png" />
                <h6><strong>PYTHON</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left',padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/96/000000/npm.png" />
                <h6><strong>NPM</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left',padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/96/000000/nodejs.png" />
                <h6><strong>NODE JS</strong></h6>
              </li>
                
              <li style={{display: 'inline', float: 'left',padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/96/000000/react-native.png" />
                <h6><strong>REACT NATIVE</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left',padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/plasticine/100/000000/react.png"/>
                <h6><strong>REACT</strong></h6>
              </li>  

              <li style={{display: 'inline', float: 'left',padding: '0px 20px 5px 0px'}}>
              <img src="https://img.icons8.com/color/96/000000/angularjs.png"/>
                <h6><strong>ANGULAR</strong></h6>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '5px 20px 5px 0px'}}>
                <img src="https://symbols.getvecta.com/stencil_81/10_gatsbyjs-icon.a098870e9e.svg" width="90px" height="90px"/>
                <h6><strong>GATSBY</strong></h6>
              </li>
            </ul>
          </div>
    )
} 

export default TechStack