import React, { useEffect, useMemo, useState } from "react";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSearchPropertyQuery } from "../Api/Api";
import SideBar from "./../components/SideBar";
import user from "../assets/user.jpg";
import axios from "axios";
const Listen = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const [searchForm, setSearchForm] = useState({
    search: "",
    address: "",
    bedroom: 0,
    bathroom: 0,
    min: 0,
    max: 0,
    propertyType: "",
    offer: false,
    furnished: false,
    type: "all",
    parking: false,
  });
  const [index, setIndex] = useState(0);
  const handleClick = (i) => {
    setIndex(i);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    const fechData = async () => {
      const searchQuery = urlParams.toString();
      const { data } = await axios.get(`/api/property/?${searchQuery}`);
      setData(data);
    };
    fechData();
  }, [location.search]);
  const HandleButton = () => {
    setShow(true);
  };
  return (
    <div className="w-full flex flex-col lg:flex-row gap-3  text-slate-700 px-4 sm:px-5 ">
      <div className="hidden lg:inline">
        <SideBar searchForm={searchForm} setSearchForm={setSearchForm} />
      </div>
      <div className=" lg:hidden md:mx-16 -mx-10">
        <div className={show ? "inline " : "hidden"}>
          <SideBar searchForm={searchForm} setSearchForm={setSearchForm} />
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
        <div className=" flex  flex-wrap justify-start gap-4 py-3  ">
          {data &&
            data.map((items, i) => {
              return (
                <div
                  key={i}
                  // className="w-44 md:w-60  flex flex-col border  items-start md:items-center  mx-auto md:mx-1 overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-lg"
                  className="w-48 md:w-60  flex flex-col border  items-start md:items-center   overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-lg mx-auto "
                >
                  <div className="relative overflow-hidden">
                    <Link to={`/property-details/${items._id}`}>
                      <img
                        src={items.image[0].url}
                        alt=""
                        className="w-60 md "
                      />
                    </Link>
                    <div className="absolute top-2 left-2 text-center">
                      <span className="bg-yellow-500 text-white px-2 rounded ">
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
                    <div className="absolute top-10 left-2">
                      <span className="bg-green-600 text-white px-2 rounded ">
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
                    <Link
                      to={`/property-details/${items._id}`}
                      className="text-slate-700 hover:text-slate-500"
                    >
                      <span className="font-semibold text-xl mb-1  line-clamp-1">
                        {items.name}
                      </span>
                    </Link>
                    <span className="text-sm flex gap-2 items-center">
                      <MdIcons.MdLocationOn color="green" />
                      {items.address}{" "}
                    </span>{" "}
                    <span className="font-semibold text-md text-uppercase">
                      {items.propertyType}
                    </span>
                    <div className="flex justify-between items-center w-full">
                      <small className="flex items-center gap-2">
                        <FaIcons.FaBed color="green" />
                        {items.bedroom}
                      </small>
                      <small className="flex items-center gap-2">
                        <FaIcons.FaBath color="green" />
                        {items.bathroom}
                      </small>
                    </div>
                    <div className="w-60 mt-2">
                      <img
                        src={items.userId?.picture[0]}
                        alt=""
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="w-40 sm:w-52 flex justify-between mt-2">
                        <span>{items.userId?.username}</span>
                        <span>{items.updatedAt?.slice(0, 10)}</span>
                        {/* <span>{items.userId.username}</span> */}
                      </div>
                    </div>
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
