import {
  about2,
  banner,
  banner2,
  banner3,
  bene2,
  box1,
  box2,
  box3,
  cl1,
  cl2,
  cl3,
  cl4,
  cl5,
  cl6,
  immigration, Career, ielts, jobAssist, PostLanding ,profile, pte ,visaDocument, famvisa, prvisa, business,touristvisa,
  contactb,
  logo2,
  process1,
  ukflag,
  visa1,
  canadaflag,
  ontario,
  bcPnpProgram,
  alberta,
  novaScotia,
  manitoba,
  saskatchewanPnp,
  process4,
  process2,
  process3,
  pnp1,
  pnp2,
  pnp3,
  pnp4,
  pnp5,
  pnp6,
  choose1,
  germanyflag,
  dubaiflag,
  australiaflag,
  missio,
  bene3,
  bene4,
} from "@/assets";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaEye, FaGlobeAmericas, FaPlaneDeparture, FaUserCheck, } from "react-icons/fa";
import { FaArrowUpRightDots, FaMapLocationDot } from "react-icons/fa6";
import { HiOutlineFlag, HiOutlineLightBulb } from "react-icons/hi";
import { IoPersonSharp, IoSearch, IoSettingsOutline } from "react-icons/io5";
import { MdAttachEmail,  MdEventNote,  MdWifiCalling3 } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiUserFollowLine } from "react-icons/ri";

