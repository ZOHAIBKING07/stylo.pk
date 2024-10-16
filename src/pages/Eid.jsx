import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Loader from '../component/Loader'
import { Link } from 'react-router-dom'

const Eid = () => {
  const [Products,setProducts]=useState([])
  const [loader,setLoader]=useState(false);
  const fatchData=async ()=>{
  setLoader(true)
    const response =await axios.get("http://localhost:8082/api/admin/product?category=Eid")
    setProducts(response.data.Products)
    console.log(response)
  setLoader(false)
  }
  
  useEffect(()=>{
    fatchData()
  },[])

  return(
  <>
  {
    loader ? <Loader/>:( <div className='d-flex flex-wrap justify-content-evenly gap-4'>
      {
        Products.map((Product)=>{
          return(
            <Link to={`/Product/${Product._id}`}>
                                          {/* 35 */}
            <div class="card" style={{width: "35rem"}}>
  <img src={Product.thumbnail} class="card-img-top" style={{height:"100px" , width:"100px"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{Product.title}</h5>
    {/* <p>{Product.rating.rate}</p> */}
    {/* <p>{Product.description}</p> */}
    <button className="btn btn-danger">{Product.price}</button>
    {/* <p>Item Sold:{Product.rating.count}</p> */}
  </div>
  </div>
  </Link>
    )
        })
      }
  
  
  
    </div> )
  }
  </>
    
   
 

  
  )

}
export default Eid