
import './App.css';
import Usereducerhook from './components/Usereducer';
import Usestatehook from './components/Usestatehook';

function App() {
  return (
    <div className="App">
    <h1 className="appHead">React-Hooks Application</h1>
    <hr/>
    <Usestatehook/>
    <Usereducerhook/>
    </div>
  );
}

export default App;