// homepage
export const navigationMenu = {
  primaryMenu: [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About Us", href: "/about-us" },

    {
      id: 3,
      label: "Our Services",
      href: "/services",
      subNav: [
        { id: 1, label: "IELTS", href: "/services/IELTS Coaching & Preparation" },
        { id: 2, label: "PTE Exam", href: "/services/PTE Exam Coaching & Preparation" },
        {
          id: 3,
          label: "Post Landing Assistance",
          href: "/services/Post-Landing Assistance",
        },
        {
          id: 4,
          label: "Job Assistance",
          href: "/services/Job Assistance",
        },
        {
          id: 5,
          label: "Immigration Services",
          href: "/services/Immigration",
        },
         {
          id: 6,
          label: "Profile Evaluation",
          href: "/services/Profile Evaluation",
        },
         {
          id: 7,
          label: "Career Counselling",
          href: "/services/Career Counselling",
        },
         {
          id: 8,
          label: "Visa Documentation",
          href: "/services/Visa Documentation",
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
              label: "Federal Skilled Worker Program",
              href: "/visa/federal-skilled-worker-program",
            },
            {
              id: 3,
              label: "Federal Skilled Trades Program (FSTP)",
              href: "/visa/federal-skilled-trades-program",
            },
            {
              id: 4,
              label: "Canadian Experience Class (CEC)",
              href: "/visa/canadian-experience-class",
            },
            {
              id: 5,
              label: "Global Talent Stream (GTS)",
              href: "/visa/global-talent-stream",
            },
            { id: 6, label: "Canada Super Visa", href: "/visa/canada-super-visa" },
            {
              id: 7,
              label: "Canada Family Sponsorship Visa",
              href: "/visa/canada-family-sponsorship-visa",
            },
            {
              id: 8,
              label: "Atlantic Immigration Pilot",
              href: "/visa/atlantic-immigration-pilot",
            },
            { id: 9, label: "Canada Spouse Visa", href: "/visa/canada-spouse-visa" },
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
              href: "/visa/Australia Permanent Residency Visa",
            },
            {
              id: 2,
              label: "Skilled Independent Visa Subclass 189",
              href: "/visa/Skilled Independent Visa Subclass 189",
            },
            {
              id: 3,
              label: "Skilled Nominated Visa Subclass 190",
              href: "/visa/Skilled Nominated Visa Subclass 190",
            },
            {
              id: 4,
              label: "Australia Subclass 491",
              href: "/visa/Australia Subclass 491 Visa",
            },
            {
              id: 7,
              label: "Australia Subclass 600",
              href: "/visa/Australia Subclass 600",
            },
            {
              id: 5,
              label: "Employer Nomination Subclass 186",
              href: "/visa/Employer Nomination Subclass 186",
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
              label: "Australia Point System",
              href: "/visa/Australia Point System",
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
              href: "/visa/Serbia Work Permit",
            },
            {
              id: 5,
              label: "Poland Work Permit",
              href: "/visa/Poland Work Permit",
            },
            {
              id: 6,
              label: "Sweden Work Permit Visa",
              href: "/visa/Sweden Work Permit Visa",
            },
            {
              id: 7,
              label: "Norway Work Permit",
              href: "/visa/Norway Work Permit",
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
        { id: 1, label: "Ontario PNP Program", href: "/visa/Ontario PNP Program" },
        { id: 2, label: "Yukon Nominee Program", href: "/visa/Yukon Nominee Program" },
        { id: 3, label: "NL PNP Program", href: "/visa/Newfoundland and Labrador PNP Program" },
        { id: 4, label: "Nova Scotia PNP", href: "/visa/nova-scotia-pnp" },
        { id: 5, label: "Alberta PNP", href: "/visa/alberta-pnp" },
        { id: 6, label: "Saskatchewan PNP", href: "/visa/saskatchewan-pnp" },
        {
          id: 7,
          label: "Quebec Skilled Worker Program",
          href: "/visa/quebec-skilled-worker-program",
        },
        { id: 8, label: "Manitoba PNP", href: "/visa/Manitoba PNP Draw" },
        {
          id: 9,
          label: "New Brunswick PNP Program",
          href: "/visa/New Brunswick PNP Program",
        },
        {
          id: 10,
          label: "Atlantic Immigration Program",
          href: "/visa/atlantic-immigration-program",
        },
        { id: 11, label: "PEI PNP Program", href: "/visa/PEI PNP Program" },
        { id: 12, label: "BC PNP Program", href: "/visa/BC PNP Program" },
      ],
    },

    {
      id: 3,
      label: "Points Calculator",
      href: "#",
      subNav: [
        { id: 1, label: "CRS Points Calculator", href: "/visa/CRS Points Calculator" },
        {
          id: 2,
          label: "Quebec Points Calculator",
          href: "/visa/Quebec Points Calculator",
        },
        {
          id: 3,
          label: "Nova Scotia Points Calculator",
          href: "/visa/Nova Scotia Points Calculator",
        },
        {
          id: 4,
          label: "Manitoba Points Calculator",
          href: "/visa/Manitoba Points Calculator",
        },
        { id: 5, label: "SINP Points Calculator", href: "/visa/SINP Points Calculator" },
        {
          id: 6,
          label: "Alberta Points Calculator",
          href: "/visa/Alberta Points Calculator",
        },
        {
          id: 7,
          label: "Ontario Points Calculator",
          href: "/visa/Ontario Points Calculator",
        },
        { id: 8, label: "BC Points Calculator", href: "/visa/BC Points Calculator" },
      ],
    },

    {
      id: 4,
      label: "Permanent Residency",
      href: "#",
      subNav: [
        { id: 1, label: "Canada PR Visa", href: "/visa/canada-pr-visa" },
        { id: 2, label: "Australia PR Visa", href: "/visa/Australia Permanent Residency Visa" },
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
        { id: 4, label: "Serbia Work Permit", href: "/visa/Serbia Work Permit" },

        { id: 5, label: "Poland Work Permit", href: "/visa/Poland Work Permit" },
        {
          id: 6,
          label: "Sweden Work Permit Visa",
          href: "/visa/Sweden Work Permit Visa",
        },
        { id: 7, label: "Norway Work Permit", href: "/visa/Norway Work Permit" },
        { id: 8, label: "Malta Work Permit", href: "/visa/malta-work-permit" },
        {
          id: 9,
          label: "Germany oportunity card",
          href: "/visa/Germany Opportunity Card",
        },
        { id: 10, label: "Hong Kong Work Permit", href: "/visa/Hong Kong Work Permit" },
        { id: 11, label: "Russia Work Permit", href: "/visa/Russia Work Permit" },
        { id: 12, label: "Singapore Work Permit", href: "/visa/Singapore Work Permit" },
        { id: 13, label: "Macau Work Permit", href: "/visa/Macau Work Permit" },
        { id: 14, label: "Taiwan Work Permit", href: "/visa/Taiwan Work Permit" },
        { id: 14, label: "Austria Work Permit", href: "/visa/Austria Work Permit" },
        { id: 14, label: "Sweden", href: "/visa/Sweden Work Permit Visa" },
        { id: 14, label: "Portugal", href: "/visa/Portugal Work Permit" },
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
        { id: 1, label: "Study In UK", href: "/visa/Study In UK" },
        { id: 2, label: "Study In Canada", href: "/visa/Study In Canada" },
        { id: 3, label: "Study In Australia", href: "/visa/Study In Australia" },
        { id: 4, label: "Study In Germany", href: "/visa/Study In Germany" },
        { id: 5, label: "Study In Ireland", href: "/visa/Study In Ireland" },
        { id: 6, label: "Study In France", href: "/visa/France Study Visa" },
        { id: 7, label: "Study In Dubai", href: "/visa/Study In Dubai" },
        { id: 8, label: "Study In Finland", href: "/visa/Finland Study Visa" },
      ],
    },
  ],
};

