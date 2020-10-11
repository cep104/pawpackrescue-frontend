import React from 'react'
import {Redirect} from 'react-router-dom'
import DogContainer from '../containers/DogContainer'
import Dogs from '../components/Dogs'
import CaretakerEdit from './CaretakerEdit'
const Caretaker = (props) => {
    
    // let caretaker = props.caretakers[props.match.params.id - 1]
    let caretaker = props.caretakers.filter(caretaker => caretaker.id == props.match.params.id)[0]
    return (
        <div>
            {/* { caretaker ? null : <Redirect to='/caretakers'/>} */}
           <h1>{caretaker ? caretaker.name : null }</h1>
           {caretaker ? caretaker.location : null }
           {caretaker ? caretaker.setting : null }
           <DogContainer caretaker={caretaker}/>
           <CaretakerEdit caretaker={caretaker}/>
        </div>
    )


}

export default Caretaker