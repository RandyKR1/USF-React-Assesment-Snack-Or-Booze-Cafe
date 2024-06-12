import React from "react";
import ItemTemplate from "./hooks/ItemTemplate";

function DrinkItem({items}) {
  return (
    <>
        <ItemTemplate items={items} />
    </>
  );
}

export default DrinkItem;
