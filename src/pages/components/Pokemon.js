import React from 'react'
import { ListItem, ScreenIcon, PokeLink } from '../../styles/Home'

const Pokemon = ({ pokemon }) => {
  if (!pokemon) {
    return null
  }
  const id = pokemon?.url?.split('/')?.filter(x=>x)?.pop()

  return ( //defino la ruta abajo, ojo nombre carpeta
  <ListItem>
    <ScreenIcon src={pokemon.sprites.front_default} alt="none" width={80} height={80} />
    <PokeLink href={`/pokemons/${id}`}>
      <span>{pokemon.name}</span>
      <span>#{pokemon.order}</span>
    </PokeLink>
</ListItem>
  )
}

export default Pokemon