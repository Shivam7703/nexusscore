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
  blog1,
  blog2,
  blog3,
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
      link: "/visa/manitoba-pnp-draw",
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
      link: "/visa/nova-scotia-pnp",
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
    facebook: "https://www.facebook.com/people/Nexuscore-Overseas/61584980835224/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/nexuscoreoverseas/",
    linkedin: "https://www.linkedin.com/company/nexuscore-overseas/",
    youtube: "https://www.youtube.com/channel/UCPSj50kebcg2h11n3tnQmrA",
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
  blog : [
  {
  "img": blog1,
  "title": "Canada Tourist Visa Processing Time",
  tag:"Immigration",
  date:"20 Jan 2026",
    "metatitle": "Canada Tourist Visa Processing Time Guide 2026",
  "metakey": "Canada Tourist Visa Processing Time",
  "metadesc": "Know Canada tourist visa processing time in 2026, delays, tips, and expert guidance to speed up your visa approval process easily.",
  "content": [
    {
      "subcontent": [
        {
          "para": "Planning a trip to Canada is exciting, but one of the most common concerns applicants face is understanding the Canada Tourist Visa Processing Time. Whether you are visiting family, exploring scenic landscapes, or attending an event, knowing how long your visa might take is crucial for planning your travel."
        },
        {
          "para": "In this detailed guide, we break down everything you need to know about Canada Tourist Visa Processing Time, including timelines, influencing factors, delays, and expert tips to avoid rejections."
        }
      ]
    },
    {
      "heading": "<h1>What is Canada Tourist Visa Processing Time in 2026?</h1>",
      "subcontent": [
        {
          "para": "The Canada Tourist Visa Processing Time refers to the duration it takes for immigration authorities to review and decide on your visitor visa application after submission. As of 2026, the average Canada Tourist Visa Processing Time for applicants from India typically ranges between:"
        },
        {
          "table": {
            "theading": ["Application Type", "Processing Time"],
            "rows": [
              { "colum": ["Online Application", "20 to 45 days"] },
              { "colum": ["Paper Application", "30 to 60 days"] },
              { "colum": ["Biometrics Processing", "1 to 2 weeks"] }
            ]
          }
        },
        {
          "para": "These timelines are indicative and may vary depending on multiple factors. Understanding these variations helps you plan your travel without last-minute stress."
        }
      ]
    },
    {
      "heading": "<h2>Why Processing Time Varies So Much</h2>",
      "subcontent": [
        {
          "para": "The Canada Tourist Visa Processing Time is not fixed because each application is unique. Immigration officers evaluate several factors before making a decision. Here are the main reasons why your visa timeline may differ:"
        },
        {
          "list": [
            "Application Volume – During peak travel seasons like summer and holidays, the number of applications increases significantly, which directly impacts the Canada Tourist Visa Processing Time.",
            "Applicant Profile – Your travel history, financial stability, and ties to your home country play a big role. Strong profiles are usually processed faster.",
            "Documentation Accuracy – Incomplete or incorrect documents can delay the Canada Tourist Visa Processing Time, as officers may request additional information.",
            "Background Verification – Some applications require deeper verification checks, increasing the overall Canada Tourist Visa Processing Time."
          ]
        }
      ]
    },
    {
      "heading": "<h3>Step-by-Step Breakdown of the Processing Timeline</h3>",
      "subcontent": [
        {
          "para": "Understanding each stage can give you clarity on how the Canada Tourist Visa Processing Time is calculated."
        },
        {
          "subheading": "Step 1: Application Submission",
          "para": "Once you submit your application online or offline, it enters the processing queue."
        },
        {
          "subheading": "Step 2: Biometrics Collection",
          "para": "You will be asked to provide fingerprints and a photo. This step directly affects the Canada Tourist Visa Processing Time if delayed."
        },
        {
          "subheading": "Step 3: Document Review",
          "para": "Immigration officers review your financials, travel purpose, and supporting documents."
        },
        {
          "subheading": "Step 4: Background Check",
          "para": "Security and eligibility checks are conducted to ensure authenticity."
        },
        {
          "subheading": "Step 5: Final Decision",
          "para": "You receive approval, rejection, or a request for additional documents, which can extend the Canada Tourist Visa Processing Time."
        }
      ]
    },
    {
      "heading": "<h4>Latest Trends Affecting Processing Time in 2026</h4>",
      "subcontent": [
        {
          "para": "The Canada Tourist Visa Processing Time has evolved due to changing immigration trends. Here are some key updates:"
        },
        {
          "list": [
            "Increased digital processing has improved speed for online applications.",
            "Higher scrutiny for first-time travelers.",
            "Faster processing for applicants with strong travel history.",
            "Delays still possible due to global application surges."
          ]
        },
        {
          "para": "Being aware of these trends can help you better estimate your Canada Tourist Visa Processing Time."
        }
      ]
    },
    {
      "heading": "<h5>Common Reasons for Delays You Should Avoid</h5>",
      "subcontent": [
        {
          "para": "Many applicants unknowingly increase their Canada Tourist Visa Processing Time due to avoidable mistakes. Here are some common issues:"
        },
        {
          "list": [
            "Submitting incomplete documents",
            "Providing an unclear travel purpose",
            "Weak financial proof",
            "Lack of strong ties to the home country",
            "Errors in the application form"
          ]
        },
        {
          "para": "Avoiding these mistakes ensures your Canada Tourist Visa Processing Time stays within the expected range."
        }
      ]
    },
    {
      "heading": "<h6>Expert Tips to Speed Up Your Visa Process</h6>",
      "subcontent": [
        {
          "para": "If you want to reduce your Canada Tourist Visa Processing Time, follow these proven strategies:"
        },
        {
          "list": [
            "Apply Early – Always apply at least 2–3 months before your travel date to manage unexpected delays in Canada Tourist Visa Processing Time.",
            "Submit Complete Documentation – Ensure all required documents are accurate and up-to-date.",
            "Show Strong Financial Stability – Clear proof of funds improves credibility and reduces scrutiny.",
            "Maintain Travel History – Previous international travel can positively influence your Canada Tourist Visa Processing Time.",
            "Opt for Online Application – Online applications are generally processed faster compared to paper-based submissions."
          ]
        }
      ]
    },
    {
      "heading": "<p>How Long Does It Take After Biometrics?</p>",
      "subcontent": [
        {
          "para": "After biometrics, the Canada Tourist Visa Processing Time usually ranges between 10 to 25 days. However, this depends on your profile and document verification. Applicants often assume biometrics is the final step, but background checks and eligibility assessments still impact the total Canada Tourist Visa Processing Time."
        }
      ]
    },
    {
      "heading": "<p>What Happens If Your Visa Gets Delayed?</p>",
      "subcontent": [
        {
          "para": "If your Canada Tourist Visa Processing Time exceeds the expected duration, you can:"
        },
        {
          "list": [
            "Check your application status online",
            "Respond quickly to any additional document requests",
            "Avoid reapplying unless it's necessary"
          ]
        },
        {
          "para": "Delays do not always mean rejection, but patience and proper follow-up are key."
        }
      ]
    },
    {
      "heading": "<h3>Why Choose NexusCore Overseas?</h3>",
      "subcontent": [
        {
          "para": "When it comes to handling visa applications professionally, choosing the right guidance can make a huge difference in your Canada Tourist Visa Processing Time. NexusCore Overseas stands out as one of the most reliable immigration consultants in Noida, offering:"
        },
        {
          "list": [
            "Personalized visa consultation based on your profile",
            "Accurate documentation support to avoid delays",
            "High success rate with strategic application handling",
            "Transparent process with regular updates",
            "Expert guidance to minimize risks and refusals"
          ]
        },
        {
          "para": "Their professional approach ensures your Canada Tourist Visa Processing Time remains smooth and stress-free."
        }
      ]
    },
    {
      "subcontent": [
        {
          "para": "Canada not only offers beautiful landscapes and vibrant cities but also a welcoming environment for visitors from around the world. Understanding your Canada Tourist Visa Processing Time is the first step toward a successful trip."
        }
      ]
    }
  ],
  "faq": [
    {
      "que": "How long does Canada tourist visa processing take in 2026?",
      "ans": "The Canada Tourist Visa Processing Time usually ranges between 20 to 45 days for online applications from India. However, delays may occur depending on application volume, documentation accuracy, and background verification requirements."
    },
    {
      "que": "Can I speed up my Canada tourist visa processing?",
      "ans": "While there is no official fast-track option, submitting complete documents, applying early, and maintaining a strong profile can help reduce your Canada Tourist Visa Processing Time significantly."
    },
    {
      "que": "Does biometrics affect processing time?",
      "ans": "Yes, biometrics is a mandatory step, and delays in completing it can increase the Canada Tourist Visa Processing Time. Once completed, processing continues with document verification and background checks."
    },
    {
      "que": "Why is my Canada tourist visa taking longer than expected?",
      "ans": "Your Canada Tourist Visa Processing Time may be longer due to high application volumes, additional document requests, or extended background checks. Each application is reviewed individually, which can affect timelines."
    }
  ]
},

{
  "img": blog2,
  "title": "How to Get a Job in Ireland from India",
   tag:"Job in Ireland",
  date:"24 Feb 2026",
  "metatitle": "How to Get Job in Ireland from India: Guide 2026",
  "metakey": "Job in Ireland from India",
  "metadesc": "Learn how to get a job in Ireland from India with a step-by-step guide, visa process, tips, and high-demand jobs for Indian professionals in 2026.",
  "content": [
    {
      "subcontent": [
        {
          "para": "Ireland is quickly becoming one of the top destinations for skilled professionals. With strong economic growth, global companies, and high-paying roles, many Indians are now exploring how to secure a job in Ireland from India. If you're planning your move, this guide will walk you through everything—from eligibility and job search strategies to visa processes and expert tips."
        },
        {
          "para": "One of the biggest advantages of pursuing a job in Ireland from India is the presence of top multinational companies and a strong demand for skilled talent across sectors like IT, healthcare, finance, and engineering. Ireland's structured hiring system, transparent visa process, and English-speaking environment make it easier for Indian professionals to adapt and succeed without facing major cultural or language barriers."
        },
        {
          "para": "Additionally, Ireland offers long-term career growth and settlement opportunities. With options like the Critical Skills Employment Permit, professionals can eventually apply for permanent residency, making a job in Ireland from India not just a short-term move but a strategic step toward a stable international career with excellent work-life balance."
        }
      ]
    },
    {
      "heading": "<h1>Why Ireland is the New Career Hotspot</h1>",
      "subcontent": [
        {
          "para": "Ireland is home to some of the world's biggest companies in tech, finance, and healthcare. This makes finding a job in Ireland from India more achievable than ever before. Here's why professionals are choosing Ireland:"
        },
        {
          "list": [
            "High demand for skilled workers",
            "Attractive salary packages",
            "English-speaking environment",
            "Strong work-life balance",
            "Easy access to other European countries"
          ]
        },
        {
          "para": "All these factors make pursuing a job in Ireland from India a smart career move in 2026."
        }
      ]
    },
    {
      "heading": "<h2>Top Industries Hiring Indians in Ireland</h2>",
      "subcontent": [
        {
          "para": "Before applying, it's important to understand where the opportunities lie for a job in Ireland from India."
        },
        {
          "subheading": "Most In-Demand Sectors",
          "table": {
            "theading": ["Industry", "Popular Roles"],
            "rows": [
              { "colum": ["IT & Tech", "Software Developer, Data Analyst"] },
              { "colum": ["Healthcare", "Nurses, Care Assistants"] },
              { "colum": ["Finance", "Accountants, Financial Analysts"] },
              { "colum": ["Engineering", "Civil and Mechanical Engineers"] },
              { "colum": ["Pharma", "Lab Technicians, Researchers"] }
            ]
          }
        },
        {
          "para": "Targeting the right industry increases your chances of landing a job in Ireland from India faster."
        }
      ]
    },
    {
      "heading": "<h3>Step-by-Step Process to Get a Job</h3>",
      "subcontent": [
        {
          "para": "Let's break down the exact steps you need to follow to secure a job in Ireland from India."
        },
        {
          "subheading": "Step 1: Build a Strong Resume",
          "para": "Your resume should follow international standards. Highlight skills, achievements, and experience relevant to the Irish job market. A strong CV is your first step toward getting a job in Ireland from India."
        },
        {
          "subheading": "Step 2: Apply Through Trusted Job Portals",
          "para": "Use platforms like LinkedIn, Indeed Ireland, and IrishJobs.ie. Consistent applications improve your chances of getting a job in Ireland from India."
        },
        {
          "subheading": "Step 3: Secure a Job Offer",
          "para": "To legally work, you must first receive an offer from an Irish employer. This is a critical requirement for a job in Ireland from India."
        },
        {
          "subheading": "Step 4: Apply for Work Permit",
          "para": "After getting an offer, apply for a work permit. The most common types are Critical Skills Employment Permit and General Employment Permit. Your permit approval is essential for starting your job in Ireland from India."
        },
        {
          "subheading": "Step 5: Apply for a visa",
          "para": "Once your permit is approved, you can apply for an Ireland work visa and prepare for relocation."
        }
      ]
    },
    {
      "heading": "<h4>Types of Work Permits in Ireland</h4>",
      "subcontent": [
        {
          "para": "Choosing the right permit is crucial when planning a job in Ireland from India."
        },
        {
          "subheading": "Critical Skills Employment Permit",
          "para": "For high-demand roles. Minimum salary requirement applies. Faster PR pathway."
        },
        {
          "subheading": "General Employment Permit",
          "para": "For broader job categories. Requires employer sponsorship. Renewable and flexible."
        },
        {
          "para": "Selecting the right permit simplifies your journey to a job in Ireland from India."
        }
      ]
    },
    {
      "heading": "<p>Documents Required for Job and Visa</p>",
      "subcontent": [
        {
          "para": "Proper documentation is key to avoiding delays while applying for a job in Ireland from India."
        },
        {
          "subheading": "Essential Documents",
          "list": [
            "Updated resume",
            "Valid passport",
            "Job offer letter",
            "Educational certificates",
            "Work experience proof",
            "Financial documents"
          ]
        },
        {
          "para": "Having complete documents ensures a smoother process for your job in Ireland from India."
        }
      ]
    },
    {
      "heading": "<h5>Latest Trends in Ireland Job Market 2026</h5>",
      "subcontent": [
        {
          "para": "The job market is evolving, and staying updated can improve your chances of securing a job in Ireland from India."
        },
        {
          "subheading": "Key Trends",
          "list": [
            "Increased hiring in AI and Data Science",
            "Demand for healthcare professionals is rising",
            "Hybrid work opportunities expanding",
            "Preference for skilled and experienced candidates"
          ]
        },
        {
          "para": "Understanding these trends helps you plan better for a job in Ireland from India."
        }
      ]
    },
    {
      "heading": "<h6>Common Challenges and How to Overcome Them</h6>",
      "subcontent": [
        {
          "para": "While opportunities are high, applicants may face challenges when applying for a job in Ireland from India."
        },
        {
          "subheading": "Common Issues",
          "list": [
            "Lack of international experience",
            "Employer sponsorship difficulty",
            "Resume mismatch with job roles"
          ]
        },
        {
          "subheading": "How to Overcome",
          "list": [
            "Upskill with certifications",
            "Tailor your CV for each job",
            "Apply consistently and strategically"
          ]
        },
        {
          "para": "These steps can significantly improve your chances of getting a job in Ireland from India."
        }
      ]
    },
    {
      "heading": "<p>Expert Tips to Increase Your Chances</p>",
      "subcontent": [
        {
          "para": "Want to stand out in a competitive market? Follow these tips for securing a job in Ireland from India:"
        },
        {
          "list": [
            "Customize your CV for Irish employers.",
            "Build a strong LinkedIn profile",
            "Network with professionals in Ireland",
            "Apply early and regularly",
            "Prepare well for interviews"
          ]
        },
        {
          "para": "Smart planning makes your journey to a job in Ireland from India faster and smoother."
        }
      ]
    },
    {
      "heading": "<p>Salary Expectations in Ireland</p>",
      "subcontent": [
        {
          "para": "Understanding salary ranges helps you plan financially when aiming for a job in Ireland from India."
        },
        {
          "table": {
            "theading": ["Job Role", "Average Salary (Per Year)"],
            "rows": [
              { "colum": ["Software Engineer", "€45,000 – €75,000"] },
              { "colum": ["Nurse", "€30,000 – €50,000"] },
              { "colum": ["Accountant", "€40,000 – €65,000"] },
              { "colum": ["Engineer", "€50,000 – €80,000"] }
            ]
          }
        },
        {
          "para": "Higher salaries and career growth make securing a job in Ireland from India highly rewarding."
        }
      ]
    },
    {
      "heading": "<h3>Why Choose NexusCore Overseas?</h3>",
      "subcontent": [
        {
          "para": "Finding the right guidance can make all the difference in your journey to securing a job in Ireland from India."
        },
        {
          "list": [
            "Personalized job assistance based on your profile",
            "End-to-end visa and documentation support",
            "Strong network with international employers",
            "High success rate in work permit approvals",
            "Transparent and professional process"
          ]
        },
        {
          "para": "With expert support, your path to a job in Ireland from India becomes easier, faster, and more reliable."
        }
      ]
    }
  ],
  "faq": [
    {
      "que": "Is it easy to get a job in Ireland from India?",
      "ans": "Getting a job in Ireland from India is possible with the right skills and approach. High-demand sectors like IT and healthcare offer better chances, especially if you have relevant experience and a strong application profile."
    },
    {
      "que": "Do I need a job offer before applying for a visa?",
      "ans": "Yes, you must secure a job offer before applying for a work permit and visa. Without an offer, you cannot proceed with your application for a job in Ireland from India legally."
    },
    {
      "que": "Which jobs are in demand in Ireland for Indians?",
      "ans": "Roles in IT, healthcare, engineering, and finance are highly in demand. These sectors provide better opportunities for candidates seeking a job in Ireland from India with competitive salaries and growth prospects."
    },
    {
      "que": "How long does the process take?",
      "ans": "The complete process for a job in Ireland from India can take 2 to 6 months, depending on job search time, permit processing, and visa approval timelines."
    }
  ]
},

{
  "img": blog3,
  "title": "UK Work Visa Without a Job Offer",
   tag:"Uk Work Visa",
  date:"09 Apr 2026",
  "metatitle": "UK Work Visa Without Job Offer Guide 2026",
  "metakey": "UK Work Visa",
  "metadesc": "Get UK work visa without job offer in 2026. Learn eligibility, visa types, process, and expert tips to work in the UK easily.",
  "content": [
    {
      "subcontent": [
        {
          "para": "Dreaming of working in the UK but don't have a job offer yet? The good news is that securing a UK Work Visa without employer sponsorship is now possible through pathways like the High Potential Individual, Global Talent, and Graduate visas. These options focus on your skills and qualifications rather than a specific employer, allowing you to enter the UK, explore opportunities, and switch roles once you arrive, especially in high-demand sectors like IT, healthcare, and finance."
        },
        {
          "para": "If you're planning your move, understanding eligibility, visa types, and the application process is essential. Preparing accurate documents, highlighting your skills, and staying updated with immigration rules can improve your chances of success. A well-planned approach ensures your UK Work Visa application is smooth, efficient, and aligned with your long-term career goals in the UK."
        }
      ]
    },
    {
      "heading": "<h1>Is It Really Possible Without a Job Offer?</h1>",
      "subcontent": [
        {
          "para": "Yes, it is absolutely possible to apply for a UK Work Visa without having a confirmed job. The UK government has introduced visa routes that focus on skills, qualifications, and potential rather than employer sponsorship. These visa options are ideal for individuals who want to enter the UK job market and search for opportunities after arrival, making the UK Work Visa more accessible than before."
        }
      ]
    },
    {
      "heading": "<h2>Top Visa Options You Should Know</h2>",
      "subcontent": [
        {
          "para": "If you're aiming for a UK Work Visa without a job offer, here are the most popular pathways:"
        },
        {
          "subheading": "High Potential Individual (HPI) Visa",
          "para": "This visa is designed for graduates from top global universities. No job offer required. Valid for 2–3 years. Freedom to work in any sector. This route is one of the easiest ways to obtain a UK Work Visa if you meet the eligibility criteria."
        },
        {
          "subheading": "Global Talent Visa",
          "para": "Perfect for highly skilled professionals in tech, research, arts, and academia. No job offer needed. Requires endorsement. Fast-track settlement options. This visa is ideal for candidates with exceptional achievements seeking a UK Work Visa."
        },
        {
          "subheading": "Graduate Visa",
          "para": "If you have completed your studies in the UK, you can stay and work. No sponsorship required. Valid for 2 years (3 for PhD holders). It's a great pathway to transition into a long-term UK Work Visa."
        },
        {
          "subheading": "Youth Mobility Scheme (Limited Countries)",
          "para": "Available for selected countries. Allows work and travel. No job offer needed. Though limited, it is another route toward a UK Work Visa."
        }
      ]
    },
    {
      "heading": "<h3>Eligibility Criteria You Must Meet</h3>",
      "subcontent": [
        {
          "para": "To successfully apply for a UK Work Visa, you need to fulfill certain requirements depending on the visa type."
        },
        {
          "subheading": "General Requirements",
          "list": [
            "Valid passport",
            "Proof of qualifications",
            "English language proficiency",
            "Financial stability",
            "Clean immigration history"
          ]
        },
        {
          "para": "Meeting these criteria strengthens your chances of getting a UK Work Visa approved."
        }
      ]
    },
    {
      "heading": "<h4>Step-by-Step Application Process</h4>",
      "subcontent": [
        {
          "para": "Understanding the process can make your journey to a UK Work Visa much smoother."
        },
        {
          "subheading": "Step 1: Choose the Right Visa Type",
          "para": "Select the visa that matches your qualifications and career goals."
        },
        {
          "subheading": "Step 2: Prepare Your Documents",
          "para": "Ensure all documents are accurate and updated to avoid delays in your UK Work Visa application."
        },
        {
          "subheading": "Step 3: Apply Online",
          "para": "Submit your application through the official UK immigration portal."
        },
        {
          "subheading": "Step 4: Biometrics and Verification",
          "para": "Complete biometrics and attend any required appointments."
        },
        {
          "subheading": "Step 5: Wait for Decision",
          "para": "Processing times vary, but staying updated helps you track your UK Work Visa status."
        }
      ]
    },
    {
      "heading": "<p>Processing Time and Cost Overview</p>",
      "subcontent": [
        {
          "para": "Here's a quick look at timelines and fees related to a UK Work Visa:"
        },
        {
          "table": {
            "theading": ["Visa Type", "Processing Time", "Approximate Fee"],
            "rows": [
              { "colum": ["HPI Visa", "3–8 weeks", "£715"] },
              { "colum": ["Global Talent", "3–8 weeks", "£623+"] },
              { "colum": ["Graduate Visa", "2–6 weeks", "£822"] }
            ]
          }
        },
        {
          "para": "These timelines can vary depending on application volume and profile strength."
        }
      ]
    },
    {
      "heading": "<h5>Benefits of Applying Without a Job Offer</h5>",
      "subcontent": [
        {
          "para": "Choosing a UK Work Visa without sponsorship comes with several advantages:"
        },
        {
          "list": [
            "Freedom to explore job opportunities in the UK",
            "No dependency on employer sponsorship",
            "Access to diverse industries",
            "Opportunity to switch roles easily"
          ]
        },
        {
          "para": "This flexibility makes the UK Work Visa an attractive option for ambitious professionals."
        }
      ]
    },
    {
      "heading": "<h6>Common Mistakes to Avoid</h6>",
      "subcontent": [
        {
          "para": "Many applicants face rejection due to avoidable errors in their UK Work Visa process."
        },
        {
          "subheading": "Key Mistakes",
          "list": [
            "Choosing the wrong visa category",
            "Incomplete documentation",
            "Weak proof of funds",
            "Not meeting eligibility criteria"
          ]
        },
        {
          "para": "Avoiding these mistakes can improve your chances of getting a UK Work Visa approved faster."
        }
      ]
    },
    {
      "heading": "<p>Expert Tips to Increase Approval Chances</p>",
      "subcontent": [
        {
          "para": "If you want to secure a UK Work Visa smoothly, follow these expert tips:"
        },
        {
          "list": [
            "Research visa options carefully",
            "Keep documents error-free",
            "Highlight your skills and achievements",
            "Stay updated with immigration rules"
          ]
        },
        {
          "para": "A well-planned approach can make your UK Work Visa journey successful."
        }
      ]
    },
    {
      "heading": "<h3>Why Choose NexusCore Overseas?</h3>",
      "subcontent": [
        {
          "para": "When applying for a visa, expert guidance can make a huge difference in your success rate for a UK Work Visa."
        },
        {
          "list": [
            "Personalized visa consultation",
            "End-to-end documentation support",
            "High success rate with approvals",
            "Transparent and reliable process",
            "Expert guidance for complex cases"
          ]
        },
        {
          "para": "With professional support, your UK Work Visa application becomes simple, accurate, and stress-free."
        }
      ]
    }
  ],
  "faq": [
    {
      "que": "Can I really get a UK work visa without a job offer?",
      "ans": "Yes, certain visa routes like HPI and Global Talent allow you to apply without a job offer. These options focus on your skills, education, and potential rather than employer sponsorship."
    },
    {
      "que": "Which UK visa is easiest without sponsorship?",
      "ans": "The High Potential Individual visa is considered one of the easiest options, especially if you graduated from a recognized university. It offers flexibility and allows you to work freely in the UK."
    },
    {
      "que": "How long does it take to get a UK work visa?",
      "ans": "Processing usually takes 3 to 8 weeks, depending on the visa type and your application profile. Delays can occur if additional documents or verification are required."
    },
    {
      "que": "Is IELTS mandatory for a UK work visa?",
      "ans": "Most visa categories require proof of English proficiency, and IELTS is commonly accepted. However, some applicants may qualify for exemptions based on their education or nationality."
    }
  ]
},
]
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
      text: "H-150, H Block, Sector 63, Noida, Uttar Pradesh 201301",
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
