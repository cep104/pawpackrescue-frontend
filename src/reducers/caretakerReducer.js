export default function caretakerReducer(state = [], action){
    // debugger
    switch(action.type){
        case 'FETCH_CARETAKERS':
            return action.payload
        case 'ADD_CARETAKER':
            return [...state, action.payload]
        case 'EDIT_CARETAKER':
                let caretakerUpdate = state.map(caretaker => {
                    if (caretaker.id === action.payload.id) {
                            return action.payload
                    } else {
                            return caretaker
                    }
                })
                return caretakerUpdate
        default: 
            return state
    } 
}