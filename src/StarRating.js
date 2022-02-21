import React, { useState} from "react";
import { FaStar } from 'react-icons/fa';
const StarRating = ({rating, updateRating}) =>{

   // const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return <div>
        
        <p>Rate your experience from 0 to 5 stars</p>
        {[... Array(5)].map((star, i)=>{
            const ratingValue= i + 1;
            return (
                <label>
                    <input 
                    type="radio"
                    name="rating" 
                    value={rating}
                    onClick={() =>updateRating(ratingValue)} />
                    <FaStar 
                    className="star" 
                    color={ratingValue <= (hover || rating) ? "#11C4B0" : "#D3D3D3"}
                    size={40}
                    onMouseEnter={() =>setHover(ratingValue)}
                    onMouseLeave={() =>setHover(null)}
                    />

                </label>

            );
        })}

        
        </div>
        
}
export default StarRating;