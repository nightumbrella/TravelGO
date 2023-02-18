import React from "react";
import banner from "../images/banner.webp"

const bannerAPI = {
    "title": "The Greet Outdoors",
    "text": "Whishlist Curated By TravelGO.",
    "imgSrc": banner,
    "btnText": "Explore More"
  }

const Banner = () => {
  return (
    <>
      <div className="relative m-auto w-[65vw] h-[35vh] overflow-hidden mb-32 rounded-2xl">
        <img src={bannerAPI.imgSrc} alt="image" className="w-full h-full object-cover flex justify-center items-center" />

        <div className="absolute left-12 z-10 top-2/4 -translate-y-2/4">
            <h2 className="text-black text-4xl font-bold mb-3">{bannerAPI.title}</h2>
            <h3 className="mb-5 font-bold ">{bannerAPI.text}</h3>
            <button className="bg-emerald-400 px-5 pt-2 pb-3 rounded-3xl text-white text-lg ">{bannerAPI.btnText}</button>
        </div>
      </div>
    </>
  );
};

export default Banner;
