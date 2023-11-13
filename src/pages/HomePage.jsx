import { useContext } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Cards from "../components/Cards";
import InputField from "../components/InputField";
import Dropdown from "../components/Dropdown";

function HomePage() {

    const { isDarkMode, filteredData } = useContext(Context);
    const navigate = useNavigate();

    function handleCountry(country) {
        window.scrollTo({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        });

        navigate(`/country/${country.name.common}`);
    }

    return (
        <>
            <div className={ isDarkMode ? "dark" : "light" } style={{minHeight: "100vh"}}>
                <div className="input-dropdown">
                    <InputField />
                    <Dropdown />
                </div>    
                <div className="countries-container">
                    {
                        filteredData.map((country, index) => (
                            <Cards key={index} 
                                image={country.flags.png} 
                                name={country.name.common}
                                population={country.population}
                                region={country.region}
                                capital={country.capital}
                                onClick={() => handleCountry(country)}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default HomePage