export const sliderContent = [
  {
    id: 1,
    img: bene4,

  },
  {
    id: 2, // Fix duplicate id issue by using unique ids
    img: bene3,
  
  },
  {
    id: 3, // Fix duplicate id issue by using unique ids
    img: banner3,
   
  },
];

export const aboutdata = {
  img1: about2,
  title1: "ABOUT US",
  title2: "Trusted & Expert Immigration ",
  title3: "Consultant",
  href:"/about-us",
  para:
    "We deliver reliable, results-oriented immigration solutions backed by expert guidance, ethical practices, and structured processes. Recognized for offering the best immigration consultants in Noida, we support individuals and families from visa planning to final submission, ensuring clarity, confidence, and complete professional assistance throughout the process.",
  pointer: [
    {
      id: 1,
      heading: "Transparency",
      text:
        "Clear processes, honest advice, and no hidden commitments.",
      icon: <IoSearch />
,
    },
    {
      id: 2,
      heading: "Client Satisfaction",
      text:
        "Focused on results, trust, and long-term client success.",
      icon: <RiUserFollowLine />,
    },
  ],
};


export const aboutdata2 = {
  img1: about2,
  title1: "ABOUT US",
  title2: "Leading Immigration ",
  title3: "Consultancy",
  para:
    "Focused on clarity and compliance, we are the best immigration consultants in Noida, delivering profile-based immigration guidance and end-to-end visa support. Our expert team follows ethical practices and structured processes to help individuals and families achieve global opportunities with confidence.",

  pointer: [
    {
      id: 1,
      heading: "Leading Immigration Consultancy",
      text:
        "Delivering ethical guidance, expert support, and reliable solutions for global immigration success.",
      icon: <FaPlaneDeparture />,
    },
    {
      id: 2,
      heading: "Immigration Solutions That Work",
      text:
        "Structured processes and expert guidance to help you move abroad with confidence.",
      icon: <IoSettingsOutline />
,
    },
  ],
};

