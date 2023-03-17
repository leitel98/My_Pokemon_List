import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ListItem } from '../../styles/Home'

const Pokemon = ({ pokemon, im }) => {
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

export default Pokemon