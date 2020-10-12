import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/'> Home </Link>
      <Link to='/caretakers' style={{paddingRight: '10px'}}>Fosters  </Link>
      <Link to='/caretakers/new'> Add Foster</Link>
      <Link to='/dogs' style={{paddingRight: '10px'}}>Dogs</Link>

      
    </div>

  )
}

export default NavBar