import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const Addresse = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  const navigate = useNavigate();
  const handInput = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handelLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    // setError(false);
    try {
      // const { data } = await AddformData(formData);
      const { data } = await axios.post(
        "http://localhost:5500/auth/login",
        formData,
        {
          withCredentials: true,
        }
      );

      console.log(data.message);
      setLoading(false);
      navigate("/login");
    } catch (error) {
      // setError(error);
      setLoading(false);
    }
  };
  const validationSchema = yup.object().shape({
    // postal: yup.string().required("Postal Code is required"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    country: yup.string().required("Country is required"),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="max-w-2xl bg-blue-800 mx-auto mt-44 text-slate-700 ">
      {/*  <form
        className="max-w-xl flex flex-col gap-3  mx-auto p-4  rounded-md shadow-lg text-center bg-red-600"
        
      >
         <input
          {...register("firstName", { required: true })}
          aria-invalid={errors.firstName ? "true" : "false"}
        />
        {errors.firstName?.type === "required" && (
          <p role="alert">First name is required</p>
        )}

        <input
          {...register("mail", { required: "Email Address is required" })}
          aria-invalid={errors.mail ? "true" : "false"}
        />
        {errors.mail && <p role="alert">{errors.mail?.message}</p>}

      
        <button>Submit</button>
      </form> */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl flex flex-col gap-3 bg-white  mx-auto p-4  rounded-md shadow-lg text-center"
      >
        <h1 className="text-center">Register</h1>
        <div className="flex gap-5 ">
          <label className="flex flex-col gap-1 items-start ">
            <span>Country</span>
            <input
              placeholder="Country"
              {...register("country")}
              type="text"
              className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-60 border"
            />
            {errors && (
              <span className="text-red-600 font-semibold">
                {errors.country?.message}
              </span>
            )}
          </label>
          <label className="flex flex-col gap-1 items-start ">
            <span>State</span>
            <input
              placeholder="State"
              {...register("state")}
              type="text"
              className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-60  border"
            />
            {errors && (
              <span className="text-red-600 font-semibold">
                {errors.state?.message}
              </span>
            )}
          </label>
        </div>
        <div className="flex gap-5 ">
          <label className="flex flex-col gap-1 items-start ">
            <span>City</span>
            <input
              placeholder="City"
              {...register("city")}
              type="text"
              className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-60 border"
            />
            {errors && (
              <span className="text-red-600 font-semibold">
                {errors.city?.message}
              </span>
            )}
          </label>

          <label className="flex flex-col gap-1 items-start ">
            <span>Address</span>{" "}
            <input
              placeholder="Address"
              {...register("address")}
              type="text"
              className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-60 border"
            />{" "}
            {errors && (
              <span className="text-red-600 font-semibold">
                {errors.address?.message}
              </span>
            )}
          </label>
        </div>
        {/* <div className="flex gap-5 ">
          <label className="flex flex-col gap-1 items-start ">
            <span>PostalCod</span>
            <input
              placeholder="PostalCod"
              {...register("postal")}
              type="password"
              className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-60 border"
            />
          </label>
        </div> */}

        <button
          disabled={loading}
          className="w-full rounded p-2 bg-blue-800 hover:opacity-90 self-center text-white "
        >
          {loading ? "loading ..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Addresse;
