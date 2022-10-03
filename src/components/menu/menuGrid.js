import React from 'react'
import CharacterItem from './menuItem'


const CharacterGrid = ({items, isLoading}) => {
  return isLoading ? (
  <h1>Loading...</h1>
  ) : (
  <section className='cards'>
    {items.map((item) => (
     <CharacterItem key={item.itemName} item={item}></CharacterItem>
    ))}
  </section>
  )
}

export default CharacterGrid
