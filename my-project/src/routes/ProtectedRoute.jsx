import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'



const ProtectedRoute = ({role,layout,redirectTo="/401"}) => {
    const [loading, setloading] = useState(false);
    const [authorized, setauthorized] = useState(false);

    useEffect(() => {
        const checkRole = async()=>{
            try{
                setloading(true)
                await axios.get("/api/auth/checkRole", {
                   withCredentials: true
                })
                setauthorized(true);
            }
            catch (error) {
               console.log("Something went wrong");
            }
             finally {
                setloading(false);
            }
        }
        checkRole()
    },[role])
    if(loading){
        return <div className="flex justify-center items-center h-screen">
           <p className="text-lg  font-medium">
           Loading...
           </p>
           
        </div>
    }
        if(!authorized){
            return <Navigate to={redirectTo} />
        }
        return layout;
    }
 


export default ProtectedRoute