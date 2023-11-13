import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();
export const  ContextProvider = (props) => {

    const apiURL = 'https://restcountries.com/v3.1/all';
    
    const [data, setData] = useState([]);
    const [regions, setRegions] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [countryInfo, setCountryInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredData, setFilteredData] = useState([]);

    // get all the countrt data from the api
    useEffect(() => {
        axios.get(apiURL)
        .then(response => {
            
            // set the data on state
            setData(response.data);
            
            // get all the regions and set it to regions state
            const filterRegions = [...new Set(response.data.map((regions) => regions.region))];
            setRegions(filterRegions);

        }, error => { 
            console.log(error); 
        });
    }, [setRegions]);
    
    return (
        <>
            <Context.Provider value={{
                data, setData,
                loading, setLoading,
                regions, setRegions, 
                isDarkMode, setIsDarkMode,
                countryInfo, setCountryInfo,
                filteredData, setFilteredData
            }}>
                {props.children}
            </Context.Provider>
        </>
    );
}