import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { toast } from 'react-toastify';


const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        password: '',
        confirmPassword: '',
    });
const navigate=useNavigate();
    const options = useMemo(() => countryList().getData(), []);
    const { name, email, phone, country, password, confirmPassword } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onCountryChange = (selectedOption) => {
        setFormData({ ...formData, country: selectedOption });
    };

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(password !== confirmPassword){
        toast.error("Password Does not match")
    }
    else{ 

console.log(formData)
toast.success("User Registration Success")
    navigate("/")
}
   

  }

    return (
        <form onSubmit={handleSubmit}>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <label>Name</label>
                <input type="text" name='name' value={name} onChange={onChange} />

                <label>Email</label>
                <input type="email" name='email' value={email} onChange={onChange} />

                <label>Phone</label>
                <input type="number" name='phone' value={phone} onChange={onChange} />

                <label>Country</label>
                <Select options={options} name='country' value={country} onChange={onCountryChange} />

                <label>Password</label>
                <input type="password" name='password' value={password} onChange={onChange} />

                <label>Confirm Password</label>
                <input type="password" name='confirmPassword' value={confirmPassword} onChange={onChange} />
                
                <button type='submit' className='btn btn-success my-3'>Register</button>
            </div>
        </form>
    );
};

export default Signup;

