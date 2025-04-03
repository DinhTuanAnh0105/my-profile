import React from "react";
import IconInstagram from "../icons/icon_instagram";
import IconCodesandbox from "../icons/ic_codesandbox";
import IconFacebook from "../icons/ic_facebook";
import IconGithub from "../icons/ic_github";
import Avatar from "../../assets/images/anhdt.jpg";

const Profile = () => {
  return (
    <div className="profile" id="profile">
      <div className="profile-text">PROFILE</div>
      <div className="profile-text__des">I'm a creative web developer</div>
      <div className="profile-detail">
        <div className="profile-left">
          <h2>About me</h2>
          <div className="profile-right__item">
            <p>
              {" "}
              I am creative web developer. I am a senior programmer with good
              knowledge of front-end techniques.{" "}
            </p>
            <p>
              I have built and optimized high-performance, scalable web
              applications using React.js, Next.js, JavaScript, HTML, CSS.
            </p>
            <b>Technical Skills:</b>
            <p>
              - Frontend Development: Expertise in React.js, Next.js, JavaScript
              (ES6+), TypeScript, HTML, CSS, and SCSS.
            </p>{" "}
            <p>
              - State Management: Proficient in Redux, Zustand, Formik, Context
              API, and TanStack Query for efficient data handling.
            </p>{" "}
            <p>
              - Performance Optimization: Experience in code splitting, lazy
              loading, memoization (React.memo, useMemo, useCallback), and
              optimizing re-renders.
            </p>{" "}
            <p>
              - Optimized SEO and performance by leveraging server-side
              rendering (SSR) and static site generation (SSG) in Next.js,
              improving page load speeds and search engine rankings
            </p>{" "}
            <p>
              {" "}
              - Code Quality & Review: Strong experience in code review,
              refactoring, and enforcing best practices
            </p>
            <p>
              - Agile & Scrum: Experienced in working within Agile teams using
              Scrum, participating in daily stand-ups, sprint planning, and
              retrospectives.
            </p>
          </div>
        </div>
        <img className="profile-avatar" src={Avatar} alt="" />
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
            Nam Tu Liem district, Hanoi, Vietnam
          </div>
          <div className="profile-contact">
            <div
              className="box-white"
              onClick={() => {
                window.open("https://www.facebook.com/anh.captain.5");
              }}
            >
              <IconFacebook />
            </div>

            <div
              className="box-white"
              onClick={() => {
                window.open("https://www.instagram.com/anh.captain.5/");
              }}
            >
              <IconInstagram />
            </div>
            <div
              className="box-white"
              onClick={() => {
                window.open("https://github.com/DinhTuanAnh0105");
              }}
            >
              <IconGithub />
            </div>
            <div
              className="box-white"
              onClick={() => {
                window.open("https://codesandbox.io/u/DinhTuanAnh0105");
              }}
            >
              <IconCodesandbox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
