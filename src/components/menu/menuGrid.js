import React from 'react'
import MenuItem from './menuItem'


const ItemGrid = ({items, isLoading}) => {
  return isLoading ? (
  <h1>Loading...</h1>
  ) : (
  <section className='cards'>
    {items.map((item) => (
     <MenuItem key={item.itemName} item={item}></MenuItem>
    ))}
  </section>
  )
}

export default ItemGrid
