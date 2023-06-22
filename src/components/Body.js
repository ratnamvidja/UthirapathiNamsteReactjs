import Search from "./Search";
import { restList } from "../utils/mockData";
import ResCards from "./RestCards";
import { useState } from "react";
export const Body = () =>{

    
    const [RestaruntListing,setRestaruntListing] = useState(restList)
    
    return(
    <>
    <div className="filter-btn" onClick={()=>{
        const filteredRest = RestaruntListing.filter((res) => res.data.avgRating > 4);
        console.log(filteredRest)
        setRestaruntListing(filteredRest)

    }}>Top Rated Restaurants</div>
    <div className="rest-container">

    <div className="rest-cards">
            {RestaruntListing.map(restarant => {
                    return <ResCards key={restarant.data.id} restData ={restarant} /> 
            })}          
     </div>
    </div>
    </>
    )
}