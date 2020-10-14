import React from 'react';
import { Link } from 'react-router-dom'
const Dogs = props => {
    if (props.dogs.length === 0) return null;
    const dogs = props.dogs.map((dog, index) => {
        return <div key={index} className="card">
            <img src={dog.img_src}/>
         <div className='container'>   <Link
                to={`/dogs/${dog.id}`}
            ><h2>{dog.name}</h2><p>Age: {dog.age}</p></Link>
        </div></div>
    })
    return (
        <div >{dogs}</div>
    );
};
export default Dogs;