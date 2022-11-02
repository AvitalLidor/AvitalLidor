import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <p className="border-top pt-3 text-center">
      <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()}
      <br />
      This Site Created By Lidor Avital
    </p>
  );
};
export default Footer;
