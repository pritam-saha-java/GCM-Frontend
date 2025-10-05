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
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "register",
    title: "Register",
  },
  {
    id: "dashboard",
    title: "Dashboard",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Join Today",
    content: "Become a member in just a few minutes and start your sports journey.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Free Trial Session",
    content: "Experience our world-class facilities with a complimentary training session.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Choose Your Sport",
    content: "Select from multiple sports disciplines and start training immediately!",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content: "Red Riders has transformed my fitness journey. The coaching staff is exceptional, facilities are top-notch, and the community support is incredible. I've achieved milestones I never thought possible!",
    name: "Priya Sharma",
    title: "Badminton Enthusiast",
    img: people01,
  },
  {
    id: "feedback-2",
    content: "As a working professional, I struggled to find time for sports. Red Riders' flexible schedules and expert guidance helped me balance work and passion. The best decision I made for my health!",
    name: "Rajesh Kumar",
    title: "Pickel Ball Captain",
    img: people02,
  },
  {
    id: "feedback-3",
    content: "The community at Red Riders is like family. From beginners to pros, everyone supports each other. The state-of-the-art facilities and professional coaching have taken my game to the next level.",
    name: "Amit Singh",
    title: "Football Team Player",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Active Members",
    value: "500+",
  },
  {
    id: "stats-2",
    title: "Sports Disciplines",
    value: "12+",
  },
  {
    id: "stats-3",
    title: "Coaching Staff",
    value: "25+",
  },
  {
    id: "stats-4",
    title: "Years Established",
    value: "5+",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      {
        name: "Membership Plans",
        link: "/membership", 
      },
      {
        name: "Sports Facilities",
        link: "/facilities", 
      },
      {
        name: "Training Schedule",
        link: "/schedule", 
      },
      {
        name: "Coaching Staff",
        link: "/coaches", 
      }
    ],
  },
  {
    title: "Club Information",
    links: [
      {
        name: "About Red Riders",
        link: "/about", 
      },
      {
        name: "Gallery",
        link: "/gallery", 
      },
      {
        name: "Events & Tournaments",
        link: "/events", 
      },
      {
        name: "Achievements",
        link: "/achievements", 
      }
    ],
  },
  {
    title: "Support",
    links: [
      {
        name: "Privacy Policy",
        link: "/privacy-policy", 
      },
      {
        name: "Terms of Service",
        link: "/terms-of-service", 
      },
      {
        name: "FAQ",
        link: "/faq", 
      },
      {
        name: "Contact Us",
        link: "/contact", 
      }
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/RedRidersSportsClub",
    name: "Instagram"
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/RedRidersSportsClub",
    name: "Facebook"
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/RedRidersClub",
    name: "Twitter"
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/red-riders-sports-club",
    name: "LinkedIn"
  },
];

export const sportsPartners = [
  {
    id: "partner-1",
    logo: "🏏", // Cricket bat emoji as placeholder
    name: "Kolkata Cricket Association",
  },
  {
    id: "partner-2",
    logo: "⚽", // Football emoji as placeholder
    name: "West Bengal Football",
  },
  {
    id: "partner-3",
    logo: "🎾", // Tennis emoji as placeholder
    name: "Eastern Tennis Federation",
  },
  {
    id: "partner-4",
    logo: "🏸", // Badminton emoji as placeholder
    name: "State Badminton League",
  },
];

export const sportsDisciplines = [
  {
    id: "sport-1",
    name: "Cricket",
    icon: "🏏",
    description: "Professional coaching with net practice facilities"
  },
  {
    id: "sport-2",
    name: "Football",
    icon: "⚽",
    description: "Full-sized turf with professional training"
  },
  {
    id: "sport-3",
    name: "Badminton",
    icon: "🏸",
    description: "International standard courts"
  },
  {
    id: "sport-4",
    name: "Tennis",
    icon: "🎾",
    description: "Clay and hard courts available"
  },
  {
    id: "sport-5",
    name: "Basketball",
    icon: "🏀",
    description: "Indoor and outdoor courts"
  },
  {
    id: "sport-6",
    name: "Swimming",
    icon: "🏊",
    description: "Olympic-sized pool with coaches"
  },
];

export const contactInfo = [
  {
    id: "contact-1",
    type: "address",
    value: "Red Riders Sports Club, [Insert Address], Kolkata, India",
    icon: "📍"
  },
  {
    id: "contact-2",
    type: "phone",
    value: "+91-9874723221",
    icon: "📞"
  },
  {
    id: "contact-3",
    type: "email",
    value: "redriderssportsclub2023@gmail.com",
    icon: "✉️"
  },
  {
    id: "contact-4",
    type: "hours",
    value: "Mon-Sun: 5:00 AM - 10:00 PM",
    icon: "🕒"
  }
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