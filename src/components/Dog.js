import React from 'react';
const Dog = ({ match, dogs }) => {

    if (dogs.length === 0) return null;
    
    let dog = dogs.find(d => d.id === parseInt(match.params.id))
    if (dog.house_trained === true) { dog.house_trained = 'Yes'} 
    if (dog.house_trained === false) { dog.house_trained = 'No'} 
    if (dog.img_src == ''){ dog.img_src = 'https://www.clipartkey.com/mpngs/m/207-2074740_pawprint-svg-bear-transparent-dog-paw-print.png'}
    return (
        <>
        <div>
            <div id='dogimg'>
                <img src={dog.img_src} alt={dog.name}/>
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

