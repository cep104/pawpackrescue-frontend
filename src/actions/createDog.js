export const createDog = (dog, caretakerId) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/caretakers/${caretakerId}/dogs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        
            body: JSON.stringify(dog)

            })
            .then(response => response.json())
            .then(dog => dispatch({type:'CREATE_DOG', payload: dog}) )
        }
    }
