import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <ul className='navber'>
      <li style={{color:"red"}}><Link className='link' to={"/"}>Sale</Link></li>
      <li><Link className='link' to={"/Eid"}>Eid</Link></li>
        <li ><Link className='link' to={"/Summer24"}>Summer'24</Link></li>
        <li><Link className='link' to={"/WomanShoes"}>Woman Shoes</Link></li>
        <li><Link className='link' to={"/WomanApperals"}>Woman Apperals</Link></li>
        <li><Link className='link' to={"/Bags"}>Bags</Link></li>
        <li><Link className='link' to={"Kids"}>Kids</Link></li>
        <li><Link className='link' to={"/Acceseories"}>Acceseories</Link></li>
        <li><Link className='link' to={"/Fragrances"}>Fragrances</Link></li>
        
       

      </ul>
    </div>
  )
}

export default Navbar
{/* <link to={"/"}>Sale</link> */}