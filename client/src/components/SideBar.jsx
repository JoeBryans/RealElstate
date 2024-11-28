import React, { useEffect, useMemo, useState } from "react";
import * as MdIcons from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { Button } from "react-bootstrap";
const SideBar = () => {
  const navigate = useNavigate();
  // { searchForm, setSearchForm }
  const [max, setMax] = useState();
  const [min, setMin] = useState(10);
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
    packing: false,
  });
  const HandleInput = (e) => {
    if (
      e.target.id === "all" ||
      e.target.id === "rent" ||
      e.target.id === "sale"
    ) {
      setSearchForm({
        ...searchForm,
        type: e.target.id,
      });
    }
    if (
      e.target.id === "furnished" ||
      e.target.id === "packing" ||
      e.target.id === "offer"
    ) {
      setSearchForm({
        ...searchForm,
        [e.target.id]:
          e.target.checked || e.target.checked === "true" ? true : false,
      });
    }
    if (e.target.id === "search" || e.target.id === "address") {
      setSearchForm({
        ...searchForm,
        [e.target.id]: e.target.value,
      });
    }
    if (e.target.id === "min" || e.target.id === "max") {
      setSearchForm({
        ...searchForm,
        [e.target.id]: e.target.value,
      });
    }
    if (e.target.id === "bedroom" || e.target.id === "bathroom") {
      setSearchForm({
        ...searchForm,
        [e.target.id]: e.target.value,
      });
    }
  };
  // console.log(searchForm);
  const handleFiter = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("search", searchForm.search);
    urlParams.set("address", searchForm.address);
    urlParams.set("property", searchForm.propertyType);
    urlParams.set("bedroom", searchForm.bedroom);
    urlParams.set("bathroom", searchForm.bathroom);
    urlParams.set("min", searchForm.min);
    urlParams.set("max", searchForm.max);
    urlParams.set("packing", searchForm.packing);
    urlParams.set("furnished", searchForm.furnished);
    urlParams.set("type", searchForm.type);
    urlParams.set("offer", searchForm.offer);
    // urlParams.set("offer", searchForm.offer);;
    const searchQuery = urlParams.toString();
    navigate(`/listen?${searchQuery}`);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchUrl = urlParams.get("search");

    const addressUrl = urlParams.get("address");
    const propertyTypeUrl = urlParams.get("property");
    const bedroomUrl = urlParams.get("bedroom");
    const bathroomUrl = urlParams.get("bathroom");
    const minUrl = urlParams.get("min");
    const maxUrl = urlParams.get("max");
    const packingUrl = urlParams.get("parking");
    const furnishedUrl = urlParams.get("furnished");
    const typeUrl = urlParams.get("type");
    const offerUrl = urlParams.get("offer");
    if (
      searchUrl ||
      addressUrl ||
      propertyTypeUrl ||
      bedroomUrl ||
      bathroomUrl ||
      minUrl ||
      maxUrl ||
      packingUrl ||
      furnishedUrl ||
      typeUrl ||
      offerUrl
    ) {
      setSearchForm({
        search: searchUrl || "",
        address: addressUrl || "",
        bedroom: bedroomUrl || 0,
        bathroom: bathroomUrl || 0,
        min: minUrl || 0,
        max: maxUrl || 0,
        propertyType: propertyTypeUrl || "",
        packing: packingUrl || false,
        furnished: furnishedUrl || false,
        type: typeUrl || "all",
        offer: offerUrl || false,
      });
    }
  }, []);

  return (
    <div className="w-full md:w-96 md:px-4  px-3 mt-10 sticky top-10  ">
      <div className="flex flex-col gap-4 p-3   shadow-md">
        {" "}
        <input
          type="text"
          placeholder="Search Home "
          id="search"
          value={searchForm.search}
          onChange={HandleInput}
          className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border  "
        />
        <label className=" flex gap-2 items-center  rounded-lg border p-2 text-slate-500 text-xl bg-white">
          <MdIcons.MdLocationPin size={20} color="green" />
          <input
            type="text"
            placeholder="Location"
            className="focus:outline-none bg-transparent"
            id="address"
            value={searchForm.address}
            onChange={HandleInput}
          />
        </label>
        <div className="flex justify-between md:justify-stretch gap-3">
          <input
            type="text"
            placeholder="max price "
            id="max"
            // value={searchForm.max}
            onChange={HandleInput}
            className="w-56 md:w-[150px] p-2 rounded-lg focus:outline-none text-slate-700 font-medium border  "
          />
          <input
            type="text"
            placeholder="min price"
            id="min"
            // value={searchForm.min}
            onChange={HandleInput}
            className="w-56 md:w-[150px] p-2 rounded-lg focus:outline-none text-slate-700 font-medium border  "
          />
        </div>
        <select
          id="propertyType"
          className="p-2 rounded-lg text-slate-700 font-medium focus:outline-none capitalize border "
          onChange={HandleInput}
        >
          <option value="">Property Type</option>
          <option value="Apartment">Apartment</option>
          <option value="Bungalow">Bungalow</option>
          <option value="Detached">Detached</option>
          <option value="Duplex">Duplex</option>
          <option value="Flat">Flat</option>
          <option value="Townhouse">Townhouse</option>
        </select>
        <select
          id="bedroom"
          onChange={HandleInput}
          className="p-2 rounded-lg text-slate-700 font-medium focus:outline-none capitalize border "
        >
          <option value={0}>Bedroom</option>;<option value={1}>{1}</option>;
          <option value={2}>{2}</option>;<option value={3}>{3}</option>;
          <option value={4}>{4}</option>;<option value={5}>{5}</option>;
        </select>
        <select
          id="bathroom"
          onChange={HandleInput}
          className="p-2 rounded-lg text-slate-700 font-medium focus:outline-none capitalize border "
        >
          <option value={0}> Bathroom</option>;<option value={1}>{1}</option>;
          <option value={2}>{2}</option>;<option value={3}>{3}</option>;
          <option value={4}>{4}</option>;<option value={5}>{5}</option>;
        </select>
        {/* <div className="flex flex-col gap-1">
          <label htmlFor="price">
            Price:{min}-{max}
          </label>
          <input
            type="range"
            
            id="price"
            min="10"
            max="99999"
            value={searchForm.price}
            className="focus:outline-0"
            onChange={(e) => setMax(e.target.value)}
          />
        </div> */}
        <div className="flex flex-wrap gap-4 px-1 text-slate-700">
          {/* <input
            type="checked"
            className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border  "
          /> */}
          {/* <div className="flex gap-2 items-center ">
            <input
              type="checkbox"
              
              id="rent"
              className="w-5 h-5"
              checked={searchForm.type === "all"}
              onChange={HandleInput}
            />
            <span className="font-semibold ">All</span>
          </div> */}
          <div className="flex gap-2 items-center ">
            <input
              type="checkbox"
              id="all"
              className="w-5 h-5"
              checked={searchForm.type === "all"}
              onChange={HandleInput}
            />
            <span className="font-semibold ">All</span>
          </div>
          <div className="flex gap-2 items-center ">
            <input
              type="checkbox"
              id="rent"
              className="w-5 h-5"
              checked={searchForm.type === "rent"}
              onChange={HandleInput}
            />
            <span className="font-semibold ">Rent</span>
          </div>
          <div className="flex gap-2 items-center ">
            <input
              type="checkbox"
              id="sale"
              className="w-5 h-5"
              checked={searchForm.type === "sale"}
              onChange={HandleInput}
            />
            <span className="font-semibold ">Sale</span>
          </div>
          <div className="flex gap-2 items-center ">
            <input
              type="checkbox"
              id="furnished"
              className="w-5 h-5"
              checked={searchForm.furnished}
              onChange={HandleInput}
            />
            <span className="font-semibold ">Furnished</span>
          </div>
          <div className="flex gap-2 items-center ">
            <input
              type="checkbox"
              id="offer"
              className="w-5 h-5"
              checked={searchForm.offer}
              onChange={HandleInput}
            />
            <span className="font-semibold ">Offer</span>
          </div>
          <div className="flex gap-2 items-center ">
            <input
              type="checkbox"
              id="packing"
              className="w-5 h-5"
              checked={searchForm.packing}
              onChange={HandleInput}
            />
            <span className="font-semibold ">parking</span>
          </div>
          <div className="flex gap-2 items-center ">
            <input
              type="checkbox"
              id="pool"
              className="w-5 h-5"
              // checked={searchForm.pool}
              onChange={HandleInput}
            />
            <span className="font-semibold ">Pool</span>
          </div>
          <Button className="w-full" onClick={handleFiter}>
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
