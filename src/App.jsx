import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import {Blog} from './Components/Blog/Blog';
import Conditions from './Components/Conditions/Conditions.jsx';
import  FAQs from './Components/FAQs/FAQs.jsx';
import Privacy from './Components/Privacy Policy/Privacy.jsx';
import  News from './Components/News/News.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';
// import Signup from './Components/SignUp'

function App() {
  return (
    <Router>
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/policy" element={<Privacy/>} />
        <Route path="/conditions" element={< Conditions/>} />
        <Route path="/news" element={< News/>} />
        {/* <Route path="/Registered" element={< SignUp/>} /> */}

      </Routes>
    </Router>
  );
}

export default App;
