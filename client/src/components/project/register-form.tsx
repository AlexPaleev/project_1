import React from 'react';
import { observer, PropTypes } from "mobx-react";
import { Button } from '../../shares/button';
import { list } from '../../stores/project';
import '../../App.css';



export const RegisterForm = observer(props => (
    <div className="register">
        <h1>SIGNUP</h1>
        <form action = "/register" method = "POST">
            <div>
                <label placeholder = "name">firstName</label>
                <input type = "text" id = "name" name ="name" required/>
            </div>
            <div>
                <label placeholder = "name">lastName</label>
                <input type = "text" id = "name" name ="name" required/>
            </div>
            <div>
                <label placeholder = "name">Role</label>
                <input type = "text" id = "name" name ="name" required/>
            </div>
            <div>
                <label placeholder = "email">Email</label>
                <input type = "email" id = "email" name ="email" required/>
            </div>
            <div>
                <label placeholder = "password">Password</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div>
                <label placeholder = "password">ConfirmPassword</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <button type="submit">Register</button>
        </form>
        <p>Already onboard?<a href="/login"> Login</a></p>
    </div>
    
) )
