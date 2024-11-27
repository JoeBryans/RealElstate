import React, { useState } from "react";
import home1 from "../assets/home1.jpg";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import { useSelector } from "react-redux";
import { Button, Container } from "react-bootstrap";

const AgentListen = () => {
  const user = useSelector((state) => state.user.user);
  const [currentpage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(6);
  const lastIndex = currentpage * page;
  const firstIndex = lastIndex - page;
  const currentListen = user.properties.slice(firstIndex, lastIndex);
  const totalListen = user.properties.length;
  console.log(totalListen);
  let pages = [];
  for (let index = 1; index <= Math.ceil(totalListen / page); index++) {
    pages.push(index);
  }
  return (
    <div className="text-slate-700 max-w-2xl mt-10 px-4">
      <h2 className="capitalized text-center mt-3">{user.username} Property</h2>
      <div className="flex flex-col mx-auto gap-4">
        {currentListen.map((items) => {
          return (
            <div className=" flex  items-start gap-3 mx-auto  rounded-lg py-2">
              <img src={items.image[0].url} alt="" className="w-32" />
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-xl mb-1  line-clamp-1">
                  {items.name}
                </span>

                <div className="flex items-center gap-3">
                  <span className="text-sm flex gap-2 items-center">
                    <MdIcons.MdLocationOn color="green" size={20} />
                    {items.address}
                  </span>{" "}
                  <span className="flex items-center gap-2">
                    <FaIcons.FaBed color="green" />
                    {items.bedroom} bed
                  </span>
                  <span className="flex items-center gap-2">
                    <FaIcons.FaBath color="green" />
                    {items.bathroom} bath
                  </span>
                </div>
                <div className="flex w-80  items-center justify-between">
                  {items.type === "sale" ? (
                    <span className="bg-blue-500 text-white px-2 rounded ">
                      {items.type}
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white px-2 rounded ">
                      {items.type}
                    </span>
                  )}
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
