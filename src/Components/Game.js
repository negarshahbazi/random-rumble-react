
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import { useSelector } from 'react-redux';

const App = () => {

  const gameOver = useSelector(state => state.fight.gameOver);
  const victory = useSelector(state => state.fight.victory);

  return (
    <div className="App">
      {gameOver ? (
        <div>
          {victory ? (
            <h1 className='text-white'>Victoire !</h1>
          ) : (
            <h1 className='text-white'>Défaite !</h1>
          )}
        </div>
      ) : (
        <div>
          <Monster />
          <br></br>
          <section className="container-fluid">
            <PlayerList/>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
