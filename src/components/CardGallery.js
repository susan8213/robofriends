import React from "react";
import Card from "./Card";

const CardGallery = ({ robots }) => {
    return (
        <React.Fragment>
            {robots.map(user => (
                <Card key={user.id} 
                    id={user.id} 
                    name={user.name} 
                    email={user.email} 
                />))}
        </React.Fragment>
    )
    
}

export default CardGallery;