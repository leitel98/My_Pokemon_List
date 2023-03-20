import { useState, useEffect } from 'react'
import { Container, Content, Navbar, Logo, Title, SelectWrapper } from '../styles/Home'
import Selector from '../pages/components/Selector'
import Aside from '../pages/components/Aside'
import SmartSearchBar from '../pages/components/Search'
import Pokemon from '../pages/components/Pokemon'
//a
export default function Pokemons({ pokemones }) {
  const [filter, setFilter] = useState('all')
  const [pkmn, setPkmn] = useState([])
  const [filteredPkmn, setFilteredPkmn] = useState([])

  useEffect(() => {
    const filteredPkmnData = pokemones.filter(pokemon => {
      if (filter === 'all' || pokemon.types.some(type => type.type.name === filter)) {
        return true
      } else {
        return false
      }
    })
    setFilteredPkmn(filteredPkmnData)
    setPkmn(filteredPkmnData)
  }, [pokemones, filter])
  
  const handleSearch = (term) => {
    const filteredPkmn = pkmn.filter((item) => item.name.toLowerCase().includes(term.toLowerCase()))
    setFilteredPkmn(filteredPkmn)
  }

  return (
    <Container>
      <Navbar>
        <Logo />
        <Title data-testid='titulo'>My Pokemon List</Title>
        <SmartSearchBar handleSearch={handleSearch} />
        <SelectWrapper>
          <Selector setFilter={setFilter} />
        </SelectWrapper>
      </Navbar>
      <Aside />
      <Content>
        {filteredPkmn.map((pk) => (
          <Pokemon pokemon={pk} key={pk.name} />
        ))}
      </Content>
    </Container>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()
  const pkmnData = await Promise.all(
    data.results.map(async (pokemon) => {
      try {
        const response = await fetch(pokemon.url)
        const data = await response.json()
        return { ...data, url: pokemon.url }
      } catch (error) {
        console.error(`Error fetching data for ${pokemon.name}: ${error}`)
        return null
      }
    })
  )
  return { props: { pokemones: pkmnData.filter(Boolean) } }
}
