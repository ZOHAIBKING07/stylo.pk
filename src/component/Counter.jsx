import React,{useState} from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Counter = () => {
    const navigate=useNavigate();
    const [counter,setCounter]=useState(1)
    const [show,setShow]=useState(true);
    const add=()=>{
     
            if(counter < 3){
            setCounter(counter+1);
        
    
            }
            else{
                navigate("/")
                toast.warning("You cannot add more than 3")
            }
     
    }
    const minus=()=>{
     
        if(counter > 1){
        setCounter(counter-1);

        }
        else{
            toast.warning("You cannot subtract less than 1")
        }
       
    }
 
    const updateValue=()=>{
        setShow(!show)
    }
    return (
    <div style={{fontSize:"30px", textAlign:"center"}}>
        {show?<h1>Hello india won by cheating</h1>:<h1>South Africa is like Pakistan </h1>}
        <button onClick={updateValue}>Change value</button>
      {counter === 3 ?  <h1>Your account limit is full</h1>:null}
        <button className='minus' onClick={minus}>-</button>
      {counter}
      <button className='minus' onClick={add}>+</button>
    </div>
  )
}

export default Counter
