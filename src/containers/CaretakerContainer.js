import React from 'react'
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import {fetchCaretakers} from '../actions/fetchCaretakers'
import Caretakerlist from '../components/Caretakerlist'
import Caretakerinput from '../components/Caretakerinput'
import Caretaker from '../components/Caretaker'
import NavBar from '../components/NavBar'
import HomePage from '../components/HomePage'









class CaretakerContainer extends React.Component {
    componentDidMount(){
        this.props.fetchCaretakers()
    }
    
    render() {
       
        return (
            <div>
                <NavBar />
                <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path='/caretakers/new' component={Caretakerinput}/>
                <Route path='/caretakers/:id' render={(routerProps)=> <Caretaker {...routerProps} caretakers={this.props.caretakers}/> } />
                <Route path='/caretakers' render={(routerProps) => <Caretakerlist {...routerProps} caretakers={this.props.caretakers}/>}/>
                </Switch>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      caretakers: state.caretakers.caretakers
    };
  };
 
export default connect(mapStateToProps, {fetchCaretakers})(CaretakerContainer)