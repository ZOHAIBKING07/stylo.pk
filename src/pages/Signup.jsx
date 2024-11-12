import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { toast } from 'react-toastify';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '', // Store just the country code here
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();
    const options = useMemo(() => countryList().getData(), []);
    const { name, email, phone, country, password, confirmPassword } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Update country selection to store just the value
    const onCountryChange = (selectedOption) => {
        setFormData({ ...formData, country: selectedOption.value }); // Store only the country code
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8082/api/admin/user/", formData);
            console.log(response);
            toast.success("User Registration Successful");
            navigate("/");
        } catch (error) {
            console.error("Registration error:", error);
            toast.error("Registration failed. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <label>Name</label>
                <input type="text" name='name' value={name} onChange={onChange} required />

                <label>Email</label>
                <input type="email" name='email' value={email} onChange={onChange} required />

                <label>Phone</label>
                <input type="number" name='phone' value={phone} onChange={onChange} required />

                <label>Country</label>
                <Select options={options} name='country' value={options.find(option => option.value === country)} onChange={onCountryChange} />

                <label>Password</label>
                <input type="password" name='password' value={password} onChange={onChange} required />

                <label>Confirm Password</label>
                <input type="password" name='confirmPassword' value={confirmPassword} onChange={onChange} required />

                <button type='submit' className='btn btn-success my-3'>Register</button>
            </div>
        </form>
    );
};

export default Signup;







// import React, { useState, useMemo } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Select from 'react-select';
// import countryList from 'react-select-country-list';
// import { toast } from 'react-toastify';
// import axios from 'axios';


// const Signup = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         country: '',
//         password: '',
//         confirmPassword: '',
//     });
// const navigate=useNavigate();
//     const options = useMemo(() => countryList().getData(), []);
//     const { name, email, phone, country, password, confirmPassword } = formData;

//     const onChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
//     // handelSelect
//     const onCountryChange = (selectedOption) => {
//         setFormData({ ...formData, country: selectedOption });
//     };

//   const handleSubmit=async(e)=>{
//     e.preventDefault();
//     if(password !== confirmPassword){
//         toast.error("Password Does not match")
//     }
//     else{ 

// const response=await axios.post("http://localhost:8082/api/admin/user/",formData)
// console.log(response);
// toast.success("User Registration Success")
//     navigate("/")
// }
   

//   }

//     return (
//         <form onSubmit={handleSubmit}>
//             <div className='d-flex justify-content-center flex-column align-items-center'>
//                 <label>Name</label>
//                 <input type="text" name='name' value={name} onChange={onChange} />

//                 <label>Email</label>
//                 <input type="email" name='email' value={email} onChange={onChange} />

//                 <label>Phone</label>
//                 <input type="number" name='phone' value={phone} onChange={onChange} />

//                 <label>Country</label>
//                 <Select options={options} name='country' value={country} onChange={onCountryChange} />

//                 <label>Password</label>
//                 <input type="password" name='password' value={password} onChange={onChange} />

//                 <label>Confirm Password</label>
//                 <input type="password" name='confirmPassword' value={confirmPassword} onChange={onChange} />
                
//                 <button type='submit' className='btn btn-success my-3'>Register</button>
//             </div>
//         </form>
//     );
// };

// export default Signup;



// becouse this error 
// Error: User validation failed: country: Cast to string failed for value "{ value: 'SA', label: 'Saudi Arabia' }" (type Object) at path "country"
//     at ValidationError.inspect (C:\Users\itzzo\OneDrive\Desktop\mern batch 13\stylo\Backend\node_modules\mongoose\lib\error\validation.js:52:26)
//     at formatValue (node:internal/util/inspect:806:19)
//     at inspect (node:internal/util/inspect:365:10)
//     at formatWithOptionsInternal (node:internal/util/inspect:2304:40)
//     at formatWithOptions (node:internal/util/inspect:2166:10)
//     at console.value (node:internal/console/constructor:349:14)
//     at console.log (node:internal/console/constructor:386:61)
//     at exports.store (C:\Users\itzzo\OneDrive\Desktop\mern batch 13\stylo\Backend\controllers\user.controller.js:16:13)
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
//   errors: {
//     country: CastError: Cast to string failed for value "{ value: 'SA', label: 'Saudi Arabia' }" (type Object) at path "country"
//         at SchemaString.cast (C:\Users\itzzo\OneDrive\Desktop\mern batch 13\stylo\Backend\node_modules\mongoose\lib\schema\string.js:606:11)
//         at SchemaType.applySetters (C:\Users\itzzo\OneDrive\Desktop\mern batch 13\stylo\Backend\node_modules\mongoose\lib\schemaType.js:1236:12)
//         at model.$set (C:\Users\itzzo\OneDrive\Desktop\mern batch 13\stylo\Backend\node_modules\mongoose\lib\document.js:1432:22)
//         at model.$set (C:\Users\itzzo\OneDrive\Desktop\mern batch 13\stylo\Backend\node_modules\mongoose\lib\document.js:1128:16)
//         at model.Document (C:\Users\itzzo\OneDrive\Desktop\mern batch 13\stylo\Backend\node_modules\mongoose\lib\document.js:177:12)
//         at model.Model (C:\Users\itzzo\OneDrive\Desktop\mern batch 13\stylo\Backend\node_modules\mongoose\lib\model.js:125:12)
//         at new model (C:\Users\itzzo\OneDrive\Desktop\mern batch 13\stylo\Backend\node_modules\mongoose\lib\model.js:4611:15)
//         at C:\Users\itzzo\OneDrive\Desktop\mern batch 13\stylo\Backend\node_modules\mongoose\lib\model.js:2644:20
//         at Array.map (<anonymous>)
//         at Function.create (C:\Users\itzzo\OneDrive\Desktop\mern batch 13\stylo\Backend\node_modules\mongoose\lib\model.js:2632:34) {
//       stringValue: `"{ value: 'SA', label: 'Saudi Arabia' }"`,
//       messageFormat: undefined,
//       kind: 'string',
//       value: [Object],
//       path: 'country',
//       reason: null,
//       valueType: 'Object'
//     }
//   },
//   _message: 'User validation failed'
// }