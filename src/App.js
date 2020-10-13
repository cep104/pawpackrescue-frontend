import React from 'react';
import CaretakerContainer from './containers/CaretakerContainer'
import AllDogsContainer from './containers/AllDogsContainer';




class App extends React.Component {

  render(){
  return (
    <div className="App">
      
     < CaretakerContainer/>
     < AllDogsContainer />
    </div>
  );}
}

export default App;

