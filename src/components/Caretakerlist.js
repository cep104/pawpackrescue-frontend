import React from 'react';
import Caretaker from './Caretaker'

const Caretakerlist = ({caretakers}) => {

    return (
    <div>
        <ul>
        {caretakers.map(caretaker =>
           <li key={caretaker.id}>< Caretaker caretaker={caretaker}/></li>
        )}
        </ul>
    </div>
)
}
export default Caretakerlist