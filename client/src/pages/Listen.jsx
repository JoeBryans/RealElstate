import React, { useState } from "react";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home4.jpg";
import home5 from "../assets/home5.jpg";
import { useLocation } from "react-router-dom";
import SideBar from "../components/SideBar";
import { Button } from "react-bootstrap";
const Listen = () => {
  const location = useLocation();
  const [state, setState] = useState(location);
  const [show, setShow] = useState(false);
  console.log(state);
  const imag = [
    { src: home1 },
    { src: home2 },
    { src: home3 },
    { src: home4 },
    { src: home5 },
  ];
  const [index, setIndex] = useState(0);
  const handleClick = (i) => {
    setIndex(i);
  };
  const HandleButton = () => {
    setShow(true);
  };
  return (
    <div className="w-full flex flex-col md:flex-row gap-3  text-slate-700 px-4 sm:px-5 ">
      <div className="hidden lg:inline">
        <SideBar />
      </div>
      <div className=" lg:hidden md:mx-16 -mx-10">
        <div className={show ? "inline  " : "hidden"}>
          <SideBar />
        </div>
        <div className="md:mx-10 ">
          <button
            className={
              show
                ? "hidden"
                : " p-2 rounded-lg text-white text-center bg-primary hover:opacity-90  w-36 mt-5"
            }
            onClick={HandleButton}
          >
            Filter
          </button>
        </div>
      </div>
      <div className="w-full  md:mt-5  ">
        <div className=" flex  flex-wrap justify-center gap-4 py-3  ">
          {imag.map((item, i) => {
            return (
              <div className="mb-5 shadow-sm pb-3">
                <img
                  className="w-60 h-56"
                  src={item.src}
                  alt=""
                  onClick={() => handleClick(i)}
                />
                <div className="text-slate-700 px-1">
                  <h4>8542 El Paseo Grande</h4>
                  <div className="md:w-64 flex flex-wrap justify-between">
                    <span>10 Bedrooms</span>
                    <span>10 Bathrooms</span>
                  </div>
                  <button className="mt-2 p-2 rounded-lg text-white text-center bg-primary hover:opacity-90  w-full">
                    $1,200,000
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Listen;
