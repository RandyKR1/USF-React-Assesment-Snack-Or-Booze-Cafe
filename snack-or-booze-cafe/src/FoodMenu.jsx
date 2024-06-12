import React from "react";
import MenuTemplate from "./hooks/MenuTemplate";

const FoodMenu = ({ items, title, basePath }) => {
  return (
    <>
      <MenuTemplate items={items} title={title} basePath={basePath} />
    </>
  );
}

export default FoodMenu;
