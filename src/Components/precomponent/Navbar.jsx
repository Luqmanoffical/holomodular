import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logonew.png';
import { Link } from 'react-scroll'; // For smooth scrolling
import styles from '../Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Use navigate for routing

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (target) => {
    setIsOpen(false); // Close the menu when a link is clicked
    navigate('/'); // Navigate to the home page
    setTimeout(() => {
      // Smooth scroll after navigation
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Delay to ensure the page has loaded
  };

  return (
    <nav className={`${styles.xPaddings} p-3 bg-n-8 fixed top-0 left-0 w-full z-50`}>
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between items-center`}>
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          <img src={logo} alt="logo" className='h-16 lg:h-24 mt-0 lg:-mt-6 object-contain' />
        </h2>

        <button onClick={toggleMenu} className="block md:hidden text-white">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </button>

        {/* Mobile Menu */}
        <div className={`flex-col md:hidden ${isOpen ? 'flex absolute left-0 top-[64px] bg-n-8 w-full z-50' : 'hidden'}`}>
          <div className="flex flex-col w-full">
            <NavLink to="/" exact activeClassName="text-purple-900" className="my-2 mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
              Home
            </NavLink>
            <button onClick={() => handleLinkClick('about')} className="my-2 mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900">
              About
            </button>
            <button onClick={() => handleLinkClick('products')} className="my-2 mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900">
              Products
            </button>
            <NavLink to="/Registered" activeClassName="text-purple-900" className="my-2 mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={() => setIsOpen(false)}>
              Sign Up
            </NavLink>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:flex-row">
          <NavLink to="/" exact activeClassName="text-purple-900" className="mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <button onClick={() => handleLinkClick('products')} className="mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900">
            Products
          </button>
          <button onClick={() => handleLinkClick('about')} className="mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900">
            About
          </button>
          <NavLink to="/Registered" activeClassName="text-purple-900" className="mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={() => setIsOpen(false)}>
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
