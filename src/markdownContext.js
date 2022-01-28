import React from "react";

const defaultContext = {
  markdownText: '',
  markdownMenu: '',
  setMarkdownText: () => {},
  setMarkdownMenu: () => {},
};


export default React.createContext(defaultContext);
