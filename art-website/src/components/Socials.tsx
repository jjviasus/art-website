import React from "react";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import emailIcon from "../assets/email2.svg";

export function Socials() {
  const handleSocialClick = (platform: string) => {
    console.log(`Clicked on ${platform} icon!`);
  };

  return (
    <div className="socials">
      <img
        className="row social-icon"
        src={facebookIcon}
        alt="Facebook"
        onClick={() => handleSocialClick("Facebook")}
      />
      <img
        className="row social-icon"
        src={instagramIcon}
        alt="Instagram"
        onClick={() => handleSocialClick("Instagram")}
      />
      <img
        className="row social-icon"
        src={emailIcon}
        alt="Email"
        onClick={() => handleSocialClick("Email")}
      />
    </div>
  );
}
