import React from 'react'

export const ItemListContainer = (props) => {

    const {titulo, imagen} = props
    return (
        <section id="homeContent">
            <h1>{titulo}</h1>
            <img src={imagen}></img>           
        </section>
    )
}
