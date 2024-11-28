import React from "react";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
const Edit = () => {
  const validationSchema = yup.object().shape({
    username: yup.string().required("user name  is required"),
    mobile: yup.string().required("phone  is required"),
    gender: yup.string().required("gender  is required"),
    email: yup.string().email().required("email is required"),
    role: yup.string().required("role  is required"),
    password: yup.string().min(10).max(50).required(),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  //   {
  //     resolver: yupResolver(validationSchema),
  //   }

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className="max-w-2xl  mx-auto mt-44 text-slate-700 ">
      <h1 className="text-center">Update Property</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl flex flex-col  gap-3 bg-white  mx-auto p-4  rounded-md shadow-lg text-center"
      >
        <div className="w-ful flex justify-between">
          <div className="flex flex-col gap-2 ">
            <label className="flex flex-col gap-1 items-start ">
              <input
                placeholder="Name"
                {...register("name")}
                type="text"
                className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-72 border"
              />
              {errors && (
                <span className="text-red-600 font-semibold">
                  {errors.username?.message}
                </span>
              )}
            </label>
            <label className="flex flex-col gap-1 items-start ">
              <input
                placeholder="Address"
                {...register("address")}
                type="text"
                className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-72  border"
              />
              {errors && (
                <span className="text-red-600 font-semibold">
                  {errors.email?.message}
                </span>
              )}
            </label>
            <label className="flex flex-col gap-1 items-start ">
              <input
                type="number"
                placeholder="Price "
                required
                id="price"
                className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-72  border"
              />
              {errors && (
                <span className="text-red-600 font-semibold">
                  {errors.email?.message}
                </span>
              )}
            </label>
          </div>

          <div className="flex flex-col gap-2 ">
            <label className="flex flex-col gap-1 items-start ">
              <label className="flex flex-col gap-1 items-start ">
                <select
                  name=""
                  id="propertyType"
                  {...register("propertyType")}
                  className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-72 capitalize border"
                >
                  <option value="">Property Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Property Type">Property Type</option>
                  <option value="Property Type">Property Type</option>
                </select>
                {errors && (
                  <span className="text-red-600 font-semibold">
                    {errors.email?.message}
                  </span>
                )}
              </label>
              <label className="flex flex-col gap-1 items-start ">
                <select
                  name=""
                  id="bedroom"
                  {...register("bedroom")}
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
                {errors && (
                  <span className="text-red-600 font-semibold">
                    {errors.email?.message}
                  </span>
                )}
              </label>
              <label className="flex flex-col gap-1 items-start ">
                <select
                  name=""
                  id="bathroom"
                  {...register("bathroom")}
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
                {errors && (
                  <span className="text-red-600 font-semibold">
                    {errors.email?.message}
                  </span>
                )}
              </label>
              {errors && (
                <span className="text-red-600 font-semibold">
                  {errors.role?.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="flex flex-col gap-1 items-start mt-4">
            <textarea
              name=""
              id="description"
              {...register("description")}
              cols="30"
              rows="10"
              placeholder="descriptions"
              className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border w-full  "
            />
            {errors && (
              <span className="text-red-600 font-semibold">
                {errors.gender?.message}
              </span>
            )}
          </label>
          <label className="flex flex-col gap-1 items-start ">
            <input
              type="file"
              name="file"
              required
              multiple
              onChange={(e) => setFile(e.target.files)}
              className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border w-full  "
            />
            {errors && (
              <span className="text-red-600 font-semibold">
                {errors.role?.message}
              </span>
            )}
          </label>

          <div className="flex flex-wrap gap-2">
            <div className="flex gap-1 items-center ">
              <input
                type="checkbox"
                name=""
                required
                id="rent"
                {...register("type===rent")}
                className="w-5 h-5"
                checked
              />
              <span className="font-semibold ">Rent</span>
            </div>
            <div className="flex gap-1 items-center ">
              <input
                type="checkbox"
                name=""
                required
                id="sale"
                className="w-5 h-5"
                // checked={data.type === "sale"}
              />
              <span className="font-semibold ">Sale</span>
            </div>
            <div className="flex gap-1 items-center ">
              <input
                type="checkbox"
                name=""
                required
                id="furnished"
                className="w-5 h-5"
                // checked={data.furnished}
              />
              <span className="font-semibold ">Furnished</span>
            </div>
            <div className="flex gap-1 items-center ">
              <input
                type="checkbox"
                name=""
                required
                id="offer"
                className="w-5 h-5"
                // checked={data.offer}
              />
              <span className="font-semibold ">Offer</span>
            </div>
            <div className="flex gap-1 items-center ">
              <input
                type="checkbox"
                name=""
                required
                id="parking"
                className="w-5 h-5"
                // checked={data.parking}
              />
              <span className="font-semibold ">Parking</span>
            </div>
            <div className="flex gap-1 items-center ">
              <input
                type="checkbox"
                name=""
                required
                id="pool"
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