export const visaSliderdata = {
  title1: "Wide Range of Visa Options",
  title2: "Structured Immigration Services for PR and Citizenship",

  cards: [
    {
      id: 1,
      img: visa1,
      href:"/visa/uk-work-permit",
      heading: "Work Visa",
      text:
        "Support for work visa applications with proper documents and employer-compliant immigration procedures.",
    },
    {
      id: 2,
      img: prvisa,      href:"/visa/canada-pr-visa",

      heading: "Permanent Residency Visa",
      text:
        "Guidance to apply for permanent residency through structured programs and accurate profile submission.",
    },
    {
      id: 3,
      img: famvisa,      href:"/visa/canada-family-sponsorship-visa",

      heading: "Family Sponsorship Visa",
      text:
        "Help families reunite abroad through legal sponsorship filing and complete documentation support.",
    },
    {
      id: 4,
      img: business,      href:"/visa/germany-job-seeker-visa",

      heading: "Business & Investor Visa",
      text:
        "Assistance for investors and entrepreneurs applying through approved business and investment immigration routes.",
    },
    {
      id: 5,
      img:touristvisa,
      heading: "Tourist / Visitor Visa",      href:"/visa/canada-tourist-visa",

      text:
        "Simple assistance for visitor visa applications with clear guidance and timely submission.",
    },
  ],
};

export const countrytomigrate = {
  title1: "Countries We Offer",
  title2: "We Provide Expert Immigration And Destinations.",

  cards: [
    {
      id: 1,
      img: germanyflag,
      heading: "Germany",
      link: "/visa/germany-job-seeker-visa",
      points: [
        "Job Seeker Visa",
        "Work Opportunities",
        "EU Career Access",
        "24/7 Support",
      ],
    },
    {
      id: 2,
      img: dubaiflag,
      heading: "Dubai",
      link: "/visa/dubai-tourist-visa",
      points: [
        "4 Years Business Visa",
        "Simple Online Process",
        "Student Visa Available",
        "24/7 Assistance",
      ],
    },
     {
      id: 2,
      img: ukflag,
      heading: "United Kingdom",
      link: "/visa/uk-work-permit",
      points: [
        "4 Years Business Visa",
        "Simple Online Process",
        "Student Visa Available",
        "24/7 Assistance",
      ],
    },
    {
      id: 3,
      img: canadaflag,
      heading: "Canada",
      link: "/visa/canada-pr-visa",
      points: ["PR Pathways", "Express Entry", "Student Visa", "24/7 Support"],
    },
    {
      id: 4,
      img: australiaflag,
      heading: "Australia",
      link: "/visa/australia-tourist-visa",
      points: [
        "Skilled Migration",
        "Work Visa Options",
        "Student Visa",
        "24/7 Support",
      ],
    },
  ],
};

export const countDown = [
  { id: 1, icon: "+", title: " Clients Served", Value: "2000" },
  { id: 2, icon: "%", title: "Success Rate", Value: "96" },
  { id: 3, icon: "hrs", title: "Average Approval Time", Value: "42" },
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
      heading: "Initial Consultation",
      text:
        "Discuss your goals and assess eligibility for the best visa option.",
    },
    {
      id: 2,
      img: process2,
      heading: "Document Preparation",
      text:
        "Gather and organize all required documents for a smooth application.",
    },
    {
      id: 3,
      img: process3,
      heading: "Application Submission",
      text:
        "Submit your visa application accurately with expert guidance and follow-up.",
    },
    {
      id: 4,
      img: process4,
      heading: "Approval & Support",
      text:
        "Receive visa approval and get assistance with post-landing formalities.",
    },
    
  ],
};

