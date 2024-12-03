import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState([]);
  const [property, setProperty] = useState({});
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const params = useParams();
  const { id } = params;

  const fetchData = async (id) => {
    const res = await axios.get(`http://localhost:5500/property/estate/${id}`);
    setData(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    fetchData(id);
  }, [id]);
  //   const name = property.name;
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

  const handleSubmit = async (e) => {
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
      const res = await axios.put(
        `http://localhost:5500/property/${id}`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(res.data);

      // setLoader(false);
      navigate("/profile");
    } catch (error) {
      console.log(error);
      //   setError(error.response.data.message);
      // isLoading(false);
    }
  };
  return (
    <div className="max-w-2xl  mx-auto mt-44 text-slate-700 ">
      <h1 className="text-center">Update Property</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl flex flex-col  gap-3 bg-white  mx-auto p-4  rounded-md shadow-lg text-center"
      >
        <div className="w-ful flex justify-between">
          <div className="flex flex-col gap-2 ">
            <label className="flex flex-col gap-1 items-start ">
              <input
                placeholder="Name"
                id="name"
                type="text"
                onChange={HandleChange}
                className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-72 border"
              />
            </label>
            <label className="flex flex-col gap-1 items-start ">
              <input
                placeholder="Address"
                id="address"
                type="text"
                onChange={HandleChange}
                className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-72  border"
              />
            </label>
            <label className="flex flex-col gap-1 items-start ">
              <input
                type="number"
                placeholder="Price "
                id="price"
                onChange={HandleChange}
                className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-72  border"
              />
            </label>
          </div>

          <div className="flex flex-col gap-2 ">
            <label className="flex flex-col gap-1 items-start ">
              <label className="flex flex-col gap-1 items-start ">
                <select
                  name=""
                  id="propertyType"
                  onChange={HandleChange}
                  className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-72 capitalize border"
                >
                  <option value="">Property Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Property Type">Property Type</option>
                  <option value="Property Type">Property Type</option>
                </select>
              </label>
              <label className="flex flex-col gap-1 items-start ">
                <select
                  name=""
                  id="bedroom"
                  onChange={HandleChange}
                  className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-72 capitalize border"
                >
                  <option value={0}>Bedroom</option>;
                  <option value={1}>{1}</option>;<option value={2}>{2}</option>;
                  <option value={3}>{3}</option>;<option value={4}>{4}</option>;
                  <option value={5}>{5}</option>;<option value={6}>{6}</option>;
                  <option value={7}>{7}</option>;<option value={8}>{8}</option>;
                  <option value={9}>{9}</option>;
                  <option value={10}>{10}</option>;
                  <option value={11}>{11}</option>;
                  <option value={12}>{12}</option>;
                </select>
              </label>
              <label className="flex flex-col gap-1 items-start ">
                <select
                  name=""
                  id="bathroom"
                  onChange={HandleChange}
                  className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-72 capitalize border"
                >
                  <option value={0}> Bathroom</option>;
                  <option value={1}>{1}</option>;<option value={2}>{2}</option>;
                  <option value={3}>{3}</option>;<option value={4}>{4}</option>;
                  <option value={5}>{5}</option>;<option value={6}>{6}</option>;
                  <option value={7}>{7}</option>;<option value={8}>{8}</option>;
                  <option value={9}>{9}</option>;
                  <option value={10}>{10}</option>;
                  <option value={11}>{11}</option>;
                  <option value={12}>{12}</option>;
                </select>
              </label>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="flex flex-col gap-1 items-start mt-4">
            <textarea
              name=""
              id="description"
              onChange={HandleChange}
              cols="30"
              rows="10"
              placeholder="descriptions"
              className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border w-full  "
            />
          </label>
          <label className="flex flex-col gap-1 items-start ">
            <input
              type="file"
              name="file"
              multiple
              accept="image/*"
              onChange={(e) => setFile(e.target.files)}
              className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border w-full  "
            />
          </label>

          <div className="flex flex-wrap gap-2">
            <div className="flex gap-1 items-center ">
              <input
                type="checkbox"
                name=""
                id="rent"
                onChange={HandleChange}
                checked={data.type === "rent"}
                className="w-5 h-5"
              />
              <span className="font-semibold ">Rent</span>
            </div>
            <div className="flex gap-1 items-center ">
              <input
                type="checkbox"
                name=""
                id="sale"
                className="w-5 h-5"
                onChange={HandleChange}
                checked={data.type === "sale"}
              />
              <span className="font-semibold ">Sale</span>
            </div>
            <div className="flex gap-1 items-center ">
              <input
                type="checkbox"
                name=""
                id="furnished"
                className="w-5 h-5"
                onChange={HandleChange}
                checked={data.furnished}
              />
              <span className="font-semibold ">Furnished</span>
            </div>
            <div className="flex gap-1 items-center ">
              <input
                type="checkbox"
                name=""
                id="offer"
                className="w-5 h-5"
                onChange={HandleChange}
                checked={data.offer}
              />
              <span className="font-semibold ">Offer</span>
            </div>
            <div className="flex gap-1 items-center ">
              <input
                type="checkbox"
                name=""
                id="parking"
                className="w-5 h-5"
                onChange={HandleChange}
                checked={data.parking}
              />
              <span className="font-semibold ">Parking</span>
            </div>
            <div className="flex gap-1 items-center ">
              <input
                type="checkbox"
                name=""
                id="pool"
                onChange={HandleChange}
                checked={data.pool}
                className="w-5 h-5"
              />
              <span className="font-semibold ">Pool</span>
            </div>
          </div>
        </div>
        <button className="w-full rounded p-2 bg-blue-800 hover:opacity-90 self-center text-white ">
          Create
        </button>
      </form>
    </div>
  );
};

export default Edit;
