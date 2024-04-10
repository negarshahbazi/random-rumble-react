
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import Image from '../img/logo.gif';



const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka']
      }
    });
  }, []);

  return (

    <>
      <nav class="navbar navbar-light navBackRaye shadow-lg font-loader">
        <div class="container-fluid d-flex justify-content-center align-items-center fs-1" style={{ fontFamily: 'Chilanka' }}>
          RANDOM
          <img src={Image} alt="" className='d-inline-block align-text-top logo' />
          RUMBLE
        </div>
      </nav>
      <div className="App">
        <div>
          <Monster />
          <br></br>
          <section className="container-fluid">
            <PlayerList />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
