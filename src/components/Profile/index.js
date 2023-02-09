import React from "react";
import IconInstagram from "../icons/icon_instagram";
import IconCodesandbox from "../icons/ic_codesandbox";
import IconFacebook from "../icons/ic_facebook";
import IconGithub from "../icons/ic_github";
import Avatar from "../../assets/images/anhdt.jpg"

const Profile = () => {
  return (
    <div className="profile" id="profile">
      <div className="profile-text" >PROFILE</div>
      <div className="profile-text__des">I'm a creative web developer</div>
      <div className="profile-detail">
        <div className="profile-left">
          <h2>About me</h2>
          <div className="profile-right__item">
            I am creative web deverloper. I am a junior programmer with good
            knowledge of front-end techniques
          </div>
        </div>
        <img
          className="profile-avatar"
          src={Avatar}
          alt=""
        />
        <div className="profile-right">
          <h2>Details</h2>
          <div className="label-profile">Name: </div>
          <div className="profile-right__item">Dinh Tuan Anh</div>
          <div className="label-profile">Phonenumber: </div>
          <div className="profile-right__item">+84 337889917</div>
          <div className="label-profile">Email: </div>
          <div className="profile-right__item">dinhtuananh0105@gmail.com</div>
          <div className="label-profile">Address: </div>
          <div className="profile-right__item">
            Cau Giay district, Hanoi, Vietnam
          </div>
          <div className="profile-contact">
            <div className="box-white" onClick={() => {
              window.open("https://www.facebook.com/anh.captain.5")
            }}>
              <IconFacebook />
            </div>
            
            <div className="box-white" onClick={() => {
              window.open("https://www.instagram.com/anh.captain.5/")
            }}>
              <IconInstagram />
            </div>
            <div className="box-white" onClick={() => {
              window.open("https://github.com/DinhTuanAnh0105")
            }}>
              <IconGithub />
            </div>
            <div className="box-white" onClick={() => {
              window.open("https://codesandbox.io/u/DinhTuanAnh0105")
            }}>
              <IconCodesandbox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
