import React from 'react';
import { useDispatch } from 'react-redux'; // Importer le hook useDispatch pour envoyer des actions à Redux
import { hitMonster, hitBack } from '../features/fight/fightSlice'; // Importer l'action hitMonster
import { healPlayer } from '../features/fight/fightSlice';
import { restoreMana } from '../features/fight/fightSlice';
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHeartCircleMinus } from "react-icons/fa6";
import { FaHeartPulse } from "react-icons/fa6";


function ButtonCapacity({ player, strength, type }) {
    const dispatch = useDispatch(); // Initialiser le hook useDispatch

    const combat = () => {
        console.log(player);
        if (type === "heal") {
            dispatch(healPlayer({ playerId: player.id, healAmount: 20, manaCost: 10 }));
        } else if (type === "restoreMana") {
            dispatch(restoreMana({ playerId: player.id, manaAmount: 20, hpCost: 10 }));
        } else {
            dispatch(hitMonster({ strength: strength, playerId: player.id }));
            dispatch(hitBack({ playerId: player.id - 1, damage: 10 }));
        }
    };

    return (
        <div class="col-3 ">
        <button
            type="button"
            onClick={combat}
            className={`btn btn-light  rounded-pill shadow-lg material-tooltip-main ${player.played ? 'disabled' : ''}`}
            disabled={player.played}

        >

            {type === "heal" && <><FaHeartCirclePlus style={{ color: 'red', fontSize: '1.6rem' }} /> Soigner</>}
            {type === "restoreMana" && <><FaHeartCircleMinus style={{ color: 'blue', fontSize: '1.6rem' }} /> Restaurer</>}
            {type === "attack" && <><FaHeartPulse style={{ color: 'green', fontSize: '1.6rem' }}/>Capacité({strength})</>}
        </button>
        </div>
    );

}

export default ButtonCapacity;
