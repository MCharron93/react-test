import React, {Component} from 'react'
import Card from './Card'

class Cards extends Component {
  // NOTE dummie data that will be used by the Card component when it is rendered. The Card returns the formatting for the data, and the .map() iterates over the given array of cards
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
                {/* NOTE This is where custome JSX components can be loaded in. They can have different classes and effects layered on top of them to become more dynamic.*/}
                {/* NOTE In this case, one could use .map() to iterate over an array of Objs to render multiple cards  */}
                {this.state.cards.map(card => {
                    return(
                        <Card key={card.index} title={card.title} description={card.description} />
                    )
                })}
            </React.Fragment>
        )
    }
}

export default Cards;