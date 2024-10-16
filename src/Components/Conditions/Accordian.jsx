import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import icons from "../../assets/icon.png"

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion border-y border-[white] p-3 sm:p-1 md:p-4 lg:p-6 xl:p-7">
    <div className="accordion-header cursor-pointer" onClick={toggleAccordion}>
      <h2 className={`accordion-title text-purple-600 flex justify-between items-center font-bold text-sm sm:text-xs md:text-lg lg:text-xl ${isOpen ? 'text-[white]' : 'text-purple-600'}`}>
     <span className='flex'> <img src={icons} alt="icon" className="h-6 w-auto mr-6" />
     {title} </span>   
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className={`accordion-icon transition-transform duration-300 ${isOpen ? 'open text-purple-600' : 'close text-[white]'}`}
        />
      </h2>
    </div>
    {isOpen && <div className="accordion-content mt-0 sm:mt-1 md:mt-3 lg:mt-4  text-base">{children}</div>}
  </div>
    );
}

export default Accordion;
