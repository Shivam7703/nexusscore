import {
  about,
  about2,
  aboutb,
  banner,
  banner2,
  banner3,
  bene2,
  blog3,
  box1,
  box2,
  box3,
  careerb,
  choose1,
  cl1,
  cl2,
  cl3,
  cl4,
  cl5,
  cl6,
  cl7,
  cl8,
  cl9,
  contactb,
  logo2,
  prob,
  process1,
  ukflag,
  usflag,
  visa1,
} from "@/assets";
import { title } from "process";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiCompass } from "react-icons/gi";
import { HiOutlineFlag, HiOutlineLightBulb } from "react-icons/hi";
import { MdAttachEmail, MdLocationCity, MdWifiCalling3 } from "react-icons/md";

// homepage
export const navigationMenu = {
  primaryMenu: [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About Us", href: "/about-us" },

    {
      id: 3,
      label: "Our Services",
      href: "#",
      subNav: [
        { id: 1, label: "IELTS", href: "/services/ielts" },
        { id: 2, label: "PTE Exam", href: "/services/pte-exam" },
        {
          id: 3,
          label: "Post Landing Assistance",
          href: "/services/post-landing-assistance",
        },
        {
          id: 4,
          label: "Job Assistance",
          href: "/services/job-assistance",
        },
        {
          id: 5,
          label: "Immigration Services",
          href: "/services/immigration-services",
        },
      ],
    },

    { id: 4, label: "Blogs", href: "/blogs" },
    { id: 5, label: "Contact Us", href: "/contact-us" },

    {
      id: 6,
      label: "Others",
      href: "#",
      subNav: [
        { id: 1, label: "Career", href: "/career" },
        { id: 2, label: "Success Stories", href: "/success-stories" },
        { id: 3, label: "Awards & Achievements", href: "/awards" },
        { id: 4, label: "Privacy & Policy", href: "/privacy-policy" },
      ],
    },
  ],

  secondaryMenu: [
    {
      id: 1,
      label: "Countries",
      href: "#",
      subNav: [
        {
          id: 1,
          label: "Canada",
          href: "#",
          subNav: [
            {
              id: 1,
              label: "Canada Permanent Residency Visa",
              href: "/visa/canada-pr-visa",
            },
            {
              id: 2,
              label: "Federal Skilled Worker Program (FSWP)",
              href: "/visa/fswp",
            },
            {
              id: 3,
              label: "Federal Skilled Trades Program (FSTP)",
              href: "/visa/fstp",
            },
            {
              id: 4,
              label: "Canadian Experience Class (CEC)",
              href: "/visa/cec",
            },
            {
              id: 5,
              label: "Global Talent Stream (GTS)",
              href: "/visa/global-talent-stream",
            },
            { id: 6, label: "Canada Super Visa", href: "/visa/super-visa" },
            {
              id: 7,
              label: "Canada Family Sponsorship Visa",
              href: "/visa/canada-family-sponsorship",
            },
            {
              id: 8,
              label: "Atlantic Immigration Pilot",
              href: "/visa/atlantic-immigration-pilot",
            },
            { id: 9, label: "Canada Spouse Visa", href: "/visa/spouse-visa" },
            {
              id: 10,
              label: "Rural Community Immigration Pilot",
              href: "/visa/rural-community-immigration-pilot",
            },
          ],
        },

        {
          id: 2,
          label: "Australia",
          href: "#",
          subNav: [
            {
              id: 1,
              label: "Australia Permanent Residency Visa",
              href: "/visa/australia-pr-visa",
            },
            {
              id: 2,
              label: "Skilled Independent Visa Subclass 189",
              href: "/visa/subclass-189",
            },
            {
              id: 3,
              label: "Skilled Nominated Visa Subclass 190",
              href: "/visa/subclass-190",
            },
            {
              id: 4,
              label: "Australia Subclass 491",
              href: "/visa/subclass-491",
            },
            {
              id: 7,
              label: "Australia Subclass 600",
              href: "/visa/subclass-600",
            },
            {
              id: 5,
              label: "Employer Nomination Subclass 186",
              href: "/visa/subclass-186",
            },
            {
              id: 6,
              label: "Australia Spouse Visa",
              href: "/visa/australia-spouse-visa",
            },
            {
              id: 8,
              label: "Skill Occupation List",
              href: "/visa/skill-occupation-list",
            },
            {
              id: 9,
              label: "Point System",
              href: "/visa/point-system",
            },
          ],
        },

        {
          id: 3,
          label: "Europe",
          href: "#",
          subNav: [
            {
              id: 1,
              label: "Germany Job Seeker Visa",
              href: "/visa/germany-job-seeker-visa",
            },
            { id: 2, label: "UK Work Permit", href: "/visa/uk-work-permit" },
            {
              id: 3,
              label: "Ireland Work Permit",
              href: "/visa/ireland-work-permit",
            },
            {
              id: 4,
              label: "Serbia Work Permit",
              href: "/visa/serbia-work-visa",
            },
            {
              id: 5,
              label: "Poland Work Permit",
              href: "/visa/poland-work-visa",
            },
            {
              id: 6,
              label: "Sweden Work Permit Visa",
              href: "/visa/sweden-work-visa",
            },
            {
              id: 7,
              label: "Norway Work Permit",
              href: "/visa/norway-work-visa",
            },
            {
              id: 8,
              label: "Malta Work Permit",
              href: "/visa/malta-work-permit",
            },
          ],
        },

        {
          id: 4,
          label: "GCC",
          href: "#",
          subNav: [
            { id: 1, label: "Qatar", href: "/visa/qatar-work-visa" },
            {
              id: 2,
              label: "Saudi Arabia",
              href: "/visa/saudi-arabia-work-visa",
            },
            { id: 3, label: "Oman", href: "/visa/oman-work-visa" },
            { id: 4, label: "UAE", href: "/visa/uae-work-visa" },
          ],
        },
      ],
    },

    {
      id: 2,
      label: "PNP Programs",
      href: "#",
      subNav: [
        { id: 1, label: "Ontario PNP Program", href: "/visa/ontario-pnp" },
        { id: 2, label: "Yukon Nominee Program", href: "/visa/yukon-pnp" },
        { id: 3, label: "NL PNP Program", href: "/visa/nl-pnp" },
        { id: 4, label: "Nova Scotia PNP", href: "/visa/nova-scotia-pnp" },
        { id: 5, label: "Alberta PNP", href: "/visa/alberta-pnp" },
        { id: 6, label: "Saskatchewan PNP", href: "/visa/saskatchewan-pnp" },
        {
          id: 7,
          label: "Quebec Skilled Worker Program",
          href: "/visa/quebec-skilled-worker-program",
        },
        { id: 8, label: "Manitoba PNP", href: "/visa/manitoba-pnp" },
        {
          id: 9,
          label: "New Brunswick PNP Program",
          href: "/visa/new-brunswick-pnp",
        },
        {
          id: 10,
          label: "Atlantic Immigration Program",
          href: "/visa/atlantic-immigration-program",
        },
        { id: 11, label: "PEI PNP Program", href: "/visa/pei-pnp" },
        { id: 12, label: "BC PNP Program", href: "/visa/bc-pnp" },
      ],
    },

    {
      id: 3,
      label: "Points Calculator",
      href: "#",
      subNav: [
        { id: 1, label: "CRS Points Calculator", href: "/calculator/crs" },
        {
          id: 2,
          label: "Quebec Points Calculator",
          href: "/calculator/quebec",
        },
        {
          id: 3,
          label: "Nova Scotia Points Calculator",
          href: "/calculator/nova-scotia",
        },
        {
          id: 4,
          label: "Manitoba Points Calculator",
          href: "/calculator/manitoba",
        },
        { id: 5, label: "SINP Points Calculator", href: "/calculator/sinp" },
        {
          id: 6,
          label: "Alberta Points Calculator",
          href: "/calculator/alberta",
        },
        {
          id: 7,
          label: "Ontario Points Calculator",
          href: "/calculator/ontario",
        },
        { id: 8, label: "BC Points Calculator", href: "/calculator/bc" },
      ],
    },

    {
      id: 4,
      label: "Permanent Residency",
      href: "#",
      subNav: [
        { id: 1, label: "Canada PR Visa", href: "/visa/canada-pr-visa" },
        { id: 2, label: "Australia PR Visa", href: "/visa/australia-pr-visa" },
      ],
    },

    {
      id: 5,
      label: "Work Visa",
      href: "#",
      subNav: [
        {
          id: 1,
          label: "Germany Job Seeker Visa",
          href: "/visa/germany-job-seeker-visa",
        },
        { id: 2, label: "UK Work Permit", href: "/visa/uk-work-permit" },
        {
          id: 3,
          label: "Ireland Work Permit",
          href: "/visa/ireland-work-permit",
        },
        { id: 4, label: "Serbia Work Permit", href: "/visa/serbia-work-visa" },
        { id: 5, label: "Poland Work Permit", href: "/visa/poland-work-visa" },
        {
          id: 6,
          label: "Sweden Work Permit Visa",
          href: "/visa/sweden-work-visa",
        },
        { id: 7, label: "Norway Work Permit", href: "/visa/norway-work-visa" },
        { id: 8, label: "Malta Work Permit", href: "/visa/malta-work-permit" },
        {
          id: 9,
          label: "Germany oportunity card",
          href: "/visa/malta-work-permit",
        },
        { id: 10, label: "Hong Kong", href: "/visa/malta-work-permit" },
        { id: 11, label: "Russia", href: "/visa/malta-work-permit" },
        { id: 12, label: "Singapore ", href: "/visa/malta-work-permit" },
        { id: 13, label: "Macau", href: "/visa/malta-work-permit" },
        { id: 14, label: "Taiwan", href: "/visa/malta-work-permit" },
        { id: 14, label: "Austria ", href: "/visa/malta-work-permit" },
        { id: 14, label: "Sweden", href: "/visa/malta-work-permit" },
        { id: 14, label: "Portugal", href: "/visa/malta-work-permit" },
      ],
    },

    {
      id: 6,
      label: "Visitor Visa",
      href: "#",
      subNav: [
        {
          id: 1,
          label: "Canada Tourist Visa",
          href: "/visa/canada-tourist-visa",
        },
        {
          id: 2,
          label: "Australia Tourist Visa",
          href: "/visa/australia-tourist-visa",
        },
        {
          id: 3,
          label: "Germany Tourist Visa",
          href: "/visa/germany-tourist-visa",
        },
        {
          id: 4,
          label: "Dubai Tourist Visa",
          href: "/visa/dubai-tourist-visa",
        },
        {
          id: 5,
          label: "Singapore Tourist Visa",
          href: "/visa/singapore-tourist-visa",
        },
        { id: 6, label: "UK Tourist Visa", href: "/visa/uk-tourist-visa" },
      ],
    },

    {
      id: 7,
      label: "Study Abroad",
      href: "#",
      subNav: [
        { id: 1, label: "Study In UK", href: "/study/uk" },
        { id: 2, label: "Study In Canada", href: "/study/canada" },
        { id: 3, label: "Study In Australia", href: "/study/australia" },
        { id: 4, label: "Study In Germany", href: "/study/germany" },
        { id: 5, label: "Study In Ireland", href: "/study/ireland" },
        { id: 6, label: "Study In France", href: "/study/france" },
        { id: 7, label: "Study In Dubai", href: "/study/dubai" },
        { id: 8, label: "Study In Finland", href: "/study/finland" },
      ],
    },
  ],
};

