// import logo from './logo.svg';
import './App.css';
import Dropdown from './components/Navbar/Dropdown/Dropdown';
import Slideshow from './components/Slideshow/Slideshow'
function App() {
  return (
    <div className="App">
      <Dropdown label='Dropdown' names={['content','Element']}/>
      <Slideshow/>
    </div>
  );
}

export default App;
