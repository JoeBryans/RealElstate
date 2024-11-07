import React, { useState } from "react";
import { Button } from "react-bootstrap";
import SimpleMDE from "react-simplemde-editor";
import { useCreateListenMutation } from "../Api/Api";

const AddProperty = () => {
  const [AddformData, isLoading] = useCreateListenMutation();

  const [data, setData] = useState({
    name: "",
    description: "",
    address: "",
    type: "",
    propertyType: "",
    squareFeet: "",
    price: 0,
    discountPrice: 0,
    bathroom: 0,
    bedroom: 0,
    furnished: false,
    packing: false,
    pool: false,
    offer: false,
    image: [],
    withFeature: false,
    feature: [],
  });
  console.log(data);

  const HandleChange = (e) => {
    if (e.target.id === "rent" || e.target.id === "sale") {
      setData({
        ...data,
        type: e.target.id,
      });
    }
    if (
      e.target.id === "furnished" ||
      e.target.id === "packing" ||
      e.target.id === "offer" ||
      e.target.id === "pool" ||
      e.target.id === "withFeature"
    ) {
      setData({
        ...data,
        [e.target.id]: e.target.checked,
      });
    }
    if (
      e.target.id === "search" ||
      e.target.id === "address" ||
      e.target.id === "price" ||
      e.target.id === "description"
    ) {
      setData({
        ...data,
        [e.target.id]: e.target.value,
      });
    }
    // if (e.target.id === "min" || e.target.id === "max") {
    //   setData({
    //     ...data,
    //     [e.target.id]: e.target.value,
    //   });
    // }
    if (
      e.target.id === "bedroom" ||
      e.target.id === "bathroom" ||
      e.target.id === "propertyType"
    ) {
      setData({
        ...data,
        [e.target.id]: e.target.value,
      });
    }
  };
  const handleCreate = async (e) => {
    e.preventdefault();
    try {
      isLoading(true);
      const res = await AddformData(formData);
      console.log(res.data);
      isLoading(false);
    } catch (error) {
      console.log(error);
      isLoading(false);
    }
  };
  return (
    <div className="text-slate-700 flex mt-10  ">
      <div className="w-4/5   mx-auto">
        <form
          onSubmit={handleCreate}
          className="flex flex-col gap-3 mx-auto w-max md:w-[40rem] shadow-md p-4"
        >
          <input
            type="text"
            placeholder="Name "
            id="name"
            onChange={HandleChange}
            className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border w-full  "
          />
          {/* address
price
discountPrice */}
          <input
            type="number"
            placeholder="Price "
            id="price"
            onChange={HandleChange}
            className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border w-full  "
          />

          <select
            name=""
            id="propertyType"
            className="p-2 rounded-lg text-slate-700 font-medium focus:outline-none capitalize border "
            onChange={HandleChange}
          >
            <option value="">Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="Property Type">Property Type</option>
            <option value="Property Type">Property Type</option>
          </select>
          <select
            name=""
            id="bedroom"
            onChange={HandleChange}
            className="p-2 rounded-lg text-slate-700 font-medium focus:outline-none capitalize border "
          >
            <option value={0}>Bedroom</option>;<option value={1}>{1}</option>;
            <option value={2}>{2}</option>;<option value={3}>{3}</option>;
            <option value={4}>{4}</option>;<option value={5}>{5}</option>;
          </select>
          <select
            name=""
            id="bathroom"
            onChange={HandleChange}
            className="p-2 rounded-lg text-slate-700 font-medium focus:outline-none capitalize border "
          >
            <option value={0}> Bathroom</option>;<option value={1}>{1}</option>;
            <option value={2}>{2}</option>;<option value={3}>{3}</option>;
            <option value={4}>{4}</option>;<option value={5}>{5}</option>;
          </select>

          <textarea
            name=""
            id="description"
            cols="30"
            rows="10"
            onChange={HandleChange}
            placeholder="descriptions"
            className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border w-full  "
          />
          {/* <SimpleMDE
            name=""
            id="description"
            // cols="30"
            // rows="10"C
            onChange={HandleChange}
            placeholder="descriptions"
            className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border w-full  "
          /> */}

          {/* <div className="flex w-full gap-2 items-center">
            <label htmlFor=""></label>
            <input
              type="file"
              id="file"
              multiple={true}
              // value={searchForm.search}
              onChange={HandleChange}
              className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border w-full  "
            />
            <Button>Upload</Button>
          </div> */}

          <div className="flex flex-wrap">
            <div className="flex gap-2 items-center ">
              <input
                type="checkbox"
                name=""
                id="rent"
                className="w-5 h-5"
                checked={data.type === "rent"}
                onChange={HandleChange}
              />
              <span className="font-semibold ">Rent</span>
            </div>
            <div className="flex gap-2 items-center ">
              <input
                type="checkbox"
                name=""
                id="sale"
                className="w-5 h-5"
                checked={data.type === "sale"}
                onChange={HandleChange}
              />
              <span className="font-semibold ">Sale</span>
            </div>
            <div className="flex gap-2 items-center ">
              <input
                type="checkbox"
                name=""
                id="furnished"
                className="w-5 h-5"
                checked={data.furnished}
                onChange={HandleChange}
              />
              <span className="font-semibold ">Furnished</span>
            </div>
            <div className="flex gap-2 items-center ">
              <input
                type="checkbox"
                name=""
                id="offer"
                className="w-5 h-5"
                checked={data.offer}
                onChange={HandleChange}
              />
              <span className="font-semibold ">Offer</span>
            </div>
            <div className="flex gap-2 items-center ">
              <input
                type="checkbox"
                name=""
                id="packing"
                className="w-5 h-5"
                checked={data.packing}
                onChange={HandleChange}
              />
              <span className="font-semibold ">Parking</span>
            </div>
            <div className="flex gap-2 items-center ">
              <input
                type="checkbox"
                name=""
                id="pool"
                className="w-5 h-5"
                checked={data.pool}
                onChange={HandleChange}
              />
              <span className="font-semibold ">Pool</span>
            </div>
          </div>

          <Button>Create</Button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
