import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Upload = () => {
  const [file, setFile] = useState("");
  console.log(file);
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {" "}
      <div className="flex w-full gap-2 items-center">
        <label htmlFor=""></label>
        <input
          type="file"
          name="file"
          //   value={file}
          multiple={true}
          accept="image/"
          onChange={(e) => setFile(e.target.files[0])}
          className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border w-full  "
        />
        <Button onClick={HandleSubmit}>Upload</Button>
      </div>
    </div>
  );
};

export default Upload;
