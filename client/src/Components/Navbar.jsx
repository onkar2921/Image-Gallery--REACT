import React, { useState } from "react";
import { useContext } from "react";
import { ImageContext } from "../Context/ImageContextProvider";
export default function Navbar() {
  const { getSearchImages } = useContext(ImageContext);

  const [text, setText] = useState("");

  const handelSearch = async () => {
    if (text.length > 0) {
      getSearchImages(text);
      setText("")
    } else {
      alert("text length is 0");
    }
  };

  return (
    <>
      <div className="w-full h-[60px] flex items-center   justify-around  bg-slate-100 rounded-lg mb-2">
        <div>
          <h1 className=" text-xl md:text-4xl ml-2">Image Gallery</h1>
        </div>

        <div className="flex items-center w-1/2 h-full">
          <div className="mr-4  w-full">
            <input
              className="text-center rounded-full py-2 px-4 w-full border border-gray-300 focus:outline-none focus:ring focus:border-black"
              type="text"
              value={text}
              placeholder="Search"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="mr-4">
            <button className=" text-sm md:text-xl" onClick={handelSearch}>
              search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
