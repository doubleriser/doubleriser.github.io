/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "doubleriser's Portfolio",
  description:
    "A passionate and skilled individual full stack | blockchain developer.",
  og: {
    title: "doubleriser Portfolio",
    type: "website",
    url: "http://api.doubleriser.com/",
  },
};

//Home Page
const greeting = {
  title: "doubleriser",
  logo_name: "doubleriser",
  nickname: "doubleriser",
  subTitle:
    "A passionate and skilled individual full stack | blockchain developer.",
  resumeLink:
    "https://drive.google.com/file",
  portfolio_repository: "https://github.com/doubleriser",
  githubProfile: "https://github.com/doubleriser",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/doubleriser",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Discord",
    link: "https://discordapp.com/users/1122036487861571655",
    fontAwesomeIcon: "fa-discord", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/doubleriser",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
   
  {
    name: "Gmail",
    link: "mailto:wj.coriser@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Telegram",
    link: "https://t.me/doubleriser",
    fontAwesomeIcon: "fa-telegram", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Skype",
    link: "live:.cid.ec2e234fe89d8a7a",
    fontAwesomeIcon: "fa-skype", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
 
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Crafting pixel-perfect frontend experiences with React.js/Next.js, Vue.js, Angular, and React Native.",
        "⚡ Developing powerful web backends using Node.js/Nest.js, PHP (Laravel & Codeignitor), Python (Django & FastAPI), Golang (Gin-Gonic), C#, and Java (Spring).",
        "⚡ Setting up robust e-commerce platforms with WordPress (WooCommerce), Shopify, and Magento.",
        "⚡ Delivering mobile solutions using React Native and Framework7.",
        "⚡ Ensuring smooth performance and scalability with frameworks like Laravel, Codeignitor, Django, FastAPI, and more.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Blockchain technologies",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Network : Ethereum, BSC, Polygon, Arbitrum, Cosmos, APTOS, Sui, zkSync era, XRP, Algorand, Polkadot, Near",
        "⚡ Language : Solidity/Rust + web3.js/ethers.js, Golang, Move, C++, Java, Python, Hardhat, truffle, remix",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/doubleriser_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@doubleriser391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "BACH KHOA UNIVERSITY",
      subtitle: "B.Tech. in Computer Engineering",
       
      alt_name: "IIITDM Kurnool",
      duration: "2011 - 2016",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Algorithms, DBMS, OS etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
     
    },
    {
      title: "Union University",
      subtitle: "M.S. in Computer Science",
      
      alt_name: "Union University",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ I have taken varity of courses related to communication fields which correspond to information communication network, the performance engineering of software system etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with vehicles diagnostices software. As part of it, I have worked on some documentry films and interviews.",
      ],
    },
  ],
};

 

// Experience Page
const experience = {
  title: "Experience",
 
  description:
    "I have worked with many evolving startups as blockchain developer and full stack Developer.  I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full stack developer", 
          logo_path: "muffito_logo.png",
          description:
            "I love to build well-structured, clean code and clean repositories with maintainable and scalable structure, functional environment with an emphasis on using best practices to develop high-quality software that meets project requirements ",
          color: "#9b1578",
        },
        {
          title: "Blockchain Developer",
          logo_path: "legato_logo.png",
          description:
            "Platforms like DEX, DeFi, DAO, NFT marketplace and P2E crypto games. on any EVM  type networks and Cosmos type chains.",
          color: "#0879bf",
        }
      ] 
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of vast variety of latest technology. My best experience is to create web apps.",
  avatar_image_path: "projects_image.svg",
};
// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "snowmancto.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 7 hours. I can help you with Blockchain, Full stack Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.doubleriserhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
     
     
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  experience,
  projectsHeader,

  contactPageData,
};
