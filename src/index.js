import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Components/Game';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'; // Importer le Provider de react-redux
import { store } from './store/store'; // Importer le store Redux

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);

// Si vous souhaitez que votre application fonctionne hors ligne et se charge plus rapidement, vous pouvez changer
// unregister() en register() ci-dessous. Notez que cela comporte certains risques.
// En savoir plus sur les travailleurs de service: https://bit.ly/CRA-PWA
serviceWorker.unregister();
