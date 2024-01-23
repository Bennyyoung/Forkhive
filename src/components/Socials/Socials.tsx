import React from 'react'

const Socials = () => {
    // const yaml = props.data.allDataYaml.edges;
    return (
        <li style={{ paddingBottom: '7px' }}>
            <a target='_blank' href="https://www.instagram.com/forkhivetech/">
                <img src="https://img.icons8.com/color/24/000000/instagram-new.png" />
            </a>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=61555859938895">
                <img src="https://img.icons8.com/fluent/24/000000/facebook-new.png" />
            </a>
            <a target='_blank' href="https://twitter.com/Forkhivetech">
                <img src="https://img.icons8.com/fluent/24/000000/twitter.png" />
            </a>
        </li>
    );
}

export default Socials;