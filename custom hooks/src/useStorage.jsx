import { useState,useEffect } from 'react'
 const useStorage=(inputValue)=> {
    const[value,setValue]=useState(inputValue)
    useEffect(()=>{
        localStorage.setItem("InputValue",value)
        sessionStorage.setItem("InputValue",value)
    },[value])

    return [value,setValue]
}

export default useStorage