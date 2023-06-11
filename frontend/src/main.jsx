import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router } from 'react-router-dom';
import {GoogleOAuthProvider} from '@react-oauth/google';

import App from './App';
import './index.css'


const container = document.getElementById("root");
const root = createRoot(container);
// const cliendid= "958283039356-r40n1cle275igvcnag28gua3as84m4q3.apps.googleusercontent.com"

root.render(
    
    <Router>
    <GoogleOAuthProvider clientId="958283039356-r40n1cle275igvcnag28gua3as84m4q3.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Router>
)
/* @import "tailwindcss/base";
@import "tailwindcss/components";
@import"tailwindcss/utilities"; */

/* body{
    font-family: 'lato' sans-serif;

}
.hide-scrollbar::-webkit-scrollbar{

    display: none;
} */


