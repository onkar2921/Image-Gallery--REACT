import React, { useEffect, useState } from "react";
import SingleImage from "./SingleImage";
import { useContext } from "react";
import { ImageContext } from "../Context/ImageContextProvider";
import like from "../Assets/like.png";
export default function ShowImages({ data }) {
  const { getSearchImages } = useContext(ImageContext);

  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags(data?.map((item) => item?.tags)[0]);
    console.log("tags array", tags);
  }, [data]);

  const [open, setOpen] = useState(false);
  const [popupdata, setpoupData] = useState(null);

  const handelpopup = (item) => {
    setpoupData(item);
    setOpen(!open);
  };

  const formatLikes = (likes) => {
    if (likes >= 1000000) {
      return `${(likes / 1000000).toFixed(1)}M`;
    } else if (likes >= 1000) {
      return `${(likes / 1000).toFixed(1)}K`;
    }
    return likes;
  };

  return (
    <>
      <div className="flex w-full h-full flex-col">
        {tags && (
          <div className="w-full h-full p-2 flex flex-wrap">
            {tags?.map((item, index) => {
              return (
                <button
                  className="bg-black p-2 rounded-md m-2 text-white"
                  key={index}
                  onClick={() => {
                    getSearchImages(item?.title);
                  }}
                >
                  {item?.title}
                </button>
              );
            })}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.map((item, index) => (
            <div key={index} className="relative group">
              <img
                src={item?.urls?.small}
                alt=""
                onClick={() => handelpopup(item)}
                className="w-full h-auto cursor-pointer"
              />

              {/* User Information */}
              <div className=" bg-white p-2 text-gray-700 absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center space-x-2">
                  <img
                    src={item?.user?.profile_image?.small}
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="font-bold">{item?.user?.username}</p>
                </div>

                <div className="flex items-center w-full h-full  mt-2 text-center">
                  <img
                    src={like}
                    alt="like"
                    className="h-[30px] w-[30px] mr-2"
                  />
                  <p>{formatLikes(item?.likes)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* pop up  */}

        <div>
          {open && (
            <div className=" w-full h-full fixed inset-0 flex items-center justify-center z-10 bg-gray-700 bg-opacity-50">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <SingleImage
                  imageData={popupdata}
                  handelClose={handelpopup}
                  Imagetags={tags}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
