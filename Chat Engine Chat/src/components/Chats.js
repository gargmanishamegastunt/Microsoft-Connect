import React, {useRef, useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import {auth} from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import logo from "../assets/microsoft-logo.png";
import axios from 'axios';
import {VideoCameraOutlined} from '@ant-design/icons';

// Authenticate or use previous login history
export default function Chats() {
    const didMountRef = useRef(false)
    const [loading, setLoading] =useState(true)
    const {user} =useAuth()
    const history = useHistory()
    
    async function handleLogout() {
        await auth.signOut()
        history.push("/")
    }

    async function getFile(url) {
        let response = await fetch(url);
        let data = await response.blob();
        return new File([data], "test.jpg", { type: 'image/jpeg' });
    }
    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }

   useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true

      if (!user || user === null) {
        history.push("/")
        return
      }
      
      // Using the chat engine 
      axios.get(
        'https://api.chatengine.io/users/me/',
        { headers: { 
          "project-id": 'de747bca-505d-44d1-afb9-4634a2d1353e',
          "user-name": user.email,
          "user-secret": user.uid
        }}
      )

      .then(() => setLoading(false))

      .catch(e => {
        let formdata = new FormData()
        formdata.append('email', user.email)
        formdata.append('username', user.email)
        formdata.append('secret', user.uid)

        getFile(user.photoURL)
        .then(avatar => {
          formdata.append('avatar', avatar, avatar.name)

          axios.post(
            'https://api.chatengine.io/users/',
            formdata,
            { headers: { "private-key": 'a8a45134-d3c1-46ef-84c6-69d3e9551711'  }}
          )
          .then(() => setLoading(false))
          .catch(e => console.log('e', e.response))
        })
      })
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    }
  }, [user, history])
  

  if (!user || loading) return <div />

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>
        <img class="logo-ms3" src={logo} alt=""/>
         Microsoft Connect
        </div>
        <div onClick={() => openInNewTab('https://msconnect-vc.herokuapp.com')} className='videocall-tab'>
        <VideoCameraOutlined />
          <span class="vc">VideoCall</span>
        </div>
        <div onClick={handleLogout} className='logout-tab'>
          Logout
        </div>
      </div>

      <ChatEngine 
        height='calc(100vh - 66px)'
        projectID='de747bca-505d-44d1-afb9-4634a2d1353e'
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  )
}