export const sliderContent = [
  {
    id: 1,
    img: banner,
    welcome: "Welcome To nexus International",
    title1: "Better care for crops, stronger yields with our ",
    title2: "trusted solutions",
    para:
      " Our Solutions Provide Everything your Crops Need, From Pest Protection to Essential Nutrients. Ensuring Healthy Growth and Higher Yields. ",
    btntext: "Explore More",
    href: "/products/herbicides",
  },
  {
    id: 2, // Fix duplicate id issue by using unique ids
    img: banner2,
    welcome: "Best Agri-input & Crop Protection Firm ",
    title1: "Helping farmers grow more with ",
    title2: "simple and effective products.",
    para:
      "Making farming simple and effective. Your crops will be protected while the soil gets nourished for increased production.",
    btntext: "Contact Us",
    href: "/contact-us",
  },
  {
    id: 3, // Fix duplicate id issue by using unique ids
    img: banner3,
    welcome: "Best Agri-input & Crop Protection Firm ",
    title1: "Leading the Future of Crop ",
    title2: "Protection & Growth",
    para:
      "Empowering farmers with innovative agri-solutions that ensure healthier crops and higher yields. Sustainable, effective, and farmer-focused—we help you grow with confidence.",
    btntext: "Contact Us",
    href: "/contact-us",
  },
];

