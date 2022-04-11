import React from 'react'

export const GifGridItem = (card) => {
    
    return (
        <div className='card'>
            <h3>{card.title}</h3>
            <img src={card.img} alt={card.title}/>
        </div>
    )
}
