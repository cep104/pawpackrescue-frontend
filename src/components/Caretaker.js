import React from 'react'
const Caretaker = ({caretaker}) => {

    return (
        <div>
             Name: {caretaker.name} - Location: {caretaker.location} - Home Type: {caretaker.setting}
        </div>
    )


}

export default Caretaker