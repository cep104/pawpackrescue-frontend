import React from 'react';
import {connect} from 'react-redux'
import {fetchCaretakers} from './actions/fetchCaretakers'


class App extends React.Component {

  componentDidMount(){
    this.props.fetchCaretakers({type:'FETCH_CARETAKERS', payload: {name:'Sarah Hyde'}})

  }
  
  

  render(){
  return (
    <div className="App">
     App 
    </div>
  );}
}
// const mapStateToProps = (state) => {
//   return {
//     caretakers: state.caretakers
//   }
// }
export default connect(null,{fetchCaretakers})(App);

