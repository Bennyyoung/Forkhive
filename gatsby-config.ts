const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'Forkhive',
    description: 'Forkhive',
    contact: {
      phone1: '+234 913 863 6045',
      phone2: '+234 701 912 7578',
      email: 'forkhivetech@gmail.com',
    },
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Pricing',
        link: '/pricing',
      },
      {
        name: 'Services',
        link: '/services',
      },
      {
        name: 'About',
        link: '/about',
      },
      //  {
      //    name: 'Works',
      //    link: '/our-works',
      //  },
      // {
      //   name: 'Blogs',
      //   link: '/blog',
      // },
      {
        name: 'Career',
        link: '/career',
      },
      {
        name: 'Team',
        link: '/team',
      },
      // {
      //   name: 'Testimonials',
      //   link: '/testimonials',
      // },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-transition-link`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid ? guid : 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-react-svg',
    //   options: {
    //     rule: {
    //       include: /\.inline\.svg$/,
    //     }
    //   }
    // },
  ],
};
