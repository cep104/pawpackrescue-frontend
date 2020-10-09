import React from 'react'
import {Redirect} from 'react-router-dom'
const Caretaker = (props) => {
    
    let caretaker = props.caretakers[props.match.params.id - 1]
    return (
        <div>
            {/* { caretaker ? null : <Redirect to='/caretakers'/>} */}
           {caretaker ? caretaker.name : null }
           {caretaker ? caretaker.location : null }
           {caretaker ? caretaker.setting : null }
           
        </div>
    )


}

export default Caretaker