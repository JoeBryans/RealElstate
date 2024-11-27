import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile from "../assets/users.jpeg";
import SideBar from "../components/SideBar";
import { useSelector } from "react-redux";
import AgentListen from "../components/agent_Listen";
import axios from "axios";
import { Button } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import Inputs from "../components/inputs";
const Profile = () => {
  //
  // https://cdn-icons-png.flaticon.com/128/706/706830.png
  const user = useSelector((state) => state.user.user);
  const [file, setFile] = useState();
  const [show, setShow] = useState(false);
  const [formdatas, setFormDatas] = useState({
    username: user.username || "",
    email: user.email || "",
    mobile: user.mobile || "",
  });
  console.log(file);
  console.log(user._id);
  const handelChange = (e) => {
    setFormDatas({ ...formdatas, [e.target.id]: e.target.value });
  };
  const userRef = useRef(null);
  const navigate = useNavigate();
  const UpdateProfile = async (e) => {
    e.preventDefault();

    try {
      const { data } = axios.put(
        `http://localhost:5500/auth/${user._id}`,
        formdatas,
        {
          // headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const uploadImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    try {
      const { data } = axios.post(
        `http://localhost:5500/auth/user/upload/${user._id}`,
        formData,
        {
          // headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(data);
      // console.log(formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-wrap relative">
      <div className="max-w-2xl  mx-auto mt-44 text-slate-700 relative">
        <input
          type="file"
          value=""
          // onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
          name="file"
          ref={userRef}
          accept="image/*"
          className="hidden"
        />
        <img
          src={user?.picture}
          alt="photo"
          onClick={() => userRef.current.click()}
          className="w-20 h-20 rounded-full mx-auto cursor-pointer border "
        />
        <button
          className="h-fit absolute top-14 right-28 bg-blue-800 text-white rounded border-0 px-1 "
          onClick={uploadImage}
        >
          upload
        </button>
        <form className="w-max flex flex-col gap-4 bg-white  mx-auto p-4  rounded-md  text-center mt-3">
          <label
            htmlFor=""
            className="flex items-center justify-between border-b w-96 px-2"
          >
            <span className="p-2 rounded-lg focus:outline-none font-medium  ">
              Username
            </span>{" "}
            <div className="flex items-center gap-2 max-w-60 ">
              <span className={show ? "hidden" : "line-clamp-1"}>
                {user.username}
              </span>
              <FaIcons.FaUserEdit />
            </div>
          </label>
          <label
            htmlFor=""
            className="flex items-center justify-between gap-2 border-b w-96  px-2"
          >
            <span className="p-2 rounded-lg focus:outline-none font-medium line-clamp-1">
              Email
            </span>{" "}
            <div className="flex items-center gap-2  max-w-60">
              <span className="line-clamp-1">{user.email}</span>
              <FaIcons.FaUserEdit />
            </div>
          </label>
          <label
            htmlFor=""
            className="flex items-center justify-between gap-2 border-b w-96  px-2"
          >
            <span className="p-2 rounded-lg focus:outline-none font-medium  ">
              Phone
            </span>{" "}
            <div className="flex items-center gap-2 max-w-60 ">
              <span>{user.mobile}</span>
              <FaIcons.FaUserEdit />
            </div>
          </label>
          <label
            htmlFor=""
            className="flex items-center justify-between gap-2 border-b w-96  px-2"
          >
            <span className="p-2 rounded-lg focus:outline-none font-medium  ">
              Gender
            </span>{" "}
            <div className="flex items-center gap-2 max-w-60 ">
              <span>{user.gender}</span>
            </div>
          </label>

          {/* <input
            placeholder="phone"
            id="mobile"
            type="ge"
            value={user.mobile}
            disabled
            onChange={handelChange}
            className="p-2 rounded-lg focus:outline-none font-medium w-96 "
          /> */}

          <button
            className="w-full rounded p-1 bg-blue-800 hover:opacity-90 self-center text-white "
            onClick={UpdateProfile}
          >
            Update
          </button>
        </form>
        <div className="w-max flex flex-col gap-4 bg-white  mx-auto p-1  rounded-md  text-center">
          {user.role === "agent" ? (
            <button
              className="w-96  rounded p-1 bg-slate-600 hover:opacity-90 self-center text-white focus:bg-slate-600 focus:text-white "
              onClick={() => navigate("/add-property")}
            >
              Create Property
            </button>
          ) : null}
        </div>
      </div>
      {user.role === "agent" ? <AgentListen /> : null}
    </div>
  );
};

export default Profile;
