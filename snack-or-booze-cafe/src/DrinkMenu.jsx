import React from "react";
import MenuTemplate from "./hooks/MenuTemplate";

const DrinkMenu = ({ items, title, basePath }) => {
  return (
    <>
      <MenuTemplate items={items} title={title} basePath={basePath} />
    </>
  );
}

export default DrinkMenu;