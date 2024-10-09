
import { motion } from 'framer-motion';
import se from '../../assets/search.svg';
import me from '../../assets/menu.svg';
import logo from '../../assets/logo.png';

import styles from '../Style';
import { navVariants } from '../lib/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <img
        src={se}
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
<img src={logo} alt="logo" className='h-28 -mt-6  object-contain' />
      </h2>
      <img
        src={me}
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
