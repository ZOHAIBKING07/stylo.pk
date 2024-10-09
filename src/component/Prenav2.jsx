import React from 'react'
import { GrYoutube } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Prenav2 = () => {
  return (
    <div>
     <div className="logo"><img src="https://stylo.pk/cdn/shop/files/110x60-Logo_45_140x.png?v=1705411679" alt="" /></div>
     <div className="icons">
        <div className="youtube"><GrYoutube /></div>
     
     <div className="facebook"> <FaFacebookSquare /></div>
    
     </div>
    <Link to="/Signup"><button className='btn btn-primary'>Signup</button></Link>
    </div>
  )
}

export default Prenav2
