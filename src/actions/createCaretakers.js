export const createCaretakers = (data) => {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/caretakers')
    .then(res => res.json())
    .then(caretakers => dispatch({
        type:'FETCH_CARETAKERS',
        payload: caretakers
    }))
}
}