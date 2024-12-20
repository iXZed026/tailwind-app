import React from 'react';
import Header from "./components/Header/Header"
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';



const App = () => {
  return (
    <div className="app w-full dark:bg-black">
      <div className="container xl:w-[1230px] md:w-[90%] sm:w-[100%] mx-auto dark:text-white dark:bg-[#18181B] pb-5">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;