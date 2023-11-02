import { createContext, useState } from "react";

export const ColorModeContext = createContext();
export const  ColorModeProvider = (props) => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <>
            <ColorModeContext.Provider value={{
                isDarkMode, setIsDarkMode
            }}>
                {props.children}
            </ColorModeContext.Provider>
        </>
    );
}