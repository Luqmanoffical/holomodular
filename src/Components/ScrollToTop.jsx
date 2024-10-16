import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;


// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const ScrollToTop = ({ behavior = 'auto', top = 0 }) => {
//   const location = useLocation();

//   useEffect(() => {
//     const handleResize = () => {
//       // Optional: Calculate a different top based on window size if needed
//       // const adjustedTop = window.innerWidth < 768 ? 0 : top; // Example breakpoint
//       const adjustedTop = window.innerWidth < 768 ? top : top; // Example breakpoint
     
//       window.scrollTo({
//         top: adjustedTop,
//         behavior: behavior,
//       });
//     };

//     handleResize(); // Initial call to set scroll position
//     window.addEventListener('resize', handleResize); // Update on resize

//     return () => {
//       window.removeEventListener('resize', handleResize); // Cleanup
//     };
//   }, [location]);

//   return null;
// };

// export default ScrollToTop;