export const aboutdata = {
  img1: about2,
  title1: "About our company",
  title2: "Thrusted visa & immig ration solutions",
  title3: " in Delhi",
  para:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of.",
  pointer: [
    {
      id: 1,
      heading: "Best consultancy agency",
      text:
        "Almost do am or limits hearts. Resolve parties but why she shewing.",
      icon: <GiCompass />,
    },
    {
      id: 2,
      heading: "Best consultancy agency",
      text:
        "Almost do am or limits hearts. Resolve parties but why she shewing.",
      icon: <GiCompass />,
    },
  ],
};

export const visaSliderdata = {
  title1: "Varieties of visa",
  title2: "Immigration Systems Are Dream Of Citizenship.",

  cards: [
    {
      id: 1,
      img: visa1,
      heading: "Tourist Visa",
      text:
        "Almost do am or limits hearts. Resolve parties but why she shewing.",
    },
    {
      id: 2,
      img: visa1,
      heading: "Tourist Visa",
      text:
        "Almost do am or limits hearts. Resolve parties but why she shewing.",
    },
    {
      id: 3,
      img: visa1,
      heading: "Tourist Visa",
      text:
        "Almost do am or limits hearts. Resolve parties but why she shewing.",
    },
    {
      id: 4,
      img: visa1,
      heading: "Tourist Visa",
      text:
        "Almost do am or limits hearts. Resolve parties but why she shewing.",
    },
    {
      id: 5,
      img: visa1,
      heading: "Tourist Visa",
      text:
        "Almost do am or limits hearts. Resolve parties but why she shewing.",
    },
  ],
};

