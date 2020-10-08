import React from 'react';
import {connect} from 'react-redux'
import CaretakerContainer from './containers/CaretakerContainer'


class App extends React.Component {

  render(){
  return (
    <div className="App">
     < CaretakerContainer/>
    </div>
  );}
}

export default connect()(App);

