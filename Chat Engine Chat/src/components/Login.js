import React from 'react';
import {GoogleOutlined} from '@ant-design/icons';
import "firebase/app";
import {auth} from "../firebase";
import firebase from 'firebase/app';
import logo from "../assets/microsoft-logo.png";



export default function Login() {
    return (
      <div id='login-page'>
        {/* <img class="bgimg" src={bgi} alt=""/> */}
        <div class="container-fluid" id='login-card'>
        <div class="ok">
        <img class="logo-ms2" src={logo} alt=""/> <span id="ms">Microsoft Connect</span>
        </div>
        <div class="chat-room"> Login!</div>
        <div
            className='login-button google'
            onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
          >
            <GoogleOutlined /> Signup/Login with Google
          </div>
        </div>
      </div>
    )
  }