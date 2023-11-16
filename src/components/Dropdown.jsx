import axios from "axios";
import { useContext } from "react"
import { Context } from "../context/Context"

function Dropdown() {

    const { isDarkMode, regions, setFilteredData, data, setNoResult } = useContext(Context);

    function handleSelectedRegion(selectedRegion) {
        const region = `https://restcountries.com/v3.1/region/${selectedRegion}`;
        axios.get(region)
        .then(response => {            
            setFilteredData(response.data);
            setNoResult(false);
        }, error => { 
            console.log(error); 
        });
    }

    function handleAllRegion() {
        setFilteredData(data);
        setNoResult(false);
    }

    return(
        <>
            <div className="dropdown">
                <button className={ isDarkMode ? "dropdown-toggle elements-dark" : "dropdown-toggle elements-light" } type="button" data-bs-toggle="dropdown" aria-expanded="false">Filter by Region <span className="px-3"></span></button>
                <ul className={ isDarkMode ? "dropdown-menu elements-dark" : "dropdown-menu elements-light" }>
                    <li style={{cursor: "pointer"}}>
                        <a className={ isDarkMode ? "dropdown-item elements-dark" : "dropdown-item elements-light" } 
                            onClick={handleAllRegion}>
                            All Region
                        </a>
                    </li>
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
        </>
    )
}

export default Dropdown