import React from 'react'
import MenuList from './menu-list'

const MenuItem = ({item}) => {
  // const [displyCurrentChildren, setDisplayCurrentChildren]= useState({});
  return (
    <li>
      <p>{item.label}</p>
      {
        item && item.children && item.children.length > 0 ? 
        <MenuList list={item.children} />
        : null
       }
    </li>
  )
}

export default MenuItem
