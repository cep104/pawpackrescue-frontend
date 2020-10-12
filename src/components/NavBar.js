import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div id='nav'>
      <ul>
      <li><Link to='/'> Home </Link></li>
      <li><Link to='/caretakers'>Fosters  </Link></li>
      <li><Link to='/caretakers/new'> Join Today </Link></li>
      <li><Link to='/dogs'>Dogs</Link></li>
      </ul>
      
    </div>

  )
}

export default NavBar