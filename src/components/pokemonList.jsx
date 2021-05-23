import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Container, Row, Col, Button} from 'react-bootstrap'

import { getInitialData } from '../redux/pokemonDuck'
import PokemonListIntem from './pokemonListItem'

const PokemonList = () => {
    const dispatcher = useDispatch()
    const pokemons = useSelector(store => store.pokemons.pokemons)

    useEffect(() => {
        dispatcher(getInitialData())
    }, [])

    let pokemonItems = [];
    for (let i = 0; i < pokemons.length; i += 3) {
        pokemonItems.push(
            <>
                <Row>
                    <Col>
                        { pokemons[i] ? <PokemonListIntem pokemon={pokemons[i]} /> : null }
                    </Col>
                    <Col>
                        { pokemons[i + 1] ? <PokemonListIntem pokemon={pokemons[i + 1]} /> : null }
                    </Col>
                    <Col>
                        { pokemons[i + 2] ? <PokemonListIntem pokemon={pokemons[i + 2]} /> : null }
                    </Col>
                </Row>
            </>
        )
    }

    return (
        <>
            <Container>
                { pokemonItems }
                <Row className="center-data" >
                    <Col>
                        <Button onClick={() => dispatcher(getInitialData())}>Agregar 21 pokemons</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PokemonList