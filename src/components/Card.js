import React from 'react';

function Card(props) {
    return (
        <>
            <img src={props.image} alt="dishes" width={'200px'} height={'133px'}></img>
            <div>
                <span>
                    <h5>{props.name}</h5>
                    <h5>{props.price}</h5>
                </span>

                <p>
                    {props.description}
                </p>
                <h5>Order at delivery</h5>
            </div>

        </>



    );

}
export default Card;