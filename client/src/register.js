import '../css/register.css';
import React from "react";

const register = () => {


    return(
        <div className='register'>
            <h1>Create New Account</h1>
            <label>Email</label>
            <input type="text" placeholder='email'/>
            <input type="text" placeholder='username'/>
            <input type="password" placeholder='password'/>
        </div>
    );
}

export default register;