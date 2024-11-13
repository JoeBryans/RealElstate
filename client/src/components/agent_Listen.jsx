import React from "react";
import home1 from "../assets/home1.jpg";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

const AgentListen = () => {
  return (
    <div className="text-slate-700 max-w-2xl  px-4">
      <h2>Your Properties</h2>
      <div className="flex flex-col mx-auto gap-4">
        {[1, 2, 3, 4, 5].map((items) => {
          return (
            <div className=" flex border items-start gap-3 mx-auto  rounded-lg py-2">
              <img src={home1} alt="" className="w-64" />
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-xl mb-1  line-clamp-1">
                  New 3 Bedroom Semi Detached Duplex for Sale at Thomas Estate
                  Ajah Lekki
                </span>
                <span className="text-sm flex gap-2 items-center">
                  <MdIcons.MdLocationOn color="green" size={20} />
                  Abuja
                </span>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-xl mb-1 p-1 cursor-pointer  line-clamp-1 text-slate-700 ">
                    $ 88400
                  </span>
                  <span className="flex items-center gap-2">
                    <FaIcons.FaBed color="green" />
                    bedroom
                  </span>
                  <span className="flex items-center gap-2">
                    <FaIcons.FaBath color="green" />
                    bathroom
                  </span>
                </div>
                <div className="flex w-80  items-center justify-between">
                  <span className="bg-blue-500 text-white px-2 rounded ">
                    Sale
                  </span>
                  <div className="flex gap-3">
                    <span className="text-blue-500 bg-white border px-2 rounded flex items-center gap-1 cursor-pointer">
                      <FaIcons.FaEdit /> Edit
                    </span>
                    <span className="text-red-500 bg-white border px-2 rounded flex items-center gap-1 cursor-pointer">
                      <FaIcons.FaTrash /> Delete
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgentListen;
