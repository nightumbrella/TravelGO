import React from "react";
import {Hero, Navbar, Footer, Memory, Explore, Advertise, Banner} from "./Components"
import dashboard from './images/dashboard.png'
import { BrowserRouter } from "react-router-dom";

export const hero = {
  "title": "Its a Gig World Out",
  "subtitle": "Then, Go Explore",
  "text": "We provide you always your dream places. We always make our customer happy by proving many choices.",
  "btn1": "Get Started",
  "btn2": "Get Demo",
  "img": dashboard,
};


const App = () => {
  return (
    <div className="overflow-hidden xxl:w-full">
      <BrowserRouter>
      <Navbar />
      <Hero hero={hero}/>
      <Memory/>
      <Explore/>
      <Advertise/>
      <Banner/>
      <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
