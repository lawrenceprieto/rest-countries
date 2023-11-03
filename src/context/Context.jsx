import { createContext, useState } from "react";

export const Context = createContext();
export const  ContextProvider = (props) => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    
    return (
        <>
            <Context.Provider value={{
                isDarkMode, setIsDarkMode
            }}>
                {props.children}
            </Context.Provider>
        </>
    );
}