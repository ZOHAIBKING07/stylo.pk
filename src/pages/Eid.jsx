import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Loader from '../component/Loader'

const Eid = () => {
  const [Products,setProducts]=useState([])
  const [loader,setLoader]=useState(false);
  const fatchData=async ()=>{
  setLoader(true)
    const response =await axios.get("https://fakestoreapi.com/Products")
    setProducts(response.data)
  setLoader(false)
  }
  
  useEffect(()=>{
    fatchData()
  },[])
  console.log(loader)
  console.log(Products)
  return(
  <>
  {
    loader ? <Loader/>: 
    ( <div className='d-flex flex-wrap justify-content-evenly gap-4'>
      {
        Products.map((Product)=>{
          return(
            <div class="card" style={{width: "35rem"}}>
  <img src={Product.image} class="card-img-top" style={{height:"100px" , width:"100px"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{Product.title}</h5>
    <p>{Product.rating.rate}</p>
    <button className="btn btn-danger">{Product.price}</button>
    <p>Item Sold:{Product.rating.count}</p>
  </div>
  </div>
          )
        })
      }
  
  
  
    </div> )
  }
  </>
    
   
 

  
  )

}
export default Eid