import React from 'react'
import {connect} from 'react-redux'
import {editCaretaker} from '../actions/editCaretaker'

class CaretakerEdit extends React.Component {
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
        let caretaker = {...this.state, id: this.props.caretaker.id}
        this.props.editCaretaker(caretaker)
        this.setState({
            name:'',
        location:'',
        setting:'' 
          })

    }
 
    render(){
        return(
            <div>
                <h3>Edit Foster Form:</h3>
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
export default connect(null,{editCaretaker})(CaretakerEdit)