import { Button, Container } from "react-bootstrap";
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
    navigate("/listen");
  };
  return (
    <div className="absolute top-20">
      <Container>
        <div className=" flex flex-col flex-wrap  ">
          <div className=" bg-blue-800 px-5  rounded-md ">
            <h2 className="mt-5 sm:text-2xl font-semibold">
              Find a Perfect Dream House
            </h2>
            <span className="font-semibold text-xl sm:text-2xl">
              We Have Over Million Properties For You
            </span>
            <p className="font-semibold text-sm sm:text-xl">
              Browse The Top Morden Homes
            </p>
            <div className="flex mt-10 gap-10">
              <Button
                variant="primary text-light"
                className="lg:w-64 md:w-44 sm:w-fit"
              >
                Buy
              </Button>
              <Button variant="secondary" className="lg:w-64 md:w-44 sm:w-fit">
                Rent
              </Button>
            </div>
          </div>
          <div className=" sm:px-5 ">
            <div className="bg-white rounded p-1  flex flex-wrap   items-center gap-4">
              <label className="flex gap-2 items-center  rounded-lg border p-2 text-slate-500 text-xl">
                <MdIcons.MdLocationCity color="gray" size={20} />
                <input
                  type="text"
                  placeholder="Location"
                  className="focus:outline-none"
                />
              </label>
              <select className="  rounded-lg border p-2 text-slate-500 text-xl">
                <option value="">Property Type</option>
                <option value="Property Type">Property Type</option>
                <option value="Property Type">Property Type</option>
                <option value="Property Type">Property Type</option>
              </select>
              <select className="  rounded-lg border p-2 text-slate-500 text-xl">
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
              <Button onClick={Search}>Search</Button>
            </div>
          </div>
        </div>
      </Container>{" "}
    </div>
  );
};

export default Find;
