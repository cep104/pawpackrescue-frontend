import React from 'react';
import { Link } from 'react-router-dom'
const Dogs = props => {
    if (props.dogs.length === 0) return null;
    const dogs = props.dogs.map((dog, index) => {
        return <Link to={`/dogs/${dog.id}`}>
                    <div key={index} className="card">
                        <img src={dog.img_src}/>
                        <div className='container'>   
                            <h2>{dog.name}</h2>
                            <p>Age: {dog.age}</p>
                        </div>
                    </div>
                 </Link>
    })
    return (
        <div id='alldogs'>{dogs}</div>
    );
};
export default Dogs;