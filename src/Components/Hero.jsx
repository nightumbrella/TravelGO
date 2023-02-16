import React from "react";

const Hero = ({hero: {title,subtitle, btn1, btn2, text,img}}) => {
  return (
    <>
      <div className="">
        <div className="">
          <div className="">
            <h1 className="">{title}</h1>
            <h1 className="">{subtitle}</h1>
            <p className="">{text}</p>
            <div className="">
              <button type="button" className="">{btn1}</button>
              <button type="button" className="">{btn2}</button>
            </div>
          </div>
          <div className="">
            <img src="" className="" alt="dashboard/img"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
