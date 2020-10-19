import React from 'react';
const Dog = ({ match, dogs }) => {

    if (dogs.length === 0) return null;

    let dog = dogs.find(d => d.id === parseInt(match.params.id))
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
                <p>Bio: {dog ? dog.bio : null }</p>
            </div>
        </div>
        </>
    );
};
export default Dog;

