import React from "react";
import FormTemplate from "./hooks/FormTemplate" 

const NewSnackForm = ({basePath, createItem}) => {
    return(
        <>
            <FormTemplate basePath={basePath} createItem={createItem} />
        </>
    )
}

export default NewSnackForm