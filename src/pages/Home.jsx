import React, { useEffect, useRef } from "react";
import { art1, art2, art3, hero7 } from "../assets";
import { Link } from "react-router-dom";


const Home = () => {
  useEffect(() => {
    window.scroll({top: 0})
  }, [])

  return (
    <>
      <section className="bg-[rgb(255,255,255)] pt-24 w-full min-h-screen text-[rgb(37,146,141)] pb-20">
        <div className="w-full flex md:flex-row gap-7 flex-col h-full md:pt-32 px-[5%]">
          <div className="md:w-1/2 flex justify-center items-center w-full">
            <img src={hero7} alt="" className="md:w-[300px] w-[200px]" />
          </div>
          <div className="w-full flex flex-col md:gap-10 gap-2 md:items-start items-center">
            <h2 className="text-[3rem] font-medium">こんにちわ!</h2>
            <h1 className="sm:text-[3rem] text-[1.5rem] font-bold">
              Welcome to Japanezy!
            </h1>
            <p className="sm:text-[1.3rem] w-3/4">
              Improve your Japanese skills with Japanezy! Learn the most
              commonly used words, comprising 70% of daily language. Practice
              hiragana and katakana with sentence examples. Advanced learners
              can explore word and sentence representations with hiragana,
              kanji, and katakana commonly encountered in Japan.
            </p>
            <Link
              to={"/login"}
              className="p-2 px-10 mt-10 hover:-translate-y-2 transition-all bg-[rgb(22,255,33)] text-white text-[2rem] rounded-xl font-bold shadow-lg shadow-green-600"
            >
              Get Started!
            </Link>
            <Link
              to={"/about"}
              className="p-2 mt-10 px-10 hover:-translate-y-2 transition-all bg-[rgb(22,255,33)] text-white text-[2rem] rounded-xl font-bold shadow-lg shadow-green-600"
            >
              About us
            </Link>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Home;
