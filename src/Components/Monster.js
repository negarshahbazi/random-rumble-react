import React from 'react';
import { useSelector } from 'react-redux'; // Importer le hook useSelector de react-redux
import ProgressBar from './ProgressBar';

function Monster() {
  // state est une variable on peux mettre store par exemple et fight c'est le nom dans fightslice
    const monster = useSelector(state => state.fight.monster); // Utiliser le hook useSelector pour récupérer le state concernant le monstre

    return (
        <section>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="card-monstre col-sm-12 ">
                        <div id="monsterCard">
                            <div className="">
                                <div className="row">
                                    <div className="col-sm-2 offset-sm-3  imgMonstre ">
                                        <span className="badge badge-danger ml-2" id="degatSpanMonster"></span>
                                        <img className="img-fluid " src="http://res.publicdomainfiles.com/pdf_view/67/13925387417373.png" alt='monster' />
                                    </div>

                                    <div id="comboOnMonster" className="col-sm-6">

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
