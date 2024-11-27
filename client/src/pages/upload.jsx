import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await axios.post(
        "http://localhost:5500/property/upload",
        formData
      );
      console.log(res.data);
      navigate("/address");
    } catch (error) {
      console.log(error);
    }
  };
  const handleSkip = () => {
    navigate("/address");
  };
  return (
    <div>
      {" "}
      {/* <div className="flex w-full gap-2 items-center">
        <label htmlFor=""></label> */}
      <div className="max-w-2xl  mx-auto mt-44 text-slate-700 ">
        <form className="w-max bg-white  mx-auto p-4  rounded-md shadow-lg text-center">
          <h1 className="text-center">Upload ProfilePicture</h1>
          <input
            type="file"
            name="file"
            //   value={file}
            multiple={true}
            accept="image/"
            onChange={(e) => setFile(e.target.files[0])}
            className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border w-full mb-3 "
          />
          <div className="flex items-center gap-4 justify-end">
            <Button onClick={HandleSubmit}>Upload</Button>
            <Button onClick={handleSkip}>Skip</Button>
          </div>
        </form>{" "}
      </div>
    </div>
  );
};

export default Upload;
