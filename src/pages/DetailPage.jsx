import { useContext } from "react"
import { Context } from "../context/Context"
import { useNavigate } from "react-router-dom";
import data from "../assets/data.json";

function DetailPage() {

    const { isDarkMode, countryDetails , setCountryDetails } = useContext(Context);
    const navigate = useNavigate();
    
    let listBorders = [];
    const borders = countryDetails.borders;
    if (borders) {
        for ( let i=0 ; i<borders.length ; i++) {
            data.filter((country) => {
                if (country.alpha3Code === borders[i]) {
                    listBorders.push(country);
                } 
            });
        }
    } else {
        null;
    }

    function handleBackButton() {
        navigate("/");
    }

    function handleBorderCountries(border) {
         window.scrollTo({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        });

        setCountryDetails(border);
    }

    return (
        <>
            <div className={ isDarkMode ? "details-page dark" : "details-page light" } style={{minHeight: "100vh"}}>
                <button className={ isDarkMode ? "elements-dark px-4 py-2 my-5" : "elements-light px-4 py-2 my-5" } type="button" onClick={handleBackButton}><i className="fa-solid fa-arrow-left-long" style={{paddingRight: "10px"}}></i> Back</button>
                <div className="details-container">
                    <img src={countryDetails.flag} alt={countryDetails.name} />
                    <div className="details-content">
                        <div className="my-4" style={{fontWeight: "800", fontSize: "20px"}}>{countryDetails.name}</div>
                        <div className="details-about">
                            <div>
                                <div className="mb-2" style={{fontWeight: "600"}}>Native Name: <span style={{fontWeight: "300", wordWrap: "wrap"}}>{countryDetails.nativeName}</span></div>
                                <div className="mb-2" style={{fontWeight: "600"}}>Population: <span style={{fontWeight: "300"}}>{countryDetails.population}</span></div>
                                <div className="mb-2" style={{fontWeight: "600"}}>Region: <span style={{fontWeight: "300"}}>{countryDetails.region}</span></div>
                                <div className="mb-2" style={{fontWeight: "600"}}>Sub Region: <span style={{fontWeight: "300"}}>{countryDetails.subregion}</span></div>
                                <div className="mb-2" style={{fontWeight: "600"}}>Capital: <span style={{fontWeight: "300"}}>{countryDetails.capital}</span></div>
                            </div>
                            <div>
                                <div className="mb-2" style={{fontWeight: "600"}}>Top Level Domain: <span style={{fontWeight: "300"}}>{countryDetails.topLevelDomain}</span></div>
                                <div className="mb-2" style={{fontWeight: "600"}}>Currencies: <span style={{fontWeight: "300"}}>{countryDetails.currencies[0].name}</span></div>
                                <div className="mb-2" style={{fontWeight: "600"}}>Languages: {countryDetails.languages.map((language, index) => (<span style={{fontWeight: "300"}} key={index}>{language.name}, </span>))}</div>
                            </div>
                        </div>
                        <div className="mt-4 mb-5 border-countries">
                            <div className="mb-2" style={{fontWeight: "600"}}>Border Countries: </div>
                            <div className="bc-details">
                                {
                                    listBorders.map((border, index) => (
                                        <div className={ isDarkMode ? "elements-dark px-3 py-1" : "elements-light px-3 py-1" } style={{fontWeight: "300", cursor: "pointer"}} key={index} onClick={() => handleBorderCountries(border)}>{border.name}</div>
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