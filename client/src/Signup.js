import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Signup({ setUser }) {


const [userName, setUserName] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")
const [errors, setErrors] = useState([])



function handleSubmit(e)  {
    e.preventDefault()
    console.log("submit!")
    const user = {
        username: userName,
        password: password,
        password_conformation: confirmPassword,
    }
    fetch("/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user),
    }).then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user));
        } else {
            r.json().then((err) => setErrors(errors));
        }
    })

}

    return (
        <div className="landing-containder" >
            <div className="landing-logo-text-div" >
                <h1 className="landing-logo-text" >.Rudy</h1>
            </div>

            <div className="form-container-div" >

                <h1 className="signup-text" >.Create an account</h1>

                <div className="button-box" >
                    <div id="btn" ></div>

                    {/* <Link className="link-between" to="/Login" ><button type="button" className="toggle-button"  >Already have an account? Log in here!</button></Link> */}

                </div>

            <form onSubmit={handleSubmit}
             id="signup" className="input-group" >
                <input 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text" autoComplete="off" className="input-field" id="create-input-field" placeholder="user name" required/>

                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                type="password" autoComplete="off" className="input-field" id="create-input-field" placeholder="password" required/>

                <input 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} 
                type="password" autoComplete="off" className="input-field" id="create-input-field" placeholder="confirm password" required/>

                {/* <input type="checkbox" className="check-box" /> 
                <span>Sign me up to the mailing list</span> */}

                <button type="submit" className="submit-btn" id="create-submit-btn" >Create</button>

                <Link className="link-between" to="/Login" ><button type="button" className="toggle-button" id="not-log-in-link" >Already have an account?  <strong id="log-in-link" >Log in here!</strong></button></Link>

            </form>
            
            </div>
            
        </div>
    )
}

export default Signup;