export const countrytomigrate = {
  title1: "Countries We Offer",
  title2: "We Provide Expert Immigration And Destinations.",

  cards: [
    {
      id: 1,
      img: usflag,
      heading: "United States",
      link: "country/us",
      points: [
        "4 Years Business Visa",
        "Visa Apply Online",
        "Student Admission Visa",
        "24/7 Support",
      ],
    },
    {
      id: 2,
      img: ukflag,
      heading: "United Kingdom",
      link: "country/uk",
      points: [
        "4 Years Business Visa",
        "Visa Apply Online",
        "Student Admission Visa",
        "24/7 Support",
      ],
    },
    {
      id: 3,
      img: usflag,
      heading: "Canada",
      link: "country/canada",
      points: ["PR Pathways", "Express Entry", "Student Visa", "24/7 Support"],
    },
    {
      id: 4,
      img: ukflag,
      heading: "Australia",
      link: "country/australia",
      points: [
        "Skilled Migration",
        "Work Visa",
        "Student Visa",
        "24/7 Support",
      ],
    },
  ],
};

export const countDown = [
  { id: 1, icon: "+", title: " Worked With Clients", Value: "2000" },
  { id: 2, icon: "%", title: "Succesfull Process Rate", Value: "96" },
  { id: 3, icon: "hrs", title: "Application Approval Time", Value: "42" },
  {
    id: 4,
    icon: "+",
    title: "Countries Operationes",
    Value: "60",
  },
];

