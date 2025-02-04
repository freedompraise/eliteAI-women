import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { egit, ea, memoir, uniben } from "../assets";
import { FaX } from "react-icons/fa6";
import { link } from "framer-motion/client";

export const navLinks = [
  {
    id: "program-details",
    link: "/#program-details",
    title: "Program",
  },
  {
    id: "media-section",
    link: "/#media-section",
    title: "Media",
  },
  {
    id: "cta",
    link: "/#cta",
    title: "Apply Now",
  },
  {
    id: "clients",
    link: "/#clients",
    title: "Partners",
  },
  {
    id: "blog",
    link: "/blogs",
    title: "Blog",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "participants/year",
    value: "1,000",
  },
  {
    id: "stats-2",
    title: "Job Placement of participants/year",
    value: "70%",
  },
  {
    id: "stats-3",
    title: "participants get their business launched/year",
    value: "30%",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: FaInstagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: FaTiktok,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: FaX,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/posts/ai-women-rising_aiforremotework-digitalcontentcreation-learnandearn-activity-7289717789634834432-lJY7?utm_source=share&utm_medium=member_android",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: egit,
  },
  {
    id: "client-2",
    logo: ea,
  },
  {
    id: "client-3",
    logo: uniben,
  },
  {
    id: "client-4",
    logo: memoir,
  },
];
