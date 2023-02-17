import React from "react";

import place1 from "../images/place1.jpg";
import place2 from "../images/place2.jpg";
import place3 from "../images/place3.jpg";
import place4 from "../images/place4.jpg";
import place5 from "../images/place5.jpg";
import place6 from "../images/place6.jpg";
import place7 from "../images/place7.jpg";
import place8 from "../images/place8.jpg";
import place9 from "../images/place9.jpg";
import place10 from "../images/place10.jpg";

const placesAPI = [
  { placeImg: place1, location: "London", distance: "3.0 hour drive" },
  { placeImg: place2, location: "Paris", distance: "2.5 hour drive" },
  { placeImg: place3, location: "Bangkok", distance: "4.7 hour drive" },
  { placeImg: place4, location: "Cappadocia", distance: "4 hour drive" },
  { placeImg: place5, location: "Dubai", distance: "4.9 hour drive" },
  { placeImg: place6, location: "Guanajuato", distance: "4.5 hour drive" },
  { placeImg: place7, location: "Bali", distance: "5.5 hour drive" },
  { placeImg: place8, location: "Greece", distance: "5.1 hour drive" },
  { placeImg: place9, location: "Madrid", distance: "5.1 hour drive" },
  { placeImg: place10, location: "Rome", distance: "5.1 hour drive" },
];


const Explore = () => {
  return (
    <>
      <div className="relative my-7 pb-72 md:mt-3">
        <div className="travelgo-container ">
          <div className="flex items-center justify-center text-center mb-11 md:mb-7">
            <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg text-slate-900">
              Explore The Beauty of World
            </h1>
          </div>

          <div className="grid grid-explore">
            {placesAPI?.map((items, index) => (
              <div key={index} className="box bg-slate-600 ">
                <div className="border-2">
                  <img
                    src={items.placeImg}
                    alt={items.location}
                    className="w-auto h-full sm:w-16 sm:h-16 rounded-lg filter drop-shadow-lg object-cover"
                  />
                  <h1 className="text-lg sm:text-sm font-bold">
                    {items.location}
                  </h1>
                  <p className="font-normal lg:text-sm text-base sm:text-xs">
                    {items.distance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
