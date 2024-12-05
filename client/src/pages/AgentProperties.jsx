import React, { useEffect, useState } from "react";
import home1 from "../assets/home1.jpg";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import { Button, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const AgentProperties = () => {
  const [property, setProperty] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(12);

  const param = useParams();
  const { id } = param;

  const AgentPropert = async () => {
    const res = await axios.get(`/api/property/agent/properties/${id}`);
    setProperty(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    AgentPropert();
  }, []);

  const lastIndex = currentpage * page;
  const firstIndex = lastIndex - page;
  const currentListen = property?.slice(firstIndex, lastIndex);
  const totalListen = property?.length;

  let pages = [];
  for (let index = 1; index <= Math.ceil(totalListen / page); index++) {
    pages.push(index);
  }

  return (
    <Container>
      <div className="text-slate-800 text-center flex flex-col items-center justify-center  md:ml-0">
        <h1 className="mb-5"> </h1>
        <div className="flex max-w-6xl flex-wrap gap-4 justify-start relative left-16 ">
          {currentListen &&
            currentListen.map((items, i) => {
              return (
                <div
                  key={i}
                  className="w-60  flex flex-col border  items-start md:items-center  overflow-hidden hover:shadow-lg mx-auto transition-shadow duration-300 rounded-lg"
                >
                  <div className="relative overflow-hidden">
                    <Link to={`/property-details/${items._id}`}>
                      <img
                        src={items.image[0].url}
                        alt=""
                        className="w-60 md hover:scale-150 transition-scale duration-300"
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
                        {items.propertyStatus}
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
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex gap-3 mt-2 mx-10">
          {pages.map((page, i) => {
            return (
              <Button key={i} onClick={() => setCurrentPage(page)}>
                {page}
              </Button>
            );
          })}{" "}
        </div>
      </div>{" "}
    </Container>
  );
};

export default AgentProperties;
