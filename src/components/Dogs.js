import React from 'react';
import DeleteDog from './DeleteDog'

import {Link} from 'react-router-dom'
const Dogs = (props) => {

    return (
        <div>
            {props.dogs && props.dogs.map(dog => 
               <div className='card' key={dog.id}><img src='https://dummyimage.com/200x200/000000/fff'/><div className='container'><Link to={`/dogs/${dog.id}`}>{dog.name}</Link><DeleteDog dog={dog}/></div></div>
            )}
        </div>
    )

}
export default Dogs