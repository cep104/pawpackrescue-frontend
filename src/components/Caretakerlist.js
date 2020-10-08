import React from 'react';

const Caretakerlist = ({caretakers}) => {
console.log(caretakers)
    return (
    <div>
        <ul>
        {caretakers.map(caretaker =>
           <li key={caretaker.id}>Foster Name: {caretaker.name} - Location: {caretaker.location} - Type: {caretaker.setting}</li>
        )}
        </ul>
    </div>
)
}
export default Caretakerlist