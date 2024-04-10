
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';

const App = () => {

  return (
    <div className="App">
        <div>
          <Monster />
          <br></br>
          <section className="container-fluid">
            <PlayerList/>
            
          </section>
        </div>
    </div>
  );
}

export default App;
