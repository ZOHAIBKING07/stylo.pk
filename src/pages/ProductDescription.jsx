import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../component/Loader';
import Counter from '../component/Counter';


const ProductDescription = () => {
    const{id}=useParams();
    const [Product,setProduct]=useState(null)
    const [loader,setLoader]=useState(false)
    const fetchProduct=async()=>{
        setLoader(true)
        const response=await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(response.data)
        setLoader(false)
    }
        useEffect(()=>{
            fetchProduct();
        },[])
    
  return (
    <>
    {
        loader ? <Loader/> : (
        <div className="container">
    <div className="row">
        <div className="col-lg-6">
            <img src={Product?.image} alt={Product?.title} width="300px" height="300px"/>
        </div>
        <div className="col-lg-6">
            <h2>{Product?.title}</h2>
            <p>{Product?.description}</p>
            <h3>Price: ${Product?.price}</h3>
            <Counter/>
            <button className='btn btn-primary'>Add to Cart</button>
        </div>
    </div>
</div>)
    }
 </>
  )
}

export default ProductDescription