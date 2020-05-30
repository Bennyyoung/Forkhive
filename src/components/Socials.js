import React from 'react'
// import { graphql, StaticQuery } from "gatsby"

const Socials = (props) => {
    // const yaml = props.data.allDataYaml.edges;
    return (
        <li style={{paddingBottom: '7px'}}>
                <a href="https://www.instagram.com/bloom.com_ng/">
                <img src="https://img.icons8.com/color/24/000000/instagram-new.png" />
                </a>
                <a href="https://web.facebook.com/BloomHub-107730554053669/">
                <img src="https://img.icons8.com/fluent/24/000000/facebook-new.png"/>
                </a>
                <a href="https://web.facebook.com/BloomHub-107730554053669/">
                <img src="https://img.icons8.com/fluent/24/000000/twitter.png"/>
                </a>
        </li>
    );
}

// export const query => (
//     <StaticQuery
//         query={graphql`
//         query {
//             allDataYaml {
//                     edges {
//                         node {
//                             instagram
//                        }
//                     }
//                 }
//             }     
//         `}
//         render={data => <Socials data={data} />}
//     />
// )

// export const query = graphql`
// query {
//   allDataYaml {
//     edges {
//       node {
//         instagram
//       }
//     }
//   }
// }
// `;
export default Socials;