import React from "react";
import MyContext from "./MyContext";
import Context from "./Context";

const ProviderContext = ()=>{
    const value = "Context";

    return (
        <MyContext.Provider value={value}>
            <Context/>
        </MyContext.Provider>
    )
}

export default ProviderContext;