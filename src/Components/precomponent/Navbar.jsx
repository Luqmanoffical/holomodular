import { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import logo from '../../assets/Logonew.png';
import styles from '../Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (target, path) => {
    setIsOpen(false);
    setActiveLink(path); 

    if (window.location.pathname === '/') {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };



  const [activeLink, setActiveLink] = useState(window.location.pathname);

  useEffect(() => {




    const handlePathChange = () => {
      setActiveLink(window.location.pathname);
    };

    window.addEventListener('popstate', handlePathChange);

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      originalPushState.apply(this, args);
      handlePathChange();
    };

    window.history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      handlePathChange();
    };

    handlePathChange();

    return () => {
      window.removeEventListener('popstate', handlePathChange);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  
  return (
    <nav className={`${styles.xPaddings} p-3 bg-n-8 w-[100vw] fixed top-0 left-0 z-50`}>
      <div className="w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between items-center`}>
        
        <NavLink to="/"><img src={logo} alt="logo" className='h-16 lg:h-24  -ml-0 md:-ml-8  object-contain' />
        </NavLink> 

        <button onClick={toggleMenu} className="block md:hidden text-white">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </button>

        {/* Mobile Menu */}
        <div className={`flex-col md:hidden ${isOpen ? 'flex absolute left-0 top-[64px] bg-n-8 w-full z-50' : 'hidden'}`}>
          <div className="flex flex-col w-full">
            <NavLink to="/" exact onClick={() => setActiveLink('/')} className={`my-2 mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900 ${activeLink === '/' ? 'text-purple-400 border-b border-purple-700' : ''}`}>
              Home
            </NavLink>
            <button onClick={() => handleLinkClick('about', '/about')} className={`my-2 mx-4 flex hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900 ${activeLink === '/about' ? 'text-purple-400 border-b border-purple-700' : ''}`}>
              About
            </button>
            <button onClick={() => handleLinkClick('products', '/products')} className={`my-2 mx-4 flex hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900 ${activeLink === '/products' ? 'text-purple-400 border-b border-purple-700' : ''}`}>
              Products
            </button>
            <NavLink to="/blog" onClick={() => setActiveLink('/blog')} className={`my-2 mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900 ${activeLink === '/blog' ? 'text-purple-400 border-b border-purple-700' : ''}`}>
              Blogs
            </NavLink>
            <NavLink to="/news" onClick={() => setActiveLink('/news')} className={`my-2 mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900 ${activeLink === '/news' ? 'text-purple-400 border-b border-purple-700' : ''}`}>
              News
            </NavLink>
            <NavLink to="/Registered" onClick={() => setActiveLink('/Registered')} className={`my-2 mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900 ${activeLink === '/Registered' ? 'text-purple-400 border-b border-purple-700' : ''}`}>
              Sign Up
            </NavLink>
            <NavLink to="/signin" onClick={() => setActiveLink('/signin')} className={`my-2 mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900 ${activeLink === '/signin' ? 'text-purple-400 border-b border-purple-700' : ''}`}>
              Sign In
            </NavLink>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:flex-row md:justify-center md:items-center">
          <NavLink to="/" exact onClick={() => setActiveLink('/')} className={` mx-2 lg:mx-4 hover:text-purple-400 font-code text-base lg:text-lg border-b border-transparent hover:border-purple-900 ${activeLink === '/' ? 'text-purple-400 border-b border-purple-700' : ''}`}>
            Home
          </NavLink>
          <button onClick={() => handleLinkClick('products', '/products')} className={`mx-2 lg:mx-4 hover:text-purple-400 font-code text-base lg:text-lg border-b border-transparent hover:border-purple-900 ${activeLink === '/products' ? 'text-purple-400 border-b border-purple-700' : ''}`}>
            Products
          </button>
          <button onClick={() => handleLinkClick('about', '/about')} className={`mx-2 lg:mx-4 hover:text-purple-400 font-code text-base lg:text-lg border-b border-transparent hover:border-purple-900 ${activeLink === '/about' ? 'text-purple-400 border-b border-purple-700' : ''}`}>
            About
          </button>
          <NavLink to="/blog" onClick={() => setActiveLink('/blog')} className={`mx-2 lg:mx-4 hover:text-purple-400 font-code text-base lg:text-lg border-b border-transparent hover:border-purple-900 ${activeLink === '/blog' ? 'text-purple-400 border-b border-purple-700' : ''}`}>
            Blogs
          </NavLink>
          <NavLink to="/news" onClick={() => setActiveLink('/news')} className={`mx-2 lg:mx-4 hover:text-purple-400 font-code text-base lg:text-lg border-b border-transparent hover:border-purple-900 ${activeLink === '/news' ? 'text-purple-400 border-b border-purple-700' : ''}`}>
            News
          </NavLink>
          <NavLink to="/Registered" onClick={() => setActiveLink('/Registered')} className={`mx-2 lg:mx-4 hover:text-purple-400 font-code text-base lg:text-lg border-b border-transparent hover:border-purple-900 ${activeLink === '/Registered' ? 'text-purple-400 border-b border-purple-700' : ''}`}>
            Sign Up
          </NavLink>
          <NavLink to="/signin" onClick={() => setActiveLink('/signin')} className={`relative inline-block font-code text-sm lg:text-lg border-b-4 border-transparent px-3 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105 ${activeLink === '/signin' ? 'text-purple-400 border-b border-purple-700' : ''}`}>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-900 border border-gray-100 to-purple-500 rounded"></span>
            <span className="relative z-10 text-white">Sign In</span>
            
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
