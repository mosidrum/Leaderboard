const list = document.querySelector('.scorelist');
const scores = [
  {
    score: 100, 
  },
  {
    score: 20, 
  },
  {
    score: 50, 
  },
  {
    score: 78, 
  },
  {
    score: 125, 
  },
  {
    score: 77, 
  },
  {
    score: 42, 
  },
  
]

function getScore () {
    let output = '';
    scores.forEach((score) => {
      output += `
      <li>Name : ${score.score}</li>
      `;
    });
    list.innerHTML = output;
}

export default getScore;


