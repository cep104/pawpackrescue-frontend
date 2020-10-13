import React from 'react'
import {Redirect} from 'react-router-dom'
import DogContainer from '../containers/DogContainer'
import Dogs from '../components/Dogs'
import CaretakerEdit from './CaretakerEdit'
const Caretaker = (props) => {

    const editFoster = (e) => {
        let form = document.getElementById('editform')
        form.style.display = "inline-block";
        console.log(form)
    }

    const hideFoster = (e) => {
        let form = document.getElementById('editform')
        form.style.display = "none";
    }

    // let caretaker = props.caretakers[props.match.params.id - 1]
    let caretaker = props.caretakers.filter(caretaker => caretaker.id == props.match.params.id)[0]
    return (
        <div>
            
           <h1>{caretaker ? caretaker.name : null }</h1>
           <p>Location: {caretaker ? caretaker.location : null }</p>
           <p>Living Situation: {caretaker ? caretaker.setting : null }</p>
           <button onClick={editFoster}>Edit Foster</button>
           <button onClick={hideFoster}>Close Foster Form</button><br/><br/>
           <div id='editform'><CaretakerEdit caretaker={caretaker} hideoster={hideFoster}/></div><br/>
           <DogContainer caretaker={caretaker}/>
           
        </div>
    )


}

export default Caretaker