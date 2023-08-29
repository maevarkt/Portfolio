import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import { About } from './pages/about';
import { Experience } from './pages/experience';
import { Projects } from './pages/projects';
import { Spirograph } from './pages/spirograph';
import { Galaxy } from './pages/galaxy';
import { Particle } from './pages/particle';
import { Hover } from './pages/hover';
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
        <Route path='/spirograph' element={<Spirograph/>} />
        <Route path='/galaxy' element={<Galaxy/>} />
        <Route path='/particle' element={<Particle/>} />
        <Route path='/hover' element={<Hover/>} />
        <Route path='/contact' element={<Contact/>} /> 
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;