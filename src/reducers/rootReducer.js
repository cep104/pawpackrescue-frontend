import { combineReducers } from 'redux'
import dogReducer from './dogReducer'
import caretakerReducer from './caretakerReducer'

export const rootReducer = combineReducers({
    caretakers: caretakerReducer,
    dogs: dogReducer
})