export function fetchDogs() {
    return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/dogs`)
    .then(res => res.json())
    .then(dogs => dispatch({
        type:'FETCH_DOGS',
        payload: dogs
    }))
}
}