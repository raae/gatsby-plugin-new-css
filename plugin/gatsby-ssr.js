import React from "react";

const onRenderBody = ({ setHeadComponents }) => {
  return setHeadComponents([
    <link
      key="new-css-font"
      rel="stylesheet"
      href="https://fonts.xz.style/serve/inter.css"
    />,
    <link
      key="new-css-styles"
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
    />,
  ]);
};

export { onRenderBody };
