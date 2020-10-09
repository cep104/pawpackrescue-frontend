import React from 'react'

class Caretakerinput extends React.Component {
    state = {
        name:'',
        location:'',
        setting:'' 
    }
 
    render(){
        return(
            <div>
                <form>
                    <label>Name: </label>
                    <input type='text' placeholder = 'Name' value={this.state.name}/><br/>
                    <label>Location: </label>
                    <input type='text' placeholder = 'Location'value={this.state.location}/><br/>
                    <label >Type: </label>
                    <input type='text' placeholder = 'Type' value={this.state.setting}/><br/>
                </form>
            </div>
     )
 }
}
export default Caretakerinput