import React, { useEffect } from "react";
// import { GoArrowLeft } from "react-icons/go";
// import { GoArrowRight } from "react-icons/go";
import img from "/assets/silder_img.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "motion/react";

const Slider = () => {
  const notify = () => toast('Demo Book !');
  

  return (
    <>
      <div className="container px-3 pt-10">
        <div className="flex items-center justify-around">
          <div className="flex flex-col gap-[7px]">
            <h2 className="font-medium text-[33px]">New Arrivals</h2>
            <span className="font-bold">
              Find out top categories that will help you find what you are
              looking for.
            </span>
          </div>
          {/* <div className="flex gap-3">
            <button className=" prev border border-blue-500 p-3 rounded-full text-blue-500">
              <GoArrowLeft />
            </button>
            <button className="next p-3 rounded-full bg-blue-500 text-white  ">
              <GoArrowRight />
            </button>
          </div> */}
        </div>
        <div className="slider w-full flex justify-center mt-[30px] pb-4">
          <motion.div
           initial={{ y: -900,opacity:0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{duration:5,ease:"easeInOut"}}
           className="slides flex lg:flex-row flex-col overflow-hidden justify-center gap-8 items-center  w-[700px]">
            <div className="slide bg-pink-300 lg:w-[30%] w-[70%] rounded-xl flex items-center flex-col pt-3 ">
              <div className="bg-pink-400 w-fit p-2 rounded-full">
                <img src={img} alt="image" className="w-20" />
              </div>
              <div className="bg-white flex flex-col m-1 mt-5 rounded-xl p-4">
                <div className="flex justify-between">
                  <h2 className="font-medium text-[18px]">Book 1</h2>
                  <span className="text-pink-500">$ 34.00</span>
                </div>
                <span className="font-normal text-[10px]">
                  This is book 1
                </span>
                <button onClick={notify} className="mt-4 p-2 text-[15px] rounded-xl border border-pink-400">
                  View Book Demo
                </button>
              </div>
            </div>
            <div 
           
             className="slide bg-blue-300 lg:w-[30%] w-[70%] rounded-xl flex items-center flex-col pt-3 ">
              <div className="bg-blue-400 w-fit p-2 rounded-full">
                <img src={img} alt="image" className="w-20" />
              </div>
              <div className="bg-white m-1 flex flex-col mt-5 rounded-xl p-4">
                <div className="flex justify-between">
                  <h2 className="font-medium text-[18px]">Book 2</h2>
                  <span className="text-blue-500">$ 34.00</span>
                </div>
                <span className="font-normal text-[10px]">
                  This is book 2
                </span>
                <button onClick={notify} className="mt-4 p-2 text-[15px] rounded-xl border border-blue-400">
                  View Book Demo
                </button>
              </div>
            </div>
            <div className="slide bg-green-300 lg:w-[30%] w-[70%] rounded-xl flex items-center flex-col pt-3 ">
              <div className="bg-green-400 w-fit p-2 rounded-full">
                <img src={img} alt="image" className="w-20" />
              </div>
              <div className="bg-white m-1 flex flex-col mt-5 rounded-xl p-4">
                <div className="flex justify-between">
                  <h2 className="font-medium text-[18px]">Book 3</h2>
                  <span className="text-green-500">$ 34.00</span>
                </div>
                <span className="font-normal text-[10px]">
                  This is book 3
                </span>
                <button onClick={notify} className="mt-4 p-2 text-[15px] rounded-xl border border-green-400">
                  View Book Demo
                </button>
              </div>
            </div>
           
          </motion.div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default Slider;
