import { useState, useEffect } from 'react'

import { getInfo } from "../helpers/getGifsApi"

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getInfo(category) //promesa
            .then(cards => { //aqui manejamos la respuesta
                setTimeout(() => {
                    setState({
                        data: cards,
                        loading: false
                    })
                }, 3000);
            })
    }, [category])

    return state
}
