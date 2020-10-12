import React from 'react';
import {Route, Link} from 'react-router-dom'
import Caretaker from './Caretaker'

const Caretakerlist = ({caretakers}) => {
    
    return (
    <div>
        <ul>
        {caretakers.map(caretaker =>
            <li key={caretaker.id}><Link to={`/caretakers/${caretaker.id}`}>{caretaker.name}</Link></li>
        )}
        </ul>
    </div>
)
}
export default Caretakerlist