export const canadapnp = {
  title1: "Canada PNP Programs",
  title2: "Offering skilled workers and entrepreneurs a route to Canadian residency.",

  cards: [
    {
      id: 1,
      img: ontario,
      flag: pnp1,
      heading: "Ontario Immigrant Nominee Program (OINP) ",
      points:[
       "• Processing: 3–6 Months" , "• High Nomination Quota"
      ],
      text:
        "Provincial nomination for skilled workers to live and work in Ontario.",
      link: "/visa/ontario-pnp-program",
    },
    {
      id: 2,
      img: bcPnpProgram,
      flag: pnp2,
      heading: "British Columbia PNP (BC PNP)",
      points:[
       "• Processing: 2–4 Months" , "• Regular Invitation Rounds"
      ],
      text:
        "Nominations for skilled workers and entrepreneurs targeting opportunities in British Columbia.",
      link: "/visa/bc-pnp-program",
    },
    {
      id: 3,
      img: alberta,
      flag: pnp3,
      heading: "Alberta Immigrant Nominee Program (AINP)",
      points:[
       "• Processing: 4–6 Months" , "• Lower CRS Possibility"
      ],
      text:
        "Streamlined immigration for workers with skills needed in Alberta’s labor market.",
      link: "/visa/alberta-pnp",
    },
    {
      id: 4,
      img: saskatchewanPnp,
      flag: pnp4,
      heading: "Saskatchewan Immigrant Nominee Program (SINP)",points:[
       "• Processing: 2–5 Months" , "• In-Demand Occupation Stream"
      ],
      text:
        "Offers pathways for workers, entrepreneurs, and farmers to settle in Saskatchewan.",
      link: "/visa/saskatchewan-pnp",
    },
    {
      id: 5,
      img: manitoba,
      flag: pnp5,
      heading: "Manitoba Provincial Nominee Program (MPNP)",points:[
       "• Processing: 3–5 Months" , "• Strong Provincial Support"
      ],
      text:
        "Supports skilled workers and international graduates aiming to live in Manitoba.",
      link: "/canada-pnp",
    },
    {
      id: 6,
      img: novaScotia,
      flag: pnp6,
      heading: "Nova Scotia Nominee Program (NSNP)",points:[
       "• Processing: 3–6 Months" , "• Express Entry Priority"
      ],
      text:
        "Nomination stream focused on attracting workers and graduates to Nova Scotia.",
      link: "/visa/manitoba-pnp-draw",
    },
  ],
};


export const Whychoose = {
  img: choose1,

  title1: "Why Choose Us",
  title2: "India’s Best immigration consultants ",
  title3: "",
  para:
    "Nexuscore Overseas, the immigration consultants in Noida, offers reliable and result-driven immigration solutions backed by experienced professionals and transparent processes. We focus on profile-based guidance, accurate documentation, and legal compliance to ensure smooth visa applications. With a client-first approach, ethical practices, and personalized support, we help individuals and families in Noida achieve their global immigration goals with confidence and clarity.",

  success: [
    { id: 1, value: "100%", text: "Visa Success Rate" },
    { id: 2, value: "100%", text: "Clients Satisfaction" },
    { id: 3, value: "100%", text: "Transparency" },
  ],
};


export const testimonialData = {
  title1: "Testimonial",
  title2: "What Our Client Says",
  testimonials: [
  {
    title: "Rishika Dixit",
    text:
      "Nexuscore guided my Canada PR smoothly with honest advice, clear timelines, and perfect documentation. Truly the best immigration consultants in Noida for anyone seeking transparent, professional, and reliable immigration support.",
    img: cl1,
  },
  {
    title: "Mohan Rane",
    text:
      "Excellent support for my work permit application. The team explained every step, handled documents professionally, and kept me updated. Their guidance reduced stress and helped me make confident decisions abroad.",
    img: cl2,
  },
  {
    title: "Aarti Saini",
    text:
      "Nexuscore helped us reunite through family sponsorship with clear communication and ethical advice. We experienced the best Visa consultants in Noida, with personalized attention and smooth processing throughout the entire journey.",
    img: cl3,
  },
  {
    title: "Sam Goyal",
    text:
      "From IELTS coaching to visa filing, the service was professional and supportive. Trainers and consultants worked together to strengthen my profile and guide me confidently toward my overseas goals successfully.",
    img: cl4,
  },
],

};

