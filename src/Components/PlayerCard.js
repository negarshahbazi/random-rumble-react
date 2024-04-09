import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';
import './Game.css';





function PlayerCard({ player }) {
    const Image = player.src ;
    // console.log(Image);
    return (
                <div key={player.id} className="card col-sm-2">
                    <h5 className="card-title">{player.name}</h5>
                    <img src={Image} className="img-fluid" alt="fighter"/>

                    <ProgressBar pv={player.pv} pvMax={player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                    <ProgressBar pv={player.mana} pvMax={player.manaMax} faType='fa-fire-alt' barName=' : mana ' />
                    <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                    <div className="button-container">
                     
                        <ButtonCapacity player={player} strength={5} type="heal"/>
                        <ButtonCapacity player={player} strength={10} type="attack"/>
                        <ButtonCapacity player={player} strength={15} type="attack"/>
                        <ButtonCapacity player={player} strength={20} type="restoreMana" />
                    </div>
                </div>
         
    );
}

export default PlayerCard;
