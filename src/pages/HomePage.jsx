import { useContext, useState } from "react";
import data from "../assets/data.json"
import Cards from "../components/Cards";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

function HomePage() {

    const { isDarkMode, setCountryDetails } = useContext(Context);
    const [ items , setItems ] = useState(data);
    const menuItems = [...new Set(data.map((regions) => regions.region))];

    function handleMenuItem(menuItem) {
        const newItem = data.filter((regions) => {
            return regions.region === menuItem; 
        });
        setItems(newItem);
    }

    const navigate = useNavigate();
    function handleCountry(country) {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        setCountryDetails(country);
        navigate("detail-page");
    }

    return (
        <>
            <div className={ isDarkMode ? "dark" : "light" }> 
                <div className="input-dropdown">
                    <div className="input-field">
                        <button className={ isDarkMode ? "elements-dark" : "elements-light" } type="button" id="button-addon1"><i className="fa-solid fa-magnifying-glass"></i></button>
                        <input className={ isDarkMode ? "elements-dark" : "elements-light" } type="text"  placeholder="Search for a country..." aria-describedby="button-addon1" />
                    </div>
                    <div className="dropdown">
                        <button className={ isDarkMode ? "dropdown-toggle elements-dark" : "dropdown-toggle elements-light" } type="button" data-bs-toggle="dropdown" aria-expanded="false">Filter by Region <span className="px-3"></span></button>
                        <ul className={ isDarkMode ? "dropdown-menu elements-dark" : "dropdown-menu elements-light" }>
                            {
                                menuItems.map((menuItem, index) => (
                                    <li key={index}><a className={ isDarkMode ? "dropdown-item elements-dark" : "dropdown-item elements-light" } onClick={() => handleMenuItem(menuItem)}>{menuItem}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>    
                <div className="countries-container">
                    {
                        items.map((country, index) => (
                            <Cards key={index} 
                                image={country.flag} 
                                name={country.name}
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