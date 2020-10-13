import React from 'react';
import { connect } from 'react-redux'
import { createDog } from '../actions/createDog'

class DogInput extends React.Component {
    
    state = {
        name:'',
        age:'' ,
        gender:'Male',
        breed:'',
        house_trained: false,
        good_with:'',
        size:'Small',
        bio: '',
        medication:'',
        img_src: ''
    }

    handleChange = (event) => {
        let updatedValue = event.target.value
        if (updatedValue === "true" || updatedValue == "false") {
            updatedValue = JSON.parse(updatedValue);
        } 
        this.setState({
            
            [event.target.name]: updatedValue

        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createDog(this.state, this.props.caretaker.id)
        
        this.setState({
            name:'',
            age:'' ,
            gender:'Male',
            breed:'',
            house_trained: false,
            good_with:'',
            size:'Small',
            bio: '',
            medication:'',
            img_src: ''
        })
      }
    
    render() {
        return(
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <h3>ADD A NEW DOG!</h3>
                    <label>Name: </label>
                    <input type='text' placeholder = 'Name' name='name' value={this.state.name} onChange={this.handleChange} /><br/>
                    <label>Age: </label>
                    <input type='text' placeholder = 'Age' name='age' value={this.state.age} onChange={this.handleChange}/><br/>
                    <label>Gender: </label>
                    <select name='gender' value={this.state.gender} onChange={this.handleChange}><option>Male</option><option>Female</option></select><br/>
                    <label>Breed: </label>
                    <input type='text' placeholder = 'Breed' name='breed' value={this.state.breed} onChange={this.handleChange}/><br/>
                    <label>Good With: </label>
                    <input type='text' placeholder = 'People, Dogs, Cats ect..' name='good_with' value={this.state.good_with} onChange={this.handleChange}/><br/>
                    <label>Size: </label>
                    <select name='size' value={this.state.size} onChange={this.handleChange}><option>Small</option><option>Medium</option><option>Large</option></select><br/>
                    <label>Potty Trained: </label>
                    <select name='house_trained' value={this.state.house_trained} onChange={this.handleChange}><option value={true}>Yes</option>
                    <option value={false}>No</option></select><br/>
                    <label>Medication: </label>
                    <input type='text' placeholder = 'Medication for Dog' name='medication' value={this.state.medication} onChange={this.handleChange}/><br/>
                    <label>Bio:</label>
                    <textarea placeholder = 'Description of Dog' name='bio' value={this.bio} onChange={this.handleChange}></textarea><br/>
                    <label for="img_src">Image: </label><br></br>
                    <input type='text' placeholder = 'Enter URL' name='img_src' value={this.state.img_src} onChange={this.handleChange}/><br/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}
export default connect(null, {createDog})(DogInput)