import React from 'react'
import gatsby from '../images/gatsby.png'


const TechStack = () => {
    return (
        <div>
          <h3 className="title-3 text-dark mb-3">Our supported tech stacks</h3>
              {/* 48px, 96px, 144px, 240px and 480px are the pixels size */}
            <ul>
              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/javascript.png" />
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/sublime-text.png" />
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/tableau-software.png"/>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/visual-studio-code-2019.png" />
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/html-5.png" />
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/css3.png" />
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/linux.png" />
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/graphql.png" />
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/sass.png" />
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
              <img src="https://img.icons8.com/color/144/000000/adobe-illustrator.png" />
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/adobe-photoshop.png" />
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                {/* <img alt="Web Technologies" width="300px" height="150px" src={anaconda} /> */}
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/github.png" />
              </li>

                
              <li style={{display: 'inline', float: 'left',padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/r.png" />
              </li>
                
              <li style={{display: 'inline', float: 'left',padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/mongodb.png" />
                
              </li>
                
              <li style={{display: 'inline', float: 'left',padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/python.png" />
              </li>

              <li style={{display: 'inline', float: 'left',padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/npm.png" />
              </li>

              <li style={{display: 'inline', float: 'left',padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/nodejs.png" />

              </li>
                
              <li style={{display: 'inline', float: 'left',padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/react-native.png" />
              <div><br /></div>
              </li>

              <li style={{display: 'inline', float: 'left', padding: '43px 30px 5px 0px'}}>
                <img src={gatsby} width="120px" height="50px"/>
              </li>
            </ul>
            {/* <img alt="Web Technologies" src={jam_stack} width="1000px" /> */}
          </div>
    )
} 

export default TechStack