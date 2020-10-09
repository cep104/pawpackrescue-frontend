export const createCaretakers = (data) => {
    
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/caretakers',{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then( newCaretaker => dispatch({
            type:'ADD_CARETAKER',
            payload: newCaretaker
        }) )

}
}

// need to put dispatch in so you can connect it to the redux store 
// thunk is allowing us to pass the dispatch in