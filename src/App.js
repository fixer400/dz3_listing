import './App.css';
import data from './data.json'
import Listing from './Components/Listing';

function App() {
  return (
    <div className="App">
      <Listing data = {data}/>
    </div>
  );
}

export default App;
