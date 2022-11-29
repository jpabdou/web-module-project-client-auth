import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = (props)=> {
    const navigate = useNavigate()
    const logout =()=>{
        localStorage.removeItem("token")
        props.setIsLoggedIn(localStorage.getItem("token") !== null) // could just set to true, but I want to confirm Boolean logic
        navigate("/login")

    }
    useEffect(()=>{logout()},[])
    return(<div></div>);
}

export default Logout;
