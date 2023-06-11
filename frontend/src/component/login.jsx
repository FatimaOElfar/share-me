import React from 'react'

// import { useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import axios from 'axios'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
import { useGoogleLogin } from '@react-oauth/google'
import {client} from '../client'
import { useNavigate } from 'react-router-dom'
export default function Login() {
      const navigate = useNavigate(); 
    const responseGoogle=async(response)=>{
      console.log(response)
      const {access_token} = response;
      let userInfo = await axios.get(
        "https://people.googleapis.com/v1/people/me?personFields=names,photos,metadata",
        {
          headers: { Authorization: "Bearer " + access_token },
        }
      );
      const { names, photos, metadata } = userInfo.data;

    const userId = metadata.sources[0].id;
    const username = names[0].displayName;
    const photo = photos[0].url;

    const userData = { userId, username, photo };
    console.log(userData)

    localStorage.setItem('user',JSON.stringify(userData))
    
    const doc={
      _id:userId,
      _type:'user',
      userName:username,
      image:photo
    }
  
    
    client.createIfNotExists(doc)
    .then(()=>{
      navigate("/",{replace:true})
      

    }).catch(error => {
      console.log(error)
    })


  }
  // console.log(cliendId);
  const login = useGoogleLogin({
     onSuccess:responseGoogle,
     onError:responseGoogle,

  })
  return (
    <div className="flex jusify-start items-center flex-col h-screen">
    <div className="relative h-full w-full">
      <video
      src={shareVideo}
      type="video/mp4"
      loop
      controls={false}
      muted
      autoPlay
      className="w-full h-full object-cover"

      />
      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay ">
        <div className="p-5">
           <img src={logo}  width="130px" alt="" />
        </div>
        <div className="shadow-2xl"> 
        <button 
            type="button"
            className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none "
             onClick={()=> login()}
             
           >
           <FcGoogle className="mr-4" />Sign with google
            </button>
        </div>
      </div>
    </div>
    </div>
  )
}
