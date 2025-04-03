import React, { useState } from "react";
import VinImg from "../../assets/image/vin.png";
import WMFImg from "../../assets/image/wmf.png";
import VNeIDImg from "../../assets/image/vneid.png";
import CPIE from "../../assets/image/cpie.png";

const dataProject = [
  {
    name: "VNeID",
    des: "This website is managed by The Ministry Of Public Security to help users integrate personal information",
    img: VNeIDImg,
    link: "https://vneid.gov.vn/",
  },
  {
    name: "Booking Vinpearl",
    des: "This is a product of Vin Group. It’s help customer booking tickets",
    img: VinImg,
    link: "https://booking.vinpearl.com/",
  },
  {
    name: "We Make Footballers",
    des: "This website provides news, information courses about football of  US/UK",
    img: WMFImg,
    link: "https://www.wemakefootballers.com/",
  },
  {
    name: "CPIE Capital + CPIE Admin",
    des: "It's an online investment app that helps users invest, stacking,...",
    des2: "This website manage information of app CPIE in mobile (info user, investment package, withdraw, deposit,...)",
    img: CPIE,
    link: "https://apps.apple.com/us/app/cpie-capital/id1645235023",
  },
];

const Project = () => {
  const [img, setImg] = useState(VNeIDImg);
  //! render
  return (
    <div className="project" id="projects">
      <div className="project-title">PROJECTS</div>
      <div className="project-body">
        <div className="project-body__left">
          {dataProject.map((el, index) => {
            return (
              <div
                className="project-body__items"
                onMouseEnter={() => {
                  setImg(el.img);
                }}
                // onMouseLeave={() => setImg("")}
                onClick={() => {
                  window.open(el.link);
                }}
              >
                <div className="project-content">{el.name}</div>
                <div className="project-des">{el.des}</div>
                {el.des2 && <div className="project-des">{el.des2}</div>}
              </div>
            );
          })}
        </div>
        <div className="project-body__right">
          <img className="project-img" src={img} alt="" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default Project;
