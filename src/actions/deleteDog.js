export const deleteDog = (dogId, caretakerId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/caretakers/${caretakerId}/dogs/${dogId}`,{
            method:'DELETE'
        })
        .then(response => response.json())
        .then(dog => dispatch({type: 'DELETE_DOG', payload: dog}))
        
            
    }
}