export const HomefaqData = {
  title1: "FAQs",
  title2: "Frequently Asked ",
  title3: " Questions",

  para1:
    "Our Frequently Asked Questions section answers common concerns about visas, eligibility, timelines, and documentation. ",
  Counts: [
    {
      value: 100,
      title: "Expert Guidance",
    },
    {
      value: 96,
      title: "Personalized Support",
    },
    {
      value: 94,
      title: "Global Expertise",
    },
  ],
  para2:
    "Designed to offer clarity and transparency, it helps you make informed decisions while choosing the Right immigration consultants in Noida for your global plans.",
 faqs: [
  {
    que: "How do I know which visa is right for me?",
    ans:
      "Visa selection depends on your age, education, work experience, language ability, and future goals. Our experts evaluate your complete profile and suggest the most suitable and compliant visa pathway, ensuring you receive the best immigration consultants.",
  },
  {
    que: "Can you guarantee visa approval?",
    ans:
      "No legitimate consultant can legally guarantee visa approval. We focus on correct documentation, ethical guidance, and proper program selection to maximize success while strictly following immigration laws and professional standards.",
  },
  {
    que: "Can you help if my application was refused?",
    ans:
      "Yes, we review refused applications to identify errors, gaps, or compliance issues. Our consultants suggest corrective strategies, improve documentation, and guide you on reapplication or alternative visa options to strengthen your chances of success.",
  },
  {
    que: "Why should I use a Nexuscore instead of applying on my own?",
    ans:
      "Immigration rules are complex and constantly changing. Nexuscore provides expert guidance, accurate documentation, and profile-based strategies to reduce mistakes, avoid refusals, and ensure your application meets legal and procedural requirements confidently.",
  },
  {
    que: "What does a Nexuscore Overseas consultant do?",
    ans:
      "A Nexuscore Overseas consultant evaluates your profile, recommends suitable visa pathways, manages documentation, files applications accurately, and provides continuous guidance from initial assessment to final decision, ensuring transparency, compliance, and personalized support throughout your immigration journey.",
  },
],
};

export const footer = {
  logo: logo2,
  text:
    "Nexuscore is a trusted consulting firm delivering reliable immigration and visa solutions through expert guidance, transparent processes, and personalized support, helping individuals and families achieve their global aspirations with confidence.",

  socials: {
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com//",
    linkedin: "https://www.linkedin.com/school//",
    youtube: "https://www.youtube.com/c/",
  },
  copyrightText: "Copyrights © 2026 . Designed and Manage by ",
  list1: {
    title: "Our Services",
    links: [
      { id: 1, label: "IELTS", href: "/services/ielts-coaching-preparation" },
        { id: 2, label: "PTE Exam", href: "/services/pte-exam-coaching-preparation" },
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
          href: "/services/immigration",
        },
         {
          id: 6,
          label: "Profile Evaluation",
          href: "/services/profile-evaluation",
        },
         {
          id: 7,
          label: "Career Counselling",
          href: "/services/career-counselling",
        },
         {
          id: 8,
          label: "Visa Documentation",
          href: "/services/visa-documentation",
        },
    ],
  },

  list2: {
    title: "Useful Links",
    links: [
      { id: 1, label: "About Us", href: "/about-us" },
      { id: 2, label: "Blogs", href: "/blogs" },
      { id: 3, label: "Join Us", href: "/career" },
      { id: 5, label: "Our Services", href: "/services" },
      { id: 7, label: "Valuable Testimonials", href: "/success-stories" },
      { id: 4, label: "Privacy & Policy", href: "/privacy-policy" },

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
      date: "20 June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Name",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: box3,
      date: "20 June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Category",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: box3,
      date: "20 June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Section",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: box3,
      date: "20 June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Application",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: box3,
      date: "20 June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Country",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
  ],
};

// about us
export const mission = {
  img: missio,
  title1: "Mission & Vision",
  title2: "Our Vision and ",
  title3: "Mission Statement",
  vision: [
    {
      icon: HiOutlineLightBulb,
      heading: "Our Vision",
      para:
        "Our vision is to become a trusted global name in immigration consulting by guiding people with honesty, clarity, and confidence. We aim to simplify complex immigration processes and help individuals and families build secure futures abroad through ethical practices and informed decision-making.",
    },
    {
      icon: HiOutlineFlag,
      heading: "Our Mission",
      para:
        "Our mission is to provide transparent, profile-based immigration guidance tailored to every client’s goals. We focus on accuracy, compliance, and continuous support at every stage, ensuring our clients feel informed, supported, and confident as they pursue opportunities across international borders.",
    },
  ],
};

