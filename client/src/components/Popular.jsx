import React from "react";
import home1 from "../assets/home1.jpg";

import { Button } from "react-bootstrap";
const Popular = () => {
  return (
    <div className="text-slate-800 text-center flex flex-col justify-center ml-9 md:ml-0">
      <h1 className="mb-5">Neighbourhood Properties</h1>
      <div className="flex flex-wrap gap-4">
        {[0, 1, 2, 3].map((items) => {
          return (
            <div
              className="flex flex-col border justify-center items-center  mx-auto overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-lg relative"
              key={items}
            >
              <div className="overflow-hidden">
                <img src={home1} alt="" className="w-[38rem] " />
              </div>
              <div className="absolute top-2 left-2 flex gap-2 items-center">
                <span className=" text-2xl text-white">Lagos</span>
              </div>
              {/* <div className="flex flex-col  gap-1 p-3">
                <div className="flex flex-col mb-3 ">
     
              </div>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
