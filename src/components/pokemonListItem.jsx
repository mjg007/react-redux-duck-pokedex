import { useEffect, useState } from 'react'
import axios from 'axios'

const PokemonListItem = ({ pokemon }) => {
    const [pokemonData, setPokemonData] = useState({})

    useEffect( async () => {
         const response = await axios.get(pokemon.url)
         setPokemonData(response.data)
    }, [])


    return (
        pokemon ?
        <div className="pokemon-item-box">
            <img src={pokemonData?.sprites?.front_default} />
            <p>{pokemon.name}</p>
        </div>
        :
        null
    )
}

export default PokemonListItem