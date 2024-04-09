import React from 'react';
import { useSelector } from 'react-redux'; // Importer le hook useSelector pour lire l'état global
import PlayerCard from './PlayerCard';

function PlayerList() {
    // Utiliser le hook useSelector pour accéder à l'état global
    const players = useSelector(state => state.fight.players);

    const displayPlayers = () => {
        return players.map((player, index) => (
            <PlayerCard key={player.id} player={player}/>
        ));
    };

    return (
        <div className='d-flex justify-content-center align-items-center'>
            {displayPlayers()}
        </div>
    );
}

export default PlayerList;