export const whychooseus = {
  title1: "Why Choose Us",
  img: bene2,
  points: [
    {
      icon: <FaEye />
,
      heading: "Transparent & Ethical Guidance",
      para:
        "We operate as immigration consultants in Noida, offering honest advice, compliant processes, realistic timelines, and clear communication throughout the application journey.",
    },
    {
      icon: <IoPersonSharp />,
      heading: "Profile-Based Strategy",
      para:
        "Our team works as visa consultants in Noida, delivering profile-based strategies, accurate documentation, and program selection aligned with immigration regulations.",
    },
    {
      icon: <BsFillPersonCheckFill />,
      heading: "Experienced Professionals",
      para:
        "Experienced immigration consultants in Noida manage applications with regulatory knowledge, structured workflows, attention to detail, and consistent follow-ups for outcomes.",
    },
    {
      icon: <PiPhoneCallFill />
,
      heading: "End-to-End Support",
      para:
        "As visa consultants in Noida, we provide end-to-end support from assessment to post-landing assistance, ensuring clients are informed, supported, and confident.",
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


 export const contactdetail = [
    {
      icon: <MdWifiCalling3 />,
      title: "Call Us",
      text: "+919311936564",
      slug: "tel:+919311936564",
    },
    {
      icon: <MdAttachEmail />,
      title: "Email Us",
      text: "info@nexuscoreoverseas.com",
      slug: "mailto:info@nexuscoreoverseas.com",
    },
    {
      icon: <FaMapLocationDot />,
      title: "Location",
      text: "H-150, H Block, Sector 63, Noida, Uttar Pradesh 210012",
      slug: "#",
    },]

    // services
    export const serviceData = {
      title1: "Our Services",
      title2: "Smart solutions for global immigration",
     
      services: [
        {
    title: "IELTS Coaching & Preparation",
    text: "Eligibility assessment and guidance",
    img: ielts,
  },
  {
    title: "PTE Exam Coaching & Preparation",
    text: "Eligibility assessment and guidance",
    img: pte,
  },
  {
    title: "Profile Evaluation",
    text: "Eligibility assessment and guidance",
    img: profile,
  },
  {
    title: "Career Counselling",
    text: "Career planning and advice",
    img: Career,
  },
  {
    title: "Immigration",
    text: "Structured migration pathways",
    img: immigration,
  },
  {
    title: "Visa Documentation",
    text: "Accurate document preparation",
    img: visaDocument,
  },
  {
    title: "Job Assistance",
    text: "International employment guidance",
    img: jobAssist,
  },
  {
    title: "Post-Landing Assistance",
    text: "Settlement and integration assistance",
    img: PostLanding,
  },
],

    };

  export const servicechoose = {
  img: choose1,
  title1: "Why Choose Us",
  title2: "Why Choose Nexuscore Overseas For Your ",
  title3: "Immigration Pathway?",
  para:
    "We provide structured, transparent immigration solutions designed to help individuals and families move abroad confidently through expert guidance, ethical practices, and end-to-end professional support.",

  vision: [
    {
      icon: FaUserCheck 
,
      heading: "Professional Immigration Expertise",
      para:
        "Customized guidance based on your profile and current international regulations.",
    },
    {
      icon: FaArrowUpRightDots,
      heading: "Clear & Honest Procedures",
      para:
        "Well-defined steps, realistic timelines, and fully compliant documentation.",
    },
    {
      icon: MdEventNote,
      heading: "Complete Application Assistance",
      para:
        "Support provided from initial assessment to final visa approval.",
    },
  ],
};
