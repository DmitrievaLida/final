import React from "react";
import Social from "../../assets/images/social.png";
import './footer.css';


function FooterBlock({ image, title, text }) {
  return (
    <footer id="footer" className="footer">
         <p>© 2004 – 2025 Издательство МИФ </p>   
        <img src={Social}/>
    </footer>
  );
}


export default FooterBlock;