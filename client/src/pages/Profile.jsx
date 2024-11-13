import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile from "../assets/users.jpeg";
import SideBar from "../components/SideBar";
import { useSelector } from "react-redux";
import AgentListen from "../components/agent_Listen";
const Profile = () => {
  //
  // https://cdn-icons-png.flaticon.com/128/706/706830.png
  const user = useSelector((state) => state.user.user);
  const ref = useRef();
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap">
      <div className="max-w-2xl  mx-auto mt-44 text-slate-700 ">
        <input type="file" id={ref} className="hidden" />
        <img
          src={user?.picture}
          alt="photo"
          onClick={() => ref}
          className="w-20 h-20 rounded-full mx-auto cursor-pointer object-center"
        />
        <form className="w-max flex flex-col gap-4 bg-white  mx-auto p-4  rounded-md  text-center">
          <input
            id="username"
            type="text"
            value={user?.username}
            className="p-2 rounded-lg focus:outline-none font-medium w-96 border"
          />
          <input
            placeholder="email"
            id="email"
            type="text"
            value={user?.email}
            className="p-2 rounded-lg focus:outline-none font-medium w-96 border"
          />
          <input
            placeholder="phone"
            id="phone"
            type="text"
            value={user?.mobile}
            className="p-2 rounded-lg focus:outline-none font-medium w-96 border"
          />
          <button className="w-full rounded p-1 bg-blue-800 hover:opacity-90 self-center text-white ">
            Update
          </button>
        </form>
        <div className="w-max flex flex-col gap-4 bg-white  mx-auto p-1  rounded-md  text-center">
          <button
            className="w-96  rounded p-1 bg-slate-600 hover:opacity-90 self-center text-white focus:bg-slate-600 focus:text-white "
            onClick={() => navigate("/add-property")}
          >
            Create Property
          </button>
        </div>
      </div>
      <AgentListen />
    </div>
  );
};

export default Profile;
