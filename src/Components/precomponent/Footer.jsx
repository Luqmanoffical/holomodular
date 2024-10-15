// import React from 'react'; 
// import { motion } from 'framer-motion';
// import { socials } from '../../constants';
// import logo from '../../assets/logo.png';
// import { Link } from "react-router-dom";
// import styles from '../Style';
// import { footerVariants } from '../lib/motion';

// const Footer = () => (
//   <motion.footer
//     variants={footerVariants}
//     initial="hidden"
//     whileInView="show"
//     className={`${styles.xPaddings} py-8 relative`}
//   >
//     <div className="footer-gradient" />
//     <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
//       <div className="flex flex-col">
//         <div className="mb-[50px] h-[2px] bg-white opacity-10" />

//         <div className="flex items-center justify-between flex-wrap gap-4 -mt-10">
//           <div>
//             <img src={logo} alt="logo" className="h-20" />
//           </div>

//           <div className="flex items-center space-x-10">
//             <Link to="/news" className="text-lg text-white font-semibold hover:text-purple-600 cursor-pointer">
//               Latest News
//             </Link>
//             <Link to="/faqs" className="text-lg text-white font-semibold hover:text-purple-600 cursor-pointer">
//               FAQs
//             </Link>
//             <Link to="/policy" className="text-lg text-white font-semibold hover:text-purple-600 cursor-pointer">
//               Privacy Policy
//             </Link>
//             <Link to="/conditions" className="text-lg text-white font-semibold hover:text-purple-600 cursor-pointer">
//               Terms & Conditions
//             </Link>
//             <Link to="/blog" className="text-lg text-white font-semibold hover:text-purple-600 cursor-pointer">
//               Blog
//             </Link>
//           </div>

//           <div className="flex gap-4">
//           {socials.map((social) => (
//               <img
//                 key={social.name}
//                 src={social.url}
//                 alt={social.name}
//                 className="w-[24px] h-[24px] object-contain cursor-pointer"
//               />
//             ))}
//                     </div>
//         </div>

//         <div className="text-center mx-5 mt-4">
//           <p className="text-[14px] text-white font-normal opacity-50">
//             Copyright © 2024 HoloModule. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   </motion.footer>
// );

// export default Footer;
import React from 'react'; 
import { motion } from 'framer-motion';
import { socials } from '../../constants';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import styles from '../Style';
import { footerVariants } from '../lib/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex flex-col md:flex-row items-center justify-between flex-wrap gap-4 -mt-10">
          <div className="flex justify-center mb-4 md:mb-0">
            <img src={logo} alt="logo" className="h-20" />
          </div>

          <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-10 mb-4 md:mb-0">
            <Link to="/news" className="text-lg text-white font-semibold hover:text-purple-600 cursor-pointer mb-2 md:mb-0">
              Latest News
            </Link>
            <Link to="/faqs" className="text-lg text-white font-semibold hover:text-purple-600 cursor-pointer mb-2 md:mb-0">
              FAQs
            </Link>
            <Link to="/policy" className="text-lg text-white font-semibold hover:text-purple-600 cursor-pointer mb-2 md:mb-0">
              Privacy Policy
            </Link>
            <Link to="/conditions" className="text-lg text-white font-semibold hover:text-purple-600 cursor-pointer mb-2 md:mb-0">
              Terms & Conditions
            </Link>
            <Link to="/blog" className="text-lg text-white font-semibold hover:text-purple-600 cursor-pointer mb-2 md:mb-0">
              Blog
            </Link>
          </div>

          <div className="flex justify-center gap-4 mb-4 md:mb-0">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>

        <div className="text-center mx-5 mt-4">
          <p className="text-[14px] text-white font-normal opacity-50">
            Copyright © 2024 HoloModule. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
