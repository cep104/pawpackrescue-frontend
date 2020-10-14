import React from 'react'
import { connect } from 'react-redux';
import DogInput from '../components/DogInput'
import Dogs from '../components/Dogs'
class DogContainer extends React.Component {
  
   render(){
       console.log('caretaker', this.props.caretaker)
       return(
           <div id='dogs'>
               <Dogs dogs={this.props.dogs} careTakerId={this.props.caretaker.id}/>
               <DogInput caretaker={this.props.caretaker} />
           </div>
       )
   } 
}
const mapStateToProps = state => {
    return { dogs: state.dogs }
}
export default connect(mapStateToProps)(DogContainer)