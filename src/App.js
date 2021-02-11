import './App.css';
// NOTE import the components to be plugged in, similar to Vue when loading in a component to the page/vue
import Card from './Components/Cards/Card'

function App() {

  // NOTE dummie data that will be used by the Card component when it is rendered. The Card returns the formatting for the data, and the .map() iterates over the given array of cards
  const cards = [
    {title: "New Blog Post",
    description: "I have a very cute dog. I love to play ball with him"},
    {title: "A Change in Plans",
    description: "I recently was planning on going to the store, but plans have now changed due to a new game launching tonight. Playing that instead!"},
    {title: "I Have a Book Club",
    description: "New book club opening up this weekend! I hope everyone gets to join and read with us"},
    {title: "Haven't Been Around for a While",
    description: "I've been off the platform for a while now. I hope everyone is doing well. Been busy learning new code and stuff."},
  ]

return (
    <div className="App">
      {/* NOTE App is similar to root or App in Vue */}
      <header className="App-header">
        <p>
          This is the header
        </p>
      </header>
        {/* NOTE custom styles can be inserted before the JSX element to controll for more customization with CSS */}
      <div className="main">
        {/* NOTE This is where custome JSX components can be loaded in. They can have different classes and effects layered on top of them to become more dynamic.*/}
        {/* NOTE In this case, one could use .map() to iterate over an array of Objs to render multiple cards  */}
        {cards.map((card, index) => {
          return(
            <Card 
            key={index}
            title={card.title}
            description={card.description}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
