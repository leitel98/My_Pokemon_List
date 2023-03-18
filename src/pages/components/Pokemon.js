import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ListItem } from '../../styles/Home'

const Pokemon = ({ pokemon }) => {
  if (!pokemon) {
    return null
  }
  const id = pokemon?.url?.split('/')?.filter(x=>x)?.pop()

  return ( //defino la ruta abajo, ojo nombre carpeta
  <ListItem>
    <Image 
      style={{
        marginRight: '30px',
        marginTop: "5px",
        marginBottom: "5px",
        background: "linear-gradient(to bottom right, #85c1e9, white, #85c1e9)",
        border: "1px solid #000005",
        borderRadius: "8px"
      }} 
      alt='none' 
      src = {pokemon.sprites.front_default} width = {80} height = {80}
    />
  
    <Link 
      style={{
        textDecoration: "none", 
        color: "#333333",
        backgroundColor:"fdd835",
        borderRadius: "6px",
        border: "1px solid black",
        height: "40px",
        width: "100%",
        paddingLeft: "15px",
        paddingRight: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between" /* Add this line */
      }} 
      href={`/pokemons/${id}`}
    >
    <span>{pokemon.name}</span> {/* Wrap the name in a <span> */}
    <span style={{backgroundColor: "white", borderRadius:"8px", color:"#636363", padding:"4px"}}>#{pokemon.order}</span> {/* Wrap the order in a <span> */}
  </Link>
</ListItem>

  )
}

export default Pokemon