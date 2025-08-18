import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  AOS.init();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full shadow-md sticky top-0 z-50 my-5 bg-sky-500 rounded-md overflow-hidden font-[Goldman]"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2" data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="2500">
          <span className="text-xl font-bold text-white uppercase tracking-[3px]">My Portfolio</span>
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500">
          <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
          <NavLink to="/about" active={location.pathname === '/about'}>About</NavLink>
          <NavLink to="/skills" active={location.pathname === '/skills'}>Skills</NavLink>
          <NavLink to="/blogs" active={location.pathname === '/blogs'}>Blog</NavLink>
          <NavLink to="/projects" active={location.pathname === '/projects'}>Projects</NavLink>
          <NavLink to="/contact" active={location.pathname === '/contact'}>Contact</NavLink>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-sky-500 px-4 py-2 space-y-2 shadow-md">
          <NavLink to="/" onClick={() => setIsOpen(false)} active={location.pathname === '/'}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} active={location.pathname === '/about'}>About</NavLink>
          <NavLink to="/blogs" onClick={() => setIsOpen(false)} active={location.pathname === '/blogs'}>Blogs</NavLink>
          <NavLink to="/skills" onClick={() => setIsOpen(false)} active={location.pathname === '/skills'}>Skills</NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)} active={location.pathname === '/projects'}>Projects</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} active={location.pathname === '/contact'}>Contact</NavLink>
        </div>
      )}
    </header>
  );
};

// Custom NavLink component
const NavLink = ({ to, children, active, ...props }) => (
  <Link
    to={to}
    className={`group relative block text-lg font-[Goldman] tracking-wide px-4 py-2 rounded overflow-hidden ${active ? 'bg-white text-sky-600' : 'text-white'
      }`}
    {...props}
  >
    {/* Hover Background Animation */}
    <span className="absolute left-0 bottom-0 w-0 h-full bg-white/20 group-hover:w-full transition-all duration-300 ease-in-out z-0"></span>

    {/* Text Above Background */}
    <span className="relative z-10">{children}</span>
  </Link>
);

export default Navbar;
