import { Provider } from 'react-redux'
import generateStore from './redux/store'

import PokemonList from './components/pokemonList'

function App() {
  const store = generateStore()

  return (
    <Provider store={store}>
      <h3>POKEDEX</h3>
      <PokemonList />
    </Provider>
  );
}

export default App;
