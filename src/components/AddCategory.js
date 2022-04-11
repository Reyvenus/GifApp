import React, { useState } from 'react'
import PropsTypes from "prop-types"

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState("")
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length > 2){ //hacemos esta validacion para no hacer imputs de busquedas menores a 3 caracteres
            setCategories((cat) => [inputValue]) //aqui es donde puedo decir si voy acumulando categorias o no
            setInputValue("")
        }
    }

    return (
        <form onSubmit={handleSubmit}> 
            <h2>Agregar Categorias</h2>
            <input
                type="text"
                value={(inputValue)} //valor actual en el input, funcion q manejara los estados
                onChange={handleInputChange} //funcion q capturara los cambios en el input
            >
            </input>
            <button onClick={handleSubmit}>Buscar</button>
            
        </form>
    )
}

AddCategory.propstypes = {
    setCategories: PropsTypes.func.isRequired
}
