import React, { useEffect, useState } from "react";

import * as MdIcons from "react-icons/md";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetPropertyQuery } from "../Api/Api";
import Loading from "../components/Loading";
import SideBar from "../components/SideBar";
const Properties = () => {
  const { data, error, isLoading } = useGetPropertyQuery();
  const [show, setShow] = useState(false);
  const [property, setProperty] = useState([]);
  console.log(property);
  useEffect(() => {
    setProperty(data);
  }, [data]);
  const HandleButton = () => {
    setShow(true);
  };
  return (
    <div className="w-full flex flex-col md:flex-row gap-3  text-slate-700 px-4 sm:px-5 ">
      <div className="hidden lg:inline">
        <SideBar />
      </div>
      <div className=" lg:hidden md:mx-16 -mx-10">
        <div className={show ? "inline " : "hidden"}>
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
      <div className="text-slate-800 text-center flex flex-col justify-center ml-9 md:ml-0 mb-16 mt-5">
        {/* <h1 className="mb-5">Feature home</h1> */}
        {isLoading && <Loading />}

        <div className="flex flex-wrap gap-4  mx-auto">
          {property &&
            property.map((items, i) => {
              return (
                <div
                  key={i}
                  className="w-44 md:w-60 mx-2 flex flex-col border  items-start md:items-center    overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-lg"
                >
                  <div className="relative overflow-hidden">
                    <Link to={`/property-details/${items._id}`}>
                      <img
                        src={items.image[0]}
                        alt=""
                        className="w-60 md hover:scale-150 transition-scale duration-300"
                      />
                    </Link>
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
                  </div>
                  <div className="flex flex-col w-full gap-1 p-3">
                    <div className="flex flex-col mb-3 items-start">
                      <Link
                        to={`/property-details/${items._id}`}
                        className="text-slate-700 hover:text-slate-500"
                      >
                        {" "}
                        <span className="font-semibold text-xl mb-2 line-clamp-1">
                          {items.name}
                        </span>
                      </Link>
                      <span className="text-sm flex gap-2 items-center">
                        <MdIcons.MdLocationOn color="green" />
                        {items.address}{" "}
                      </span>
                    </div>

                    <div className="md:w-52 flex flex-wrap justify-between">
                      <span>{`${items.bedroom} bedroom`}</span>
                      <span>{`${items.bathroom} bathroom`}</span>
                    </div>
                    <Button>${items.price}</Button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Properties;
