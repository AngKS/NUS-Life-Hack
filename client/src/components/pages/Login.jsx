import {React, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import axios from 'axios'
import "./login.css"

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [result, setResult] = useState()
    const [loggedIn, setLoggedIn] = useState()

    let submitBtn = () => {

        axios({
            method : "POST",
            url: "https://nus-life-hack.herokuapp.com/api/login",
            headers: { 'Access-Control-Allow-Origin': 'http://nus-life-hack.netlify.app/' },
            data : {
                email : email,
                password : password
            }
        }).then(res => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", res.data.UserData)
            setResult(res.status)
            setLoggedIn({})
        })
    }

    let logOut = () => {
        localStorage.clear()
        window.location.reload(false)
            
    }

    useEffect(() => {
        let loggedUser = JSON.parse(localStorage.getItem("user"))
        setLoggedIn(loggedUser)
    }, [result])

    let userInfo = () => {
        return JSON.parse(localStorage.getItem("user"))[0]
    }

    return (
        <div>
            <Navbar />
            
            <div className="page-container shadow-md">
                <div className="card custom-card rounded">
                    <div className="card-img bg-primary p-2"></div>
                    <div className="card-body p-5">
                        <h3 className="card-title text-center">Login</h3>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input className="form-control" type="email" name="email" placeHolder="Enter your Email" id="email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input className="form-control" type="password" name="password" placeHolder="Enter your password" id="email" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </form>
                        <button className="btn btn-primary" onClick={submitBtn}>Login</button>
                        <Link className="text-muted m-3 text-decoration-none" to="#" target="_blank" rel="noopener noreferrer">Create an account</Link>
                    </div>  
                </div>
                {(loggedIn) ?
                    <div class="alert alert-success">
                        <div class="text-center">
                            Successfully Logged in! Welcome back {loggedIn[0].username}
                        </div>
                        
                    </div> : ""
                }
                {(loggedIn) ? <button className="btn btn-danger custom-btn" onClick={logOut}>LogOut</button> : ""}
            </div>
            
        </div>
    )
}

export default Login
