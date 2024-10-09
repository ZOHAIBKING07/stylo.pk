import React from "react";
import "./style.css"

import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import Carousel from "./component/Carousel";
import Counter from "./component/Counter";
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  {Routes,Route}  from "react-router-dom";
import MainNavbar from "./component/MainNavbar";
import Home from "./component/Home";
import Eid from "./pages/Eid";
import Summer24 from "./pages/Summer24";
import WomanShoes from "./pages/WomanShoes";
import WomanApperals from "./pages/WomanApperals";
import Bags from "./pages/Bags";
import Kids from "./pages/Kids";
import Acceseories from "./pages/Acceseories";
import Fragrances from "./pages/Fragrances";


import 'bootstrap/dist/css/bootstrap.css';
import ProductDescription from "./pages/ProductDescription";
import Signup from "./pages/Signup";



function App() {
  
  return (
    <>
   < MainNavbar/>
    <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Eid"element={<Eid/>}/>
  <Route path="/Summer24"element={<Summer24/>}/>
  <Route path="/WomanShoes"element={<WomanShoes/>}/>
  <Route path="/WomanApperals"element={<WomanApperals/>}/>
  <Route path="/Bags"element={<Bags/>}/>
  <Route path="/Kids"element={<Kids/>}/>
  <Route path="/Acceseories"element={<Acceseories/>}/>
  <Route path="/Fragrances"element={<Fragrances/>}/>
  <Route path="/Product/:id" element={<ProductDescription/>}/>
   <Route path="/Signup" element={<Signup/>}/>

  </Routes>

    <ToastContainer
    position="top-right"
    autoClose={3000}
    limit={1}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    transition={Zoom}
    
    />
    {/* <Counter/> */}
    </>
  );
}

export default App;

    