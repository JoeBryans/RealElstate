import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Find = () => {
  const navigate = useNavigate();
  const [searchForm, setSearchForm] = useState({
    search: "",
    address: "",
    bedroom: 0,
    // price,
    propertyType: "",
    // offer,
    // furnished,
    // type,
    // packing
  });
  const HandleInput = (e) => {
    setSearchForm({
      ...searchForm,
      [e.target.id]: e.target.value,
    });
  };

  console.log(searchForm);
  const Search = async (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("search", searchForm.search);
    urlParams.set("address", searchForm.address);
    urlParams.set("property", searchForm.propertyType);
    urlParams.set("bedroom", searchForm.bedroom);
    const searchQuery = urlParams.toString();

    navigate(`/listen?${searchQuery}`);
    // try {
    //   const res = searchData(searchlocation);
    //   console.log(res.data);
    // } catch (error) {
    //   console.log(error);
    // }
    // navigate("/listen", { state: { searchForm } });
  };
  return (
    <div className="mt-3">
      <Container>
        <div className="bg-black opacity-50 absolute top-36  px-5  rounded-md text-white">
          <h2 className="mt-5 sm:text-2xl font-semibold">
            Find a Perfect Dream House
          </h2>
          <span className="font-semibold text-xl sm:text-2xl">
            We Have Over Million Properties For You
          </span>
          <p className="font-semibold text-sm sm:text-xl">
            Browse The Top Morden Homes
          </p>
        </div>
        <div className=" flex flex-col flex-wrap mb-5 ">
          <div className=" rounded p-1 mx-auto flex flex-wrap   items-center  gap-2 text-slate-700">
            <input
              type="text"
              placeholder="keyword"
              className=" w-full sm:w-fit border p-2 rounded focus:outline-none text-slate-700"
              id="search"
              // value={searchlocation}
              // onChange={(e) => setSearchlocation(e.target.value)}
              onChange={HandleInput}
            />
            <label className=" w-full sm:w-fit flex gap-2 items-center  rounded-lg border p-2 text-slate-500 text-xl bg-white">
              <MdIcons.MdLocationPin size={20} color="green" />
              <input
                type="text"
                placeholder="Location"
                className="focus:outline-none bg-transparent"
                id="address"
                onChange={HandleInput}
              />
            </label>
            <div className=" w-full sm:w-fit flex flex-wrap gap-3 ">
              <select
                id="propertyType"
                onChange={HandleInput}
                className="  w-full sm:w-fit rounded-lg border p-2 text-slate-500 text-xl"
              >
                <option value="">Property Type</option>
                <option value="Property Type">Property Type</option>
                <option value="Property Type">Property Type</option>
                <option value="Property Type">Property Type</option>
              </select>
              <select
                className=" w-full sm:w-fit  rounded-lg border p-2 text-slate-500 text-xl"
                id="bedroom"
                onChange={HandleInput}
              >
                <option value={0}>Bedroom</option>
                <option value={1}> 1</option>
                <option value={2}>2 </option>
                <option value={3}>3 </option>
                <option value={4}>4 </option>
                <option value={5}>5 </option>
              </select>
              {/* 
                <button
                  className=" bg-blue-800 text-white text-xl font-semibold focus:bg-blue-800"
                >
                  Search
                </button> */}
              <Button onClick={Search} className=" w-full sm:w-fit">
                Search
              </Button>
            </div>
          </div>
        </div>
      </Container>{" "}
    </div>
  );
};

export default Find;
