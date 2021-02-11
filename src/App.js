import './App.css';
// NOTE import the components to be plugged in, similar to Vue when loading in a component to the page/vue
// import Card from './Components/Cards/Card'
import Cards from './Components/Cards/Cards';

function App() {

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
        <Cards/>
      </div>
    </div>
  );
}

export default App;
