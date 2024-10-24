import React from "react";
import home1 from "../assets/home1.jpg";
import { Button } from "react-bootstrap";

const Saved = () => {
  return (
    <>
      <div className="text-slate-800 text-center flex flex-col justify-center ml-9 md:ml-0">
        <h1 className="mb-3 mt-2 w-4/5 mx-auto ">Saved Properties</h1>
        <div className="w-3/5 mx-auto flex flex-col gap-3">
          {[0, 1, 2, 3].map((items) => {
            return (
              <div
                className="flex  border justify-center items-center  mx-auto overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-lg relative"
                key={items}
              >
                <div className="overflow-hidden">
                  <img src={home1} alt="" className="w-56 h-32" />
                </div>

                <div className="flex flex-col items-start  gap-1 p-3">
                  {/* <div className="flex flex-col mb-3 ">
                    <span>1963 Crescent Height Blvd</span>
                    <span>location: los Angeles, CA 90034</span>
                  </div> */}
                  <span className="text-xl line-colm">Single Family Homes</span>
                  <div className="w-64  flex justify-between">
                    <span>Lagos</span>
                    <span>3 Bedroom</span>
                    <span>Apartment</span>
                  </div>
                  <Button>Remove</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Saved;
