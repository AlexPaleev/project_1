import React from 'react';
import { observer, PropTypes } from "mobx-react";
import { Button } from '../../shares/button';
import { list } from '../../stores/project';
import '../../App.css';



export const LoginForm = observer(props => (
    // <div className="limiter">
    //   <div className="container-login100">
    //     <div className="wrap-login100">
    //       <form className="login100-form validate-form">
    //         <span className="login100-form-title p-b-48">
    //           <i className="fa fa-check-circle"></i>
    //         </span>
    //         <span className="login100-form-title p-b-26">
    //           LOGIN
    //         </span>

    //         <div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
    //           <input className="input100" type="text" name="email"/>
    //           <span className="focus-input100" data-placeholder="Email"></span>
    //         </div>

    //         <div className="wrap-input100 validate-input" data-validate="Enter password">
    //           <span className="btn-show-pass">
    //             <i className="zmdi zmdi-eye"></i>
    //           </span>
    //           <input className="input100" type="password" name="pass"/>
    //           <span className="focus-input100" data-placeholder="Password"></span>
    //         </div>

    //         <div className="container-login100-form-btn">
    //           <div className="wrap-login100-form-btn">
    //             <div className="login100-form-bgbtn"></div>
    //             <button className="login100-form-btn">
    //               Login
    //             </button>
    //           </div>
    //         </div>

    //         <div className="text-center p-t-115">
    //           <span className="txt1">
    //             Don’t have an account?
    //           </span>

    //           <a className="txt2" href="#">
    //             Signup
    //           </a>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    //   <div id="dropDownSelect1"></div>
    // </div>

    <div>
      <h1>Login</h1>
      <form action = "/login" method = "POST">
          <div>
              <label placeholder = "email">Email</label>
              <input type = "email" id = "email" name ="email" required/>
          </div>
          <div>
              <label placeholder = "password">Password</label>
              <input type = "password" id = "password" name ="password" required/>
          </div>
          <button type="submit">Login</button>
      </form>
      <a href="/register">Register</a>
    </div>
    
) )