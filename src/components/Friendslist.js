import React, {useState, useEffect} from "react";
import axios from "axios";
import { axiosWithAuth } from "../axiosWithAuth";
import { BrowserRouter as Router, Link} from 'react-router-dom';
 

export default function Friendslist(props) {
    const [friends, setFriends] =useState([])
    const getData = () =>{
        axiosWithAuth().get("http://localhost:9000/api/friends")
            .then(
                res=>setFriends(res.data)
            )
            .catch(err=>console.log(err))
    }
    useEffect(()=>{getData()},[])


    return(
        <div className="friends-list">
            <h1>Friends</h1>
            <ul>
            {friends.map((friend)=>{
                return(<Link key={friend.id} to={`/friends/${friend.id}`}><li >{friend.name}- {friend.email}</li></Link>)
            })}
            </ul>

        </div>
    )
}