export const workingprocess = {
  title1: "Our Working Process",
  title2: "Get Your Visa Approved in 4 Easy Steps.",

  cards: [
    {
      id: 1,
      img: process1,
      heading: "Fill Application Form",
      text:
        "Immigration visa design support this services of business agency elit, sed to eiusmod majority have humour visa solution.",
    },
    {
      id: 2,
      img: process1,
      heading: "Fill Application Form",
      text:
        "Immigration visa design support this services of business agency elit, sed to eiusmod majority have humour visa solution.",
    },
    {
      id: 3,
      img: process1,
      heading: "Fill Application Form",
      text:
        "Immigration visa design support this services of business agency elit, sed to eiusmod majority have humour visa solution.",
    },
    {
      id: 4,
      img: process1,
      heading: "Fill Application Form",
      text:
        "Immigration visa design support this services of business agency elit, sed to eiusmod majority have humour visa solution.",
    },
    {
      id: 5,
      img: process1,
      heading: "Fill Application Form",
      text:
        "Immigration visa design support this services of business agency elit, sed to eiusmod majority have humour visa solution.",
    },
  ],
};

export const canadapnp = {
  title1: "Canada PNP Programs",
  title2: "Get Your Visa Approved in 4 Easy Steps.",

  cards: [
    {
      id: 1,
      img: box1,
      flag: usflag,
      heading: "Canada PNP Programs",
      text:
        "Immigration visa design support this services of business agency elit, sed to eiusmod majority have humour visa solution.",
      link: "/canada-pnp",
    },
    {
      id: 2,
      img: box2,
      flag: usflag,
      heading: "Canada PNP Programs",
      text:
        "Immigration visa design support this services of business agency elit, sed to eiusmod majority have humour visa solution.",
      link: "/canada-pnp",
    },
    {
      id: 3,
      img: box3,
      flag: usflag,
      heading: "Canada PNP Programs",
      text:
        "Immigration visa design support this services of business agency elit, sed to eiusmod majority have humour visa solution.",
      link: "/canada-pnp",
    },
    {
      id: 4,
      img: box1,
      flag: ukflag,
      heading: "Canada PNP Programs",
      text:
        "Immigration visa design support this services of business agency elit, sed to eiusmod majority have humour visa solution.",
      link: "/canada-pnp",
    },
    {
      id: 5,
      img: box2,
      flag: usflag,
      heading: "Canada PNP Programs",
      text:
        "Immigration visa design support this services of business agency elit, sed to eiusmod majority have humour visa solution.",
      link: "/canada-pnp",
    },
    {
      id: 6,
      img: box3,
      flag: usflag,
      heading: "Canada PNP Programs",
      text:
        "Immigration visa design support this services of business agency elit, sed to eiusmod majority have humour visa solution.",
      link: "/canada-pnp",
    },
  ],
};

export const Whychoose = {
  img: box1,

  title1: "Why Choose Us",
  title2: "Best immigration consultants",
  title3: " in Delhi",
  para:
    "Nexusscore oversease is here to help you make your dream of living or working abroad come true. With years of experience and a deep understanding of immigration rules and processes, we offer personalized support to match your specific needs. As the process can be overwhelming, we work closely with you to simplify every step, from visa paperwork to preparing for your move. Recognized as one of the best immigration consultants in Delhi, our goal is to guide you smoothly and confidently through your immigration journey, ensuring you always feel supported and informed along the way.",
  success: [
    { id: 1, value: "99%", text: "Visa Success Rate" },
    { id: 2, value: "100%", text: "Service Satisfaction" },
    { id: 3, value: "100%", text: "Transparency" },
  ],
};

