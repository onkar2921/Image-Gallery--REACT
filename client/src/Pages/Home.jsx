import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ImageContext } from "../Context/ImageContextProvider";
import Loading from "../Components/Loading";
import ShowImages from "../Components/ShowImages";
import bg from "../Assets/bg.jpg";
export default function Home() {
  const {
    state: imageState,
    getAllData,
    
  } = useContext(ImageContext);

  useEffect(() => {
    getAllData();
    console.log("iamge state", imageState);
  }, [imageState?.search]);

  return (
    <>
     {

      imageState?.loading ?<Loading/>: <>
       <div className="h-[400px]  w-full flex items-center">
        <div
          className="w-full h-[400px]  flex items-center justify-center "
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-white text-4xl flex items-center text-center flex-wrap">
            Download High Quality Images By Creators
          </h1>
        </div>
      </div>

      <div className="flex h-full w-full p-4">
        {imageState?.searchData.length === 0 && (
          <ShowImages data={imageState?.allData} />
        )}
        {imageState?.searchData.length > 0 && (
          <ShowImages data={imageState?.searchData} />
        )}
      </div>
      </>
     }
    </>
  );
}
