import React from 'react';
import { Link } from 'react-router-dom'

const Caretakerlist = ({caretakers}) => {
    
    return (
    <div id='caretakers'>
        
        {caretakers.map(caretaker =>
            <Link to={`/caretakers/${caretaker.id}`}>
                <div class='card' key={caretaker.id}>
                    <container>
                        <h4>{caretaker.name}</h4>
                        <h6>{caretaker.location}</h6>
                    </container>
                </div>
            </Link>
        )}
        
    </div>
)
}
export default Caretakerlist