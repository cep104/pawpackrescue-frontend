import React from 'react';


const Dog = ({ match, dogs }) => {
  
    let dog = dogs.dogs.find(d => d.id === parseInt(match.params.id))

     
    
    return (
        <>
        <div>
            <h2>Name: {dog ? dog.name : null }</h2>
            <p>Bio: {dog ? dog.bio : null }</p>
            
        </div>
        </>
    );
};

export default Dog;