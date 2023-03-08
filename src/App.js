import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components';
import { Blogs, Home, Projects } from './routes';

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
  </Routes>

    </div>
  );
}

export default App;
