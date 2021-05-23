import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import pokemonReducer from './pokemonDuck'

const rootReducer = combineReducers({
    pokemons: pokemonReducer
})

export default function generateStore(){
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)))
    return store
}