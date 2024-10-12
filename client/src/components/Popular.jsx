import React from "react";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home4.jpg";
import home5 from "../assets/home5.jpg";
import { Button } from "react-bootstrap";
const Popular = () => {
  return (
    <div className="text-slate-800 text-center flex flex-col justify-center ml-9 md:ml-0">
      <h1 className="mb-5">Populer home</h1>
      <div className="flex flex-wrap gap-4">
        {[0, 1, 2, 3].map((items) => {
          return (
            <div
              className="flex flex-col border justify-center items-center  mx-auto overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-lg"
              key={items}
            >
              <div className="overflow-hidden">
                <img src={home1} alt="" className="w-[38rem] " />
              </div>
              <div className="flex flex-col  gap-1 p-3">
                <div className="flex flex-col mb-3 ">
                  <span>1963 Crescent Height Blvd</span>
                  <span>location: los Angeles, CA 90034</span>
                </div>

                <div className="w-64  flex justify-between">
                  <span>10 Bedrooms</span>
                  <span>10 Bathrooms</span>
                </div>
                <Button>$1,200,000</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
