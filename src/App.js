import React from 'react';
import Header from "./components/Header/Header"

const App = () => {
  return (
    <div className="app w-full dark:bg-black">
      <div className="container xl:w-[1230px] md:w-[90%] sm:w-[100%] mx-auto h-screen dark:text-white dark:bg-[#18181B]">
        <Header />
      </div>
    </div>
  )
}

export default App;