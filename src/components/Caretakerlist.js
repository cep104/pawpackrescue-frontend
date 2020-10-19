import React from 'react';
import { Link } from 'react-router-dom'

const Caretakerlist = ({caretakers}) => {
    
    return (
    <div id='caretakers'>
        
        {caretakers.map(caretaker =>
            <div className='card' key={caretaker.id}>
            <Link to={`/caretakers/${caretaker.id}`}>
                    <div>
                        <h4>{caretaker.name}</h4>
                        <h6>{caretaker.location}</h6>
                    </div>
            </Link>
            </div>
        )}
        
    </div>
)
}
export default Caretakerlist