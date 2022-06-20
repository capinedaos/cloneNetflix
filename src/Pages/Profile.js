import React from "react";
import { Header, Button, Plans } from "../components";
import iconAvatar from "../images/icon-avatar.jpg";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <Header />
      <h3>Edit Profile</h3>
      <div className="info">
        <img src={iconAvatar} alt="" />
        <div className="details">
          <div className="plans">
            <h6>Email usuario</h6>
            <h5 className="text" >Plans</h5>
            <Plans cost={7.99}>Netflix Standar</Plans>
            <Plans cost={7.99}>Netflix Basic</Plans>
            <Plans cost={7.99}>Netflix Premium</Plans>
            <Button text="Sign Out" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
