import react, { useState} from "react";
import { FaStar } from 'react-icons/fa';
const StarRating2 = () =>{

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return <div>

        <p>How satisfied are you with the payment process?</p>
        {[... Array(5)].map((star, i)=>{
            const ratingValue= i + 1;
            return (
                <label>
                    <input 
                    type="radio"
                    name="rating" 
                    value={ratingValue}
                    onClick={() =>setRating(ratingValue)} />
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
export default StarRating2;