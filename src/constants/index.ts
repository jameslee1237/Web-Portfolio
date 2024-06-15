export const experiences = [
    {
        id: "1",
        title: "Database Administrator",
        summary: "MySQL",
        date: "Jul 2020 - Feb 2022"
    },
    {
        id: "2",
        title: "Software Engineer",
        summary: "Python",
        date: "Apr 2022 - Jul 2022"
    },
]

export const TAB_DATA = [
    {
        title: "Skill",
        id: "skills",
        content: ["Next.js", "Typescript", "CSS", "MySQL", "Tensorflow", "Python", "Docker", "MongoDB"]
    },
    {
        title: "Education",
        id: "education",
        content: ["University College London - London (BSc Computer Science)", "HELP College - Kuala Lumpur (A-Levels)"]
    },
]

export const skill_level = [
    '45%',
    '55%',
    '65%',
    '50%',
    '35%',
    "80%",
    '60%',
    '40%'
]

export const projects = [
    {
        id: "1",
        image: "Portfolio",
        start_date: "March 1, 2024",
        brief: "Mobile responsive web portfolio using Next.js",
        skill: ["Next.js", "Typescript", "CSS"]
    },
    {
        id: "2",
        image: "DreamCanvas",
        start_date: "March 14, 2024",
        brief: "Instagram-inspired social media platform using Next.js, Prisma and MongoDB",
        skill: ["Next.js", "MongoDB", "Prisma"]
    }
]

export const experienceDetails = [
    {
        id: "1",
        title: "Database Administrator",
        description: [`Responsible for inspection and maintenance of different servers including database server
                       on a daily basis including backup for server for recovery procedures with minimum loss of 
                       information`, "Manage control of access to the network and server via allocation of user access rights",
                       "Provide assistance in management of IP address for specific devices in the network",
                       "Utilize various software and hardware for configuration of new devices and maintenance of existing computers and devices.",
                       "Train other members in security policies and procedures",
                     ],
        Date: "August 2020 to February 2022",
        Hire: "Republic of Korea Army",
        src:  ["/ExpIcon1.png", "/ExpIcon2.png", "/ExpIcon3.png", "/ExpIcon4.png", "/ExpIcon5.png"]
    },
    {
        id: "2",
        title: "Software Engineer",
        description: [`Responsible for development of software allowing management and access to certain data
                       company holds`,
                      `Trained staffs in overall usage of software including installation, error detection and 
                       production of instructional manuals`, 
                      `Interact with staffs during development to update requirements, give feedback on testing 
                       procedures and ensure final product met operational targets`
                     ],
        Date: "April 2022 to July 2022",
        Hire: "NSKorea",
        src: ["/ExpIcon6.png", "/ExpIcon7.png", "/ExpIcon8.png"]
    },
]

export const projectDetails = [
    {
        id: "1",
        title: 'Mobile Responsive Web Portfolio',
        description: `The aim of this project is to develop a mobile-responsive web portfolio in a visually appealing and user-friendly manner. 
                      By leveraging Tailwind CSS's responsive utilities, I aim to create a portfolio that dynamically adjusts its 
                      layout and design based on the screen size, providing a seamless and consistent experience across smartphones, tablets, and desktops.`,
        FI: `While Tailwind css provides a largely seamless experience across different screen sizes using fixed breakpoints, since these breakpoints
             have fixed values, some content may not be displayed optimally on certain devices. To address this, implementing more dynamic and 
             device-specific breakpoints would enhance the portfolio's adaptabiltiy and user experience. By incorporating device detection or media queris, 
             the portfolio could adjust its layout more precisely.`,
        slides: [
                    { src: "/Project1_Image1.png", width: 1920, height: 1020},
                    { src: "/Project1_Image2.png", width: 1920, height: 1020},
                    { src: "/Project1_Image3.png", width: 1920, height: 1020},
                    { src: "/Project1_Image4.png", width: 1920, height: 1020},
                    { src: "/Project1_Image5.png", width: 1920, height: 1020},
                    { src: "/Project1_Image6.png", width: 1920, height: 1020},
                    { src: "/Project1_Image7.png", width: 1920, height: 1020},
                    { src: "/Project1_Image8.png", width: 1920, height: 1020},
                ]
    },
    {
        id: "2",
        title: "DreamCanvas", 
        description: `DreamCanvas is a social media platform inspired by Instagram, designed to provide users with a platform to share their
                      creative works and connect with other users. The platform is built using Next.js, Prisma, and MongoDB, and features a
                      user-friendly interface that allows users to easily upload and share their content, follow other users, and interact with
                      posts through likes and comments.`,
        FI: `While DreamCanvas provides a user-friendly platform for sharing and connecting with other users, the platform could be further
             enhanced by implementing security measures such as utilziing tokens for HTTP requests and encrypting user data to protect user privacy.
             Additionally, implementing a more robust notification system to alert users of new likes, comments, and followers would enhance the user experience`,
        slides: [
            { src: "/Project2_Image1.png", width: 1920, height: 1020},
        ],
        link: "https://dream-canvas-two.vercel.app"

    },
]
