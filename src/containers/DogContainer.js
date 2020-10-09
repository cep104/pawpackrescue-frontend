import React from 'react'
import DogInput from '../components/DogInput'
import Dogs from '../components/Dogs'
class DogContainer extends React.Component {
   render(){
       
       return(
           <div>
               
               <DogInput />
               <Dogs dogs={this.props.caretaker && this.props.caretaker.dogs}/>
           </div>
       )
   } 
}

export default DogContainer

