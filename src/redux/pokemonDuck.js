import axios from 'axios'

// CONSTANTS
const initialData = {
    pokemons: [],
    nextPosition: 21,
}


// TYPES
const GET_POKEMONS = 'GET_POKEMONS'


// REDUCERS
export default function pokemonReducer(state = initialData, action){
    switch(action.type){
        case GET_POKEMONS:
            return {
                ...state,
                pokemons : action.values,
                nextPosition: state.nextPosition + 21
            }
        default:
            return state
    }
}


// ACTIONS
export const getInitialData = () => async (dispatch, getState) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${getState().pokemons.nextPosition}&offset=0`)
    dispatch({
        type: GET_POKEMONS,
        values: response.data.results
    })
}