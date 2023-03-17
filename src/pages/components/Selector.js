import styled from 'styled-components'
import React from 'react'

export const Select = styled.select`
  font-size: 16px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  background-color: white;
  color: black;
  margin-left: 10px;
`;

const Selector = ({setFilter}) => {
  return (
    <Select onChange={(e) => setFilter(e.target.value)}>
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
    </Select>
  )
}

export default Selector