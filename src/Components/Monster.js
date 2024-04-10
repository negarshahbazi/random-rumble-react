import React, { useState } from 'react';
import { useSelector } from 'react-redux'; // Importer le hook useSelector de react-redux
import ProgressBar from './ProgressBar';
import Image from '../img/giphy.gif';
import Image2 from '../img/giphy (2).gif';
import ImageBullfango from '../img/MHRise-Bullfango_Render_001.webp';
import ImageCephalos from '../img/Cephalos.webp';


function Monster() {
    const gameOver = useSelector(state => state.fight.gameOver);
    const victory = useSelector(state => state.fight.victory);
    // state est une variable on peux mettre store par exemple et fight c'est le nom dans fightslice
    const monster = useSelector(state => state.fight.monster); // Utiliser le hook useSelector pour récupérer le state concernant le monstre



    const [selectedMonster, setSelectedMonster] = useState({
        name: 'Toto',
        image: Image
    });

    // Fonction pour gérer le changement de sélection du monstre
    const handleMonsterChange = (event) => {
        const selectedMonsterName = event.target.value;
        // Mettre à jour l'état local avec les informations du monstre sélectionné
        switch (selectedMonsterName) {
            case 'Toto':
                setSelectedMonster({ name: 'Toto', image: Image });
                break;
            case 'Bullfango':
                setSelectedMonster({ name: 'Bullfango', image: ImageBullfango });
                break;
            case 'Cephalos':
                setSelectedMonster({ name: 'Cephalos', image: ImageCephalos });
                break;
            default:
                break;
        }
    };

    return (
        <section>
            <div className="container d-flex justify-content-center align-items-center" style={{ fontFamily: 'Chilanka' }}>
                <div className="row">
                    <div className="card-monstre col-sm-12 ">
                        <div id="monsterCard">
                            <div className="">
                                <div className="row">
                                    <div className="col-6 offset-sm-3  imgMonstre ">
                                        <span className="badge badge-danger ml-2" id="degatSpanMonster"></span>
                                        <img className="img-fluid " src={gameOver && !victory ? Image2 : selectedMonster.image} alt='monster' />
                                    </div>

                                    <div id="comboOnMonster" className="col-6 d-flex flex-column justift-content-center align-items-center mb-5">
                                        <p className='nomMonstre m-5'>{selectedMonster.name}</p>
                                        <p className=''>Choisir monstre</p>
                                        <select className='bg-transparent' onChange={handleMonsterChange}>
                                            <option>Toto</option>
                                            <option>Bullfango</option>
                                            <option>Cephalos</option>
                                            {/* Ajouter d'autres options si nécessaire */}
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
