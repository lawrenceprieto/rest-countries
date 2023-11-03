import { useContext } from "react";
import data from "../assets/data.json"
import Cards from "../components/Cards";
import { Context } from "../context/Context";

function HomePage() {

    const { isDarkMode } = useContext(Context);
    const countries = data;

    return (
        <>
            <div className={ isDarkMode ? "countries-container dark p-5" : "countries-container light p-5" }>
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
        </>
    )
}

export default HomePage