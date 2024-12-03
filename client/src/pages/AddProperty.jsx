import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import SimpleMDE from "react-simplemde-editor";
import { useCreateListenMutation } from "../Api/Api";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddProperty = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  // const dispatch = useDispatch();
  console.log(file);
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
    parking: false,
    pool: false,
    offer: false,
    withFeature: false,
    feature: [],
  });

  const HandleChange = (e) => {
    if (e.target.id === "rent" || e.target.id === "sale") {
      setData({
        ...data,
        type: e.target.id,
      });
    }
    if (
      e.target.id === "furnished" ||
      e.target.id === "parking" ||
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
      e.target.id === "name" ||
      e.target.id === "address" ||
      e.target.id === "price" ||
      e.target.id === "discountPrice" ||
      e.target.id === "description"
    ) {
      setData({
        ...data,
        [e.target.id]: e.target.value,
      });
    }

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
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("price", data.price);
    formData.append("propertyType", data.propertyType);
    formData.append("bathroom", data.bathroom);
    formData.append("bedroom", data.bedroom);
    formData.append("description", data.description);
    formData.append("discountPrice", data.discountPrice);
    formData.append("feature", data.feature);
    formData.append("furnished", data.furnished);
    formData.append("offer", data.offer);
    formData.append("parking", data.parking);
    formData.append("pool", data.pool);
    formData.append("type", data.type);
    formData.append("squareFeet", data.squareFeet);
    formData.append("withFeature", data.withFeature);
    for (let index = 0; index < file.length; index++) {
      const eachFile = file[index];
      formData.append("image", eachFile);
    }
    try {
      // setLoader(true);
      const res = await axios.post(
        "http://localhost:5500/property/",
        formData,
        {
          withCredentials: true,
        }
      );
      const data = await res.json();

      console.log(data);

      // setLoader(false);
      navigate("/profile");
    } catch (error) {
      setError(error.response.data.message);
      // isLoading(false);
    }
  };
  return (
    <div className="text-slate-700 flex flex-wrap mt-10  ">
      <div className="w-4/5   mx-auto">
        <form className="flex flex-col gap-3 mx-auto w-max md:w-[40rem] shadow-md p-4">
          <span className="text-red-600 font-semibold  ">{error}</span>
          <input
            type="text"
            placeholder="Name "
            required
            id="name"
            onChange={HandleChange}
            className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border w-full  "
          />
          <input
            type="text"
            placeholder="Address "
            required
            id="address"
            onChange={HandleChange}
            className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border w-full  "
          />

          <input
            type="number"
            placeholder="Price "
            required
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

          <div className="flex w-full gap-2 items-center">
            <label htmlFor=""></label>
            <input
              type="file"
              name="file"
              required
              multiple
              accept="image/*"
              // onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
              onChange={(e) => setFile(e.target.files)}
              className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border w-full  "
            />
            {/* <Button onClick={uploadImage}>Upload</Button> */}
          </div>

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
                id="parking"
                className="w-5 h-5"
                checked={data.parking}
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

          <Button onClick={handleCreate}>Create</Button>
        </form>
      </div>
      {/* <div className="w-40  relative mx-auto mt-6 sm:top-96 sm:right-80">
        {" "}
        {file &&
          file.map((item, i) => {
            return (
              <img
                key={i}
                src={item}
                alt=""
                className="w-40 h-40 object-cover rounded-lg"
              />
            );
          })}
      </div> */}
    </div>
  );
};

export default AddProperty;
