import React, { useEffect, useState } from "react";
import home1 from "../assets/home1.jpg";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import { useSelector } from "react-redux";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const AgentListen = () => {
  // const user = useSelector((state) => state.user.user);

  const [currentpage, setCurrentPage] = useState(1);
  const [property, setProperty] = useState([]);
  console.log(property);
  const [page, setPage] = useState(6);
  const lastIndex = currentpage * page;
  const firstIndex = lastIndex - page;
  const currentListen = property?.slice(firstIndex, lastIndex);
  const totalListen = property?.length;
  console.log(totalListen);
  let pages = [];
  for (let index = 1; index <= Math.ceil(totalListen / page); index++) {
    pages.push(index);
  }
  const fetchData = async () => {
    try {
      const res = await axios.get("/api/property/agent");
      console.log(res.data);
      setProperty(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(property._id);
  const handleDelete = async (_id) => {
    try {
      const res = await axios.delete(`/api/property/${_id}`);
      setProperty((prev) => prev.filter((property) => property._id !== _id));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="text-slate-700 max-w-2xl mt-10 px-4">
      {property?.length === 0 ? null : (
        <h2 className="capitalized text-center mt-3"> Property</h2>
      )}{" "}
      <div className="flex flex-col mx-auto gap-4">
        {currentListen &&
          currentListen.map((items, i) => {
            return (
              <div
                key={i}
                className=" flex  items-start gap-3 mx-auto  rounded-lg py-2"
              >
                <Link to={`/property-details/${items._id}`}>
                  <img src={items?.image[0]?.url} alt="" className="w-32" />
                </Link>
                <div className="flex flex-col gap-2">
                  <Link
                    to={`/property-details/${items._id}`}
                    className="text-slate-700 hover:text-slate-700"
                  >
                    <span className="font-semibold text-xl mb-1  line-clamp-1">
                      {items.name}
                    </span>
                  </Link>

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
                  <div className="flex sm:w-80  items-center justify-between">
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
                      <Link
                        to={`/update/propert/${items._id}`}
                        className="text-blue-500 bg-white border px-2 rounded flex items-center gap-1 cursor-pointer"
                      >
                        <FaIcons.FaEdit /> Edit
                      </Link>
                      <span
                        onClick={() => handleDelete(items._id)}
                        className="text-red-500 bg-white border px-2 rounded flex items-center gap-1 cursor-pointer"
                      >
                        <FaIcons.FaTrash /> Delete
                      </span>
                    </div>
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
    </div>
  );
};

export default AgentListen;
