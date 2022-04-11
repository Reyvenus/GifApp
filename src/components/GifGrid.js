import React ,{/*useState, useEffect*/} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs' //custom hook
import { GifGridItem } from './GifGridItem'
// import {getInfo} from "../helpers/getGifsApi"

export const GifGrid = ({ category }) => {

    const {data, loading} = useFetchGifs(category) //destructuramos lo q nos retorna la funcion
   
    // const [image, setImage] = useState([])

    // useEffect(() =>{
    //     getInfo(category)    //aqui se lanza la peticion para obtener los gifs y los coloca en "image"
    //         .then(setImage)
    //       //.then(resp => setImage(resp))// otra forma de manejar a respuesta
    // }, [category])
        
    return (
        <>
            <h2>{category}</h2>

            {loading && "Cragando..."}
            <div className='card-grid'>
                {
                    data.map(card => (
                        <GifGridItem
                            key={card.id}
                            {...card}
                        />
                    ))
                }
            </div>
        </>
    )
}
