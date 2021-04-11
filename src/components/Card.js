import React from 'react';
import "tachyons";

const Card = ({ id, name, email }) => {
    return (
        <div className="br3 pa3 ma2 tc bg-lightest-blue bw2 ba b--black-10 dib grow">
            <img 
                src={`https://robohash.org/${id}?set=set4&size=250x250`}
                alt="Cat" 
                className="br-100 h4 w4 dib pa2"
            ></img>
            <h1 className="f3 mb2">{name}</h1>
            <h2 className="f5 fw4 dark-gray mt0">{email}</h2>
        </div>
    )
}

export default Card;