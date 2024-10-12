import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
const SideBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    Adult: 1,
    children: 3,
    room: 2,
  });
  const handleButton = () => {};

  return (
    <div className="w-full md:w-96 md:px-4  mt-10  ">
      <div className="flex flex-col gap-4 p-3 shadow-md">
        {" "}
        <input
          type="text"
          placeholder="Search Home "
          className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border  "
        />
        <div className="flex justify-between md:justify-stretch gap-3">
          <input
            type="text"
            placeholder="max price "
            className="w-56 md:w-[150px] p-2 rounded-lg focus:outline-none text-slate-700 font-medium border  "
          />
          <input
            type="text"
            placeholder="min price"
            className="w-56 md:w-[150px] p-2 rounded-lg focus:outline-none text-slate-700 font-medium border  "
          />
        </div>
        <select
          name=""
          id=""
          className="p-2 rounded-lg text-slate-700 font-medium focus:outline-none capitalize border "
        >
          {[
            "property Type",
            "2 bathroom",
            "3 bathroom",
            "4 bathroom",
            "5 bathroom",
          ].map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
        <select
          name=""
          id=""
          className="p-2 rounded-lg text-slate-700 font-medium focus:outline-none capitalize border "
        >
          {["bedroom", "2 bedroom", "3 bedroom", "4 bedroom", "5 bedroom"].map(
            (item) => {
              return <option value={item}>{item}</option>;
            }
          )}
        </select>
        <select
          name=""
          id=""
          className="p-2 rounded-lg text-slate-700 font-medium focus:outline-none capitalize border "
        >
          {[
            "bathroom",
            "2 bathroom",
            "3 bathroom",
            "4 bathroom",
            "5 bathroom",
          ].map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
        <div className="flex flex-wrap gap-4 px-1 text-slate-700">
          {/* <input
            type="checked"
            className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border  "
          /> */}
          <div className="flex gap-2 items-center ">
            <input type="checkbox" name="" id="" className="w-5 h-5" />
            <span className="font-semibold ">Rent</span>
          </div>
          <div className="flex gap-2 items-center ">
            <input type="checkbox" name="" id="" className="w-5 h-5" />
            <span className="font-semibold ">Sale</span>
          </div>
          <div className="flex gap-2 items-center ">
            <input type="checkbox" name="" id="" className="w-5 h-5" />
            <span className="font-semibold ">Furnished</span>
          </div>
          <div className="flex gap-2 items-center ">
            <input type="checkbox" name="" id="" className="w-5 h-5" />
            <span className="font-semibold ">Parking</span>
          </div>
          <div className="flex gap-2 items-center ">
            <input type="checkbox" name="" id="" className="w-5 h-5" />
            <span className="font-semibold ">Pool</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
