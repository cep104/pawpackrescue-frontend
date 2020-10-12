import React from 'react';
import DeleteDog from './DeleteDog'

import {Link} from 'react-router-dom'
const Dogs = (props) => {

    return (
        <div>
            {props.dogs && props.dogs.map(dog => 
               <li key={dog.id}><Link to={`/dogs/${dog.id}`}>{dog.name}</Link><DeleteDog dog={dog}/></li>
            )}
        </div>
    )

}
export default Dogs