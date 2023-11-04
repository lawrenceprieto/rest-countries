import { createContext, useState } from "react";

export const Context = createContext();
export const  ContextProvider = (props) => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [countryDetails, setCountryDetails] = useState([]);
    
    return (
        <>
            <Context.Provider value={{
                isDarkMode, setIsDarkMode,
                countryDetails, setCountryDetails,
            }}>
                {props.children}
            </Context.Provider>
        </>
    );
}