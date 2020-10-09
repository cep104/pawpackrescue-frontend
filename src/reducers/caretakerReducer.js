export default function caretakerReducer(state = {caretakers: []}, action){
    
    switch(action.type){
        case 'FETCH_CARETAKERS':
            return { caretakers: action.payload }
        case 'ADD_CARETAKER':
            return {...state, caretakers:[...state.caretakers, action.payload]}
        default: 
            return state
    }
    
    
     
    
}