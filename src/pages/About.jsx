import React, { useEffect} from "react";
import { art1, art2, art3, hero7 } from "../assets";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scroll({top: 0})
  }, [])


  return (
    <>
      <section className="bg-[rgb(255,255,255)] w-full h-[800px] text-[rgb(37,146,141)] pt-24 md:pt-0 pb-20">
        <div className="w-full flex md:flex-row gap-7 flex-col h-full px-[5%]">
          <div className="md:w-1/2 flex justify-center items-center w-full">
            <img src={art1} alt="" className="md:w-[300px] w-[200px]" />
          </div>
          <div className="w-full flex flex-col md:gap-10 gap-2  md:items-start items-center">
            <h2 className="md:text-[3rem] text-[1.5rem]">じょうねつ</h2>
            <h1 className="sm:text-[3rem] text-[1.5rem] font-bold">Passion</h1>
            <p className="sm:text-[1.3rem] w-3/4">
              At Japanezy, we are driven by our passion for the Japanese
              language and culture. Our mission is to share this fascination
              with learners from all walks of life and make learning Japanese an
              enjoyable and enriching experience.
            </p>
            <Link
              to={"/login"}
              className="p-2 px-10 hover:-translate-y-2 transition-all bg-[rgb(22,255,33)] text-white text-[2rem] rounded-xl font-bold shadow-lg shadow-green-600"
            >
              Get Started!
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[rgb(230,227,210)] pt-5 w-full h-[800px] text-[rgb(37,146,141)] pb-20">
        <div className="w-full flex md:flex-row gap-7 flex-col h-full px-[5%]">
          <div className="w-full flex flex-col md:gap-10 gap-2  md:items-start items-center">
            <h2 className="md:text-[3rem] text-[1.5rem]">だいすき</h2>

            <h2 className="sm:text-[3rem] text-[1.5rem] font-bold">
              Master the Essentials
            </h2>
            <p className="sm:text-[1.3rem] w-3/4">
              Japanezy focuses on the most frequently utilized words in Japan,
              forming the foundation of everyday language. We offer you an
              exclusive opportunity to learn these essential components, which
              make up approximately 70% of daily communication. By mastering
              these core words, you'll quickly gain confidence in expressing
              yourself in various situations.
            </p>
            <Link
              to={"/login"}
              className="p-2 px-10 hover:-translate-y-2 transition-all bg-[rgb(22,255,33)] text-white text-[2rem] rounded-xl font-bold shadow-lg shadow-green-600"
            >
              Get Started!
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center items-center w-full">
            <img src={art3} alt="" className="md:w-[300px] w-[200px]" />
          </div>
        </div>
      </section>
      <section className="bg-[rgb(255,255,255)] pt-5 w-full h-[800px] text-[rgb(37,146,141)] pb-20">
        <div className="w-full flex md:flex-row gap-7 flex-col h-full px-[5%]">
          <div className="md:w-1/2 flex justify-center items-center w-full">
            <img src={art2} alt="" className="md:w-[300px] w-[200px]" />
          </div>
          <div className="w-full flex flex-col md:gap-10 gap-2  md:items-start items-center">
            <h2 className="md:text-[3rem] text-[1.5rem]">がんばって!</h2>

            <h2 className="sm:text-[3rem] text-[1.5rem] font-bold">
              Engaging Learning Approach
            </h2>
            <p className="sm:text-[1.3rem] w-3/4">
              Learning a new language should never be a tedious task. That's why
              at Japanezy, we believe in an engaging and interactive learning
              approach. Our platform is designed to keep you motivated and
              excited throughout your language journey. Dive into sentence
              examples with hiragana and katakana, and witness how these words
              come alive in real-life contexts.
            </p>
            <Link
              to={"/login"}
              className="p-2 px-10 hover:-translate-y-2 transition-all bg-[rgb(22,255,33)] text-white text-[2rem] rounded-xl font-bold shadow-lg shadow-green-600"
            >
              Get Started!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
