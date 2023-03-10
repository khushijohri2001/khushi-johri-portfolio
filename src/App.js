import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Navbar } from './components';
import { Blogs, Home, Projects } from './routes';
import { NotFoundPage } from './routes/NotFoundPage';

function App() {
  

  return (
    <div className="">
  <header>
     <Navbar/>
  </header>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/projects" element={<Projects/>} />
    <Route path="/blogs" element={<Blogs/>} />
    <Route path="*" element={<NotFoundPage/>} />
  </Routes>

  <Footer/>
    </div>
  );
}

export default App;
