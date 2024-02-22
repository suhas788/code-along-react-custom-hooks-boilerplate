import { useState } from 'react'
import './App.css'
import useStorage from './useStorage'

function App() {
  const [inputValue,setInputValue]=useState('')
  const [storageValue,setStorageValue]=useStorage(inputValue)
  const passInputValue=(e)=>{
    setInputValue(e.target.value)
    setStorageValue(e.target.value)
  }
  return (
    <>
    <input type="text"defaultValue={sessionStorage.getItem('InputValue')} onChange={passInputValue}/>
    </>
  )
}

export default App