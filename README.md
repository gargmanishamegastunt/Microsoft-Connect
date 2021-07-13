# Microsoft-Connect
This app allows you to create chat rooms with multiple participants and exchange multimedia. The chat rooms use Firebase Google authentication and store the chats over time. 
From the chat platform users can start a video calling room and up to 3 people can video call with each other.

Link to the app: https://msconnect.herokuapp.com/

Note: In case you face security issues on redirection to the Video call, use this link : https://msconnect-vc.herokuapp.com/?room=alsdkfj_3993038088


## Features

### In the chat room include:
* Google authentication ( can be extended to other authentication )
* Group Creation
* Add participants
* Share attachments
* See participants typing and online/ offline status
* Avatar capture from Google account
* Delete room
* See stored multimedia
* Log out

### In the video chat:
* Screen share, 
* Pin users,
* Mute and unmute self audio and video,
* Add participants button,
* Incall temporary chat,
* Leave call button

## Technologies used
* For Videocall: WebRTC, Socket.io, Node.js
* For Chatengine: React, Chatengine.io

## Installation:
Install Node.js from https://nodejs.org/en/
* For video call
- ``cd msconnect-vc``
- ``npm init``
- ``npm install express ejs socket.io uuid peer``
- ``Npm install -g nodemon``
- ``cd src``
- ``Nodemon app.js``
* For chat room open new terminal,
- ``cd chat engine chat``
- ``npm install``
- ``npm start``

## Screenshots:

![WhatsApp Image 2021-07-13 at 7 30 47 PM](https://user-images.githubusercontent.com/57721834/125465796-34825a4f-a779-4668-b551-56602dbbac0b.jpeg)
![WhatsApp Image 2021-07-13 at 7 30 37 PM](https://user-images.githubusercontent.com/57721834/125465790-fe58f180-bff3-4176-aef2-b41d6fe7e3bf.jpeg)
![WhatsApp Image 2021-07-13 at 7 30 18 PM](https://user-images.githubusercontent.com/57721834/125465772-6c5add63-3b0f-4aa6-a01e-713f16781f59.jpeg)


