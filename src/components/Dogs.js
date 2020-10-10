import React from 'react';

const Dogs = (props) => {

    return (
        <div>
            {props.dogs && props.dogs.map(dog => 
               <li key={dog.id}> {dog.name} </li>
            )}
        </div>
    )

}
export default Dogs