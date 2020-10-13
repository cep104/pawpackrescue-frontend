import React from 'react';
import { Link } from 'react-router-dom'
const Dogs = props => {
    if (props.dogs.length === 0) return null;
    const dogs = props.dogs.map((dog, index) => {
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