import React, { useEffect, useRef } from "react";
import IconArrowRight from "../icons/ic_arrow_right";
import IMGDeveloper from "../icons/developer.png";

const Banner = () => {
  const textRef = useRef(null);

  useEffect(() => {
    class TxtRotate {
      constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = "";
        this.isDeleting = false;
        this.tick();
      }

      tick() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

        let delta = 100; // Điều chỉnh tốc độ gõ chữ mượt hơn
        if (this.isDeleting) delta /= 2;

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(() => this.tick(), delta);
      }
    }

    if (textRef.current) {
      const toRotate = textRef.current.getAttribute("data-rotate");
      const period = textRef.current.getAttribute("data-period");

      if (toRotate) {
        new TxtRotate(textRef.current, JSON.parse(toRotate), period);
      }
    }
  }, []);

  return (
    <div className="banner">
      <div className="banner-left">
        <div className="banner-left__name">Dinh Tuan Anh</div>
        <div className="banner-left__title">
          I'm{" "}
          <span
            ref={textRef}
            className="txt-rotate text-color"
            data-period="2000"
            data-rotate='["Senior Frontend Developer", "React Developer", "Mobile Developer", "Freelancer"]'
          ></span>
        </div>
        <div
          className="banner-left__button"
          onClick={() => {
            window.open(
              "https://www.topcv.vn/xem-cv/AlVVUAxdAwdVUAAGBgYECQRQAl9aAgIACQlSAw88d4"
            );
          }}
        >
          My CV
          <IconArrowRight />
        </div>
      </div>
      <div className="banner-right">
        <img className="banner-avatar" src={IMGDeveloper} alt="Image 1" />
      </div>
    </div>
  );
};

export default Banner;
