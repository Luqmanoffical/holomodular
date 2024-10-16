// import { useState } from 'react';
// import logo from '../../assets/Logonew.png';
// import { Link } from "react-scroll"; // Smooth scrolling for internal links
// import styles from '../Style';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLinkClick = () => {
//     setIsOpen(false); // Close the menu when a link is clicked
//   };

//   return (
//     <nav className={`${styles.xPaddings} p-3 bg-n-8 fixed top-0 left-0 w-full z-50`}>
//       <div className=" w-[50%] inset-0 gradient-01" />
//       <div className={`${styles.innerWidth} mx-auto flex justify-between items-center`}>
//         <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
//           <img src={logo} alt="logo" className='h-16 lg:h-24 mt-0 lg:-mt-6 object-contain' />
//         </h2>

//         <button onClick={toggleMenu} className="block md:hidden text-white">
//           <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
//         </button>

//         {/* Mobile Menu */}
//         <div className={`flex-col md:hidden ${isOpen ? 'flex absolute left-0 top-[64px] bg-n-8 w-full z-50' : 'hidden'}`}>
//           <div className="flex flex-col w-full">
//             <NavLink to="/" exact activeClassName="text-purple-400" className="my-2 mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
//               Home
//             </NavLink>
//             <NavLink to="/" exact onClick={handleLinkClick}>

//             <Link to="about" smooth={true} duration={500} className="my-2 cursor-pointer mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
//               About
//             </Link>
//             </NavLink>
//             <NavLink to="/" exact onClick={handleLinkClick} className='cursor-pointer'>

//             <Link to="products" smooth={true} duration={500} className="my-2 mx-4 cursor-pointer hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
//               Products
//             </Link>
//             </NavLink>

//             <NavLink to="/Registered" activeClassName="text-purple-400" className="my-2 mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
//               Sign Up
//             </NavLink>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex md:flex-row">
//           <NavLink to="/" exact activeClassName="text-purple-400" className="mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
//             Home
//           </NavLink>
//           <Link to="products" smooth={true} duration={500} className="mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
//             Products
//           </Link>
//           <Link to="about" smooth={true} duration={500} className="mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
//             About
//           </Link>

//           <NavLink to="/Registered" activeClassName="text-purple-400" className="mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
//             Sign Up
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logonew.png';

import styles from '../Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (target) => {
    setIsOpen(false); 
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
  


  return (
    <nav className={`${styles.xPaddings} p-3 bg-n-8 w-[100vw] fixed top-0 left-0  z-50`}>
       <div className=" w-[50%] inset-0 gradient-01" />
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
              <NavLink to="/" exact activeClassName="text-purple-400"  className="my-2 mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
              Home
            </NavLink>
            <button onClick={() => handleLinkClick('about')}  className="my-2 mx-4 flex hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900">
              About
            </button>
            <button onClick={() => handleLinkClick('products')}  className="my-2 mx-4 flex hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900">
              Products
            </button>
            
            <NavLink to="/blog" activeClassName="text-purple-400"  className="my-2 mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={() => setIsOpen(false)}>
              Blogs
            </NavLink>
            <NavLink to="/news" activeClassName="text-purple-400"  className="my-2 mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={() => setIsOpen(false)}>
             News
            </NavLink>
            <NavLink to="/Registered" activeClassName="text-purple-400"  className="my-2 mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={() => setIsOpen(false)}>
              Sign Up
            </NavLink>
            <NavLink to="/signin" activeClassName="text-purple-400"  className="my-2 mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={() => setIsOpen(false)}>
              Sign In
            </NavLink>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:flex-row md:justify-center md:items-center">
          <NavLink to="/" exact activeClassName="text-purple-400" className="mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <button onClick={() => handleLinkClick('products')} className="mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900">
            Products
          </button>
          <button onClick={() => handleLinkClick('about')} className="mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900">
            About
          </button>
          <NavLink to="/blog" activeClassName="text-purple-400" className="mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={() => setIsOpen(false)}>
            Blogs
          </NavLink>
          <NavLink to="/news" activeClassName="text-purple-400" className="mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={() => setIsOpen(false)}>
            News
          </NavLink>
      
          <NavLink to="/Registered" activeClassName="text-purple-400" className="mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={() => setIsOpen(false)}>
            Sign Up
          </NavLink>

          <NavLink to="/signin" activeClassName="text-purple-400"  className="relative inline-block font-code  text-lg border-b-4 border-transparent px-3 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105"
   onClick={() => setIsOpen(false)}>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-800 border border-gray-100 to-purlpe-600 rounded"></span>
          <span className="relative z-10 text-white ">Sign In</span>          </NavLink>
        </div>
      </div>
    </nav>


);
};

export default Navbar;
