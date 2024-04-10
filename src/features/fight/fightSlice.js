
import { createSlice } from "@reduxjs/toolkit";
import JohnImage from "../../John.gif";
import JackImage from "../../Jack.gif";
import JessyImage from "../../Jessy.gif";
import JennyImage from "../../Jenny.gif";
import NegarImage from "../../Negar.gif";
import AttackImage from "../../giphy (1).gif";
import DeadMonsterImage from "../../giphy (2).gif"; 
import Failed from "../../failed.gif"; 


const initialState = {
    // TODO : Compléter 'players' et 'monster'
    players: [
        { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1, played: false, src: JohnImage, attack: AttackImage, winner: DeadMonsterImage,failed: Failed },
        { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2, played: false, src: JackImage, attack: AttackImage, winner: DeadMonsterImage, failed: Failed  },
        { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3, played: false, src: JessyImage, attack: AttackImage, winner: DeadMonsterImage,failed: Failed },
        { name: "Negar", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 5, played: false, src: NegarImage, attack: AttackImage, winner: DeadMonsterImage, failed: Failed }
    ],

    lastPlayedPlayerId: [], // Ajouter la propriété pour suivre l'ID du joueur qui a joué en dernier
    monster: { pv: 200, pvMax: 200 },
    gameOver: false, // Ajout de la propriété pour indiquer si la partie est terminée
    victory: false, // Ajout de la propriété pour indiquer si la victoire est obtenue
   
};

export const fightSlice = createSlice({
    name: "fight",
    initialState,
    reducers: {
        hitMonster: (state, action) => {
            // TODO : Compléter ce reducer afin de modifier le state : les
            // points de vie du monstre doivent baisser en fonction de la force de frappe
            // fournie dans le payload de l’action
            // Réduire les points de vie du monstre en fonction de la force de frappe
            const damage = action.payload.strength;
            state.monster.pv -= damage;
            // state.players[action.payload.playerId].played = true;

            const player = state.players.find(player => player.id === action.payload.playerId);
            if (player) {
                player.played = true;
                // console.log(player.id);
                state.lastPlayedPlayerId.push(player.id);
                state.lastAttackingPlayerId = player.id; 
                // console.log(state.lastPlayedPlayerId);
            }
            // Vérifier si tous les joueurs ont joué
            if (state.lastPlayedPlayerId.length === state.players.length) {
                // Réinitialiser la propriété 'played' de tous les joueurs à 'false'
                state.players.forEach(player => {
                    player.played = false;
                });

                // Vider le tableau 'lastPlayedPlayerId'
                state.lastPlayedPlayerId = [];
            }


                checkGameStatus(state); // Vérifier l'état du jeu après chaque action
                // Marquer le joueur actuel comme ayant joué
            },
            hitBack: (state, action) => {
                // Code pour frapper en retour un joueur
                const playerId = action.payload.playerId;
                const damage = action.payload.damage;

                // Vérifier si le joueur existe dans l'état
                if (state.players[playerId]) {
                    // Réduire les points de vie du joueur en fonction des dégâts
                    state.players[playerId].pv -= damage;
                    checkGameStatus(state); // Vérifier l'état du jeu après chaque action

                }
            },
                resetPlayerStatus: (state) => {
                    state.players.forEach(player => {
                        player.played = false; // Réinitialiser l'état de tous les joueurs à "non joué"
                    });
                },

                healPlayer: (state, action) => {
                    const { playerId, healAmount, manaCost } = action.payload;
                    const player = state.players.find(player => player.id === playerId);
                    if (player) {
                        if (player.mana >= manaCost) {
                            player.pv += healAmount;
                            player.mana -= manaCost;
                        }
                    }
                },
                restoreMana: (state, action) => {
                    const { playerId, manaAmount, hpCost } = action.payload;
                    const player = state.players.find(player => player.id === playerId);
                    if (player) {
                        if (player.pv >= hpCost) {
                            player.mana += manaAmount;
                            player.pv -= hpCost;
                        }
                    }
                },
        },
    });



const checkGameStatus = (state) => {
    // SOME: vérifie si au moins un élément du tableau satisfait la condition spécifiée
    const playersAlive = state.players.some(player => player.pv > 0);

    if (state.monster.pv <= 0) {
        state.gameOver = true;
        state.victory = true;
    } else if (!playersAlive) {
        state.gameOver = true;
        state.victory = false;
    }
};
export const { hitMonster, hitBack, resetPlayerStatus,healPlayer, restoreMana} = fightSlice.actions;
export default fightSlice.reducer;