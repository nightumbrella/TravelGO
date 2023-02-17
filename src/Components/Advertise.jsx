import React from 'react'

import brand1 from "../images/brand1.png";
import brand2 from "../images/brand2.png";
import brand3 from "../images/brand3.png";
import brand4 from "../images/brand4.png";
import brand5 from "../images/brand5.png";

const brands = [
    { iconSrc: brand1 },
    { iconSrc: brand2 },
    { iconSrc: brand3 },
    { iconSrc: brand4 },
    { iconSrc: brand5 },
  ];

const Advertise = () => {
  return (
    <>
      <div className='my-16 lg:my-7 w-9/12 lg:w-[85vw] m-auto flex items-center justify-between xl:gap-7 overflow-x-scroll scroll-smooth scroll-hidden'>
        {brands?.map((item, index) => (
            <img key={index} src={item.iconSrc} alt="brands/icon" className="w-44 h-auto object-fill xl:w-38 lg:w-32 hover:scale-105 transition-all duration-300 cursor-pointer filter drop-shadow-md" />
        ))}
      </div>
   </>
  )
}

export default Advertise