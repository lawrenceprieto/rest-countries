import { useContext } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Cards from "../components/Cards";
import axios from "axios";

function HomePage() {

    const { isDarkMode, data, setData, regions } = useContext(Context);
    const navigate = useNavigate();
    
    function handleSelectedRegion(selectedRegion) {
        const region = `https://restcountries.com/v3.1/region/${selectedRegion}`;
        axios.get(region)
        .then(response => {            
            setData(response.data);
        }, error => { 
            console.log(error); 
        });
    }

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
                    <div className="input-field">
                        <button className={ isDarkMode ? "elements-dark" : "elements-light" } type="button" id="button-addon1"><i className="fa-solid fa-magnifying-glass"></i></button>
                        <input className={ isDarkMode ? "elements-dark" : "elements-light" } type="text"  placeholder="Search for a country..." aria-describedby="button-addon1" />
                    </div>
                    <div className="dropdown">
                        <button className={ isDarkMode ? "dropdown-toggle elements-dark" : "dropdown-toggle elements-light" } type="button" data-bs-toggle="dropdown" aria-expanded="false">Filter by Region <span className="px-3"></span></button>
                        <ul className={ isDarkMode ? "dropdown-menu elements-dark" : "dropdown-menu elements-light" }>
                            {
                                regions.map((selectedRegion, index) => (
                                    <li key={index} style={{cursor: "pointer"}}>
                                        <a className={ isDarkMode ? "dropdown-item elements-dark" : "dropdown-item elements-light" } 
                                            onClick={() => handleSelectedRegion(selectedRegion)}>
                                            {selectedRegion}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>    
                <div className="countries-container">
                    {
                        data.map((country, index) => (
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