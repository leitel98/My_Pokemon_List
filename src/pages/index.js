import Link from 'next/link'
import Image from 'next/image'
import { Title, Navbar, ListItem, Center, Container, Content, Logo} from '../styles/Home'
import { useState, useEffect } from 'react'

const Pokemon = ({ pokemon, im }) => {
  const id = pokemon.url.split('/').filter(x=>x).pop()
  console.log(pokemon)
  console.log(im)

  return ( //defino la ruta abajo, ojo nombre carpeta
    <ListItem>
      <Image alt='none' src = {im} width = {80} height = {80}/>
      <Link href={`/pokemons/${id}`}>{pokemon.name}</Link>
    </ListItem>
  )
}

export default function Pokemons({ pokemones }) {
  const [ims, setIms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const imageUrls = [];
      for (const pokemon of pokemones) {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        if (data.sprites.front_default) {
          imageUrls.push(data.sprites.front_default);
        }
      }
      setIms(imageUrls);
    }
    fetchData();
  }, [pokemones]);

  return (
    <><Navbar>
        <Title>My Pokemon List</Title>
        <Logo />
      </Navbar>
      <Container>
        <Content>
          <Center>
            {ims.map((im, index) => <Pokemon index={pokemones[index].url.split('/').filter(x=>x).pop()-1} im={im} pokemon={pokemones[index]} key={pokemones[index].name} />)}
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
