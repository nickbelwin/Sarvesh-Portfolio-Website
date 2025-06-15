import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import beyoungBanner from "../assets/beyoungBanner.png";
import makeMyTrip from "../assets/makeMyTrip.png";
import movieDeckPoster from "../assets/movieDeckPoster.png";
import taskManagerAppPoster from "../assets/taskManagerAppPoster.png";
import typingGameImg from "../assets/typingGameImg.png";
// import spotifyloginPage from "../assets/spotifyloginPage.png";
// import project7 from "../assets/project7.webp";
// import project8 from "../assets/project8.webp";
// import project9 from "../assets/project9.webp";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  " HTML, CSS, React, Node, MongoDb, Tailwind, MySql, Javascript, ";

export const PROJECTS = [
  {
    id: 1,
    title: "Beyoung Store Clone",
    description:
      "A full-featured e-commerce website built with React.js.",
    imgSrc: beyoungBanner,
    link: "https://beyoung-store-clone-react-project-1-jnteolvro757.vercel.app",
  },
  {
    id: 2,
    title: "Movie Deck App",
    description:
    "Movie Deck App lets users easily search, sort by rating or date, and add movies to favorites.",
    imgSrc: movieDeckPoster,
    link: "https://nickbelwin.github.io/Movie-Deck-Project-Buidling---JS-Project-Building-Session-HTML-CSS---In-Cla---y04lgd7b2xpx/",
  },
  {
    id: 3,
    title: "Make My Trip Clone",
    description:
      "A social media application with real-time chat and notifications.",
    imgSrc: makeMyTrip,
    link: "https://make-my-trip-clone-react-project-2-s70m6uhsdv18.vercel.app",
  },
  {
    id: 4,
    title: "Task Manager App",
    description:
      "In this Task Manager App we can create new tasks, delete tasks & add descriptions. Set task status (e.g. to-do, in progress, in review, completed).",
    imgSrc: taskManagerAppPoster,
    link: "https://nickbelwin.github.io/Task-Manager-App---Javascript-Project---adumymr7rrtu/",
  },
  {
    id: 5,
    title: "Typing Game",
    description: "It is a simple Typing Game mini project. This project helps you to improve your Typing speed.",
    imgSrc: typingGameImg,
    link: "https://nickbelwin.github.io/typingGame/",
  },
  // {
  //   id: 6,
  //   title: "Online Learning Platform",
  //   description:
  //     "An online learning platform offering various courses and resources.",
  //   imgSrc: spotifyloginPage,
  //   link: "https://example.com/online-learning-platform",
  // },
//   {
//     id: 7,
//     title: "Fitness Tracker",
//     description: "A mobile application to track fitness activities and goals.",
//     imgSrc: project7,
//     link: "https://example.com/fitness-tracker",
//   },
//   {
//     id: 8,
//     title: "Recipe App",
//     description: "An app for browsing and saving various cooking recipes.",
//     imgSrc: project8,
//     link: "https://example.com/recipe-app",
//   },
//   {
//     id: 9,
//     title: "Weather Dashboard",
//     description:
//       "A weather dashboard providing current weather data and forecasts.",
//     imgSrc: project9,
//     link: "https://example.com/weather-dashboard",
//   },
];

export const ABOUT =
  "I’m a passionate and detail-oriented software developer with hands-on experience building scalable web applications, including complete HRMS and ATS systems. I enjoy solving real-world problems through clean, efficient code and user-friendly design. With a strong focus on performance, usability, and maintainability, I strive to create tools that streamline processes and deliver real business value. I’m well-versed in modern development stacks and love working on both frontend and backend. I'm always eager to learn new technologies, collaborate with driven teams, and take on challenges that push my technical and creative boundaries.";

export const EXPERIENCES = [
  {
    company: "TalentCo HR Services LLP",
    role: "Software Developer",
    year: "Apr/2024 - Present",
    description:`Contributed to a scalable HRMS by building and optimizing modules including onboarding, attendance,
    leave, payroll, access control, expense tracking, and performance management (PMS).
    Developed a robust ATS (Applicant Tracking System) to streamline the recruitment lifecycle, featuring
    role-based access control, job/recruiter assignment, sourcing pipeline management, interview scheduling, and
    CV parsing/uploading.
    Led frontend development using HTML, CSS, JavaScript, React.js, and Bootstrap. Collaborated on
    backend integration and maintenance using Node.js, Express.js, and MySQL. Ensured responsive UI,
    seamless UX, and efficient state management across all panels`,
  },
  {
    company: "Microlink Solutions Pvt. Ltd.",
    role: "Project Engineer",
    year: "Sep/2023 - Dec/2023",
    description:`While working as a Project Engineer my task is to check all device’s status and cabling connectivity of the
 ATG, EPS, KMS, and CCTV.
 • Configuration of SSC, COPT, ATG and EPS systems. Replace faulty hardware device parts.`,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/nickbelwin",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/sarvesh-belwalkar",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "belwalkarsarvesh@gmail.com",
//   phone: "+(221 - 7654567892)",
};
