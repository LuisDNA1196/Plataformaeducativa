import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router"; 
import App from "./App";
import "./index.css"; 
import { GoogleOAuthProvider } from "@react-oauth/google";


const CLIENT_ID = "969434966649-al0nma1sviko731vl38jucpj4013a2ct.apps.googleusercontent.com"
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <GoogleOAuthProvider>

  <BrowserRouter>
    <App />
  </BrowserRouter>
  </GoogleOAuthProvider>

);
