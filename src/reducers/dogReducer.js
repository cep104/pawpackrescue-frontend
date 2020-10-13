export default function dogReducer(state = [], action) {
    switch (action.type) {
      case "FETCH_DOGS":
        return action.payload
      case "CREATE_DOG":
        return [...state, action.payload]
      case "DELETE_DOG":
        return state.filter(dog => dog.id !== action.payload)
      default:
        return state;
    }
  }