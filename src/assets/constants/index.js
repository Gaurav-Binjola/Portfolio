import { css, github, html, javascript, react, tailwind, linkden, contact, Email,nike,youtube,disney } from '../index'


export const navLinks = [
    { href: "home", label: "Home" },
    { href: "About", label: "About" },
    { href: "Skills", label: "Skills" },
    { href:"Work", label:"Work" },
    { href: "Contact", label: "Contact" },
];

export const appLinks = [
    { href: "/", label: "Linkden", icon: linkden },
    { href: "/", label: "Github", icon: github  },
    { href: "/", label: "Email", icon: Email  },
    { href: "/", label: "Contacts", icon: contact  },
]

export const skills =[
        {href: "/", label: "HTML" , icon: html },
        {href: "/", label: "CSS" , icon: css },
        {href: "/", label: "Javascript" , icon: javascript },
        {href: "/", label: "Github" , icon: github },
        {href: "/", label: "React" , icon: react },
        {href: "/", label: "Tailwind" , icon: tailwind},
]

export const project = [
        { label: "NIKE_CLONE", imgUrl: nike, demoUrl: "https://sensational-rabanadas-bd6ac0.netlify.app/", codeUrl: ""},
    { label: "YOUTUBE_CLONE ", imgUrl: youtube, demoUrl: "https://storied-platypus-616375.netlify.app/" , codeUrl: ""},
    { label: "DISNEY_CLONE", imgUrl: disney, demoUrl: "https://dancing-hummingbird-b05975.netlify.app/", codeUrl: ""},
    
    
]