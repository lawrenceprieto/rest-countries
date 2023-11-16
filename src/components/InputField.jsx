import { useContext, useEffect, useState } from "react"
import { Context } from "../context/Context"

function InputField() {

    const { isDarkMode, data, setFilteredData, setNoResult } = useContext(Context);
    const [search, setSearch] = useState('');

    function handleOnChange(e) {
        const searchTerm = e.target.value;
        setSearch(searchTerm);

        if (searchTerm === '') {
            setFilteredData(data);
            setNoResult(false);
        }
    }

    const filtered = () => {
        const filtered = data.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));
        setFilteredData(filtered);
        if (filtered.length === 0) {
            setNoResult(true)
        }
    }

    useEffect(() => {
        filtered();
    }, [data]);

    function handleSearch() {
        filtered();
    }

    return(
        <>
            <div className="input-field">
                <button
                    className={isDarkMode ? "elements-dark" : "elements-light"}
                    type="button"
                    id="button-addon1"
                    aria-label="Search"
                    onClick={handleSearch}
                >
                    <i className="fa-solid fa-search"></i>
                </button>
                <input
                    className={isDarkMode ? "elements-dark" : "elements-light"}
                    type="text"
                    placeholder="Search for a country..."
                    aria-describedby="button-addon1"
                    value={search}
                    onChange={handleOnChange}
                />
            </div>
        </>
    )
}

export default InputField