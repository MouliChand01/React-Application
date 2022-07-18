
import './App.css';
import Button from './components/Button';
import UseeffictHooK from './components/UseeffictHook';
import Uselayout from './components/UselayoutHook';
import UsememoHook from './components/Usememo';
import Usereducerhook from './components/Usereducer';
import UserefHook from './components/UserefHook';
import Usestatehook from './components/Usestatehook';

function App() {
  return (
    <div className="App">
    <h1 className="appHead">React-Hooks Application</h1>
    <hr/>
    <Usestatehook/>
    <hr/>
    <Usereducerhook/>
    <hr/>
    <UseeffictHooK/>
    <hr/>
    <UserefHook/>
    <hr/>
    <Uselayout/>
    <hr/>
    <UsememoHook/>
    <hr/>
    <Button/>
    </div>
  );
}

export default App;
