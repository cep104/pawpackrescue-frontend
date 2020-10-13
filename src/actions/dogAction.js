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

export const deleteDog = (dogId, caretakerId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/caretakers/${caretakerId}/dogs/${dogId}`,{
            method:'DELETE'
        })
        .then(response => response.json())
        .then(dog => dispatch({type: 'DELETE_DOG', payload: dog}))
        
            
    }
}

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
            .then(dog => {
                if (dog.error){
                  alert('all fields must be filled out')
                }else{dispatch({type: 'CREATE_DOG', payload: dog})
              }
            }
            )
            }
          }