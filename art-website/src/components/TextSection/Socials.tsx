import React from "react";
import instagramIcon from "../../assets/icons/instagram.svg";
import emailIcon from "../../assets/icons/email2.svg";

export function Socials() {
  const handleSocialClick = (platform: string) => {
    console.log(`Clicked on ${platform} icon!`);

    if (platform === "Email") {
      // Open the user's default email app and compose an email to dfanara.art@gmail.com
      window.location.href = "mailto:dfanara.art@gmail.com";
    } else if (platform === "Instagram") {
      // Open the user's Instagram profile in a new tab
      window.open("https://www.instagram.com/dfan.art/", "_blank");
    }
  };

  return (
    <div className="socials">
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
