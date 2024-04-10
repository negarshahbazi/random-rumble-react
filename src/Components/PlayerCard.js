import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';
import './Game.css';
import { useSelector } from 'react-redux';









function PlayerCard({ player }) {
    const gameOver = useSelector(state => state.fight.gameOver);
    const victory = useSelector(state => state.fight.victory);
    const lastAttackingPlayerId = useSelector(state => state.fight.lastAttackingPlayerId);
    console.log(player);

    return (
        <div key={player.id} className="card  col-sm-6 col-lg-2">
            <h5 className="card-title">{player.name}</h5>

            {/* Utilisation d'opérateurs ternaires imbriqués pour déterminer quelle image afficher */}
            {gameOver && victory && player.id ? (
                <img src={player.winner} className="img-fluid" alt="fighter" />
            ) : (
                gameOver && !victory && player.id ? (
                    <img src={player.failed} className="img-fluid" alt="fighter" />
                ) : (
                    <img src={player.id === lastAttackingPlayerId ? player.attack : player.src} className="img-fluid" alt="fighter" />
                )
            )}




            <ProgressBar pv={player.pv} pvMax={player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
            <ProgressBar pv={player.mana} pvMax={player.manaMax} faType='fa-fire-alt' barName=' : mana ' />
            <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
            <div class="row">
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <ButtonCapacity player={player} type="heal" />
                    <ButtonCapacity player={player} strength={10} type="attack" />
                    <ButtonCapacity player={player} strength={15} type="attack" />
                    <ButtonCapacity player={player} type="restoreMana" />
                </div>
            </div>
        </div>

    );
}

export default PlayerCard;
