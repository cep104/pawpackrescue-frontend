import React from 'react'
const Caretaker = (props) => {
    let caretaker = props.caretakers[props.match.params.id - 1]
    return (
        <div>
           {caretaker ? caretaker.name : null }
           {caretaker ? caretaker.location : null }
           {caretaker ? caretaker.setting : null }
        </div>
    )


}

export default Caretaker