import IconInstagram from "../icons/icon_instagram";
import IconCodesandbox from "../icons/ic_codesandbox";
import IconFacebook from "../icons/ic_facebook";
import IconGithub from "../icons/ic_github";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer-left">
        <div className="footer-name">Dinh Tuan Anh</div>
        <div className="footer-text">Let’s discuss for a project</div>
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
      <div className="footer-right"></div>
    </div>
  );
};

export default Footer;
