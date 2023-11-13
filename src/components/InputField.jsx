import { useContext } from "react"
import { Context } from "../context/Context"

function InputField() {

    const {isDarkMode} = useContext(Context);

    return(
        <>
            <div className="input-field">
                <button
                    className={isDarkMode ? "elements-dark" : "elements-light"}
                    type="button"
                    id="button-addon1"
                    aria-label="Search"
                >
                    <i className="fa-solid fa-search"></i>
                </button>
                <input
                    className={isDarkMode ? "elements-dark" : "elements-light"}
                    type="text"
                    placeholder="Search for a country..."
                    aria-describedby="button-addon1"
                />
            </div>
        </>
    )
}

export default InputField