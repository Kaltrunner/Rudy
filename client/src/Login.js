import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Login({ user, setUser }) {

    
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const nav = useNavigate()

    // const handleLogin = (e) => {
    //     e.preventDefault()
    //     console.log("submit!")
    // }

    function handleLogin(e) {
        e.preventDefault()
        fetch("/login", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => {setUser(user)
              nav("/")
            })
          } else {
            r.json().then((err) => setError(alert(err="You must create an account to Log in. Thanks!")))
          }
        })
        setUserName("")
        setPassword("")
      }


    return (
        <div className="landing-containder" >
            <div className="landing-logo-text-div" >
                <h1 className="landing-logo-text" >.Rudy</h1>
            </div>

            <div className="form-container-div" >
                <h1 className="signup-text" >.Log in</h1>
                
                <div className="button-box" >
                    <div id="btn" ></div>

                    {/* <Link to="/Signup" ><button type="button" className="toggle-button"  ><strong>Create an account!</strong></button></Link> */}
                
                </div>
            
            <form onSubmit={handleLogin} id="login" className="input-group" >
                <input 
                value={username} 
                onChange={(e) => setUserName(e.target.value)} 
                type="text" 
                autoComplete="on"
                className="input-field" 
                placeholder="user name" 
                name="user" required/>

                <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" 
                autoComplete="off"
                className="input-field" 
                placeholder="password" 
                name="password" required/>

                {/* <input type="checkbox" className="check-box" /> <span>Remember my Password</span> */}

                <Link to="/Signup" ><button type="button" className="toggle-button"  ><strong>Create an account!</strong></button></Link>

                <button 
                type="submit" 
                className="submit-btn" onSubmit={handleLogin} >Log in</button>

                <Link to="/" id="landing-secret-button" ><p>khsjbfkjsn</p></Link>

            </form>
           
            </div>
            
        </div>
    )
}

export default Login;