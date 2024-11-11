import React, { useState } from "react";
import mail from "../assets/icon-mail.png";
import copy from "../assets/icon-copy.png";
import phone from "../assets/icon-phone.png";
import git from "../assets/icon-git.png";
import x from "../assets/icon-x.png";
import fig from "../assets/icon-figma.png";

const Contact = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setNotificationMessage("Copied to clipboard!");
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 5000); // Hide notification after 5 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="bg-defaultclr w-full h-[450px] text-white justify-items-center pt-10">
      {showNotification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          {notificationMessage}
        </div>
      )}
      <div className="justify-items-center space-y-5">
        <h1 className="font-Sour text-xl">Get in touch</h1>
        <p className="text-center ">
          What’s next? Feel free to reach out to me if you're looking for a
          <br />
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="pt-8 space-y-5">
        <div className="flex items-center space-x-5 text-3xl">
          <img src={mail} alt="mail-icon" />
          <h1>abcxyz@gmail.com</h1>
          <img
            src={copy}
            alt="icon"
            onClick={() => copyToClipboard("abcxyz@gmail.com")}
            className="cursor-pointer"
          />
        </div>
        <div className="flex items-center space-x-5 text-3xl">
          <img src={phone} alt="phone-icon" />
          <h1>+91 1234567890</h1>
          <img
            src={copy}
            alt="copy-icon"
            onClick={() => copyToClipboard("+91 1234567890")}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div>
        <p className="pt-10">You may also find me on these platforms!</p>
        <div className="flex pt-3 justify-center items-center space-x-5">
          <a href="#">
            <img src={git} alt="icon" className="w-10 h-10" />
          </a>
          <a href="#">
            <img src={x} alt="icon" className="w-8 h-8" />
          </a>
          <a href="#">
            <img src={fig} alt="icon" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
