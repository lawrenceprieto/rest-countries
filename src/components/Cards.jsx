import { useContext } from "react"
import { Context } from "../context/Context"

function Cards(props) {

    const { isDarkMode } = useContext(Context);

    return (
        <>
            <div className={ isDarkMode ? "dark card" : "light card" } style={{width: "18rem", minWidth: "15rem", fontSize: "16px"}}>
                <img src={props.image} className="card-img-top" alt={props.name} style={{height: "150px", minHeight: "150px", objectFit: "cover"}} />
                <div className={ isDarkMode ? "elements-dark card-body pt-4 pb-5 px-4" : "elements-light card-body pt-4 pb-5 px-4" } >
                    <div className="card-title" style={{fontWeight: "800", minHeight: "50px", fontSize: "17px"}}>{props.name}</div>
                    <div className="card-text" style={{fontWeight: "600"}}>Population: <span style={{fontWeight: "300"}}>{props.population}</span></div>
                    <div className="card-text" style={{fontWeight: "600"}}>Region: <span style={{fontWeight: "300"}}>{props.region}</span></div>
                    <div className="card-text" style={{fontWeight: "600"}}>Capital: <span style={{fontWeight: "300"}}>{props.capital}</span></div>
                </div>
            </div>
        </>
    )
}

export default Cards