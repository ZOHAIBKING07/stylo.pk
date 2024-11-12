// import React, { useEffect, useState } from 'react'; // Import useState
// import { jwtDecode } from "jwt-decode";// Correct import for jwt-decode
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import Loader from '../component/Loader';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//     const token = localStorage.getItem("token"); // Get the token from local storage

//     const [loader, setLoader] = useState(false);
//     const navigate = useNavigate();
    
//     // Initialize user state
//     const [user, setUser] = useState(null);

//     const fetchUser = async (userId) => {
//         if (userId) { // Check if userId is available
//             try {
//                 setLoader(true);
//                 const response = await axios.get(`http://localhost:8082/api/admin/user/${userId}`);
//                 if (response.data.success) {
//                     setUser(response.data.user);
//                     toast.success(response.data.message);
//                 }
//             } catch (error) {
//                 console.error("Error fetching user:", error);
//                 toast.error("Error fetching user data");
//             } finally {
//                 setLoader(false); // Ensure loader is stopped in case of error as well
//             }
//         }
//     };

//     useEffect(() => {
//         let decodedToken;

//         // Ensure the token exists and is valid before decoding
//         if (token) {
//             try {
//                 decodedToken = jwtDecode(token); // Decode the token
//                 fetchUser(decodedToken.id); // Fetch user data with the decoded ID
//             } catch (error) {
//                 console.error("Invalid token:", error);
//                 toast.error("Invalid token. Please log in again.");
//                 localStorage.removeItem("token"); // Clear invalid token
//                 navigate("/"); // Redirect to home or login page
//             }
//         } else {
//             toast.error("No token found. Please log in.");
//             navigate("/"); // Redirect if no token
//         }
//     }, [token, navigate]);

//     const logout = () => {
//         localStorage.removeItem("token");
//         navigate("/");
//     };

//     return (
//         <div>
//             {
//                 loader ? <Loader /> : (
//                     <>
//                         <h1>Welcome to Dashboard {user?.name}</h1>
//                         <button onClick={logout}>Logout</button>
//                     </>
//                 )
//             }
//         </div>
//     );
// }

// export default Dashboard;





import React, { useEffect, useState } from 'react'; // Import useState
import { jwtDecode } from "jwt-decode"; // Correct import for jwt-decode
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '../component/Loader'
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const token = localStorage.getItem("token"); // Get the token from local storage

    const [loader,setLoader]=useState(false)
    const navigate=useNavigate();

    
    // Initialize user state
    const [user, setUser] = useState(null); // Initialize user state here
    let decodedToken;

    // Ensure the token exists before decoding
    if (token) {
        decodedToken = jwtDecode(token); // Use jwtDecode correctly
    }

    const fetchUser = async () => {
        if (decodedToken) { // Check if decodedToken is available
            try {
                setLoader(true)
                const response = await axios.get(`http://localhost:8082/api/admin/user/${decodedToken.id}`);
                if (response.data.success) {
                    setUser(response.data.user);
                    toast.success(response.data.message);
                    setLoader(false)
                }
            } catch (error) {
                console.error("Error fetching user:", error);
                toast.error("Error fetching user data");
            }
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);
    const logout=()=>{
        localStorage.removeItem("token")
        navigate("/")
    }

    return (
        <div>
            {
                loader ? <Loader/> :(
                <>
                 <h1>Welcome to Dashboard {user?.name}</h1>
                 <button onClick={logout}>Logout</button>
                </>
                 )
            }
           
            {/* {user && <p>User: {user.name}</p>} Display user name if available */}
        </div>
    );
}

export default Dashboard;



// import React, { useEffect } from 'react';
// import { jwtDecode } from 'jwt-decode'; // Use curly braces for named import
// import axios from 'axios';

// const Dashboard = () => {
//     const token = localStorage.getItem("token");
//     let decodedToken;

//     // Check if token exists before decoding
//     if (token) {
//         decodedToken = jwtDecode(token);
//         console.log(decodedToken.id);
//     } else {
//         console.error("No token found");
//         return <div>No access. Please log in.</div>; // Handle the absence of a token as needed
//     }

//     const fetchUser = async () => {
//         try {
//             const response = await axios.get(`http://localhost:8082/api/admin/user/${decodedToken.id}`);
//             console.log(response);
//         } catch (error) {
//             console.error("Error fetching user:", error);
//         }
//     };

//     useEffect(() => {
//         if (decodedToken) {
//             fetchUser();
//         }
//     }, [decodedToken]); // Dependency on decodedToken

//     return (
//         <div>
//             <h1>Welcome to Dashboard</h1>
//             {/* /dashboard */}
//         </div>
//     );
// };

// export default Dashboard;
