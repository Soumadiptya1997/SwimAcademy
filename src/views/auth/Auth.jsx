import React, { Component } from 'react';
import './Auth.css';
import styled from "styled-components";

const LoginWrapepr = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(45deg, #ffffffa8, #e5e5e542),url(images/bg/bg1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

class Auth extends Component {
    render() {
        return (
            <LoginWrapepr className="login_wrapper">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4" >
                            <div className="st_form_login shadow-lg">
                                <div className="Form_Header">
                                    <img src="images/logo/logo-black.png" alt=""/>
                                </div>
                                <div className="form-group st_text_input ">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="form-group st_text_input ">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <a className="btn btn-success btn-block st_btn_login"> Login </a>
                                <div className="forgot_pass">Forgot your password? <a href="#">Click Here</a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LoginWrapepr>
        )
    }
}

export default Auth;