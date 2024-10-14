import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Find = () => {
  const navigate = useNavigate();
  const [searchlocation, setSearchlocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedroom, setBedroom] = useState("");
  // const[]=useState(true)

  const Search = () => {
    navigate("/listen", { state: { searchlocation, propertyType, bedroom } });
  };
  return (
    <div className="">
      <Container>
        <div className="bg-red-800 absolute top-20  px-5  rounded-md text-slate-500">
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
          <div className="bg-blue-800 rounded p-1 mx-auto flex flex-wrap   items-center  gap-2">
            <input
              type="text"
              placeholder="keyword"
              className="border p-2 rounded focus:outline-none"
              value={searchlocation}
              onChange={(e) => setSearchlocation(e.target.value)}
            />
            <label className=" flex gap-2 items-center  rounded-lg border p-2 text-slate-500 text-xl bg-white">
              <MdIcons.MdLocationPin size={20} color="green" />
              <input
                type="text"
                placeholder="Location"
                className="focus:outline-none bg-transparent"
                value={searchlocation}
                onChange={(e) => setSearchlocation(e.target.value)}
              />
            </label>
            <div className="flex flex-wrap gap-3 ">
              <select
                onChange={(e) => setPropertyType(e.target.value)}
                className="  rounded-lg border p-2 text-slate-500 text-xl"
              >
                <option value="">Property Type</option>
                <option value="Property Type">Property Type</option>
                <option value="Property Type">Property Type</option>
                <option value="Property Type">Property Type</option>
              </select>
              <select
                className="  rounded-lg border p-2 text-slate-500 text-xl"
                onChange={(e) => setBedroom(e.target.value)}
              >
                <option value="Bedroom">Bedroom</option>
                <option value="2 Bedroom">2 Bedroom</option>
                <option value="3 Bedroom">3 Bedroom</option>
                <option value="4 Bedroom">4 Bedroom</option>
                <option value="5 Bedroom">5 Bedroom</option>
              </select>
              {/* 
                <button
                  className=" bg-blue-800 text-white text-xl font-semibold focus:bg-blue-800"
                >
                  Search
                </button> */}
              <Button onClick={Search} className="">
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
