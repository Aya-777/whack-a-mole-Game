// import { name } from "../../MealSearcher/scripts/search";

const urlParams = new URLSearchParams(window.location.search);
const Pname = urlParams.get("name");
document.querySelector(`.welcome`).innerHTML=`Hello ${Pname}! Press any where to start.`;

document.querySelector(`.start-game`).addEventListener('click',() => {
  if(timeLeft===30){
    startGame();
  }
});

const scoreBoard = document.querySelector(`.score`);
const holes = document.querySelectorAll(`.hole`);
const timerDisplay = document.querySelector(`.timer`);
let lastHole;
let timeUp = false;
let score = 0;
let timeLeft = 30;
let countdown;

function startGame(){
  score = 0;
  timeLeft=30;
  timeUp=false;
  timerDisplay.textContent= `timer : 30s`;
  scoreBoard.textContent= `Score : 0`;
  clearInterval(countdown);
  
  up();

  countdown = setInterval(()=>{
    timeLeft--;
    timerDisplay.textContent=`timer : ${timeLeft}s`;
    if(timeLeft<=0){
      clearInterval(countdown);
      timeUp=true;
      alert(`Time's Up! Your Score is ${score}!`);
      // return;
    }
  },1000);


}

function randomHole(){
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if(hole === lastHole){
    randomHole();
  }
  lastHole = hole;
  return hole;
}

function up(){
  const hole = randomHole();
  hole.classList.add('up');
  setTimeout(()=>{
    hole.classList.remove('up');
    if(!timeUp){
      up();
    }
  },2000);

}

holes.forEach( hole => {

  hole.addEventListener('click', event => {

    const elem = event.target;

    if(!elem.classList.contains('up')){
      score-=2;
      scoreBoard.textContent = `Score : ${score}`;
      return;
    }
    score++;
    hole.classList.remove('up');
    scoreBoard.textContent = `Score : ${score}`;
  });
});
