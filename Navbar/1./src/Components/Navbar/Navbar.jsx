import React from 'react'
import './Navbar.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import { BrowserRouter as Router, Routes, NavLink, Route } from 'react-router-dom'

const Navbar = () => {

    const  [isMenuOpen, setIsMenuOpen] = React.useState(false); 
    const toggleMenu = ()  => {
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <Router>
    <nav className='navbar'>
        <div className='navbar-logo'><NavLink to='/'> Website </NavLink></div>
        
        <div className='menu' onClick={toggleMenu}>
            <div className='menu-item'></div>
            <div className='menu-item'></div>
            <div className='menu-item'></div>
        </div>
        
        <ul className={isMenuOpen ? 'navbar-links active' : 'navbar-links'}>
            <li><NavLink to='/' onClick={toggleMenu}>Home</NavLink></li>
            <li><NavLink to='/about' onClick={toggleMenu}>About</NavLink></li>
            <li><NavLink to='/project' onClick={toggleMenu}>Project</NavLink></li>
            <li><NavLink to='/contact' onClick={toggleMenu}>Contact</NavLink></li>
        </ul>

    </nav>

    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
    </Routes>

    </Router>
  )
}

export default Navbar