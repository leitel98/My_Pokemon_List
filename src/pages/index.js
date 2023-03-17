import Link from 'next/link'
import Image from 'next/image'
import { Title, Navbar, SelectWrapper, ListItem, Container, Content, Logo} from '../styles/Home'
import Selector from '../pages/components/Selector'
import Aside from '../pages/components/Aside'
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
    <Container>
      <Navbar>
        <Logo />
        <Title data-testid='titulo'>My Pokemon List</Title>
        <SelectWrapper>
        <Selector setFilter={setFilter} />
        </SelectWrapper>
      </Navbar>
      <Aside />
        <Content>
            {ims.map((im, index) => <Pokemon im={im} pokemon={pkmn[index]} key={pkmn[index].name} />)}
        </Content>
    </Container>      
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
