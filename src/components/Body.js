import Search from "./Search";
import { restList } from "../utils/mockData";
import ResCards from "./RestCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
export const Body = () =>{

    const [searchText,SetSearchText] = useState('');
    const [RestaruntListing,setRestaruntListing] = useState([]);
    const [filteredRestarunt,setfilteredRestarunt] = useState([]);
    
    // debugger;
    useEffect(()=>{
       fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0697174&lng=80.2432839&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //  optional chaining
        console.log(json.data.cards[2].data.data.cards); 
        setRestaruntListing(json?.data?.cards[2]?.data?.data?.cards);
        setfilteredRestarunt(json?.data?.cards[2]?.data?.data?.cards);
    }

    // if(RestaruntListing.length === 0){
    //     return <Shimmer/>
    // }
    
    return RestaruntListing.length === 0 ? (<Shimmer/>):(
    <>
    <div className="filter-container">
        <input type="text"  placeholder="Search" value={searchText} onChange={(e) => {
            SetSearchText(e.target.value);
        }}  className="search"/>
        <button onClick={()=>{
            
            const filteredRest = RestaruntListing.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()))
            setfilteredRestarunt(filteredRest);
            
        }}>Submit</button>
                <button className="filter-btn" onClick={()=>{
                    const filteredRest = RestaruntListing.filter((res) => res.data.avgRating > 4);
                    console.log(filteredRest)
                    setRestaruntListing(filteredRest)

                }}>Top Rated Restaurants</button>
    </div>
   

    <div className="rest-container">

    <div className="rest-cards">
            {filteredRestarunt.map(restarant => {
                    return <ResCards key={restarant.data.id} restData ={restarant} /> 
            })}          
     </div>
    </div>
    </>
    )
}