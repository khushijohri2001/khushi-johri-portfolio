import B4M from "../assets/images/B4M.png"
import Playlyst from "../assets/images/Playlyst.png";
import Booklet from "../assets/images/Booklet.png";
import QuizClick from "../assets/images/Quiz-click.png";

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
      "1000+ active users on daily basis (Organic traffic)"
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
      "Result Page"
    ],
    techStack: [
      "ReactJS",
      "CSS",
      "Material UI",
      "React Router",
      "HTML"
    ],
    imgUrl: QuizClick,
    gitSrc: "https://github.com/khushijohri2001/React-Quiz-Click",
    liveLink: "https://kd9fhq.csb.app/",
  }
];
