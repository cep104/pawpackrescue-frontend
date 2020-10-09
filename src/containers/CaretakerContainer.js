import React from 'react'
import { connect } from 'react-redux';
import {Route} from 'react-router-dom'
import {fetchCaretakers} from '../actions/fetchCaretakers'
import Caretakerlist from '../components/Caretakerlist'
import Caretakerinput from '../components/Caretakerinput'
import Caretaker from '../components/Caretaker'



class CaretakerContainer extends React.Component {
    componentDidMount(){
        this.props.fetchCaretakers()
    }
    render() {
        return (
            <div>
                <Route path='/caretakers/new' component={Caretakerinput}/>
                <Route path='/caretakers/:id' render={(routerProps)=> <Caretaker {...routerProps} caretakers={this.props.caretakers}/> } />
                <Route exact path='/caretakers' render={(routerProps) => <Caretakerlist {...routerProps} caretakers={this.props.caretakers}/>}/>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      caretakers: state.caretakers
    };
  };
 
export default connect(mapStateToProps, {fetchCaretakers})(CaretakerContainer)