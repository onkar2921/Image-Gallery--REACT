import {Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
function App() {
  return (
   <>
   <Navbar></Navbar>
   <Routes>
      <Route path="/" element={<Home/>}></Route>



   </Routes>
   
   </>
  );
}

export default App;
