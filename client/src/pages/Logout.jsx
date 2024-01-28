import React, { useContext, useEffect } from 'react'
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Logout = () => {
    console.log("rendering");
    const { setCurrentUser } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        axios.post(`/api/v1/users/logout`)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        
        setCurrentUser(null);
        navigate("/login");
    }, []);

    return (
    <></>
  )
}

export default Logout