import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-[100vh]  bg-black absolute top-0 opacity-80 flex justify-center items-center">
      <div className="flex  justify-center">
        <span className="k text-yellow-500 font-bold text-2xl">Kings</span>
        <span className="p text-green-500 font-bold text-2xl">
          Property ...
        </span>
      </div>
    </div>
  );
};

export default Loading;
