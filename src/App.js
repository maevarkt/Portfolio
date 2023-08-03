import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import { About } from './pages/about';
import { Experience } from './pages/experience';
import { Projects } from './pages/projects';
import { Contact } from './pages/contact';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} /> 
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;