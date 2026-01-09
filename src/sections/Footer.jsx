import { socialImgs } from "../constants";

const Footer = () => {
  const handleSocialClick = (name) => {
    if (name === "linkedin") {
      window.open("https://www.linkedin.com/in/mason-p-368a91202/", "_blank", "noopener,noreferrer");
    } else if (name === "email") {
      window.location.href = "mailto:masonprotsman@gmail.com";
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div 
              key={index} 
              className="icon cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => handleSocialClick(socialImg.name)}
            >
              <img src={socialImg.imgPath} alt="social icon" />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Mason Protsman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;