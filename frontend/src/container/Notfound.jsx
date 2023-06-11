import React from "react";
import { BiErrorAlt } from "react-icons/bi";
function Notfound() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="mb-5 font-bold text-red-800">
        Pins not found for this URL
      </h1>
      <BiErrorAlt fontSize={100} color="red" />
    </div>
  );
}

export default Notfound;
