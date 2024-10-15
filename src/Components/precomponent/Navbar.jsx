import { useState } from 'react';
import logo from '../../assets/Logonew.png';
import { Link } from "react-router-dom";
import styles from '../Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.xPaddings}  p-3 bg-n-8 fixed top-0 left-0 w-full z-50`}>
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between items-center`}>
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          <img src={logo} alt="logo" className='h-24 -mt-6 object-contain' />
        </h2>

        <button onClick={toggleMenu} className="block md:hidden text-white">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </button>

        <div className={`flex-col md:flex md:flex-row ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <p className='mx-4 hover:text-purple-900 font-code text-lg'>
            <Link to="/" className={({ isActive }) => (isActive ? 'text-purple-900' : '')}>Home</Link>
          </p>
          <p className='mx-4 hover:text-purple-900 font-code text-lg'>
            <Link to="/products" className={({ isActive }) => (isActive ? 'text-purple-900' : '')}>Products</Link>
          </p>
          <p className='mx-4 hover:text-purple-900 font-code text-lg'>
            <Link to="/about" className={({ isActive }) => (isActive ? 'text-purple-900' : '')}>About</Link>
          </p>
          <Link to="/Registered">
            <p className='mx-4 hover:text-purple-900 font-code text-lg'>
              Sign Up
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
