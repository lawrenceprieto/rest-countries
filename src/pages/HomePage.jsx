import { useContext } from "react";
import data from "../assets/data.json"
import Cards from "../components/Cards";
import { Context } from "../context/Context";

function HomePage() {

    const { isDarkMode } = useContext(Context);
    const countries = data;

    return (
        <>
            <div className={ isDarkMode ? "dark" : "light" }> 
                <div className="input-dropdown">
                    <div className="input-field">
                        <button className={ isDarkMode ? "elements-dark" : "elements-light" } type="button" id="button-addon1"><i className="fa-solid fa-magnifying-glass"></i></button>
                        <input className={ isDarkMode ? "elements-dark" : "elements-light" } type="text"  placeholder="Search for a country..." aria-describedby="button-addon1" />
                    </div>
                    <div className="dropdown">
                        <button className={ isDarkMode ? "dropdown-toggle elements-dark" : "dropdown-toggle elements-light" } type="button" data-bs-toggle="dropdown" aria-expanded="false">Filter by Region</button>
                        <ul className={ isDarkMode ? "dropdown-menu elements-dark" : "dropdown-menu elements-light" }>
                            <li><a className={ isDarkMode ? "dropdown-item elements-dark" : "dropdown-item elements-light" } href="#">Action</a></li>
                            <li><a className={ isDarkMode ? "dropdown-item elements-dark" : "dropdown-item elements-light" } href="#">Another action</a></li>
                            <li><a className={ isDarkMode ? "dropdown-item elements-dark" : "dropdown-item elements-light" } href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>    
                <div className="countries-container">
                    {
                        countries.map((country, index) => (
                            <Cards key={index} 
                                image={country.flag} 
                                name={country.name}
                                population={country.population}
                                region={country.region}
                                capital={country.capital}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default HomePage