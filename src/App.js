import React, { useState } from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'

export default function App () {
  const [items, setItems] = useState([])
  function handleAddItems(item) {
    setItems((items) => [...items,item])
  }
  function handleDeleteItems(id){
    setItems(items=>items.filter(item => item.id !== id))
  } 

  function handleClickCheckbox(id){
    setItems((items) => items.map((item)=>
    item.id === id ? {...item,packed: !item.packed}: item
    ))
  }
  function handleClear(){
    const confirmed = window.confirm('do you realy want to clear the list')
    if(confirmed) setItems([])
  }
  return (
    <div>
      <Logo />
      <Form onAddItem = {handleAddItems}/>
      <PackingList itemList = {items} onDeleteItem = {handleDeleteItems} onCheckbox = {handleClickCheckbox} clearList = {handleClear}/>
      <Stats itemList ={items}/>
    </div>
  )
}









