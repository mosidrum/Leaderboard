const mosidrum = 'adN0yUvvGhYwwgO6gTve';
const link = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${mosidrum}/scores`;
// Game with ID unused: KIZQL16m2y5kBbDoKcjZ

const postRequest = async (playerName, playerScore) => {
  const reply = await fetch(link, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: playerName,
      score: playerScore,
    }),
  });
  const result = await reply.json();
  return result;
};

const createList = (scores, board) => {
  let output = '';
  scores.forEach((score) => {
    output += `
      <li>${score.user} : ${score.score}</li>
    `;
  });
  board.innerHTML = output;
};

const sortRequest = (response, board) => {
  const scores = response.result.sort((x, y) => y.score - x.score);
  createList(scores, board);
};

const getRequest = async () => {
  const res = await fetch(link);
  const result = await res.json();
  return result;
};

const showScoreBoard = (board) => {
  board.innerHTML = '';
  getRequest().then((response) => {
    sortRequest(response, board);
  });
};

export { postRequest, showScoreBoard };
