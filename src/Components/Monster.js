import React from 'react';
import { useSelector } from 'react-redux'; // Importer le hook useSelector de react-redux
import ProgressBar from './ProgressBar';
import Image from '../giphy.gif';
import Image2 from '../giphy (2).gif';

function Monster() {
    const gameOver = useSelector(state => state.fight.gameOver);
    const victory = useSelector(state => state.fight.victory);
  // state est une variable on peux mettre store par exemple et fight c'est le nom dans fightslice
    const monster = useSelector(state => state.fight.monster); // Utiliser le hook useSelector pour récupérer le state concernant le monstre

       // Déterminez quelle image utiliser en fonction de l'état du jeu
       const monsterImage = gameOver && !victory ? Image2 : Image;

    return (
        <section>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="card-monstre col-sm-12 ">
                        <div id="monsterCard">
                            <div className="">
                                <div className="row">
                                    <div className="col-6 offset-sm-3  imgMonstre ">
                                        <span className="badge badge-danger ml-2" id="degatSpanMonster"></span>
                                        <img className="img-fluid " src={monsterImage} alt='monster' />
                                     
                                    </div>

                                    <div id="comboOnMonster" className="col-6 d-flex flex-column justift-content-center align-items-center ">
                                    <p className='nomMonstre mt-5'>Toto</p>
                                    <p className='text-white'>Choisir monstre</p>
                                    <select className='bg-transparent'>
                                        <option>Toto</option>
                                        <option>Bullfango</option>
                                        <option>Cephalos</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                            {/* Dynamiser les props envoyées au composant ProgressBar */}
                            <ProgressBar pv={monster.pv} pvMax={monster.pvMax} bgType='bg-danger' faType='fa-heart' barName=' : pv' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Monster;