export const testimonialData = {
  title1: "Testimonial",
  title2: "What Our Client Says",
  testimonials: [
    {
      title: "Rajiv Dixit",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: cl1,
    },
    {
      title: "Rajiv Dixit",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: cl1,
    },
    {
      title: "Rajiv Dixit",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: cl1,
    },
    {
      title: "Rajiv Dixit",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: cl1,
    },
  ],
};

export const HomefaqData = {
  title1: "FAQs",
  title2: "Frequently Asked ",
  title3: " Questions",

  para1:
    "Immigration visa tailored design, management & support services building in some we form, by injected humour solution.",
  Counts: [
    {
      value: "70",
      title: "Immigration",
    },
    {
      value: "85",
      title: "Immigration",
    },
    {
      value: "90",
      title: "Immigration",
    },
  ],
  para2:
    "We strongly support best practice sharing across our A visa is temporary permission to enter a country for a specific purpose operations around the world visa.",
  faqs: [
    {
      que: "Can I Edit Every Section Easily?",
      ans:
        "Yes, every section in VisaNet HTML files is fully editable, layered, and grouped for easy customization, seamless updates, quick modifications, and complete design flexibility for all developers.",
    },
    {
      que: "Can I Edit Every Section Easily?",
      ans:
        "Yes, every section in VisaNet HTML files is fully editable, layered, and grouped for easy customization, seamless updates, quick modifications, and complete design flexibility for all developers.",
    },
    {
      que: "Can I Edit Every Section Easily?",
      ans:
        "Yes, every section in VisaNet HTML files is fully editable, layered, and grouped for easy customization, seamless updates, quick modifications, and complete design flexibility for all developers.",
    },
    {
      que: "Can I Edit Every Section Easily?",
      ans:
        "Yes, every section in VisaNet HTML files is fully editable, layered, and grouped for easy customization, seamless updates, quick modifications, and complete design flexibility for all developers.",
    },
    {
      que: "Can I Edit Every Section Easily?",
      ans:
        "Yes, every section in VisaNet HTML files is fully editable, layered, and grouped for easy customization, seamless updates, quick modifications, and complete design flexibility for all developers.",
    },
  ],
};

export const footer = {
  logo: logo2,
  text:
    "nexus delivers reliable crop protection solutions with advanced insecticides, herbicides, and fungicides to support Tanzanian farmers and boost yields.",

  socials: {
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com//",
    linkedin: "https://www.linkedin.com/school//",
    youtube: "https://www.youtube.com/c/",
  },
  copyrightText: "Copyrights © 2024 . Designed and Manage by ",
  list1: {
    title: "Our Services",
    links: [
      { id: 1, label: "IELTS", href: "about" },
      { id: 2, label: "PTE Exam", href: "career" },
      { id: 3, label: "Post Landing Assistance", href: "sustainability" },
      { id: 4, label: "Job Assistance", href: "blogs" },
      { id: 5, label: "Immigration Services", href: "contact-us" },
    ],
  },

  list2: {
    title: "Our Services",
    links: [
      { id: 1, label: "IELTS", href: "about" },
      { id: 2, label: "PTE Exam", href: "career" },
      { id: 3, label: "Post Landing Assistance", href: "sustainability" },
      { id: 4, label: "Job Assistance", href: "blogs" },
      { id: 5, label: "Immigration Services", href: "contact-us" },
    ],
  },

  newLetter: {
    title: "Contact Us",
  },
};

