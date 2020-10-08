export function fetchCaretakers() {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/caretakers')
    .then(res => res.json())
    .then(caretakers_data => dispatch({
        type:'FETCH_CARETAKERS',
        payload: caretakers_data
    }))
}
}

// instead of connect automaticly dispatching an action we 
// use thunk to we are aloud to pass in dispatch as an argument.
// we then want to dispatch an action to our reducer which is responsible to updating state based on the action that comes in through dispatch
