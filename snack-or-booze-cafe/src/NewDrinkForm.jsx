import React from "react";
import FormTemplate from "./hooks/FormTemplate" 

const NewDrinkForm = ({basePath, createItem}) => {
    return(
        <>
            <FormTemplate basePath={basePath} createItem={createItem} />
        </>
    )
}

export default NewDrinkForm