import Link from 'next/link'
import Image from 'next/image'
import { Title, Navbar, ListItem, Center, Container, Content, Logo} from '../styles/Home'
import { useState, useEffect } from 'react'

export const Pokemon = ({ pokemon, im }) => {
  if (!pokemon) {
    return null
  }
  const id = pokemon?.url?.split('/')?.filter(x=>x)?.pop()

  return ( //defino la ruta abajo, ojo nombre carpeta
    <ListItem>
      <Image style={{paddingRight: '30px'}} alt='none' src = {im} width = {80} height = {80}/>
      <Link href={`/pokemons/${id}`}>{pokemon.name}</Link>
    </ListItem>
  )
}

export default function Pokemons({ pokemones }) {
  const [ims, setIms] = useState([]);
  const [filter, setFilter] = useState('all')
  const [pkmn, setPkmn] = useState([])

  useEffect(() => {
    async function fetchData() {
      const filteredPkmn = []
      const imageUrls = await Promise.all(pokemones.map(async (pokemon) => {
        const response = await fetch(pokemon.url).catch((error) => {
          console.error(`Error fetching data for ${pokemon.name}: ${error}`);
        });
        const data = await response.json();
        if (filter !== 'all') {
          if (data.types.some(type => type.type.name === filter)) {
            filteredPkmn.push({...data, url: pokemon.url})
            return data.sprites?.front_default ?? null
          }
          return null
        }
        filteredPkmn.push({...data, url: pokemon.url})
        return data.sprites?.front_default ?? null;
      }));
      filteredPkmn.sort((a, b) => a.order - b.order)
      setPkmn(filteredPkmn)
      setIms(imageUrls.filter(url => url !== null));
    }
    fetchData();
  }, [filter, pokemones]);
  return (
    <><Navbar>
        <Title data-testid='titulo'>My Pokemon List</Title>
        <Logo />
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="bug">Bug</option>
          <option value="dragon">Dragon</option>
          <option value="electric">Electric</option>
          <option value="fairy">Fairy</option>
          <option value="fighting">Fighting</option>
          <option value="fire">Fire</option>
          <option value="ghost">Ghost</option>
          <option value="grass">Grass</option>
          <option value="ground">Ground</option>
          <option value="ice">Ice</option>
          <option value="normal">Normal</option>
          <option value="poison">Poison</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="steel">Steel</option>
          <option value="water">Water</option>
        </select>
      </Navbar>
      <Container>
        <Content>
          <Center>
            {ims.map((im, index) => <Pokemon im={im} pokemon={pkmn[index]} key={pkmn[index].name} />)}
          </Center>
        </Content>
      </Container>      
    </>
  )
}


export const getStaticProps = async () => {
  //contenido estatico, devuelve siempre un listado de pokemones
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()

  return {
    props: { pokemones: data.results }
  }
}
