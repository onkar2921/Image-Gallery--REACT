import { createContext, useReducer } from "react";
import axios from "axios";
import { ImageReducer } from "../Reducers/ImageReducer";


export const ImageContext=createContext(null)



export default function ImageContextProvider({children}) {


    const IntialImage={
        allData:[],
        loading:true,
        searchData:[],
        search:false
    }


    const [state,ImageDispatch]=useReducer(ImageReducer,IntialImage)

    const getAllData=async()=>{
        try {
          ImageDispatch({type:"SETLOADING"})
            const data =await axios.get(`${process.env.REACT_APP_UNSPLASH_BASE_URI}`, {
                params: {
                  client_id:process.env.REACT_APP_ACCESS_KEY,
                },
              })

            if(data){

                ImageDispatch({type:"SETALLDATA",payload:data?.data})
                
                ImageDispatch({type:"REMOVELOADING"})

            }else{

            }
            
        } catch (error) {
            
        }
    }

    const getSearchImages=async(text)=>{
        try {
          ImageDispatch({type:"SETLOADING"})
            const data =await axios.get(`${process.env.REACT_APP_UNSPLASH_SEARCH_URI}?query=${text}`,{
                params: {
                  client_id:process.env.REACT_APP_ACCESS_KEY,
                },
              })

            if(data){

                
                ImageDispatch({type:"SETSEARCHDATA",payload:data?.data})
                ImageDispatch({type:"REMOVELOADING"})

            }else{

            }
            
        } catch (error) {
            
        }
    }



    
const downloadImage = async (imageId) => {
  
  const unsplashImageURL = `https://api.unsplash.com/photos/${imageId}/download`;

  const response = await axios.get(unsplashImageURL, {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
    },
    responseType: 'stream',
  });

}

    


  return (
    <>
    
    <ImageContext.Provider value={{state,ImageDispatch,getAllData,getSearchImages,downloadImage}}>
        {children}
    </ImageContext.Provider>
    
    </>
  )
}
