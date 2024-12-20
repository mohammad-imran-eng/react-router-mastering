import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {

    const [signin,setSignin] = useState(true)
    useEffect(()=>{

       const sign = JSON.parse(localStorage.getItem('isSignedIn')); 
       setSignin(sign);
    },[])

    const handleSignOut = ()=> {
        setSignin(false)
    }

    return (
        <>
             
            <div className="flex bg-gray-600 p-10">
                <div className=" text-white font-bold text-3xl text-center">
                    <h1>MyApp</h1>
                </div>
                <div className="grid justify-end w-full">
                    <div className="flex items-center">
                    <NavLink to='/' className="mr-20 font-bold text-white">Home</NavLink> 
                    <NavLink to='/about' className="mr-20 font-bold text-white">About</NavLink>
                    <NavLink to='/contact' className="mr-20 font-bold text-white">Contact</NavLink>
                    {
                        signin && <>
                        <NavLink  to='/signout' className="mr-20 font-bold text-white">Signout</NavLink>
                        </>
                    }
                    {
                        !signin && <>
                        <NavLink onClick={handleSignOut} to='/signin' className="mr-20 font-bold text-white">Signin</NavLink>
                        </>
                    }
                    
                    
                    </div>
                </div>
                
            </div>
            <Outlet />
        </>
    );
};

export default Navbar;