import React from "react";
import {Hero, Navbar, Footer} from "./Components"
import { hero } from "./data/travigoData";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero hero={hero}/>
      <Footer />
    </>
  );
};

export default App;
