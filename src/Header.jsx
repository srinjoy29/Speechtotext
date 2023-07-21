import React from "react";
import MicIcon from '@mui/icons-material/Mic';
import TextFieldsIcon from '@mui/icons-material/TextFields';

function Header() {
  return (
    <header>
      <h1><MicIcon fontSize="large" />Speech to Text<TextFieldsIcon fontSize="large" /></h1>
    </header>
  );
}

export default Header;
