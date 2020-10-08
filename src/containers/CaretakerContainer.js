import React from 'react'
import {connect} from 'react-redux'
import {fetchCaretakers} from '../actions/fetchCaretakers'
import Caretakerlist from '../components/Caretakerlist'
import Caretakerinput from '../components/Caretakerinput'


class CareTakerContainer extends React.Component {
    componentDidMount(){
        fetchCaretakers()
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
const mapStatetoProps = state => {
    return {
        caretakers: state.caretakers
    }
}
export default connect(mapStatetoProps)(CareTakerContainer)