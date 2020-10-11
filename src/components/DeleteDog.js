import React from 'react';
import {connect} from 'react-redux'
import {deleteDog} from '../actions/deleteDog'
const DeleteDog = (props) => {
    
    const handleDelete = (dog) => {
        debugger;
        props.deleteDog()
    }
    let dog = props.dog
 return (
        
         <button onClick={() => handleDelete(dog)}>Delete</button>
     
 )
}
export default connect(null,{deleteDog})(DeleteDog)