import React from 'react';
import './Card.css'
import Button from '../ButtonComponent/Button'

// NOTE similar to vue, we pass in the props of objs to the "class", in this case in the form of an obj with the properties/keys of title & description
function Card({title, description}){

    return(
        // NOTE since these are both properties, they will be injected into the JSX when the acutal .map() fires within the app rendering.
        <div>
            <div className="card-container">
                <div className="heading">
                    <h1 className="heading-one">{title}</h1>
                    <Button />
                </div>
                <p className="description">{description}</p>
                <br/>
                <a href="https://form.asana.com/?k=qxP8ysQvIY6l5IDI4h9LUg&d=1195144362945755" target="_blank" rel="noreferrer">Click me to make an IT Ticket via Asana</a>
            </div>
        </div>
    )
}

export default Card;