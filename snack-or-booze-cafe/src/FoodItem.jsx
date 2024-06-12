import React from "react";
import ItemTemplate from "./hooks/ItemTemplate";

function FoodItem({items}) {
  return (
    <>
        <ItemTemplate items={items} />
    </>
  );
}

export default FoodItem;