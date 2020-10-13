import React from 'react'
import { connect } from 'react-redux';
import DogInput from '../components/DogInput'
import Dogs from '../components/Dogs'



class DogContainer extends React.Component {
 
   render(){
       
       return(
           <div>
               <Dogs dogs={this.props.caretaker && this.props.caretaker.dogs}/>
               <DogInput caretaker={this.props.caretaker}/>
               
               
               
               
           </div>
       )
   } 
}


 
export default connect()(DogContainer)

