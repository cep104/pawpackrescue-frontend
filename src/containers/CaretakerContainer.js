import React from 'react'
import { connect } from 'react-redux';
import {fetchCaretakers} from '../actions/fetchCaretakers'
import Caretakerlist from '../components/Caretakerlist'
import Caretakerinput from '../components/Caretakerinput'


class CaretakerContainer extends React.Component {
    componentDidMount(){
        this.props.fetchCaretakers()
    }
    render() {
        return (
            <div>
                <Caretakerinput/>
                <Caretakerlist/>
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