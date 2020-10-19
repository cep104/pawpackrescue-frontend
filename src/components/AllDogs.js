import React from 'react';
import { Link } from 'react-router-dom'
const Dogs = props => {
    if (props.dogs.length === 0) return null;
    const dogs = props.dogs.map((dog, index) => {
        if (dog.img_src == ''){ dog.img_src = 'https://www.clipartkey.com/mpngs/m/207-2074740_pawprint-svg-bear-transparent-dog-paw-print.png'}
        return  <div key={index} className="card">
                    <Link to={`/dogs/${dog.id}`}>
                        <img src={dog.img_src} alt={dog.name}/>
                        <div className='container'>   
                            <h2>{dog.name}</h2>
                            <p>Age: {dog.age}</p>
                        </div>
                    </Link>
                </div>
    })
    return (
        <div id='alldogs'>{dogs}</div>
    );
};
export default Dogs;