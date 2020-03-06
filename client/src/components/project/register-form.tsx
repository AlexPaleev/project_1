import React from 'react';
import { observer, PropTypes } from "mobx-react";
import { Button } from '../../shares/button';
import { list } from '../../stores/project';
import '../../App.css';



export const RegisterForm = observer(props => (
    <div>
        <h1>Register</h1>
        <form action = "/register" method = "POST">
            <div>
                <label placeholder = "name">Name</label>
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
            <button type="submit">Register</button>
        </form>
        <a href="/login">Login</a>
    </div>
    
) )