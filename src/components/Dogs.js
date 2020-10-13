import React from 'react';
import DeleteDog from './DeleteDog'

import {Link} from 'react-router-dom'
const Dogs = (props) => {
   
    return (
        <div id='dogcards'>
            {props.dogs && props.dogs.map(dog => 
               <div className='card' key={dog.id}>
                   <img src={dog.img_src}/>
                   <div className='container'>
                       <Link to={`/dogs/${dog.id}`}>{dog.name}</Link><br/>
                       <p>Age: {dog.age}</p>
                       <p>Gender: {dog.gender}</p>
                       <p>Breed: {dog.breed}</p>
                       <p>Size: {dog.size}</p>
                       <p>Potty Trained: {dog.house_trained}</p>
                       <p>Gets along with: {dog.good_with}</p>
                       <p>Medication: {dog.medication}</p>
                       <p>{dog.bio}</p>
                       <DeleteDog dog={dog}/>
                    </div>
                </div>
            )}
        </div>
    )

}
export default Dogs