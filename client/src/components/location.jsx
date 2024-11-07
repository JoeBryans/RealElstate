import React, { useEffect, useState } from "react";

import * as MdIcons from "react-icons/md";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetPropertyQuery } from "../Api/Api";
import Loading from "./Loading";
import * as FaIcons from "react-icons/fa";
const Location = () => {
  const { data, error, isLoading } = useGetPropertyQuery();
  const property = data && data.filter((items) => items.address);
  console.log(property);
  return (
    <>
      {" "}
      {isLoading && <Loading />}
      <div className="text-slate-800 text-center flex flex-col justify-center ml-9 md:ml-0 mb-16 ">
        <h1 className="mb-5">Properties In Lagos</h1>
        <div className="flex flex-wrap gap-4 justify-start ">
          {property &&
            property.slice(1, 5).map((items, i) => {
              return (
                <div
                  key={i}
                  className="w-44 md:w-60  flex flex-col border  items-start md:items-center mx-auto  overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-lg"
                >
                  <div className="relative overflow-hidden">
                    <Link to={`/property-details/${items._id}`}>
                      <img
                        src={items.image[0]}
                        alt=""
                        className="w-60 md hover:scale-150 transition-scale duration-300"
                      />
                    </Link>
                    <div className="absolute top-2 left-2 text-center">
                      <span className="bg-green-600 text-white px-2 rounded ">
                        Features
                      </span>
                    </div>
                    <div className="absolute top-2 right-2">
                      {items.type === "sale" ? (
                        <span className="bg-blue-500 text-white px-2 rounded ">
                          Sale
                        </span>
                      ) : (
                        <span className="bg-red-500 text-white px-2 rounded ">
                          Rent
                        </span>
                      )}
                    </div>
                    <div className="absolute top-10 right-2">
                      <span className="bg-yellow-500 text-white px-2 rounded ">
                        status
                      </span>
                    </div>
                    <div className="absolute bottom-1 right-2">
                      <span className="font-semibold text-xl mb-1 p-1 cursor-pointer  line-clamp-1 bg-black opacity-60 ">
                        <FaIcons.FaHeart size={25} color="white" />
                      </span>
                    </div>
                    <div className="absolute bottom-1 left-2">
                      <span className="font-semibold text-xl mb-1 p-1 cursor-pointer  line-clamp-1 text-white ">
                        ${items.price}{" "}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-full gap-1 p-3">
                    <span className="font-semibold text-xl mb-1  line-clamp-1">
                      {items.name}
                    </span>
                    <span className="text-sm flex gap-2 items-center">
                      <MdIcons.MdLocationOn color="green" />
                      {items.address}{" "}
                    </span>{" "}
                    <span className="font-semibold text-md text-uppercase">
                      {items.propertyType}
                    </span>
                    <small className="flex items-center gap-2">
                      <FaIcons.FaBed color="green" />
                      {items.bedroom}
                    </small>
                  </div>
                </div>
              );
            })}
        </div>
      </div>{" "}
    </>
  );
};

export default Location;
