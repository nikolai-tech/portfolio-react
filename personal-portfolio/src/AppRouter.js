import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './components/Home'; 
import Projects from './components/Projects'; 
import About from './components/About'; 
import Contact from './components/Contact'; 
import Navbar from './components/Navbar'; 
 
const AppRouter = () => { 
   return ( 
       <Router>
           <Navbar /> 
           <Routes> 
               <Route path="/" element={<Home />} /> 
               <Route path="/projects" element={<Projects />} /> 
               <Route path="/about" element={<About />} /> 
               <Route path="/contact" element={<Contact />} /> 
           </Routes> 
       </Router> 
   ); 
}; 
 
export default AppRouter;