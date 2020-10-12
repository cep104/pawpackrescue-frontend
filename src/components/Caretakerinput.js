import React from 'react'
import {Redirect} from 'react-dom'
import {connect} from 'react-redux'
import {createCaretakers} from '../actions/createCaretakers'

class Caretakerinput extends React.Component {
    state = {
        name:'',
        location:'',
        setting:'' 
    }

    handleChange = (event) => {
        
       this.setState({
           [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createCaretakers(this.state)
        this.props.history.push('/caretakers');
        this.setState({
            name:'',
        location:'',
        setting:'' 
          })

    }
 
    render(){
        return(
            <div id='careform'>
                <h1>JOIN US!</h1>
                <img src='/images/dogcare.jpg'/>
                
                <form onSubmit={this.handleSubmit}>
                    <h3>FOSTER FORM:</h3>
                    <label>Name: </label>
                    <input type='text' placeholder = 'Name' name='name' value={this.state.name} onChange={this.handleChange}/><br/><br/>
                    <label>Location: </label>
                    <input type='text' placeholder = 'Location' name='location' value={this.state.location} onChange={this.handleChange}/><br/><br/>
                    <label >Type: </label>
                    <input type='text' placeholder = 'Type' name='setting' value={this.state.setting} onChange={this.handleChange}/><br/><br/>
                    <input type='submit' />
                </form>
            </div>
     )
 }
}
export default connect(null,{createCaretakers})(Caretakerinput)