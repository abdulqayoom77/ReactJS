import React from 'react'
import Item from './Item'

const FoodItems = ({items}) => {
  return (
    <ul  >
        {items.map((item) => (
            <Item key={item} item={item} />
        ))}
    </ul>
  )
}

export default FoodItems