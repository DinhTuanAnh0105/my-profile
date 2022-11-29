import React, { useState } from "react";
import VinImg from "../../assets/image/vin.png";
import WMFImg from "../../assets/image/wmf.png";
import VNeIDImg from "../../assets/image/Vneid.jpg";

const dataProject = [
  {
    name: "VNeID",
    des: "đây là nội dung mô tả",
    img: VNeIDImg,
  },
  {
    name: "Booking Vinpearl",
    des: "đây là nội dung mô tả",
    img: VinImg,
  },
  {
    name: "We Make Footballers",
    des: "đây là nội dung mô tả",
    img: WMFImg,
  },
  {
    name: "Booking Vinpearl",
    des: "đây là nội dung mô tả",
    img: VinImg,
  },
];

const Project = () => {
  const [img, setImg] = useState();
  //! render
  return (
    <div className="project">
      <div className="project-title">PROJECTS</div>
      <div className="project-body">
        <div className="project-body__left">
          {dataProject.map((el, index) => {
            return (
              <div
                className="project-body__items"
                onMouseEnter={() => setImg(el.img)}
                // onMouseLeave={() => setImg("")}
              >
                <div className="project-content">{el.name}</div>
                <div className="project-des">{el.des}</div>
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
