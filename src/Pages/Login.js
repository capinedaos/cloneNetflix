import React from "react";
import { Button } from "../components";
import { Link } from "react-router-dom";
import logo from "../images/Logo-Netflix.png";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="container-logo-button" >
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <Button text={"Iniciar sesion"} className="button" />
      </div>

      <div className="content-login">
        <h2>Title</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          cupiditate sint alias consequuntur, iure ipsa, est voluptatum, quidem
          temporibus voluptate quasi nisi? Maxime a sunt rerum? Nesciunt
          mollitia doloremque similique.
        </p>
        <div className="input-button" >
          <input type="text" placeholder="Email address" />
          <Button text={"GET STARTED"} className="button" />
        </div>
      </div>
    </div>
  );
};

export default Login;
