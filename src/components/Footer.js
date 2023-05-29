import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="logos">
        <h1>TRAVEL</h1>
        <p>Choose your favourite destination.</p>
        </div>
        <div className="social">
          <a href="/"><FaFacebook /></a>
          <a href="/"><FaInstagram /></a>
          <a href="/"><FaTwitter /></a>
          <a href="/"><FaWhatsapp /></a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contactus</a>
         
        </div>
        <div>
          <h4>Other</h4>
          <a href="/">Terms of Services</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
         
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
