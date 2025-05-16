import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "clients",
    title: "Clients",
  },
  {
    id: "Register",
    title: "Register",
  },
  {
    id: "Dashboard",
    title: "Dashboard",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Register now",
    content:
      "Registration takes just a few minutes.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Get trial mining",
    content:
      "Find out how cloud mining works without any investment.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Create and purchase your contract.",
    content:
      "Start mining BTC today!",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "I've tried various mining websites,but this one is exceptional.Strong mining power,minimal downtime,transparent operations,and fair fees have significantly boosted my crypto holdings.",
    name: "Herman Jensen",
    title: "Cloud Miner",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "This mining website has a visually appealing interface with clear and understandable images and charts.My mining experience here has been smooth,allowing me to focus on my photography work while earning some additional income.",
    name: "Steve Mark",
    title: "Customer",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "If you need a dependable mining website,this one surpasses expectations.I've used it for months,and its consistent payouts and stable mining rigs make it a top choice for crypto mining.",
    name: "Kenn Gallagher",
    title: "Cloud Miner",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Site Links",
    links: [
      {
        name: "Set Meal",
        link: "/setmeal", 
      },
      {
        name: "About",
        link: "/about", 
      },
      {
        name: "FAQ",
        link: "/faq", 
      },
      {
        name: "Affiliate",
        link: "/affiliate", 
      }
    ],
  },
  {
    title: "Important Links",
    links: [
      {
        name: "Privacy and Policy",
        link: "/privacy-policy", 
      },
      {
        name: "Terms of Services",
        link: "/terms-of-service", 
      },
      {
        name: "What is cryptocurrency",
        link: "/what-is-cryptocurrency", 
      }
    ],
  },
  {
    title: "Contact",
    links: [
      {
        name: "support@gocloudmining.com",
        link: "mailto:support@gocloudmining.com",
      }
    ],
  },
];


export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
    name: "airbnb",
  },
  {
    id: "client-2",
    logo: binance,
    name: "binance",
  },
  {
    id: "client-3",
    logo: coinbase,
    name: "coinbase",
  },
  {
    id: "client-4",
    logo: dropbox,
    name: "dropbox",
  },
];