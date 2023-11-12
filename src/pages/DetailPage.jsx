import { useContext, useEffect, useState } from "react"
import { Context } from "../context/Context"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function DetailPage() {

    const { isDarkMode, data, setLoading } = useContext(Context);
    const [country, setCountry] = useState([]);
    const [borders, setBorders] = useState([]);
    const {countryName} = useParams();
    const navigate = useNavigate();

    
    function handleBackButton() {
        navigate("/");
    }

    // useEffect(() => {
        const fetchCountryDataByName = async (name) => {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
                const countryData = response.data[0];
                if (!countryData) {

                    setLoading(true);
                } else {

                    // convert the currency to object
                    const currencyArray = countryData.currencies ? Object.values(countryData.currencies) : null;
                    const currencyValue = currencyArray[0]?.name ? currencyArray[0].name : "None";

                    // conver the native name to object
                    const nativeNameArray = countryData.name.nativeName ? Object.values(countryData.name.nativeName) : null;
                    const nativeNameValue = nativeNameArray[0]?.common ? nativeNameArray[0].common : "None";

                    // convert the language to object
                    const languageArray = countryData.languages ? Object.values(countryData.languages) : null;
                    const languageValue = languageArray ? languageArray.map(language => language) : "None";

                    setCountry({
                        flag: countryData.flags?.png,
                        name: countryData.name.common,
                        nativeName: nativeNameValue,
                        population: countryData.population,
                        region: countryData.region,
                        subregion: countryData?.subregion,
                        capital: countryData?.capital,
                        tld: countryData?.tld,
                        currency: currencyValue,
                        language: languageValue,
                        borders: countryData?.borders
                    });

                    // get all the borders using codes 
                    const bordersName = countryData.borders.map(borderCode => {
                        const border = data.find(b => b.cca3 === borderCode);
                        return border;
                    });

                    setBorders(bordersName);                    
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching country data:", error);
            }
        };

    //     fetchCountryDataByName();
    // }, [data]);

    useEffect(() => {
        fetchCountryDataByName(countryName);
    },[data, countryName]);

    function handleBorderCountries(border) {
         window.scrollTo({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        });

        fetchCountryDataByName(border.name.common);
    }
    
    return (
        <>
            <div className={ isDarkMode ? "details-page dark" : "details-page light" } style={{minHeight: "100vh"}}>
                <button className={ isDarkMode ? "elements-dark px-4 py-2 my-5" : "elements-light px-4 py-2 my-5" } type="button" onClick={handleBackButton}><i className="fa-solid fa-arrow-left-long" style={{paddingRight: "10px"}}></i> Back</button>
                <div className="details-container">
                    <img src={country?.flag} alt={country?.name} />
                    <div className="details-content">
                        <div className="my-4" style={{fontWeight: "800", fontSize: "20px"}}>{country?.name}</div>
                        <div className="details-about">
                            <div>
                                <div className="mb-2" style={{fontWeight: "600"}}>Native Name: <span style={{fontWeight: "300", wordWrap: "wrap"}}>{country?.nativeName}</span></div>
                                <div className="mb-2" style={{fontWeight: "600"}}>Population: <span style={{fontWeight: "300"}}>{new Intl.NumberFormat().format(country?.population)}</span></div>
                                <div className="mb-2" style={{fontWeight: "600"}}>Region: <span style={{fontWeight: "300"}}>{country.region}</span></div>
                                <div className="mb-2" style={{fontWeight: "600"}}>Sub Region: <span style={{fontWeight: "300"}}>{country.subregion}</span></div>
                                <div className="mb-2" style={{fontWeight: "600"}}>Capital: <span style={{fontWeight: "300"}}>{country.capital}</span></div>
                            </div>
                            <div>
                                <div className="mb-2" style={{fontWeight: "600"}}>Top Level Domain: <span style={{fontWeight: "300"}}>{country.tld}</span></div>
                                <div className="mb-2" style={{fontWeight: "600"}}>Currencies: <span style={{fontWeight: "300"}}>{country.currency}</span></div>
                                <div className="mb-2" style={{fontWeight: "600"}}>Languages: <span style={{fontWeight: "300"}}>{country.language?.join(', ')}</span></div>
                            </div>
                        </div>
                        <div className="mt-4 mb-5 border-countries">
                            <div className="mb-2" style={{fontWeight: "600"}}>Border Countries: </div>
                            <div className="bc-details">
                                {
                                    borders.map((border, index) => (
                                        <div className={ isDarkMode ? "elements-dark px-3 py-1" : "elements-light px-3 py-1" } style={{fontWeight: "300", cursor: "pointer"}} key={index} onClick={() => handleBorderCountries(border)}>{border?.name.common}</div>                                    
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailPage