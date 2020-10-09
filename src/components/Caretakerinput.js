import React from 'react'
import {connect} from 'react-redux'
import {createCaretakers} from '../actions/createCaretakers'

class Caretakerinput extends React.Component {
    state = {
        name:'',
        location:'',
        setting:'' 
    }

    handleChange = (event) => {
        console.log(event.target.value)
       this.setState({
           [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createCaretakers(this.state)
        this.setState({
            name:'',
        location:'',
        setting:'' 
          })

    }
 
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input type='text' placeholder = 'Name' name='name' value={this.state.name} onChange={this.handleChange}/><br/>
                    <label>Location: </label>
                    <input type='text' placeholder = 'Location' name='location' value={this.state.location} onChange={this.handleChange}/><br/>
                    <label >Type: </label>
                    <input type='text' placeholder = 'Type' name='setting' value={this.state.setting} onChange={this.handleChange}/><br/>
                    <input type='submit' />
                </form>
            </div>
     )
 }
}
export default connect(null,{createCaretakers})(Caretakerinput)