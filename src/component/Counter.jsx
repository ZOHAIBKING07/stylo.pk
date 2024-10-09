import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Counter = () => {
    const navigate = useNavigate();
    const [counter, setCounter] = useState(1);
    const [show, setShow] = useState(true);

    const add = () => {
        if (counter < 3) {
            setCounter(counter + 1);
        }
        else{
         
          toast.warning("You cannot add more than 3")
        }
    };

    const minus = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        } else {
            toast.warning("You cannot subtract less than 1");
        }
    };

    return (
        <div style={{ fontSize: "30px", textAlign: "center" }}>
            <button className='btn btn-danger' onClick={minus}>-</button>
            {counter}
            <button className='btn btn-primary' onClick={add}>+</button>
        </div>
    );
};

export default Counter;
