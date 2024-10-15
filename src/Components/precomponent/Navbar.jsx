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
//       <div className="absolute w-[50%] inset-0 gradient-01" />
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
//             <NavLink to="/" exact activeClassName="text-purple-900" className="my-2 mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
//               Home
//             </NavLink>
//             <NavLink to="/" exact onClick={handleLinkClick}>

//             <Link to="about" smooth={true} duration={500} className="my-2 mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
//               About
//             </Link>
//             </NavLink>
//             <NavLink to="/" exact onClick={handleLinkClick}>

//             <Link to="products" smooth={true} duration={500} className="my-2 mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
//               Products
//             </Link>
//             </NavLink>

//             <NavLink to="/Registered" activeClassName="text-purple-900" className="my-2 mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
//               Sign Up
//             </NavLink>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex md:flex-row">
//           <NavLink to="/" exact activeClassName="text-purple-900" className="mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
//             Home
//           </NavLink>
//           <Link to="products" smooth={true} duration={500} className="mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
//             Products
//           </Link>
//           <Link to="about" smooth={true} duration={500} className="mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
//             About
//           </Link>

//           <NavLink to="/Registered" activeClassName="text-purple-900" className="mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
//             Sign Up
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from 'react';
import logo from '../../assets/Logonew.png';
import { Link } from 'react-scroll'; // Smooth scrolling for internal links
import styles from '../Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
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
            <NavLink to="/" onClick={handleLinkClick}>
              <Link to="about" smooth={true} duration={500} className="my-2 mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900">
                About
              </Link>
            </NavLink>
            <NavLink to="/" onClick={handleLinkClick}>
              <Link to="products" smooth={true} duration={500} className="my-2 mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900">
                Products
              </Link>
            </NavLink>
            <NavLink to="/Registered" activeClassName="text-purple-900" className="my-2 mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
              Sign Up
            </NavLink>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:flex-row">
          <NavLink to="/" exact activeClassName="text-purple-900" className="mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
            Home
          </NavLink>
          <Link to="products" smooth={true} duration={500} className="mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
            Products
          </Link>
          <Link to="about" smooth={true} duration={500} className="mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
            About
          </Link>
          <NavLink to="/Registered" activeClassName="text-purple-900" className="mx-4 hover:text-purple-900 font-code text-lg border-b border-transparent hover:border-purple-900" onClick={handleLinkClick}>
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
