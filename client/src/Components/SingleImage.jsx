import { useContext } from "react";
import { ImageContext } from "../Context/ImageContextProvider";
import like from "../Assets/like.png";
export default function SingleImage({ imageData, handelClose, Imagetags }) {
  const { getSearchImages, downloadImage } = useContext(ImageContext);
  console.log("image data ---", imageData);

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
      <div className="h-full w-full rounded-md">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <button
            onClick={handelClose}
            className="relative top-[-20px] left-[280px] text-gray-600 text-2xl  cursor-pointer"
          >
            X
          </button>
          <img
            src={imageData?.urls?.small}
            alt="single image data"
            className="w-[300px] h-[300px] rounded-md"
          />

          <div className="flex flex-wrap items-center mt-2">
            <p>{imageData?.description}</p>
          </div>
          <div className="flex items-center mt-4 justify-around  ">
            <div className="flex items-center">
              <img
                src={imageData?.user?.profile_image?.medium}
                alt="user image"
                className="w-8 h-8 rounded-full mr-2"
              />
              <p>{imageData?.user?.name}</p>
            </div>

            {/* <div className="mt-4 mb-2">
             
download

            </div> */}
          </div>

          <div className="mt-4 flex items-center justify-around">
            <div>
              <a
                href={`${imageData?.user?.portfolio_url}`}
                className="text-center text-sm cursor-pointer"
              >
                @{imageData?.user?.name}
              </a>
            </div>
            <div className="flex items-center jus ">
              {/* <p className="mr-2">Likes</p> */}
              <img src={like} alt="like" className=" h-[30px] w-[30px] mr-2" />
              {/* {imageData?.likes} */}
              {formatLikes(imageData?.likes)}
            </div>
          </div>

          <div className="mt-4">
            {Imagetags && (
              <div>
                <h1 className="text-lg font-semibold">Related Tags</h1>
              </div>
            )}
            <div className="flex flex-wrap space-x-2 space-y-2">
              {Imagetags?.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    getSearchImages(item?.title);
                    handelClose();
                  }}
                  className="bg-gray-300 py-1 px-4 rounded-full text-black hover:bg-gray-400 hover:text-white"
                >
                  {item?.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
