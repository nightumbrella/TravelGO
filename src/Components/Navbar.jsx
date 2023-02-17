import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {BiMenuAltRight} from "react-icons/bi"
import {GrFormClose} from "react-icons/gr"

const navLinks = [
  { link: "Home", id: "home" },
  { link: "About", id: "about" },
  { link: "Explore", id: "explore" },
  { link: "Pricing", id: "pricing" },
  { link: "Contact", id: "contact" },
];

const Navbar = () => {
    
    const [open ,setOpen] = useState(false)
    
    const showMenu = () =>{ 
        setOpen(true)
    }
    const hiddenMenu = () =>{ 
        setOpen(false)
    }
    return (
    <div>
        
      <header className="absolute top-5 left-0 right-0 flex justify-between items-center lg:mx-5">

        <nav className="flex justify-between items-center travelgo-container">

          <NavLink>
            <h1 className="text-bold text-4xl text-emerald-400 font-travel cursor-pointer">
              TravelGO
            </h1>
          </NavLink>

          <ul className={` flex lg:flex-col lg:absolute lg:-right-5 lg:-top-5 lg:w-[50vw] lg:text-6xl lg:h-[40vh] lg:z-10 lg:items-start lg:pl-10 lg:pt-2 lg:bg-gradient-to-b from-white to-emerald-200 lg:rounded-l-2xl transition-all duration-300 ${open ? "lg:translate-x-0" : "lg:translate-x-full"}`} >
            {navLinks?.map((link, index) => (
              <li className="mx-3" key={index} onClick={() => setOpen(false)}>
                <NavLink
                  
                  to="#"
                  className="text-lg text-slate-600 font-Roboto hover:text-slate-400"
                >
                  {link.link}
                </NavLink>
              </li>
            ))}

            <button className="absolute top-8 right-10 hidden lg:block " onClick={hiddenMenu}>
                <GrFormClose className="text-4xl"/>
            </button>

          </ul>

          <NavLink className=" font-Roboto py-2 px-5  button-emerald-join lg:hidden">
            Join Us
          </NavLink>

        </nav>
        <button className="hidden lg:block " onClick={showMenu}> <BiMenuAltRight className="text-4xl"/></button>
       
      </header>
    </div>
  );
};

export default Navbar;
