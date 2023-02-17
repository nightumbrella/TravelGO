import React from "react";

const Hero = ({hero: {title,subtitle, btn1, btn2, text,img}}) => {
  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-emerald-200 to-white h-auto w-auto">
        <div className="travelgo-container grid items-start justify-items-center">
          <div className="grid mt-36 mb-16 md:mt-28 md:mb-12">

            <h1 className="text-7xl font-bold text-center lg:text-6xl md:text-4xl sm:text-2xl xsm:text-2xl text-black filter drop-shadow-lg ">{title}</h1>

            <h1 className="text-7xl font-bold text-center lg:text-6xl md:text-5xl sm:text-3xl xsm:text-3xl text-black filter drop-shadow-lg">{subtitle}</h1>

            <p className="text-lg text-center my-5 sm:text-sm">{text}</p>
            <div className="flex justify-center items-center gap-10 sm:gap-3 md:flex-col md:gap-5 md:w-full">
              <button type="button" className="button-emerald-join">{btn1}</button>
              <button type="button" className="bg-white rounded-full px-10 py-3 text-black font-medium active:scale-95 hover:bg-emerald-400 md:w-48 hover:text-white duration-500">{btn2}</button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={img} className="w-[85vw] xxl:w-[85vw] lg:w-[75vw] md:w-[50vw] object-cover xsm:hidden drop-shadow-emerald pb-10" alt="dashboard/img"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
