const techStack = [
    // Development
    {
        img: 'https://img.icons8.com/color/30/gatsbyjs.png',
        text: 'GATSBY',
        content: 'Gatsby.js, a popular open-source framework for building modern web applications. Gatsby.js is based on React and uses GraphQL to pull data from various sources to generate static websites'
    },
    {
        img: 'https://img.icons8.com/color/30/nestjs.png',
        text: 'NEST',
        content: 'NestJS is a framework for building scalable and efficient server-side applications. It is often used to develop web applications, APIs, and microservices using TypeScript or JavaScript. NestJS is built with a modular and extensible architecture and draws inspiration from Angular, which makes it familiar to developers who have experience with Angular'
    },
    {
        img: 'https://img.icons8.com/fluency/30/vite.png',
        text: 'VITE',
        content: 'Vite is a build tool and development server that is designed to optimize the development experience for modern web applications, particularly those using frameworks like React, Vue, and others. Vite is known for its fast startup time and efficient development workflow.'
    },
    {
        img: 'https://img.icons8.com/plasticine/30/000000/react.png',
        text: 'REACT',
        content: 'React, also known as React.js or ReactJS, is an open-source JavaScript library for building user interfaces or UI components. It was developed by Facebook and is widely used for creating interactive and dynamic user interfaces in web applications. React allows developers to build reusable UI components, making it easier to manage and update complex user interfaces.'
    },
    {
        img: 'https://img.icons8.com/fluency/30/canva.png',
        text: 'CANVA',
        content: 'Canva is a web-based graphic design platform that allows users to create a wide variety of visual content such as presentations, posters, social media graphics, flyers, invitations, and more. It provides an intuitive drag-and-drop interface along with a vast library of templates, images, illustrations, icons, and fonts that users can use to customize their designs. '
    },
    {
        img: 'https://img.icons8.com/color/30/000000/react-native.png',
        text: 'REACT NATIVE',
        content: 'React Native is an open-source framework developed by Facebook that allows developers to build mobile applications using JavaScript and React. With React Native, you can create cross-platform mobile apps that run on both iOS and Android platforms while sharing a significant portion of the codebase. This enables developers to use their web development skills to build native mobile applications.'
    },

    // {
    //     img: 'https://img.icons8.com/color/30/000000/javascript.png',
    //     text: 'JAVASCRIPT',
    //     content: 'JavaScript is a high-level, versatile, and interpreted programming language primarily known for its role in web development. It is commonly used to add interactivity, dynamic content, and behavior to websites. JavaScript is one of the core technologies of the World Wide Web, alongside HTML and CSS.'
    // },
    // {
    //     img: 'https://img.icons8.com/color/30/000000/html-5.png',
    //     text: 'HTML 5',
    //     content: 'HTML5, the fifth and latest version of the Hypertext Markup Language, is a standard markup language for structuring and presenting content on the World Wide Web. HTML5 was officially released as a W3C Recommendation in October 2014, and it brings several new features and improvements over its predecessor, HTML4.'
    // },
    // {
    //     img: 'https://img.icons8.com/color/30/000000/css3.png',
    //     text: 'CSS 3',
    //     content: 'CSS (Cascading Style Sheets) is a style sheet language used for describing the look and formatting of a document written in HTML or XML. CSS3 is the latest version of CSS, bringing new features, enhancements, and capabilities to the language. CSS3 builds upon the foundation of CSS2 and introduces several advanced styling options and techniques. '
    // },
    {
        img: 'https://img.icons8.com/color/30/000000/graphql.png',
        text: 'GRAPHQL',
        content: 'GraphQL is a query language and runtime for APIs (Application Programming Interfaces) that was developed by Facebook. It provides a more efficient, powerful, and flexible alternative to traditional REST APIs. GraphQL allows clients to request only the data they need and receive a predictable, structured response, making it well-suited for building modern web and mobile applications'
    },
    // {
    //     img: 'https://img.icons8.com/color/30/000000/sass.png',
    //     text: 'SASS',
    //     content: 'Sass, which stands for "Syntactically Awesome Stylesheets," is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself. It provides mechanisms such as variables, nested rules, and mixins, making CSS more maintainable and easier to write.'
    // },
    {
        img: 'https://img.icons8.com/color/30/000000/r.png',
        text: 'R',
        content: 'R is a programming language and free software environment specifically designed for statistical computing and graphics. It is widely used by statisticians, data scientists, researchers, and analysts for tasks such as data analysis, statistical modeling, visualization, and machine learning. R provides a comprehensive set of tools for working with data, and it has a large and active community that contributes to its packages and ecosystem.'
    },
    {
        img: 'https://img.icons8.com/color/30/000000/python.png',
        text: 'PYTHON',
        content: 'Python is a high-level, versatile, and interpreted programming language known for its readability and ease of use. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Python has become one of the most popular programming languages, used in various domains such as web development, data science, artificial intelligence, scientific computing, automation, and more.'
    },
    {
        img: 'https://img.icons8.com/color/30/000000/mongodb.png',
        text: 'MONGO DB',
        content: 'MongoDB is a cross-platform, document-oriented NoSQL (Not Only SQL) database program. It falls under the category of NoSQL databases because it does not use the traditional relational database management system (RDBMS) structure. Instead, MongoDB stores data in flexible, JSON-like documents known as BSON (Binary JSON) that can vary in structure, allowing for a dynamic and scalable approach to data storage.'

    },
    {
        img: 'https://img.icons8.com/color/30/000000/nodejs.png',
        text: 'NODE JS',
        content: 'Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute server-side JavaScript code. It is built on the V8 JavaScript runtime engine, which is the same engine that powers the Google Chrome browser. Node.js enables the development of scalable and high-performance web applications by using an event-driven, non-blocking I/O model.'

    },
    // {
    //     img: 'https://img.icons8.com/color/30/000000/angularjs.png',
    //     text: 'ANGULAR',
    //     content:'Angular is a popular open-source web application framework developed and maintained by Google. It is written in TypeScript and allows developers to build dynamic, single-page web applications (SPAs) with a focus on creating a modular and maintainable codebase. Angular provides a comprehensive set of features for building modern, client-side web applications.'

    // },
    {
        img: 'https://img.icons8.com/color/30/000000/npm.png',
        text: 'NPM',
        content: 'NPM stands for Node Package Manager, and it is the default package manager for Node.js, a JavaScript runtime environment. NPM is used to manage and distribute packages (libraries and tools) written in JavaScript and intended for use with Node.js.'

    },
    // {
    //     img: 'https://img.icons8.com/color/30/000000/github.png',
    //     text: 'GITHUB',
    //     content:'GitHub is a web-based platform that provides a centralized repository hosting service for version control using Git. It is widely used by developers and teams to collaboratively work on software projects, track changes, and manage code repositories. GitHub offers a range of features to support collaboration, code review, issue tracking, and continuous integration.'

    // },
    // {
    //     img: 'https://img.icons8.com/fluency/30/figma.png',
    //     text: 'FIGMA',
    //     content:'Figma is a cloud-based design and prototyping tool that enables collaborative interface design and user experience (UI/UX) prototyping. It is commonly used by designers, developers, and teams to create, share, and iterate on designs in real-time. Figma\'s key feature is its cloud-based platform, which allows multiple users to collaborate on design projects simultaneously, fostering a seamless and efficient design process.'

    // },
    // {
    //     img: 'https://img.icons8.com/color/30/000000/adobe-illustrator.png',
    //     text: 'ADOBE ILLUSTRATOR',
    //     content:'Adobe Illustrator is a vector graphics editor developed and marketed by Adobe Inc. It is part of the Adobe Creative Cloud suite of design software, which also includes applications like Photoshop, InDesign, and Premiere Pro. Illustrator is widely used by graphic designers, illustrators, and artists to create scalable vector graphics for print and digital media.'

    // },
    // {
    //     img: 'https://img.icons8.com/color/30/000000/adobe-photoshop.png',
    //     text: 'ADOBE PHOTOSHOP',
    //     content:'Adobe Photoshop is a powerful raster graphics editor developed and published by Adobe Inc. It is widely used by designers, photographers, and artists for image editing, retouching, digital painting, and graphic design. Photoshop is a part of the Adobe Creative Cloud suite and is known for its extensive range of features and capabilities.'

    // },
    // {
    //     img: 'https://img.icons8.com/color/30/000000/linux.png',
    //     text: 'LINUX',
    //     content:'Linux is an open-source, Unix-like operating system kernel that serves as the foundation for a variety of free and open-source operating systems. It was created by Linus Torvalds in 1991 as a hobby project, and it quickly became a popular choice for operating systems due to its stability, security, and flexibility. Linux is known for its use in servers, embedded systems, and as an alternative operating system for personal computers.'

    // },
    // {
    //     img: 'https://img.icons8.com/color/30/000000/sublime-text.png',
    //     text: 'SUBLIME IDE',
    //     content:'Sublime Text is a sophisticated and widely used text editor, not an Integrated Development Environment (IDE). It is known for its speed, simplicity, and extensive plugin ecosystem. While Sublime Text provides many features commonly associated with IDEs, it lacks certain integrated tools specific to particular programming languages.'
    // },



    // Hosting
    // {
    //     img: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/30/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png',
    //     text: 'NETLIFY',
    //     content:'Netlify is a cloud platform that provides a range of services for building, deploying, and managing modern web projects. It is particularly known for its simplicity, automation, and integration with popular static site generators and modern web development workflows. Netlify supports both static and serverless (function-as-a-service) architectures, making it a popular choice for web developers and teams.'

    // },

    // Data Science
    {
        img: 'https://img.icons8.com/color/30/000000/tableau-software.png',
        text: 'TABLEAU',
        content: 'Tableau is a powerful data visualization and business intelligence (BI) platform that enables users to connect to, visualize, and share insights from their data. It allows individuals and organizations to create interactive and dynamic dashboards, reports, and visualizations to gain valuable insights into their data.'
    },

    // Editor
    // {
    //     img: 'https://img.icons8.com/fluency/30/visual-studio-code-2019.png',
    //     text: 'VS CODE',
    //     content:'Visual Studio Code (VS Code) is a free and open-source source code editor developed by Microsoft. It is lightweight, highly customizable, and supports a wide range of programming languages and extensions. VS Code is designed to provide developers with a productive environment for coding, debugging, and version control, making it one of the most popular code editors in the developer community.'

    // }
]

export default techStack