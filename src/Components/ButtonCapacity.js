import React from 'react';
import { useDispatch } from 'react-redux'; // Importer le hook useDispatch pour envoyer des actions à Redux
import { hitMonster, hitBack } from '../features/fight/fightSlice'; // Importer l'action hitMonster
import { healPlayer } from '../features/fight/fightSlice';
import { restoreMana } from '../features/fight/fightSlice';

function ButtonCapacity({ player,strength, type}) {
    const dispatch = useDispatch(); // Initialiser le hook useDispatch

    const combat = () => {
        if (type === "heal") {
            dispatch(healPlayer({ playerId: player.id, healAmount: 20, manaCost: 10 }));
        } else if (type === "restoreMana") {
            dispatch(restoreMana({ playerId: player.id, manaAmount: 20, hpCost: 10 }));
        } else {
            dispatch(hitMonster({ strength: strength, playerId: player.id }));
            dispatch(hitBack({ playerId: player.id - 1, damage: 5 }));
        }
     };

    return (
        <button
            type="button"
            onClick={combat}
            className={`btn btn-success material-tooltip-main ${player.played ? 'disabled' : ''}`}
            disabled={player.played}
        >
            {type === "heal" && "Soigner"}
            {type === "restoreMana" && "Restaurer Mana"}
            {type === "attack" && `Capacité ${strength}`}
        </button>
    );
    
}

export default ButtonCapacity;
