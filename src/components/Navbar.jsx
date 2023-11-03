import { useContext } from "react"
import { Context } from "../context/Context";

function Navbar() {

    const { isDarkMode , setIsDarkMode } = useContext(Context);

    function handleDarkMode() {
        setIsDarkMode(false); 
    }
    function handleLightMode() { 
        setIsDarkMode(true); 
    }

    return (
        <>
            <div className={isDarkMode ? "navbar elements-dark" : "navbar elements-light"}>
                <div className="">Where in the world?</div>
                <button className={isDarkMode ? "elements-dark" : "d-none"} onClick={handleDarkMode} type="button"><i className="fa-lg fa-solid fa-moon"></i>  Dark Mode</button>
                <button className={isDarkMode ? "d-none" : "elements-light" } onClick={handleLightMode} type="button"><i className="fa-lg fa-regular fa-moon"></i>  Light Mode</button>
            </div>
        </>
    )
}

export default Navbar