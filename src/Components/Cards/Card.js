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

// class Cards extends Component {
//     state = {
//         cards: [
//             {title: "New Blog Post",
//             description: "I have a very cute dog. I love to play ball with him"},
//             {title: "A Change in Plans",
//             description: "I recently was planning on going to the store, but plans have now changed due to a new game launching tonight. Playing that instead!"},
//             {title: "I Have a Book Club",
//             description: "New book club opening up this weekend! I hope everyone gets to join and read with us"},
//             {title: "Haven't Been Around for a While",
//             description: "I've been off the platform for a while now. I hope everyone is doing well. Been busy learning new code and stuff."},
//           ]
//     };
//     render(){
//         return(
//             <React.Fragment>
//                 {this.state.cards.map((card, index) => {
//                     <Card key={card.index} title={card.title} description={card.description} />
//                 })}
//             </React.Fragment>
//         )
//     }
// }
