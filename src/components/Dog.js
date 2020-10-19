import React from 'react';
const Dog = ({ match, dogs }) => {

    if (dogs.length === 0) return null;
    
    let dog = dogs.find(d => d.id === parseInt(match.params.id))
    if (dog.house_trained === true) { dog.house_trained = 'Yes'} 
    else { dog.house_trained = 'No'}
    return (
        <>
        <div>
            <div id='dogimg'>
                <img src={dog.img_src} />
            </div>
            <div id='dogfacts'>
                <h2>{dog ? dog.name : null }</h2>
                <p>Breed: {dog ? dog.breed : null }</p>
                <p>Age: {dog ? dog.age : null }</p>
                <p>Size: {dog ? dog.size : null }</p>
                <p>Gets Along with: {dog ? dog.good_with: null }</p>
                <p>Medication Needs: {dog ? dog.medication : null }</p>
                <p>House Trained: { dog ? dog.house_trained.toString() : null }</p>
                <p>Bio: {dog ? dog.bio : null }</p>
            </div>
        </div>
        </>
    );
};
export default Dog;

