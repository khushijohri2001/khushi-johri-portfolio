import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import { Art, Blogs, Home, Notes, PageNotFound, Project } from "./routes";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<Project />} />
        <Route path="/blogs/:blogId" element={<Blogs />} />
        <Route path="/art/:artId" element={<Art/>} />
        <Route path="/notes" element={<Notes />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
