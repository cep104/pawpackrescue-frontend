export default function caretakerReducer(state = {caretakers: []}, action){
    // debugger
    switch(action.type){
      
        case 'FETCH_CARETAKERS':
            return { caretakers: action.payload }
        case 'ADD_CARETAKER':
            return {...state, caretakers:[...state.caretakers, action.payload]}
        case 'CREATE_DOG':
                let caretakers = state.caretakers.map(caretaker => {
                    
                  if (caretaker.id === action.payload.id) {
                      
                    return action.payload
                  } else {
                    return caretaker
                  }
                })
                return {...state, caretakers: caretakers}
        default: 
            return state
    } 
}