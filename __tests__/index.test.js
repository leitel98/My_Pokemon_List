import { render, screen, waitFor } from '@testing-library/react'
import  Index, {Pokemon, Pokemons, getStaticProps} from '../src/pages/index'

describe('Index', ()=> {
  describe('Pokemon', () => {
    test('should render the name of the pokemon and an image', () => {
      const pokemon = {
        name: 'pikachu',
        url: 'https://pokeapi.co/api/v2/pokemon/25/',
      }
      const im = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
      render(<Pokemon pokemon={pokemon} im={im} />)
      expect(screen.getByText('pikachu')).toBeInTheDocument()
      expect(screen.getByAltText('none')).toBeInTheDocument()
      expect(screen.getByAltText('none')).toHaveAttribute('src', "/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2FPokeAPI%2Fsprites%2Fmaster%2Fsprites%2Fpokemon%2F25.png&w=256&q=75")
    })
  })
  
  describe('Pokemons', () => {
    it('renders pokemon list', async () => {

      const mockPokemon = {
        name: 'pikachu',
        url: 'https://pokeapi.com/pokemones/25',
      };
      
      const mockImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
      global.fetch = jest.fn()
        .mockImplementation(url => {
          return new Promise(resolve => {
            resolve({
              json: () =>Promise.resolve({
                sprites: {
                  front_default: mockImage
                }
              })
            })
          })
        })

      render(<Index pokemones={[mockPokemon]} />);
  
      const title = screen.getByTestId('titulo');
      expect(title).toBeInTheDocument();
  
      const pokemonLink = await waitFor(() => screen.getByText('pikachu'));
      expect(pokemonLink).toBeInTheDocument();
  
      const pokemonImage = screen.getByAltText('none');
      expect(pokemonImage).toBeInTheDocument();
      expect(pokemonImage).toHaveAttribute('src', "/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2FPokeAPI%2Fsprites%2Fmaster%2Fsprites%2Fpokemon%2F25.png&w=256&q=75");
    });
  });

  describe ('getStaticProps', () =>{
    it('return pokemons', async () => {
      global.fetch = jest.fn()
      .mockImplementation(url => {
        return new Promise(resolve => {
          resolve({
            json: () => Promise.resolve({
              results: 'Pokemon List'
            })
          })
        })
      })
    const {props} = await getStaticProps()
    expect(props.pokemones).toBe('Pokemon List')
    })
  })
})
