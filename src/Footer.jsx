import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>This is a React.Js mini project , Its using 'react-speech-recognition' for converting speech into text. </p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
