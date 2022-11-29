import React, {useState, useEffect} from "react";
import { axiosWithAuth } from "../axiosWithAuth";
import { useParams } from "react-router-dom";

export default function Friend(props) {
    const [friend, setFriend] =useState([])
    let { id } = useParams();
    console.log(id)
    const getData = () =>{
        axiosWithAuth().get(`http://localhost:9000/api/friends/${id}`)
            .then(
                res=>setFriend(res.data)
            )
            .catch(err=>console.log(err))
    }
    useEffect(()=>{getData()},[])


    return(
        <div className="friend">
            <h1>{friend.name}</h1>
            <h2>Age: {friend.age}</h2>
            <h2>Email: {friend.email}</h2>
        </div>
    )
}
