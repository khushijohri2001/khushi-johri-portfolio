import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, HamburgerMenu, Header } from "./components";
import { Art, Arts, Blog, Blogs, ContactUs, Home, Notes, PageNotFound, Project, Projects } from "./routes";

const App = () => {
  return (
    <div>
      <Header />
      <HamburgerMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:projectId" element={<Project />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="/blog/:blogId" element={<Blog />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/art/:artId" element={<Art/>} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
