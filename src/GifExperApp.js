import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid"

export const GifExperApp = ({ prueba = "Hola soy una prueba" }) => {

    const [categories, setCategories] = useState([])
    //const cat = "Slam dunk"
         
    // const handleAdd = () => {
    //      setCategories([...categories,])
    // //     //setCategories((cats) => [...cats, cat])
    //  }

    return (
        <>
            <h1>Gif ExpertApp by <b>Reyvenus</b></h1>
            <hr />
            <AddCategory setCategories={setCategories} /> {/*le pasamosla prop al componente por el q vamos a ingresar mediante un imput la nueva categoria y nos va a ajustar el nuevo estado*/}
            <ol>
                {
                    categories.map(category => 
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>

            {/* <button onClick={handleAdd}>Agregar categories</button> no hace falta usar el boton al agregar una categoria por formulario */}

        </>
    )
}