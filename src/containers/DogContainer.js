import React from 'react'
import { connect } from 'react-redux';
import DogInput from '../components/DogInput'
import Dogs from '../components/Dogs'



class DogContainer extends React.Component {
 
   render(){
       
       return(
           <div>
               <DogInput caretaker={this.props.caretaker}/>
               <Dogs dogs={this.props.caretaker && this.props.caretaker.dogs}/>
               
               
               
           </div>
       )
   } 
}


 
export default connect()(DogContainer)

