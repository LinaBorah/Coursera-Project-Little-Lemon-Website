import React from 'react';
function ReviewCard(props){
    return(
        <>
            <div className='Reviews'>
                <span>
                    <h5>{props.rating}</h5>
                    <h5>{props.name}</h5>
                </span>
                <p>{props.review}</p>
            </div>
            
        </>
    )
}
export default ReviewCard;