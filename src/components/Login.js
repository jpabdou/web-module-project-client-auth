import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login(props) {

    const [login, setLogin] = useState({username: "", password: ""})
    const navigate = useNavigate()
    function onChange(e) {
        setLogin({...login, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:9000/api/login", login)
            .then(res=>{
                localStorage.setItem("token",res.data.token)
                props.setIsLoggedIn(localStorage.getItem("token") !== null) // could just set to true, but I want to confirm Boolean logic
                navigate("/friends/")
            }

            )
            .catch(
                err=>
                console.log(err)
            )
    }

    return(
        <div className="login">
            <form onSubmit={onSubmit}>
                <label>
                Username:
                <input name="username" type="text" value={login.username} onChange={onChange}/>
                </label>
                <label>
                Password:
                <input name="password" type="password" value={login.password} onChange={onChange} />

                </label>
                <button>Login</button>
            </form>
        </div>
    )
}
