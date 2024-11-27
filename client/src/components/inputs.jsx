import React from "react";
import * as MdIcons from "react-icons/md";

const Inputs = ({ show, setShow }) => {
  return (
    <div className="w-96 h-32 flex items-center  absolute left-5 z-30 shadow-sm px-2 mb-20">
      <MdIcons.MdClose
        size={20}
        className="absolute right-2 top-3"
        onClick={() => setShow(!show)}
      />
      <label className="flex flex-col gap-1 items-start ">
        <span>UserName</span>
        <input
          placeholder="username"
          //   {...register("username")}
          type="text"
          className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-80 border"
        />{" "}
        {/* {errors && (
              <span className="text-red-600 font-semibold">
                {errors.username?.message}
              </span>
            )} */}
      </label>
      {/* <button
        className="w-full rounded p-1 bg-blue-800 hover:opacity-90 self-center text-white "
        // onClick={UpdateProfile}
      >
        Update
      </button> */}
      <MdIcons.MdUpload size={30} />
    </div>
  );
};

export default Inputs;
