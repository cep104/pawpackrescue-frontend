import React from 'react';
import { Link } from 'react-router-dom'

const Dogs = props => {
    const dogs = props.dogs.dogs.map((dog, index) => {
        return <div key={index} className="dogList">
            <Link
                to={`/dogs/${dog.id}`}
            ><h2>{dog.name}</h2></Link>
            
        </div>
    })

    return (
        <div>{dogs}</div>
    );
};

export default Dogs;