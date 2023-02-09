import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">Dinh Tuan Anh</div>
      <div className="header-options">
        <div
          className="header-options__item"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Home
        </div>
        <div
          className="header-options__item"
          onClick={() => {
            document
              .getElementById("profile")
              .scrollIntoView({ behavior: "smooth" }, true);
          }}
        >
          Profile
        </div>
        <div
          className="header-options__item"
          onClick={() => {
            document
              .getElementById("skills")
              .scrollIntoView({ behavior: "smooth" }, true);
          }}
        >
          Skills
        </div>
        <div
          className="header-options__item"
          onClick={() => {
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" }, true);
          }}
        >
          Projects
        </div>
        <div
          className="header-options__item"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" }, true);
          }}
        >
          Contact Me
        </div>
      </div>
    </div>
  );
};

export default Header;
