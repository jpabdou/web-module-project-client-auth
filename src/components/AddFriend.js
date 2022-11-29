import React, {useState, useEffect} from "react";
import axios from "axios";
import { axiosWithAuth } from "../axiosWithAuth";

export default function AddFriend(props){
    const [friend, setFriend] = useState(
    {
      name: "",
      age: 0,
      email: "",
    })

    function onChange(e) {
        setFriend({...friend, [e.target.name]: e.target.value})
    }


    const onSubmit = (e) =>{
        e.preventDefault();
        axiosWithAuth().post("http://localhost:9000/api/friends", friend)
            .then(res=>{
                console.log(res.data)
                navigate("/friends/")
            }

            )
            .catch(
                err=>
                console.log(err)
            )
    }

    return(
        <div className="add-friend">
            <form onSubmit={onSubmit}>
                <label>
                Name:
                <input name="name" type="text" value={friend.name} onChange={onChange}/>
                </label>
                <label>
                Age:
                <input name="age" type="text" value={friend.age} onChange={onChange} />
                </label>
                <label>
                Email:
                <input name="email" type="text" value={friend.email} onChange={onChange} />
                </label>
                <button>Add Friend</button>
            </form>
        </div>
    )
}