export let blogData = {
  title1: "Latest Blogs",
  title2: "Get Updated With Our Recent Articles",
  blog: [
    {
      img: box3,
      date: "20th June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Application",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: box3,
      date: "20th June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Application",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: box3,
      date: "20th June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Application",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: box3,
      date: "20th June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Application",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: box3,
      date: "20th June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Application",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
  ],
};

// about us
export const mission = {
  img: box1,
  title1: "Mission & Vision",
  title2: "Get Updated With Our",
  title3: "Vision & Mission",
  vision: [
    {
      icon: HiOutlineLightBulb,
      heading: "Our Vision",
      para:
        "To be the leading provider of innovative and sustainable crop protection solutions, empowering farmers worldwide to achieve optimal yields and contribute to global food security.",
    },
    {
      icon: HiOutlineFlag,
      heading: "Our Mission",
      para:
        "To be the leading provider of innovative and sustainable crop protection solutions, empowering farmers worldwide to achieve optimal yields and contribute to global food security.",
    },
  ],
};

export const whychooseus = {
  title1: "Why Choose Us",
  img: bene2,
  points: [
    {
      icon: <FaGlobeAmericas />,
      heading: "Global Expertise",
      para:
        "With a presence in over 50 countries, we bring global expertise to local farming communities, ensuring our solutions are tailored to diverse agricultural needs.",
    },
    {
      icon: <FaGlobeAmericas />,
      heading: "Global Expertise",
      para:
        "With a presence in over 50 countries, we bring global expertise to local farming communities, ensuring our solutions are tailored to diverse agricultural needs.",
    },
    {
      icon: <FaGlobeAmericas />,
      heading: "Global Expertise",
      para:
        "With a presence in over 50 countries, we bring global expertise to local farming communities, ensuring our solutions are tailored to diverse agricultural needs.",
    },
    {
      icon: <FaGlobeAmericas />,
      heading: "Global Expertise",
      para:
        "With a presence in over 50 countries, we bring global expertise to local farming communities, ensuring our solutions are tailored to diverse agricultural needs.",
    },
  ],
};

// contat Us
export const contactBanner = {
  title: "Contact Us",
  para:
    "Connect With nexus For Reliable Crop Protection & Farming Support. We're Here to Help Your Agriculture Thrive With Expert Solutions.",
  slug: "contact-us",
  img: contactb,
};

export const contactsec1 = {
  title: "Contact Details",
  para:
    "Please contact us, We are sure that you can receive our reply as soon as possible.",
  detail: [
    {
      id: 1,
      icon: <MdWifiCalling3 />,
      title: "Call Us",
      text: [
        { id: 1, text: "Head Office: - 0676200772" },
        { id: 2, text: "Masasi - 0659965129" },
        { id: 3, text: "Mbeya - 0677048455" },
        { id: 4, text: "Njombe - 0677025245" },
        { id: 5, text: "Kigoma - 0679513203" },
        { id: 6, text: "Head Sales - 0679513203, 0677066361" },
        { id: 7, text: "Moshi - 0677141102, 0677047881" },
      ],
      slug: "tel: 0676200772",
    },
    {
      id: 2,
      icon: <MdAttachEmail />,
      title: "Email Us",
      text: [{ id: 1, text: "info@nexuscoreoverseas.com" }],
      slug: "mailto:info@nexuscoreoverseas.com",
    },
    {
      id: 3,
      icon: <FaMapLocationDot />,
      title: "Address1",
      text: [
        {
          id: 1,
          text:
            "302-A, Elegant House, 28A Kipawa Industrial Area, Nyerere Road, Dar Es Salaam, Tanzania, P.O. Box 75641",
        },
      ],
      slug: "#",
    },
    {
      id: 3,
      icon: <MdLocationCity />,
      title: "Address2",
      text: [
        {
          id: 1,
          text:
            "22, Plot No. 2360/75 E Vingunguti, Pugu Road, Dar Es Salaam, Tanzania, P.O. Box 75641",
        },
      ],
      slug: "#",
    },
  ],
};
