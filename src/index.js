import './style.css';
import { showScoreBoard, postRequest } from '../modules/allFunctions';

const playerName = document.getElementById('name');
const playerScore = document.getElementById('score');
const board = document.querySelector('.scorelist');
const add = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');

window.addEventListener('DOMContentLoaded', () => {
  showScoreBoard(board);
});

add.addEventListener('click', () => {
  postRequest(playerName.value, playerScore.value);
  playerName.value = '';
  playerScore.value = '';
});

refresh.addEventListener('click', () => {
  location.reload();
});
