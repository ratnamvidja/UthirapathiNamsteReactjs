import { CDN_URL } from "../utils/constants";
const ResCards = (props)=>{
    const  { restData } = props;
      const {cloudinaryImageId,name,cuisines,costForTwo,deliveryTime,avgRating} = restData?.data;
      return(
      <div className="card">
              <div className="card-header">
              <img src={CDN_URL+cloudinaryImageId} alt="No-image" />
              </div>
              <div className="card-body">
                      <h3>{name}</h3>
                      <h4>{cuisines.join(", ")}</h4>
                      <ul>
                              <li className={avgRating<4?"star below-four":"star above-four"}><span>&#9733;</span>{avgRating}</li>
                              <li><span>&#8377;</span>{costForTwo/100} FOR TWO</li>
                              <li>{deliveryTime} min</li>
                      </ul>
              </div>
      </div>
      )
     
}

export default ResCards;  