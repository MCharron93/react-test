import React, {Component} from 'react'
import Card from './Card'

class Cards extends Component {
    state = {
        cards: [
            {title: "New Blog Post",
            description: "I have a very cute dog. I love to play ball with him"},
            {title: "A Change in Plans",
            description: "I recently was planning on going to the store, but plans have now changed due to a new game launching tonight. Playing that instead!"},
            {title: "I Have a Book Club",
            description: "New book club opening up this weekend! I hope everyone gets to join and read with us"},
            {title: "Haven't Been Around for a While",
            description: "I've been off the platform for a while now. I hope everyone is doing well. Been busy learning new code and stuff."},
          ]
    };
    render(){
        return(
            <React.Fragment>
                {this.state.cards.map((card, index) => {
                    <Card key={card.index} title={card.title} description={card.description} />
                })}
            </React.Fragment>
        )
    }
}

export default Cards;