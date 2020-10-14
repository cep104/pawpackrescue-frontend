import React from 'react';
import DeleteDog from './DeleteDog'
import {Link} from 'react-router-dom'
const Dogs = ({careTakerId, dogs}) => {
    if (dogs.length === 0) return null;
    const d = dogs.filter(dog => dog.caretaker_id === careTakerId)
    return (
        <div id='dogcards'>
            {d && d.map(dog => 
               <div className='card' key={dog.id}>
                   <img src={dog.img_src}/>
                   <div className='container'>
                       <Link to={`/dogs/${dog.id}`}>{dog.name}</Link><br/>
                       
                       <DeleteDog dog={dog}/>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Dogs