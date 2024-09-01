import LordShiva from "../assets/images/lord-shiva.png";
import BettyCooper from "../assets/images/betty-cooper.png";
import CupCoaster from "../assets/images/cup-coaster.png";
import Itachi from "../assets/images/itachi.png";
import DigitalPortrait from "../assets/images/khwaish-krish.png";
import B4M from "../assets/images/B4M.png";
import Playlyst from "../assets/images/Playlyst.png";
import Booklet from "../assets/images/Booklet.png";
import QuizClick from "../assets/images/Quiz-click.png";
import NamasteReactNotesThumbnail from "../assets/images/Namaste React Notes Thumbnail.jpeg";
import NamasteReactNotes from "../assets/documents/Namaste React Notes Full.pdf"
import NamasteReactAssignmentThumbnail from "../assets/images/Namaste React Assignment Thumbnail.jpeg";
import NamasteReactAssignment from "../assets/documents/Namaste React Assignment Full.pdf"

export const devBlogs = [{}];

export const socialLinks = [
  {
    path: "https://www.linkedin.com/in/khushi-johri-b74970202/",
    icon: <i className="fa-brands fa-linkedin-in"></i>,
  },
  {
    path: "https://github.com/khushijohri2001/",
    icon: <i className="fa-brands fa-github"></i>,
  },
  {
    path: "https://twitter.com/khushijohri01",
    icon: <i className="fa-brands fa-twitter"></i>,
  },
  {
    path: "mailto:khushi.johri01@gmail.com",
    icon: <i className="fa-solid fa-envelope"></i>,
  },
];

export const skillList = [
  {
    id: 1,
    label: "ReactJS",
  },
  {
    id: 2,
    label: "JavaScript",
  },
  {
    id: 3,
    label: "Redux Toolkit",
  },
  {
    id: 4,
    label: "React Hooks",
  },
  {
    id: 5,
    label: "Firebase",
  },
  {
    id: 6,
    label: "Bundlers",
  },
  {
    id: 7,
    label: "Testing",
  },
  {
    id: 8,
    label: "Jest",
  },
  {
    id: 9,
    label: "CSS",
  },
  {
    id: 10,
    label: "HTML",
  },
  {
    id: 11,
    label: "Git",
  },
  {
    id: 12,
    label: "Jest",
  },
  {
    id: 13,
    label: "Digital Art",
  },
  {
    id: 14,
    label: "Content Writing",
  },
];

export const navItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/projects",
    title: "Projects",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/notes",
    title: "Notes",
  },
  {
    path: "/arts",
    title: "Art",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];

export const navHeaderTitle = [
  {
    serialNumber: "first",
    label: "Web Development",
  },
  {
    serialNumber: "second",
    label: "Digital Art",
  },
  {
    serialNumber: "third",
    label: "Blogs",
  },
];

export const digitalArt = [
  {
    id: "lord-shiva",
    title: "Lord Shiva",
    description: "A 2D illustration created in Photoshop",
    imgUrl: LordShiva,
  },
  {
    id: "betty-copper",
    title: "Betty Cooper",
    description: "A 2D illustration created in Photoshop",
    imgUrl: BettyCooper,
  },
  {
    id: "kawai-cup-coaster",
    title: "Kawai Cup Coaster",
    description: "A 2D illustration created in Photoshop",
    imgUrl: CupCoaster,
  },
  {
    id: "itachi-uchiha",
    title: "Itachi Uchiha",
    description: "A 2D illustration created in Photoshop",
    imgUrl: Itachi,
  },
  {
    id: "digital-portrait",
    title: "Digital Portrait",
    description: "A 2D illustration created in Photoshop",
    imgUrl: DigitalPortrait,
  },
];

export const devProjects = [
  {
    id: "biodata-for-marriage",
    title: "Biodata for Marriage",
    description:
      "A Biodata maker where you can personalise biodata by selecting Color, Fields, Theme, Template and Language of your choice",
    features: [
      "Resolves a realtime problem of bad UI/UX for creating Biodata",
      "Themes (Background and Foreground color) for biodata",
      "Templates for biodata",
      "Indian Regional Languages for biodata",
      "Image cropper for profile picture",
      "Movable and Customisable Fields",
      "Add as many fields you want",
      "1000+ active users on daily basis (Organic traffic)",
    ],
    techStack: [
      "NextJS",
      "Prisma",
      "MongoDB",
      "TailwindCSS",
      "TypeScript",
      "ReactJS",
    ],
    imgUrl: B4M,
    liveLink: "https://b4m.vercel.app/",
  },
  {
    id: "play-lyst",
    title: "Playlyst",
    description:
      "A video streaming platform with advance features like Search Filter with debouncing, N nested comments",
    features: [
      "Search Filter with debouncing and auto-generated suggestions which increased performance",
      "Toggle Sidebar",
      "Video Listing Page",
      "Category Filter Buttons with carousal",
      "Watch Screen, N nested comments",
      "Live Chat",
      "Shimmer on Loading",
      "Responsive UI",
      "Google Authentication",
    ],
    techStack: [
      "ReactJS",
      "React Hooks",
      "Tailwind CSS",
      "Firebase",
      "React Router",
      "JS",
      "CSS",
      "HTML",
      "Redux Toolkit",
      "Youtube API",
      "Google Analytics",
    ],
    imgUrl: Playlyst,
    gitSrc: "https://github.com/khushijohri2001/namste_youtube",
    liveLink: "https://play-lyst.web.app/",
  },
  {
    id: "booklet",
    title: "Booklet",
    description:
      "An Online Store to purchase Designer Notebooks and accessories.",
    features: [
      "Product Listing Page",
      "Filter: By Price, Sort by (Low to high and High to low), Rating, and Category.",
      "Single Product Description Page",
      "Cart and Wishlist Page using Redux Toolkit",
      "Share feature",
      "Billing Page with quantity update feature",
    ],
    techStack: [
      "ReactJS",
      "Redux",
      "Tailwind CSS",
      "Firebase",
      "React Router",
      "Javascript",
      "CSS",
      "HTML",
      "Font Awesome",
    ],
    imgUrl: Booklet,
    gitSrc: "https://github.com/khushijohri2001/booket",
    liveLink: "https://booklet-c1aa8.web.app/",
  },
  {
    id: "quiz-click",
    title: "Quiz Click",
    description:
      "A Mini Quiz game built in React for Cartoon show, Movies and Web Series fans",
    features: [
      "Quiz Categories",
      "Rules Page",
      "Options and Score count",
      "Result Page",
    ],
    techStack: ["ReactJS", "CSS", "Material UI", "React Router", "HTML"],
    imgUrl: QuizClick,
    gitSrc: "https://github.com/khushijohri2001/React-Quiz-Click",
    liveLink: "https://kd9fhq.csb.app/",
  },
];

export const devNotes = [
  {
    thumbnail: NamasteReactNotesThumbnail,
    title: "Namaste React",
    pdf: NamasteReactNotes,
  },
  {
    thumbnail: NamasteReactAssignmentThumbnail,
    title: "Namaste React Assignment",
    pdf: NamasteReactAssignment,
  }
]
