import React from 'react';
import DeleteDog from './DeleteDog'
const Dogs = (props) => {

    return (
        <div>
            {props.dogs && props.dogs.map(dog => 
               <li key={dog.id}> {dog.name} <DeleteDog dog={dog}/></li>
            )}
        </div>
    )

}
export default Dogs